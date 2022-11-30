import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import MdRotateRight from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchJobs } from '../actions/jobs'

export default function JobCard() {
  const jobs = useSelector((state) => state.jobs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  return (
    <ul>
      {jobs.map((job, i) => (
        <li key={i}>
          <Card shadow='sm' p='lg' radius='md' withBorder>
            <Card.Section>
              <Image src={`${job.logo}`} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Text weight={500}>{job.company_name}</Text>
              <Badge color='orange' variant='light'>
                {job.location}
              </Badge>
            </Group>
            <Text size='sm'>{job.role}</Text>{' '}
            <Text size='sm' color='dimmed'>
              {job.byline}
            </Text>
            <Button
              variant='light'
              color='blue'
              mt='md'
              radius='md'
              onClick={handleClick}
            >
              <MdRotateRight />
            </Button>
          </Card>
        </li>
      ))}
    </ul>
  )
}
