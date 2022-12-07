import { css } from '@emotion/react'
import {
  Badge,
  Button,
  Card,
  Group,
  ScrollArea,
  Text,
  Title,
} from '@mantine/core'
import { HiOutlineExternalLink } from 'react-icons/hi'

import JobLogo from './JobLogo'
import { RemoveButton } from './RemoveButton'

export function Front({ job, flipCard, showRemove }) {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder css={styles.card}>
      <Card.Section>
        <div css={styles.section}>
          <JobLogo logo={{ url: job.logo, bg: job.logo_bg }} />
          {showRemove && <RemoveButton job={job} />}
        </div>
      </Card.Section>
      <div css={styles.stack}>
        <div>
          <Group position='apart' mt='md' mb='xs'>
            <Text weight={500}>{job.company_name}</Text>
            <Badge>{job.location}</Badge>
          </Group>
          <Text size='sm'>{job.role}</Text>
          <Text size='sm' color='dimmed' css={styles.byline}>
            {job.byline}
          </Text>
        </div>
        <Group position='right'>
          <Button variant='light' mt='md' radius='md' onClick={flipCard}>
            Tell me more!
          </Button>
        </Group>
      </div>
    </Card>
  )
}

export function Back({ job, flipCard }) {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder css={styles.card}>
      <div css={styles.stack}>
        <div>
          <Group position='apart' mb='xs'>
            <Title order={2} size={20}>
              {job.role}
            </Title>
          </Group>
          <ScrollArea style={{ height: 320 }}>
            <Text size='sm' color='dimmed' style={{ whiteSpace: 'pre-wrap' }}>
              {job.details}
            </Text>
          </ScrollArea>
        </div>

        <Group position='right'>
          <Button
            component='a'
            href={job.apply_link}
            radius='md'
            leftIcon={<HiOutlineExternalLink size={14} />}
          >
            Apply
          </Button>

          <Button variant='light' radius='md' onClick={flipCard}>
            Back
          </Button>
        </Group>
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

  section: css`
    position: relative;

    .remove-btn {
      position: absolute;
      top: 0;
      margin: 8px;
    }
  `,
}
