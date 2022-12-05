import { Button, MultiSelect, Select } from '@mantine/core'
import { useForm } from '@mantine/form'
import useStoreJobFilters from '@store/jobFilters'
import useStoreJobs from '@store/jobs'

import { getJobs } from '../apis/jobs'

export default function Filter() {
  const choices = useStoreJobFilters((state) => state.choices)
  const setJobs = useStoreJobs((state) => state.setJobs)

  const form = useForm({
    initialValues: {
      location: '',
      skills: [],
    },
  })

  function handleSubmit(values) {
    getJobs(values).then(setJobs)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Select
        label='Choose location'
        placeholder='Pick one'
        data={choices.regions}
        {...form.getInputProps('location')}
      />

      <MultiSelect
        data={choices.skills.map(({ skill }) => skill)}
        label='Your favorite frameworks/libraries'
        placeholder='Pick all that you like'
        searchable
        clearable
        nothingFound='Nothing found'
        w={500}
        {...form.getInputProps('skills')}
      />
      <br />
      <Button type='submit' color='orange' radius='md'>
        findIT!
      </Button>
    </form>
  )
}
