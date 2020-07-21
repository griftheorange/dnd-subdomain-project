import React from 'react';
import '../CSS/DiceRoller.css'

function DiceRoller(props) {
    return (
        <div className="dice_roller">
            <h3>Take a Chance</h3>
            <div className="roller_field">
                <input placeholder="Lady Luck be with you..."/>
                <button>Cast</button>
            </div>
        </div>
    );
}

export default DiceRoller;