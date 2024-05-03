import { Box, NoBox } from '../other/Box.js'

export const textBBox = function (text, x, y, details) {
  if (!text) return new NoBox()
  return new Box(x, y, 20, 40) // fake values for width height

}
