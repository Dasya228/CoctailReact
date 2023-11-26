import React from "react";
import CoctailCard from "./CoctailCard";

const CoctailList=({drinks})=>{
    return(
        <div className={'row'}>
            {
drinks.map(drink=>
<div key={drink.idDrink} className={'col-3'}>
<CoctailCard drink={drink}/>
</div>
)
            }
        </div>
    )
}
export default CoctailList