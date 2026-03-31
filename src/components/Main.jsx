import React, { use, useState } from 'react';
import ProductsCard from './ProductsCard';
import CartCard from './CartCard';

const Main = ({cardDataPromises, cartCard, setCartCard}) => {
         //  console.log(cartCard.length);
        const [selectedBtn, setSelectedBtn] = useState("productsBtn");
         const cardData = use(cardDataPromises);
    return (
      
             <>
        <div className='flex flex-col items-center justify-center text-center gap-6 mt-6 bg-base-200'>
           <div className='flex flex-col items-center justify-center'>
            <h2>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
           
           </div>
           <div >
            <button onClick={() => setSelectedBtn("productsBtn")} className={`available btn font-semibold ${selectedBtn === "productsBtn" ? 'rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'rounded-r-none rounded-l-full'}`}>Products</button>
            <button onClick={() => setSelectedBtn("cartBtn")} className={`selected btn  font-semibold ${selectedBtn === "cartBtn" ? 'rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'rounded-l-none rounded-r-full'}`}>Cart({cartCard.length})</button>
           </div>
        </div>
        {
            selectedBtn === "productsBtn" ? 
        <ProductsCard 
       
     setCartCard={setCartCard}
        cartCard={cartCard}
        cardData={cardData}>
        </ProductsCard>
           : <CartCard 
            cartCard={cartCard}
            setCartCard={setCartCard}
           ></CartCard>
        }
       </>
       
    );
};

export default Main;