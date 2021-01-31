import React from 'react'

function Categories({items}) {
    return (
        <div>
           <div className="categories">
              <ul>
                <li >Все</li>
                {items.map((item, index)=><li key={index}>{item}</li>)}
                
              </ul>
            </div> 
            </div>    
       
    )
}

export default Categories
