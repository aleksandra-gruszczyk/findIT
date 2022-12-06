import api from '@api/jobs'
import { Button, MultiSelect, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification, updateNotification } from '@mantine/notifications'
import useStoreJobFilters from '@store/jobFilters'
import { TbCheck } from 'react-icons/tb'

export default function AddJob() {
  const choices = useStoreJobFilters((state) => state.choices)
  const addForm = useForm({
    initialValues: {
      role: '',
      byline: '',
      details: '',
      apply_link: '',
      location: '',
      skills: [],
    },
    // validate: {
    //   Byline: (value) =>
    //     value.length > 150 ? 'Byline can have at most 150 characters' : null,
    // },
  })

  function handleSubmit(values) {
    showNotification({
      id: 'add-job',
      loading: true,
      title: 'Posting your job',
      message: 'Your job offer is almost ready!',
      autoClose: false,
      disallowClose: true,
    })
    console.log(values)
    api
      .addJob({ ...values, company_name: 'Xero', logo: 'xero.png' })
      .then((job) => {
        updateNotification({
          id: 'add-job',
          color: 'teal',
          title: 'Data was loaded',
          message: `The offer for ${job.role} has been posted.`,
          icon: <TbCheck size={16} />,
          autoClose: 2000,
        })
      })
  }

  return (
    <form onSubmit={addForm.onSubmit(handleSubmit)}>
      <TextInput label='Role' placeholder='Role' withAsterisk />
      <TextInput label='Location' placeholder='Location' withAsterisk />
      <TextInput
        label='Byline'
        placeholder='Provide short summary (max. 50 words)'
      />
      <Textarea label='Details' placeholder='In-depth job summary' />

      <MultiSelect
        data={choices.skills.map(({ skill }) => skill)}
        label='Your required frameworks/libraries'
        placeholder='Pick all that apply'
        searchable
        clearable
        nothingFound='Nothing found'
        w={500}
        {...addForm.getInputProps('skills')}
      />
      <TextInput
        label='Provide Link to Application'
        placeholder='Link to apply'
      />
      <br />
      <Button type='submit' radius='md'>
        submitIT!
      </Button>
    </form>
  )
}
