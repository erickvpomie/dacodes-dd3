import React from 'react'
import { useBoard } from '../Board'

export const Grid = () => {
  const [, tileCount] = useBoard()

  const renderGrid = () => {
    const length = tileCount * tileCount
    const cells = [] as JSX.Element[]

    for (let index = 0; index < length; index += 1) {
      cells.push(<div key={`${index}`} className={'w-[100px] h-[100px] m-[8px] flex flex-wrap bg-[#EEE4DA59]  border-[#bbada0] rounded-[4px]'}/>)
    }

    return cells
  }

  return <div className="flex flex-wrap bg-[#bbada0] border-[8px] border-[#bbada0] rounded-[6px]">{renderGrid()}</div>
}
