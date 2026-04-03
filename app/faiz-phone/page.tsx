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
    const [displayImage, setDisplayImage] = useState('')
    const [displayNumber, setDisplayNumber] = useState('')

    const handleEnter = () => {
        if (displayNumber === '555') {
            setDisplayImage('image-555')
        } else {
            setDisplayImage('image-empty')
        }
        setDisplayNumber('')
    }

    const handleKeypad = (value: string) => {
        setDisplayNumber((prev) => prev + value)
    }

    return (
        <div>
            <div>
                {displayImage === 'image-555' ? (
                    <div className='flex justify-center'>
                        <div className='flex justify-center h-32 w-32 border-8 rounded-[50%]'>
                            <div className='h-29 w-0 border-4'></div>
                        </div>
                    </div>
                ) : (
                    <div className='h-32'></div>
                )}

                <p className='overflow-x-hidden'>{displayNumber}_</p>
            </div>

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
