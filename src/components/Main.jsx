import React, { useState } from 'react'
import Styled from "../components/sass/main.module.scss"
import NightImg from "../components/images/icon-moon.svg"
import SunImg from "../components/images/icon-sun.svg"

const Main = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className={Styled.main}>
            <div className={Styled["main-bg"]}>
                <div className={Styled["typo-container"]}>
                    <h1>TODO</h1>
                    <img src={toggle ? NightImg : SunImg} onClick={handleToggle} />
                </div>
                <div className={Styled["input-container"]}>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Main