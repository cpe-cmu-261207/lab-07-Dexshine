import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  color: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  color: '#FFFFFF'
})

export const changeColor = (color: string) => {
  PixelPainterStore.update(
    state => {state.color = color}
  )
}

export const clickCell = (x:number, y:number) => {
  PixelPainterStore.update(
    state => {state.canvas[x][y] = state.color}
  )
}

export const clearCanvas = () => {
  PixelPainterStore.update(
    state => {state.canvas = createEmptyCanvas()}
  )
}

