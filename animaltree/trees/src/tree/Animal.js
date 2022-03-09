import React from 'react';

const Animal = ({ input, animals, animal, setAnimals }) => {
    const removeItem = () => {
        setAnimals(animals.filter((e) => e.id !== animal.id));

    }
    return <div>hi
        <ol>
            <li className="animal-list">{input}</li>
        </ol>
        <button onClick={removeItem} className="remove-animal" type="button">X</button>
    </div>


}

export default Animal;

