'use client'
import Dropzone from 'react-dropzone'
import Papa from 'papaparse'

const DropZoneFile = () => {
  const handleOnDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target?.result as string, { header: true })
      const parsedData = csv?.data
      if (parsedData.length === 0) return
      const result = []
      for (const data of parsedData) {
        const rows = Object.keys(data as string)
        // console.log({ rows })
        const columns = Object.values(data as string)
        // console.log({ columns })
        const res = rows.reduce((acc: Record<string, string>, cur: string, idx: number) => {
          return { ...acc, [cur]: columns[idx] }
        }, {})
        result.push(res)
      }
      console.log({ result })
    }
    reader.readAsText(file)
  }

  return (
    <Dropzone onDrop={handleOnDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default DropZoneFile
