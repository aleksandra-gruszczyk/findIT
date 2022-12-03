import { css } from '@emotion/react'
import { Badge, Button, Card, Group, Image, Stack, Text } from '@mantine/core'
import { MdRotateRight } from 'react-icons/md'

export function Front({ job, className, ...props }) {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      className={className}
      {...props}
      style={{ ...props.style, display: 'flex', flexDirection: 'column' }}
    >
      <Card.Section>
        {/* <Image src={job.logo} /> */}
        <Image
          height={200}
          src={null}
          alt='With default placeholder'
          withPlaceholder
        />
      </Card.Section>
      <Stack justify='space-between' align='flex-start' style={{ flexGrow: 1 }}>
        <div>
          <Group position='apart' mt='md' mb='xs'>
            <Text weight={500}>{job.company_name}</Text>
            <Badge color='orange' variant='light'>
              {job.location}
            </Badge>
          </Group>
          <Text size='sm'>{job.role}</Text>
          <Text size='sm' color='dimmed' css={styles.byline}>
            {job.byline}
          </Text>
        </div>

        <FlipButton />
      </Stack>
    </Card>
  )
}

export function Back({ job, className, ...props }) {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      className={className}
      style={{ ...props.style, display: 'flex', flexDirection: 'column' }}
    >
      <Stack justify='space-between' align='flex-start' style={{ flexGrow: 1 }}>
        <div>
          <Group position='apart' mt='md' mb='xs'>
            <Text weight={500}>{job.role}</Text>
          </Group>
          <Text size='sm' color='dimmed'>
            {job.details}
          </Text>
        </div>
        <div>
          <FlipButton />
          <a href={job.apply_link}>APPLY</a>
        </div>
      </Stack>
    </Card>
  )
}

function FlipButton() {
  return (
    <Button
      variant='light'
      color='blue'
      mt='md'
      radius='md'
      // onClick={handleClick}
    >
      <MdRotateRight />
    </Button>
  )
}

const styles = {
  // Fades out byline text if it's too long..
  byline: css`
    height: 90px;
    mask-image: linear-gradient(black, 80%, transparent);
    overflow: hidden;
  `,
}
