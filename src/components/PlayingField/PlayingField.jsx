import React from 'react'
import { useState, useEffect } from 'react';
import './PlayingField.css'

function PlayingField() {

    const [fieldSize, setfieldSize] = useState(16)
    const [show, setShow] = useState(1)
    const [hit, setHit] = useState(0)
    const [miss, setMiss] = useState(0)

    const arrField = [];

    for (let i = 0; i < fieldSize; i++) {
        arrField.push(i)
    }

    const showMole = () => {
        setInterval(() => {
            let show = Math.floor(Math.random() * fieldSize)
            setShow(show)
        }, 1000);
    }

    useEffect(() => {
        showMole()
    }, [])

    const onClick = (e) => {
        if (e.target.className === 'mole') {
            setHit(prev => prev + 1)
            console.log(e.target.className = 'field')
        } else setMiss(prev => prev + 1)
    }

    if (hit === 10) {
        alert('Вы победили')
        setHit(0)
        setMiss(0)
    }

    return (
        <>
            <div className='board'>
                {arrField.map(i => {
                    if (show === i) {
                        return <div onClick={(e) => onClick(e)} className='mole' key={i}></div>
                    }
                    return <div onClick={(e) => onClick(e)} className='field' key={i}></div>
                })}

            </div>
            <div>Поподаний: <span>{hit}</span></div>
            <div>Промахов: <span>{miss}</span></div>
        </>
    )
}

export default PlayingField