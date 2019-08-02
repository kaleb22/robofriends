import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    /* the map function creates a new array with the results of calling
     * a function on every element in the calling array */
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;