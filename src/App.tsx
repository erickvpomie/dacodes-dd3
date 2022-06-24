import React, { useState, useEffect } from 'react'
import { Button } from './components/Button'
import { Game } from './components/Game'
import Helper from './components/Helper/Helper'
import { BsArrowRight } from 'react-icons/all'

export const App = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [firstTime, setFirstTime] = useState(true)

  const handleRestart = () => {
    setDate(new Date())
  }

  const validateFirstTime = () => {
    const fst = localStorage.getItem('firstTime')
    fst !== null && setFirstTime(false)
  }

  const unlockFirstTime = () => {
    localStorage.setItem('firstTime', 'true')
    setFirstTime(false)
  }

  useEffect(validateFirstTime, [])

  return (
        <div className="w-screen h-screen flex items-center flex flex-col">
            <div className='w-[600px] h-[250px] text-[#776e65] p-6 flex justify-between '>
                <div className='flex flex-col'>
                    <div className='my-4 text-7xl font-bold'>2048</div>
                    <div className='text-md'>Join the tiles, get to <span className='font-bold'>2048!</span><br/>
                        <span className='flex items-center underline cursor-pointer font-bold' onClick={() => setFirstTime(true)}>How to play <BsArrowRight
                            className='ml-1' size={15}/></span>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='h-200'><Button onClick={handleRestart}>New Game</Button></div>
                </div>
            </div>
            <Game key={date.toISOString()}/>
            { firstTime && (
                <Helper unlockFirstTime={unlockFirstTime}/>
            ) }
        </div>
  )
}
