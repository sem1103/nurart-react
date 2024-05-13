import { useEffect, useRef } from 'react';
import useLoaderSlice from '../store/loaderSlice';


const useDebounce = (func, delay) => {
    const changeLoader = useLoaderSlice(state => state.changeLoader)
    const timerIdRef = useRef(null);
    const loadingTimeRef = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerIdRef.current);
            clearTimeout(loadingTimeRef.current);
        };
    }, []);

    return (...args) => {
        clearTimeout(timerIdRef.current);
        clearTimeout(loadingTimeRef.current);

        const fnCall = () => {
            func(...args);
            loadingTimeRef.current = setTimeout(() => {
                changeLoader(false); // Предположим, что функция changeLoader определена где-то вне хука
            }, delay);
        };

        timerIdRef.current = setTimeout(fnCall, delay);
    };
};

export default useDebounce;
