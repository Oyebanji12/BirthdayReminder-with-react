import React from 'react'
import { useState } from 'react'
import  Datas from "./Datas"

const ListOne = () => {
    const datas=[
        {
            id: 1,
            name: 'Berty yeast',
            age: 25,
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
            id: 2,
            name: 'Hulk hogan',
            age: 29,
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
            id: 3,
            name: 'Sharon smith',
            age: 31,
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
        {
            id: 4,
            name: 'Angelina Joe',
            age: 26,
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
            id: 5,
            name: 'kulus kalas',
            age: 24,
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
    ]
    
    const [people, setPeople]= useState(datas)

    const  clearButton=()=>{
        setPeople([])

    }
    
    
    
  return (
    <div>
        <main>
            <div className='container'>
                <h2>{people.length}  Birthday Today</h2>
                <article>
                    {people.map((person, i)=>{
                        return (
                        <div key={i}>
                            <img src={person.image} alt="" />
                            <p>{person.name}</p>
                            <h3>{person.age} years old</h3>

                        </div>
                        )

                    })}
                </article>



                <button onClick={clearButton} >clear all</button>

            </div>
        </main>
        
    </div>
  )
}

export default ListOne