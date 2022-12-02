import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { MdRotateRight } from 'react-icons/md'

export function Front({ job, style, className }) {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      className={className}
      style={style}
    >
      <Card.Section>
        <Image src={job.logo} />
      </Card.Section>
      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>{job.company_name}</Text>
        <Badge color='orange' variant='light'>
          {job.location}
        </Badge>
      </Group>
      <Text size='sm'>{job.role}</Text>
      <Text size='sm' color='dimmed'>
        {job.byline}
      </Text>
      <Button
        variant='light'
        color='blue'
        mt='md'
        radius='md'
        // onClick={handleClick}
      >
        <MdRotateRight />
      </Button>
    </Card>
  )
}

export function Back({ job, className, style }) {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      className={className}
      style={style}
    >
      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>{job.role}</Text>
      </Group>
      <Text size='sm' color='dimmed'>
        {job.details}
      </Text>
      <Button
        variant='light'
        color='blue'
        mt='md'
        radius='md'
        // onClick={handleClick}
      >
        <MdRotateRight />
      </Button>
      <a href={job.apply_link}>APPLY</a>
    </Card>
  )
}
