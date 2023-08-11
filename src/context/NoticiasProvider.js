import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
        const consultarAPI = async () => {
            const apiKey = '210d05fc48b742b882e63e2434abd934'; // Coloca tu clave de API aquí
            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${apiKey}`;
            
            try {
                const response = await axios(url);
                console.log(response.data);
                setNoticias(response.data.articles);
                setTotalNoticias(response.data.totalResults);
            } catch (error) {
                console.error("Error en la consulta API:", error);
            }
        };
        
        consultarAPI();
    }, [pagina, categoria]);

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    };

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
    };

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    );
};

export { NoticiasProvider };
export default NoticiasContext;
