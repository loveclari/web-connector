import React from 'react'
import Animal from './Animal.js'

function AnimalList({ animals, setAnimals }) {
    console.log(animals)

    return (
        <div className="animal-list-component">
            <ol>
                <li className="animal-list">
                    {animals.map((animal) => (
                        <Animal 
                        setAnimals = {setAnimals}
                        animals = {animals}
                        animal = {animal}
                        key={animal.id} 
                        input={animal.input} 
                        id={animal.id} />

                    ))}
                </li>
            </ol>
        </div>
    )
}

export default AnimalList
