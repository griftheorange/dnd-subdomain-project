import React, { useState } from 'react';
import '../CSS/DiceRoller.css'

function DiceRoller(props) {

    let [dieInput, setDieInput] = useState("") 
    let [lastRoll, setLastRoll] = useState(null)

    function getRandom(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rollDie(input){
        input = input.replace(/^\s+|\s+$/g, '')
        let dice = input.split(" ")
        return dice.filter((die) => {
            let match = die.match(/^\d+d\d+(\*\d+)?$/g)
            return match
        }).map((die) => {
            let values = die.split("*")
            if(values.length > 1){
                let repeat = parseInt(values[1])
                let output = []
                values = values[0].split("d")
                for(let i = 0; i < repeat; i++){
                    let rolls = []
                    for (let i = 0; i < parseInt(values[0]); i++){
                        let value = getRandom(1, parseInt(values[1]))
                        rolls.push(value)
                    }
                    let sum = rolls.length > 0 ? rolls.reduce((total, num) => {return total+num}) : 0
                    output.push({
                        'name':die,
                        'rolls':rolls,
                        'sum':sum,
                        'avg':sum/rolls.length
                    })
                }
                return output
            } else {
                values = die.split("d")
                let rolls = []
                for (let i = 0; i < parseInt(values[0]); i++){
                    let value = getRandom(1, parseInt(values[1]))
                    rolls.push(value)
                }
                let sum = rolls.length > 0 ? rolls.reduce((total, num) => {return total+num}) : 0
                return {
                    'name':die,
                    'rolls':rolls,
                    'sum':sum,
                    'avg':sum/rolls.length
                }
            }
        }).flat()
    }

    function handleChange(e){
        setDieInput(e.target.value)
    }

    function handleClick(e){
        let results = rollDie(dieInput)
        if(results.length > 0){
            setLastRoll(
                <ul>
                    {results.map((result) => {
                        return (
                            <div>
                                <li>
                                    {"Die: " + result['name'] + " Sum: " + result['sum'] + " Avg: " + result['avg']}
                                    <ul>
                                        <li>{result['rolls'].join()}</li>
                                    </ul>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            )
        } else {
            setLastRoll(null)
        }
    }

    return (
        <div className="dice_roller">
            <h3>Take a Chance</h3>
            <div className="roller_field">
                <input onChange={handleChange} placeholder="Lady Luck be with you..." value={dieInput}/>
                <button onClick={handleClick}>Cast</button>
            </div>
            {lastRoll}
        </div>
    );
}

export default DiceRoller;