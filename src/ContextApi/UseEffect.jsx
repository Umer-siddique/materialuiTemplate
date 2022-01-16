import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert("Incremented.....!");
    }, [num])

    return (
        <>
            <button onClick={() => setNum(num + 1)}>Click Me</button>
            <h1>increment {num}</h1>
            <button onClick={() => setNums(nums + 1)}>Click Me</button>
            <h1>increment {nums}</h1>
        </>
    )
}
export default UseEffect;