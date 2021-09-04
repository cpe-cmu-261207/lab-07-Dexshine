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

//change state color to the same as color from colorpicker
export const changeColor = (color: string) => {
  PixelPainterStore.update(
    state => {state.color = color}
  )
}

//change color in cell(x, y) to the same as state color
export const clickCell = (x:number, y:number) => {
  PixelPainterStore.update(
    state => {state.canvas[x][y] = state.color}
  )
}

//change color in all cell to white
export const clearCanvas = () => {
  PixelPainterStore.update(
    state => {state.canvas = createEmptyCanvas()}
  )
}

//change color in all cell by random
export const randomCanvas = () => {
  
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      //random integer from 1 to 12
      const randomNum = Math.floor(Math.random() * 12) + 1
      let colorCode = ""
      //change colorCode by switch-case
      switch(randomNum){
        case 1:
          colorCode = "#000000"
          break
        case 2:
          colorCode = "#804000"
          break
        case 3:
          colorCode = "#FE0000"
          break
        case 4:
          colorCode = "#FE6A00"
          break
        case 5:
          colorCode = "#FFD800"
          break
        case 6:
          colorCode = "#00FF01"
          break
        case 7:
          colorCode = "#FFFFFF"
          break
        case 8:
          colorCode = "#01FFFF"
          break
        case 9:
          colorCode = "#0094FE"
          break
        case 10:
          colorCode = "#0026FF"
          break
        case 11:
          colorCode = "#B100FE"
          break
        case 12:
          colorCode = "#FF006E"
          break
      }
      output[i].push(colorCode)
    }
  }
  
  PixelPainterStore.update(
    state => {state.canvas = output}
  )
}

