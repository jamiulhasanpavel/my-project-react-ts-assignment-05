import { useState } from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TechnologyList from "./Components/TechnologyList";
import YourStack from "./Components/YourStack";
import Footer from "./Components/Footer";
import './App.css'

export type Technology = {
  name: string;
  description: string;
};
function App() {
 const [stack, setStack] = useState<Technology[]>([]);

 const addToStack = (technology: Technology) => {
   setStack((prev) => {
     if (prev.some((item) => item.name === technology.name)) {
       return prev;
     }

     return [...prev, technology];
   });
 };

 const removeFromStack = (technologyName: string) => {
   setStack((prev) => prev.filter((technology) => technology.name !== technologyName));
 };

  return (
    <>
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar/>
      <main>
        <Hero />
        <TechnologyList  onAdd={addToStack}/>
        <YourStack stack={stack} onRemove={removeFromStack}/>
       
      </main>
       <Footer/>
     </div>
    </>
  )
}

export default App
