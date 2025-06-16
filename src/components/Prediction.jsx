import React from 'react';
import '../style/prediction.css';


function Prediction() {
    
    return (
        <div className='prediction-section'>
            <h2 className='prediction-title'>Prediction</h2>
            <form className='prediction-form'>
                <label htmlFor="from">From</label>
                <input className='prediction-input' type='date' />
                <label htmlFor="to">To</label>
                <input className='prediction-input' type='date' />
                
                
                <button className='prediction-button'>Predict</button>

            </form>
        </div>
    );
}

export default Prediction;