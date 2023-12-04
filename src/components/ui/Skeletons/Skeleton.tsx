import { type SkeletonProps } from '@/types'
import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = ({ height, width }: SkeletonProps) => {
  return (
    <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
    <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
    <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
    <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
    <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
    <circle cx='62' cy='27' r='20' />
    <rect x='8' y='2' rx='0' ry='0' width='397' height='227' />
  </ContentLoader>
  )
}

export default Skeleton
