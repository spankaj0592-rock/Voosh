import './input.css';
import React from 'react';


const Input = ({label, placeholder, isCompulsory, icon, className}) => {
    return (
        <div className='input_container' >
            <div className='input_label'>{label}{isCompulsory ? <span className='compulsory_icon' >*</span> : null} </div>
            <input type="email" className="input_style" name="email" placeholder={placeholder} />
        </div>
    )
}

export default Input;