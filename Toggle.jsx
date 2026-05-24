// function Toggle() {
//     const [isOn, setIsOn] = useState(true);

//     // function HandleTask(){
//     //     setIsOn(isOn => !isOn)
//     // }
//     return (
//         <>
//         <h1>{isOn ? "On" : "Off"}</h1>
//         <button onClick={setIsOn(isOn => !isOn)}>On/Off</button>
//         </>
        
//     )
// }

// export default Toggle



import { useState } from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(true);

    function handleTask() {
        setIsOn(prev => !prev);
    }

    return (
        <>
            <h1>{isOn ? "On" : "Off"}</h1>

            <button onClick={handleTask}>
                On/Off
            </button>
        </>
    );
}

export default Toggle;