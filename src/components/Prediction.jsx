import React, { useState } from 'react';
import '../style/prediction.css';

function Prediction({ setShowPopup }) {
    const [a, setA] = useState(true);

    return (
        <div className='prediction-section'>
            {a ? (
                <>
                    <h2 className='prediction-title'>Prediction</h2>
                    <form className='prediction-form'>
                        <label htmlFor="from">From</label>
                        <input className='prediction-input' type='date' />
                        <label htmlFor="to">To</label>
                        <input className='prediction-input' type='date' />
                        <button className='prediction-button'>Predict</button>
                    </form>
                </>
            ) : (
                <button onClick={() => 
                    // setA(true)
                    setShowPopup(true)
                } >LOGIN</button>
            )}
        </div>
    );
}

export default Prediction;
