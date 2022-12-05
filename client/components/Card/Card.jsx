import { css } from '@emotion/react'
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  ScrollArea,
  Text,
  Title,
} from '@mantine/core'
import { HiOutlineExternalLink } from 'react-icons/hi'

export function Front({ job, flipCard }) {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder css={styles.card}>
      <Card.Section>
        {/* <Image src={job.logo} /> */}
        <Image
          height={200}
          src={null}
          alt='With default placeholder'
          withPlaceholder
        />
      </Card.Section>
      {/* <Stack justify='space-between' align='flex-end' style={{ flexGrow: 1 }}> */}
      <div css={styles.stack}>
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
        <Group position='right'>
          <Button
            variant='light'
            color='blue'
            mt='md'
            radius='md'
            onClick={flipCard}
          >
            Tell me more!
          </Button>
        </Group>
        {/* </Stack> */}
      </div>
    </Card>
  )
}

export function Back({ job, flipCard }) {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder css={styles.card}>
      {/* <Stack justify='space-between' align='flex-end' style={{ flexGrow: 1 }}> */}
      <div css={styles.stack}>
        <div>
          <Group position='apart' mb='xs'>
            <Title order={2} size={20}>
              {job.role}
            </Title>
          </Group>
          <ScrollArea style={{ height: 320 }}>
            <Text size='sm' color='dimmed'>
              {job.details}
            </Text>
          </ScrollArea>
        </div>

        <Group position='right'>
          <Button
            component='a'
            href={job.apply_link}
            variant='light'
            color='blue'
            radius='md'
            leftIcon={<HiOutlineExternalLink size={14} />}
          >
            Apply
          </Button>

          <Button variant='light' color='blue' radius='md' onClick={flipCard}>
            Back
          </Button>
        </Group>
        {/* </Stack> */}
      </div>
    </Card>
  )
}

const styles = {
  // Fades out byline text if it's too long (roughly 4 lines max):
  byline: css`
    max-height: 120px;
    mask-image: linear-gradient(black, 90px, transparent);
    overflow: hidden;
  `,

  card: css`
    width: 350px;
    height: 450px;

    /* layout */
    display: flex;
    flex-direction: column;

    /* card corners and shadow */
    border-radius: 12px;
    box-shadow: 0 12px 12px rgb(0 0 0 / 12%);

    /* prevent text selection */
    user-select: none;
  `,

  stack: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  `,
}
