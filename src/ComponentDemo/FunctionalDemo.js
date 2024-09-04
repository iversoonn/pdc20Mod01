import React, {useState}from 'react';

function CounterFunction(){
    
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };
    const decrement = () =>{
        setCount(count - 1);
    };
    
    return(
        <div>
            <h2>Function Component Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterFunction;