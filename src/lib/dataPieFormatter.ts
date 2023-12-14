export const dataPieFormatter = (data: Record<string, number>,
  mapper: Record<string, string>,
  label: string,
  backgroundColor: string[]
) => {
  const violenceItemsKpi = Object.keys(data).map((key) => {
    return {
      label: mapper[key],
      value: data[key]
    }
  })
  const objMapper = Object.keys(data).map((key) => {
    return {
      label: mapper[key],
      value: data[key]
    }
  })
  const labels = objMapper.map((item) => item.label)
  const datasets = [
    {
      label,
      data: objMapper.map((item) => item.value),
      backgroundColor
    }
  ]
  return {
    violenceItemsKpi,
    labels,
    datasets
  }
}
