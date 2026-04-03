'use client'

import { useState } from 'react'

const keypadButtons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '*',
    '0',
    '#',
]

export default function FaizPhonePage() {
    const [display, setDisplay] = useState('')

    const handleEnter = () => {
        setDisplay('')
    }

    const handleKeypad = (value: string) => {
        setDisplay((prev) => prev + value)
    }

    return (
        <div>
            <p className='overflow-x-hidden'>{display}_</p>

            <button
                className='cursor-pointer'
                onClick={handleEnter}
            >
                ENTER
            </button>

            <div className='grid grid-cols-3'>
                {keypadButtons.map((button) => (
                    <button
                        key={button}
                        className='border cursor-pointer'
                        onClick={() => handleKeypad(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    )
}
