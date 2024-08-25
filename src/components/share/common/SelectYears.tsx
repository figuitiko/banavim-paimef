'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Label, Select } from 'flowbite-react'

const SelectYears = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleYear = (year: string) => {
    const params = new URLSearchParams(searchParams)
    if (year !== undefined) {
      params.set('year', year)
    } else {
      params.delete('year')
    }
    replace(`${pathname}?${params.toString()}`)
  }
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2019 }, (_, index) => (currentYear - index).toString())

  return (
    <div className="flex flex-col bg-primary p-4 rounded-lg">
      <div className="mb-2 block text-white">
        <Label htmlFor="countries" value="Selecciona un año" />
      </div>
      <Select
        className="rounded-lg"
        name="years"
        id="years"
        onChange={(e) => {
          handleYear(e.target.value)
        }}
        defaultValue={searchParams.get('year')?.toString() ?? '2020'}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default SelectYears
