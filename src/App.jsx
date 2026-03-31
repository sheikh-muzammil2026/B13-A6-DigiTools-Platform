
import { Suspense, useState } from 'react';
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import Hero from './components/Hero';
import Stats from './components/Stats';


const cardDataPromisesRes = async() => {
    const res = await fetch('/cardData.json');
    return res.json();
}

const cardDataPromises = cardDataPromisesRes();

function App() {
  
  const [cartCard, setCartCard] = useState([]);

  return (
    <div className='container mx-auto max-w-7xl'>
     
     <Navbar cartCard={cartCard} ></Navbar>
      <Hero></Hero>
      <Stats></Stats>
     <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-xl"></span></div>}>
      <Main 
     setCartCard={setCartCard} cartCard={cartCard} 
     cardDataPromises={cardDataPromises}></Main>
     </Suspense>
    

    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
