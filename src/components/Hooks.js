import React from 'react';
import { useState } from 'react';

const Hooks = () => {
    const[str , strChange] = useState("Tooba");
    const[num , strNumber] = useState(8);
    const[arr , strArray] = useState(["pink","blue","orange"]);

    return (
        <div>
            <button onClick={()=>strChange(str)}>Hook UseState</button>
            <button onClick={()=>strNumber(num)}>Hook UseState</button>
            <button onClick={()=>strArray(arr)}>Hook UseState</button>

        </div>
    )
}

export default Hooks
