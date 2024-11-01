

import s from "./Catalog.module.css" 
 
import { Cards } from "../Card/Card.jsx";
import { hmst } from "../../assets/data/data.js";
 
export function CatalogPage() { 
    
    return ( 

        <>
 
 
        <section className='container'> 
            <h1 className="mg">Каталог</h1> 
            <div className={s.catalog}> 
                { 
                    hmst.map((product) => { 
                        return ( 
                            <Cards key={product.id} {...product} /> 
                        ) 
                    }) 
                } 
 
            </div> 
        </section> 
        </>
    ) 
}

