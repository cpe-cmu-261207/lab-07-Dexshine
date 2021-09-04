import { clearCanvas, randomCanvas } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button 
        onClick={() => clearCanvas()}
        className="w-36">Clear</button>
      <button 
        onClick={() => randomCanvas()}
        className="w-36">Random color</button>
    </div>
  )
}

export default Utility