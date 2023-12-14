export const dataBarFormatter = (data: Record<string, number>,
  mapper: Record<string, string>,
  colors: string[]) => {
  const violenceItemsKpi = Object.keys(data).map((key) => {
    return {
      label: mapper[key],
      value: data[key]
    }
  })
  const datasets = Object.keys(data).map((key, idx) => {
    return {
      label: mapper[key],
      data: [data[key]],
      backgroundColor: colors[idx]
    }
  })
  return {
    violenceItemsKpi,
    datasets
  }
}
