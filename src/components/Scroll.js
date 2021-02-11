import React from 'react'
import '../containers/App.css'

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'auto', height: '500px'}} className='hide-scrollbar'>
            {props.children}
        </div>
    );
};

export default Scroll;