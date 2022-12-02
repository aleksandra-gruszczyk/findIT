import { Autocomplete, Button, MultiSelect } from '@mantine/core'
import useStoreJobFilters from '@store/jobFilters'
import React from 'react'

export default function Filter() {
  const choices = useStoreJobFilters((state) => state.choices)

  function handleClick() {
    //send the query to db
  }

  return (
    <>
      <Autocomplete
        label='Choose location'
        placeholder='Pick one'
        data={choices.regions}
      />

      <MultiSelect
        data={choices.skills}
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
