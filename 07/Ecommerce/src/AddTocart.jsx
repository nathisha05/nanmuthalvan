<<<<<<< HEAD
// import button from "daisyui/components/button";
// import divider from "daisyui/components/divider";
// import { div } from "framer-motion/m";
import React from "react";
import { useState } from "react";
export default function AddToCart() {
    let [value, setvalue] = useState(0);
    let inc=() => {
        setvalue(value+1)
        console.log(value)
    }
    let dec = () => {
        value <= 0 ? setvalue(0) : setvalue(value--);
        console.log(value);
    };
    return (
        <div>
            {
                value > 0 ?
                    <div>
                    <button className="bg-blue-700 text-white p-3 rounded-md" onClick={inc}>+</button>
                    <button className="bg-white text-black p-3 rounded-md">{value}</button>
                    <button className="bg-blue-700 text-white p-3 rounded-md" onClick={dec}> - </button>
                    </div> :
                    <button className="bg-blue-700 text-white p-3 rounded-md active:scale-90"onClick={inc}>AddToCart</button>
            }
        
      </div>
    );
=======
// import button from "daisyui/components/button";
// import divider from "daisyui/components/divider";
// import { div } from "framer-motion/m";
import React from "react";
import { useState } from "react";
export default function AddToCart() {
    let [value, setvalue] = useState(0);
    let inc=() => {
        setvalue(value+1)
        console.log(value)
    }
    let dec = () => {
        value <= 0 ? setvalue(0) : setvalue(value--);
        console.log(value);
    };
    return (
        <div>
            {
                value > 0 ?
                    <div>
                    <button className="bg-blue-700 text-white p-3 rounded-md" onClick={inc}>+</button>
                    <button className="bg-white text-black p-3 rounded-md">{value}</button>
                    <button className="bg-blue-700 text-white p-3 rounded-md" onClick={dec}> - </button>
                    </div> :
                    <button className="bg-blue-700 text-white p-3 rounded-md active:scale-90"onClick={inc}>AddToCart</button>
            }
        
      </div>
    );
>>>>>>> 846b000 (Success)
}