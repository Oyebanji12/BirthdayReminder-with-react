 import React from 'react'
 import {useState} from 'react'
 import Data from "./Data";



 const List = () => {

  const [people, setPeople]= useState(Data)

  // assigned setPeople to the button has an empty array
   const ClearButton=(e)=>{
     e.preventDefault();
  
     setPeople([])

   }
  
    
   return (
     <div>
      <main>
        <section className="container">
           <h1>{people.length} Birthday Today</h1> 
           
           {/* map through the list and assigned the object from data to person */}
          {people.map((person)=>{
     const {id,name,age,image}= person
     return(
       <article key={person.id} className={person}>
         <img src={image} alt={name} />
         <div>
           <h4>{name}</h4>
           <p>{age} years old</p>
         </div>

       </article>
     )
   })}
            
    
           
    <button onClick={ClearButton}>clear all</button> 

     </section>
      </main>        
     </div>
  
   )
 }

export default List