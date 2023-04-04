import React, { useState, useEffect } from 'react'
import Styled from "../components/sass/main.module.scss"
import NightImg from "../components/images/icon-moon.svg"
import SunImg from "../components/images/icon-sun.svg"

const Main = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            console.log('ejiro')
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    return (
        <div className={Styled.main}>
            <div className={`${toggle ? Styled["main-bg"] : Styled["add-bg"]}`}>
                <div className={Styled["typo-container"]}>
                    <h1>TODO</h1>
                    <img src={toggle ? NightImg : SunImg} onClick={handleToggle} />
                </div>
                <div className={Styled["input-container"]}>
                    <input type="checkbox" />
                    <input type="text" placeholder='Create a new todo....' />
                </div>
            </div>
        </div>
    )
}

export default Main