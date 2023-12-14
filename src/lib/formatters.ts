export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('id-ID').format(number)
}

export const randomRgba = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.5 + ')'
}
export const randomRgbAndRgba = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  const rgbVal = o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s)
  return ['rgb(' + rgbVal + ')', 'rgba(' + rgbVal + ',' + 0.5 + ')']
}

export const getMapper = (data: Record<string, number>) => {
  return Object.keys(data).reduce((acc: Record<string, string>, key: string) => {
    acc[key] = key
    return acc
  }, {})
}
