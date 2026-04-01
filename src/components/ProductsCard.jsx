import React from 'react';
import Card from './Card';

const ProductsCard = ({ cardData, cartCard, setCartCard }) => {
    // console.log(cardData)
    // console.log(cartCard);
    return (
        <div className='bg-base-100 mx-auto grid grid-cols-1 md:grid-cols-3 p-5 gap-5'>

            {
                cardData.map(card => <Card
                    key={card.id}
                    setCartCard={setCartCard}
                    cartCard={cartCard}
                    card={card}></Card>)
            }
        </div>
    );
};

export default ProductsCard;