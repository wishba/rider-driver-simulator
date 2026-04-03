'use client'

import { useState } from 'react'

export default function FaizPhonePage() {
    const [display, setDisplay] = useState('')

    const handleEnter = () => {
        setDisplay('')
    }

    const handleKeypad = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.textContent ?? ''
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
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    1
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    2
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    3
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    4
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    5
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    6
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    7
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    8
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    9
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    *
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    0
                </button>
                <button
                    className='border cursor-pointer'
                    onClick={handleKeypad}
                >
                    #
                </button>
            </div>
        </div>
    )
}
