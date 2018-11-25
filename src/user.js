import React from 'react';

const user=(props)=>{
        return (
            <div>
                <li>
               <span>{props.children},age={props.age}</span></li>
               <button onClick={props.delEvent}>deleteUser</button>
            </div>
        );
        }
export default user;