export const dataHorizontalFormatter = (data: Record<string, number>, colors: string[][]) => {
  const violenceItemsKpi = Object.keys(data).map((key) => {
    return {
      label: key,
      value: data[key]
    }
  })
  const datasets = Object.keys(data).map((key, idx) => {
    return {
      label: key,
      data: [data[key]],
      borderColor: colors[idx][0],
      backgroundColor: colors[idx][1]
    }
  })
  return {
    violenceItemsKpi,
    datasets
  }
}
