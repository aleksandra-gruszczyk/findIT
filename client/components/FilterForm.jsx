import { Button, Flex, MultiSelect, Select } from '@mantine/core'
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
      <Flex align={'flex-start'} gap='md' maw={600}>
        <Select
          w={130}
          label='Choose location'
          placeholder='Pick one'
          clearable
          data={choices.regions}
          {...form.getInputProps('location')}
        />

        <MultiSelect
          w={350}
          data={choices.skills.map(({ skill }) => skill)}
          label='Skills'
          placeholder='What do you like working with?'
          searchable
          clearable
          nothingFound='Nothing found'
          {...form.getInputProps('skills')}
        />

        <Button type='submit' radius='md' mt={26}>
          find IT!
        </Button>
      </Flex>
    </form>
  )
}
