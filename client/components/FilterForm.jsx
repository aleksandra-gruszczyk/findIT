import { Autocomplete, Button, MultiSelect } from '@mantine/core'
import React from 'react'

import useData from '../State/data'

export default function Filter() {
  const mockData = useData((state) => state.data)

  function handleClick() {
    //send the query to db
  }

  return (
    <>
      <Autocomplete
        label='Choose location'
        placeholder='Pick one'
        data={mockData}
      />

      <MultiSelect
        data={mockData}
        label='Your favorite frameworks/libraries'
        placeholder='Pick all that you like'
        searchable
        nothingFound='Nothing found'
      />
      <br />
      <Button color='orange' radius='md' onClick={handleClick}>
        findIT!
      </Button>
    </>
  )
}
