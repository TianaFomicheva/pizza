import React from 'react'

function PizzaBlock({name, types, sizes, prices, imageUrl}) {
    const typeNames = ['тонкое', 'традиционное']
    const Sizes = ['26', '30', '40']
    const [activeType, setActiveType ] = React.useState(types[0]);
    const [activeSize, setActiveSize ] = React.useState(sizes[0]);
    const [activePrice, setActivePrice ] = React.useState(prices[types[0]]);
    const doughOver = 10;

    const onSelectType = (index)=>{
        console.log(types[index])
        setActiveType(types[index])
        setActivePrice((index === 1) ? activePrice  + doughOver :  activePrice - doughOver )

    }
    const onSelectSize = (index)=>{
        setActiveSize(sizes[index]);
        setActivePrice(prices[index] + (activeType === 1 ? doughOver : 0))
    }
    return (
        <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">{name}</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            {typeNames.map((obj, index)=>(<li className={((activeType) === index) ? 'active' : ''} onClick={ ()=>{(activeType !== index) && onSelectType(index)}} key={index}>{obj} тесто</li>))}                            
                        </ul>
                        <ul>
                        {Sizes.map((obj, index)=>(<li className={((activeSize) === sizes[index]) ? 'active' : ''} onClick={()=>{((activeSize) !== sizes[index]) &&  onSelectSize(index)}}  key={index}>{obj} см.</li>))}  
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">{activePrice} ₽</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
    )
}

export default PizzaBlock
