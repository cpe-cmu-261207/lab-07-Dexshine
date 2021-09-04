import { click, PixelPainterStore } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()

  return (
    <td onClick={() => click(x, y)}
        className="w-6 h-6 cursor-pointer" 
        style={{backgroundColor: state.canvas[x][y]}}>
    </td>
  )
}

export default Cell