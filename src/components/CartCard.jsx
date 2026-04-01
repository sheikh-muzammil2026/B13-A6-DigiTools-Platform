
import { FiFileText } from "react-icons/fi";
import { FaAward, FaBriefcase, FaGlobe, FaStar } from "react-icons/fa";
import { BsMic } from "react-icons/bs";
import { FaLinkedin, FaDollarSign } from "react-icons/fa";
import cartImage from '../assets/products/shopping-cart.png'

const iconMap = {
   FileText: FiFileText,
   Award: FaAward,
   Briefcase: FaBriefcase,
   Globe: FaGlobe,
   Mic: BsMic,
   Linkedin: FaLinkedin,
   DollarSign: FaDollarSign,
   Star: FaStar,
};



const CartCard = ({ cartCard, setCartCard }) => {
   console.log(cartCard);

   const handleDeleteCard = (card) => {
      const filteredCards = cartCard.filter((filteredCard) => filteredCard.id != card.id);
      setCartCard(filteredCards);
   }

   const totalPrice = cartCard.reduce((sum, cardObject) => sum + cardObject.price, 0);


   return (
      <div className='container mx-auto p-6 mb-12 shadow-2xl'>
         <h1 className='text-xl font-bold'>Your cart</h1>

         {

            cartCard.length <= 0 ?
               <div className='flex justify-between items-center flex-col opacity-50 space-y-5 p-5'>
                  <img className='w-15' src={cartImage} alt="empty cart image" />
                  <p className=''>Your cart empty</p>
               </div>
               : <div>
                  {
                     cartCard.map(card => {
                        const IconComponent = iconMap[card.icon];
                        return (
                           <div key={card.id} className='shadow-md p-4 bg-base-100 flex justify-between gap-4 mt-5 rounded-md'>
                              <div className='flex gap-4'>
                                 <IconComponent className="text-3xl text-purple-500 " />
                                 <span className='flex flex-col'>
                                    <p className='flex gap-1 font-bold'>{card.name}</p>
                                    <p className=''>${card.price}</p>
                                 </span>
                              </div>
                              <button onClick={() => handleDeleteCard(card)} className="btn text-red-500">Remove</button>
                           </div>
                        )
                     })
                  }
                  <div className='flex justify-between font-bold mt-5 mb-5 mx-auto'>
                     <p className=''>Total</p>
                     <p>${totalPrice}</p>
                  </div>
                  <button onClick={() => setCartCard([])} className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Proceed to Checkout</button>
               </div>
         }

      </div>
   )
};

export default CartCard;



