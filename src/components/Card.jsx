import React, { useState } from 'react';

import { FiFileText } from "react-icons/fi";
import { FaAward, FaBriefcase, FaGlobe, FaStar } from "react-icons/fa";
import { BsMic } from "react-icons/bs";
import { FaLinkedin, FaDollarSign } from "react-icons/fa";
import { toast } from 'react-toastify';

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

  
const Card = ({card, cartCard, setCartCard}) => {

    const [clicked, setClicked] = useState(false)
     const {name, description, price,period,tag, features, icon } = card;
     const IconComponent = iconMap[icon];

  return (
                <div className="card bg-base-100 shadow-sm relative">
  <div className="card-body ">
    <span className="badge badge-xs badge-warning absolute top-4 right-4 ">{tag}</span>
    <div className="flex flex-col">
       <IconComponent className="text-3xl text-purple-500 " />
      <h2 className="text-3xl font-bold">{name}</h2>
      <p>{description}</p>
      <span className="text-xl">${price}/{period}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        features.map((feature, index) => 
        <li  key={index}>
         
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
         </li> ) }
    </ul>
    <div className="mt-6">
      <button onClick={() =>  {
     setCartCard([...cartCard, card])
     setClicked(!clicked)
     toast(`'${name}' added to cart `)
      }}
      className={`btn btn-primary btn-block rounded-full ${clicked ? 'bg-green-400 btn-active text-black' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'} `}>
        {clicked ? "Added to cart"
        : "Buy Now"}</button>
    </div>
  </div>
</div>
  );
};

export default Card;
