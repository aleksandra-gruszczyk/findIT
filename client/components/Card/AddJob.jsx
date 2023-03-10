import api from '@api/jobs'
import {
  Button,
  Container,
  MultiSelect,
  Textarea,
  TextInput,
} from '@mantine/core'
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
    validate: {
      byline: (value) =>
        value.length > 150
          ? 'Byline is limited to a maximum of 150 characters'
          : null,
    },
  })

  function handleSubmit(values) {
    showNotification({
      id: 'add-job',
      loading: true,
      title: 'Posting your job',
      message: 'Your job offer is almost ready!',
      autoClose: 3000,
      disallowClose: true,
    })
    api
      .addJob({
        ...values,
        company_name: 'Xero',
        logo: 'xero.svg',
        logo_bg: 'xero-bg.jpeg',
      })
      .then((job) => {
        addForm.reset()
        updateNotification({
          id: 'add-job',
          color: '#115D81',
          title: 'Job published',
          message: `The offer for '${job.role}' has been posted!`,
          icon: <TbCheck size={16} />,
          // autoClose: 4000,
        })
      })
  }

  return (
    <Container style={{ width: 500 }}>
      <form onSubmit={addForm.onSubmit(handleSubmit)}>
        <TextInput
          label='Role'
          placeholder='Role'
          withAsterisk
          required
          {...addForm.getInputProps('role')}
        />
        <TextInput
          label='Location'
          placeholder='Location'
          withAsterisk
          required
          {...addForm.getInputProps('location')}
        />
        <TextInput
          label='Byline'
          placeholder='Provide a short summary'
          {...addForm.getInputProps('byline')}
        />
        <Textarea
          label='Details'
          placeholder='In-depth job summary'
          {...addForm.getInputProps('details')}
        />

        <MultiSelect
          data={choices.skills.map(({ skill, id }) => ({
            value: id,
            label: skill,
          }))}
          label='Your required frameworks/libraries'
          placeholder='Pick all that apply'
          searchable
          clearable
          nothingFound='Nothing found'
          {...addForm.getInputProps('skills')}
        />
        <TextInput
          label='Provide Link to Application'
          placeholder='Link to apply'
          {...addForm.getInputProps('apply_link')}
        />
        <br />
        <Button type='submit' radius='md'>
          submitIT!
        </Button>
      </form>
    </Container>
  )
}
