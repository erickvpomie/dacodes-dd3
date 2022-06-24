import React from 'react'
import { BoardProvider } from './context/BoardContext'
import { Grid } from '../Grid'
import { TileMeta, tileTotalWidth, Tile } from '../Tile'

type Props = {
  tiles: TileMeta[];
  tileCountPerRow: number;
};

export const Board = ({ tiles, tileCountPerRow = 4 }: Props) => {
  const containerWidth = tileTotalWidth * tileCountPerRow

  const tileList = tiles.map(({ id, ...restProps }) => (
    <Tile key={`tile-${id}`} {...restProps} zIndex={id} />
  ))

  return (
    <div className="relative w-[480px] h-[480px]" >
      <BoardProvider
        containerWidth={containerWidth}
        tileCount={tileCountPerRow}
      >
        <div className="absolute z-[2] m-[8px] top-0 left-0 right-0 bottom-0">{tileList}</div>
        <Grid />
      </BoardProvider>
    </div>
  )
}
