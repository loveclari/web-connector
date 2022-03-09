import React, {useState} from 'react';
import './index.css'
// import axios from 'axios'
import data from './data.json'
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm'

export default function Tree() {
    const [input, setInput] = useState('')
    const [animals, setAnimals] = useState ([])
    return (
        <div className="tree">
            {[data].map((item) => {
                return  <div><ol key="index" className="animal-list"
                    aria-labelledby="list-heading">
                        <AnimalForm input={input} animals={animals} setAnimals ={setAnimals} setInput = {setInput} />
                        <AnimalList animals={animals} setAnimals={setAnimals} />
                    {/* <form>
                        <fieldset>
                            <li>{item.animaltree[6]}<label htmlFor="first-animal" className="visuallyhidden"></label><input type="text" id="animalname-1" name="animal" /></li>
                            <ol>

                                <li>{item.animaltree[5]}<label htmlFor="second-animal" className="visuallyhidden"></label><input type="text" id="animalname-2" name="animal" /></li>
                                <li>{item.animaltree[4]}<label htmlFor="first-animal" className="visuallyhidden"></label><input type="text" id="animalname-3" name="animal" /></li>

                                <ol>

                                    <li>{item.animaltree[3]}<label htmlFor="third-animal" className="visuallyhidden"></label><input type="text" id="animalname-4" name="animal" /></li>
                                    <li>{item.animaltree[2]}<label htmlFor="fourth-animal" className="visuallyhidden"></label><input type="text" id="animalname-5" name="animal" /></li>

                                    <ol>

                                        <li>{item.animaltree[1]}<label htmlFor="fifth-animal" className="visuallyhidden"></label><input type="text" id="animalname-6" name="animal" /></li>

                                    </ol>
                                </ol>
                            </ol>
                            <li>{item.animaltree[0]}<label htmlFor="form-root" className="visuallyhidden"></label><input type="text" id="root" name="treeroot" /></li>
                        </fieldset>
                    </form> */}
                </ol>
                </div>
            })}
        </div>
    )
}
