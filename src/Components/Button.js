import './button.css';
import React from 'react';


const Button = ({title, icon, className, href}) => {
    return (
        <a href={href} className={`${className} button_container`} >
            {icon && <div>
                <img src={icon} className="icon_style" />
            </div>}
            <div>
                <span className='text_button'>{title}</span>
            </div>
        </a>
    )
}

export default Button
