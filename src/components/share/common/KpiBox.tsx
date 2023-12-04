import { type KpiProps } from '@/types'

const KpiBox = ({ items, title }: KpiProps) => {
  return (
    <div className='flex flex-col p-8 flex-1'>
      <h3 className='text-xl uppercase'>{title}</h3>
      <div className='flex flex-col flex-wrap justify-between'>
        {items.map((item, index) => (
          <div key={index} className='flex items-center w-full h-[38px] m-4 gap-2 bg-slate-200'>
            <span className='font-bold text-center bg-purple-400 h-full px-4 flex justify-center items-center'>{item.value}</span>
            <p className='text-sm font-semibold text-center p-4'>{item.label}</p>
          </div>
        ))}
    </div>
    </div>
  )
}

export default KpiBox
