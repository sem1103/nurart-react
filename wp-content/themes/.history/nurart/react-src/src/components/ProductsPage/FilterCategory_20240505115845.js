
import { useEffect, useRef, useState } from 'react';
import s from './ProductsPage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';


export default function FilterCategory(props) {
    let [openFilter, setOpenFilter] = useState(false);
    const filterElem = useRef();

    useEffect(() => {
        const handleClickOutside = event => {
          if (filterElem.current && !filterElem.current.contains(event.target)) {
            setOpenFilter();
          }
        };
    
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
        
      }, [openFilter]);


    return (
        <>
            <ul className={`${s.categoryes} categoryes`}>
                <li><NavLink to='/prod/polygraphy' >Poliqrafiya</NavLink></li>
                <li><NavLink to='/prod/stamp'>Möhür</NavLink></li>
                <li><NavLink to='/prod/plastic-cards'>Plastik Kartlar</NavLink></li>
                <li><NavLink to='/prod/propmo-products'>Promo Məhsullar</NavLink></li>
                <li><NavLink to='/prod/vinyls'>Vinillər</NavLink></li>
            </ul>
            
            <div className={s.filter__search}>
                <div ref={filterElem} id={s.filter} className={`${openFilter ? s.open__filter : ''}`} onClick={() => setOpenFilter(!openFilter)}>
                    <p className={s.active__filter}>Filter</p>
                    <ul>
                        <li><button>Hamısı</button></li>
                    {
                        Object.values(props.filterCategory).map(item => <li><button>{item}</button></li>)
                    }
                    </ul>
                </div>               
                    <div id={s.search} >
                    <input type="text" placeholder='Axtarış...' />
                    </div>
            </div>
            
        </>
    );
}