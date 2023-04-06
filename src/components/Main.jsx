import React, { useState, useEffect } from 'react';
import Styled from '../components/sass/main.module.scss';
import NightImg from '../components/images/icon-moon.svg';
import SunImg from '../components/images/icon-sun.svg';

const Main = () => {
    const [toggle, setToggle] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [listValue, setListValue] = useState([]);
    const [underline, setUnderline] = useState();



    function changeInput(e) {
        setInputValue(e.target.value);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        function handleKeyPress(event) {
            if (inputValue.trim() === '') {
                return;
            }

            if (event.keyCode === 13) {
                setListValue([...listValue, inputValue]);
                setInputValue('');
            }

        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [inputValue]);

    useEffect(() => {
        if (!toggle) {
            document.body.style.backgroundColor = 'hsl(235, 24%, 19%)';
        } else {
            document.body.style.backgroundColor = 'initial';
        }
    }, [toggle])

    const numOfDivsWithInputTextContainerClass = listValue.length;

    const [divLength, setDivLength] = useState(numOfDivsWithInputTextContainerClass)


    useEffect(() => {
        setDivLength(numOfDivsWithInputTextContainerClass)
    }, [numOfDivsWithInputTextContainerClass])

    const [h3Element, setH3Element] = useState()

    function checkBox(e) {
        const id = e.target.parentElement.getAttribute("id");
        const element = document.querySelector(`#${id} h3`);


        const h3Element = e.target.nextElementSibling;

        if (e.target.checked) {
            h3Element.style.textDecoration = "line-through";
            h3Element.style.color = "hsl(236, 33%, 92%)";
        } else {
            h3Element.style.textDecoration = "none";
            h3Element.style.color = "hsl(235, 19%, 35%)";
        }
        const getId = document.getElementById(`${id}`)

        setUnderline(getId)

        if (h3Element.style.textDecoration === "line-through") {
            setDivLength(preValue => preValue - 1)
        } else if (h3Element.style.textDecoration === "none") {
            setDivLength(preValue => preValue + 1)
        }

        setH3Element(h3Element)

    }

    const active = () => {
        if (h3Element.style.textDecoration === "line-through") {
            underline.style.display = 'none'
        }
        else if (h3Element.style.textDecoration === "none") {
            underline.style.display = 'flex'
        }
    }

    const completed = () => {
        if (h3Element.style?.textDecoration === "line-through") {
            underline.style.display = 'flex'
        }
        if (h3Element.style.textDecoration === "none") {
            underline.style.display = 'none'
        }
    }

    return (
        <div className={Styled.main}>
            <div className={`${toggle ? Styled['main-bg'] : Styled['add-bg']}`}>
                <div className={Styled['typo-container']}>
                    <h1>TODO</h1>
                    <img src={toggle ? NightImg : SunImg} onClick={handleToggle} />
                </div>
                <div className={Styled['input-container']}>
                    <div className={Styled.box}>
                        <input className={`${Styled.check} ${toggle ? '' : Styled['add']}`} type="checkbox" />
                        <input type="text" className={toggle ? '' : Styled['add']} value={inputValue} onChange={changeInput} placeholder="Create a new todo...." />
                        {inputValue.trim() === '' && null}
                    </div>
                </div>
                <div className={Styled['input']}>
                    <div className={`${Styled.regularInput} ${toggle ? '' : Styled.add}`}>
                        <h3>{divLength} item(s) left</h3>
                        <h3 onClick={active}>active</h3>
                        <h3 onClick={completed} >Completed</h3>
                    </div>
                    {listValue.map((value, index) => {
                        return (
                            <div key={index} id={`item-${index}`} className={`${Styled['input-text-container']} ${toggle ? '' : Styled.add}`}>
                                <input onClick={checkBox} type="checkbox" />
                                <h3>{value}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main;