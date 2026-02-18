import React, { useState } from "react";

// Styles
const light = {
    display: "block",
    width: "150px",
    height: "150px",
    borderRadius: "100%",
}

function TrafficLight() {
    const [redBoxShadow, setRedBoxShadow] = useState(null);
    const [yellowBoxShadow, setYellowBoxShadow] = useState(null);
    const [greenBoxShadow, setGreenBoxShadow] = useState(null);

    const isOn = { boxShadow: "0px 0px 20px 10px white" };
    const isOff = null;

    function handleClickRed() {
        if (!redBoxShadow) {
            setRedBoxShadow(isOn)
            setYellowBoxShadow(isOff)
            setGreenBoxShadow(isOff)
        }
    }

    function handleClickYellow() {
        if (!yellowBoxShadow) {
            setYellowBoxShadow(isOn)
            setRedBoxShadow(isOff)
            setGreenBoxShadow(isOff)
        }
    }

    function handleClickGreen() {
        if (!greenBoxShadow) {
            setGreenBoxShadow(isOn)
            setRedBoxShadow(isOff)
            setYellowBoxShadow(isOff)
        }
    }

    return (
        <>
            <div style={{ ...light, ...{ backgroundColor: "red" }, ...redBoxShadow }} onClick={handleClickRed}></div>
            <div style={{ ...light, ...{ backgroundColor: "yellow" }, ...yellowBoxShadow }} onClick={handleClickYellow}></div>
            <div style={{ ...light, ...{ backgroundColor: "green" }, ...greenBoxShadow }} onClick={handleClickGreen}></div>
        </>
    )
}

export default TrafficLight;