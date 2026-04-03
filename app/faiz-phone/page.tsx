'use client'

import { useState } from 'react'

export default function FaizPhonePage() {
    const [display, setDisplay] = useState('')

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.textContent ?? ''
        setDisplay((prev) => prev + value)
    }

    return (
        <div>
            <p>{display}_</p>

            <button>ENTER</button>

            <div className='grid grid-cols-3'>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    1
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    2
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    3
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    4
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    5
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    6
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    7
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    8
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    9
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    *
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    0
                </button>
                <button
                    className='border'
                    onClick={handleClick}
                >
                    #
                </button>
            </div>
        </div>
    )
}
