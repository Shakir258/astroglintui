import React from 'react';
import '../style/compatiblity.css';

function Compatiblity() {
    return (
        <div className='compatiblity-section' >
            <h2 className='compatiblity-title'>Compatiblity</h2>
            <form className='compatiblity-form'>
                <input type="text" className='compatiblity-input' placeholder='Enter Full Name' />
                <input type="date" className='compatiblity-input' placeholder='D.O.B' />
                <div className='inner'>
                    <input type="text" className='compatiblity-input' placeholder='Gender' />
                    <input type="number" className='compatiblity-input' placeholder='Enter Phone No' />
                </div>
                <input type="text" className='compatiblity-input' placeholder='Relation' />
                <button className='compatiblity-button'>Compatiblity</button>



            </form>
        </div>
    );
}

export default Compatiblity;