import React, { useState, useEffect } from 'react'
import Styled from "../components/sass/main.module.scss"
import NightImg from "../components/images/icon-moon.svg"
import SunImg from "../components/images/icon-sun.svg"

const Main = () => {
    const [toggle, setToggle] = useState(true)

    const [inputValue, setInputValue] = useState('')
    const [listValue, setListValue] = useState([])

    const [underline, setUnderline] = useState(false)

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

    // Adding useEffect hook to set styles for body background



    useEffect(() => {
        if (!toggle) {
            document.body.style.backgroundColor = 'hsl(235, 24%, 19%)'
        } else {
            document.body.style.backgroundColor = 'initial'
        }

        return () => {
            document.body.style.backgroundColor = 'initial'
        }
    }, [toggle])

    const numOfDivsWithInputTextContainerClass = listValue.length;

    function checkBox() {
        setUnderline(!underline)
    }
    console.log(underline);

    return (
        <div className={Styled.main}>
            <div className={`${toggle ? Styled["main-bg"] : Styled["add-bg"]}`}>
                <div className={Styled["typo-container"]}>
                    <h1>TODO</h1>
                    <img src={toggle ? NightImg : SunImg} onClick={handleToggle} />
                </div>
                <div className={Styled["input-container"]}>
                    <div className={Styled.box}>
                        <input className={`${Styled.check} ${toggle ? '' : Styled['add']}`} type="checkbox" />
                        <input type="text" className={toggle ? '' : Styled["add"]} value={inputValue} onChange={changeInput} placeholder='Create a new todo....' />
                        {inputValue.trim() === '' && null}
                    </div>
                </div>
                <div className={Styled["input"]}>
                    <div className={`${Styled.regularInput} ${toggle ? '' : Styled.add}`}>
                        <h3>{numOfDivsWithInputTextContainerClass} item(s) left</h3>
                        <h3>active</h3>
                        <h3>Completed</h3>
                        <h3>Clear Completed</h3>
                    </div>
                    {listValue.map((value, index) => {
                        return (
                            <div key={index} className={`${Styled['input-text-container']} ${toggle ? '' : Styled['add']}`}>
                                <input onClick={checkBox} type="checkbox" />
                                <h3>{value}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main