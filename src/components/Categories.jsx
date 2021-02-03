import React from 'react'

function Categories({items, activeCategory, onClickCategory}) {
    return (
        <div>
           <div className="categories">
              <ul>
                <li onClick={()=>onClickCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {items.map((item, index)=><li key={index} onClick={()=>onClickCategory(index)} className={activeCategory === index ? 'active' : ''}>{item}</li>)}
                
              </ul>
            </div> 
            </div>    
       
    )
}

export default Categories
