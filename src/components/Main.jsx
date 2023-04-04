import React, { useState, useEffect } from 'react'
import Styled from "../components/sass/main.module.scss"
import NightImg from "../components/images/icon-moon.svg"
import SunImg from "../components/images/icon-sun.svg"

const Main = () => {
    const [toggle, setToggle] = useState(true)

    const [inputValue, setInputValue] = useState('')
    const [listValue, setListValue] = useState([])

    function changeInput(e) {
        setInputValue(e.target.value);
    }


    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            setListValue([...listValue, inputValue])
            setInputValue('')
        }
    }
    document.addEventListener('keydown', handleKeyPress)


    console.log(listValue);

    return (
        <div className={Styled.main}>
            <div className={`${toggle ? Styled["main-bg"] : Styled["add-bg"]}`}>
                <div className={Styled["typo-container"]}>
                    <h1>TODO</h1>
                    <img src={toggle ? NightImg : SunImg} onClick={handleToggle} />
                </div>
                <div className={Styled["input-container"]}>
                    <input type="checkbox" />
                    <input type="text" onChange={changeInput} placeholder='Create a new todo....' />

                    <div className="input">
                        {listValue.map((value, index) => {
                            return (
                                <div key={index} className='input-container'>
                                    <input type="checkbox" />
                                    <h6>{value}</h6>
                                </div>
                            )

                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main