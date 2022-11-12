import React from 'react'
import '../containers/App.css'

const Scroll = (props) => {
    return (
        <div className='scrollbar-container'>
            {props.children}
        </div>
    );
};

export default Scroll;