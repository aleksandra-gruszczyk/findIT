import { css } from '@emotion/react'
import { Card, Center, Text } from '@mantine/core'

import Logo from '../Logo'

export function TutorialCard() {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder css={styles.card}>
      <Card.Section>
        <Center style={{ width: '100%', height: 200 }}>
          <Logo />
        </Center>
      </Card.Section>
      <div>
        <Text size='lg'>
          Swipe right to add the card to your favourites, swipe left if you are
          not interested in the job!
        </Text>
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
