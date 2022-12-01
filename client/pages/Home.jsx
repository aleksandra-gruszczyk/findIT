import { useEffect, useState } from 'react'
import request from 'superagent'

import Filter from '../components/FilterForm'
import useData from '../State/data'

export default function Home() {
  const setData = useData((state) => state.setData)
  const mockData = ['Wellington', 'Auckland']

  useEffect(() => {
    setData(mockData)
  }, [])

  return (
    <div>
      <Filter />
    </div>
  )
}
