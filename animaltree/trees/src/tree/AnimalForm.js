import React from "react";

function AnimalForm({ setInput, animals, setAnimals, input }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(e.target.value);

    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    const handleChange = (e) => {
        e.preventDefault();

        setAnimals([
            ...animals, {
                input: input,
                completed: false,
                id: Math.random() * 1000
            }
        ])

    }


    return (
        <form className="animal-form">
            <fieldset>
                <legend>My Animal List Tree</legend>
                <label htmlFor="first-animal" className="visuallyhidden"></label>
                <input
                    type="text"
                    value={input}
                    placeholder="Add animal name"
                    onChange={handleSubmit}
                    onKeyDowm={handleKeypress}
                    className="animalname-1"
                    name="animal" />
                <button onClick={handleChange} type="submit">Submit</button>
            </fieldset>
        </form>
    )

}

export default AnimalForm