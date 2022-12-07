import { Logo } from '@components/Graphics'
import { css } from '@emotion/react'
import { Card, Center, Text } from '@mantine/core'

export function TutorialCard() {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder css={styles.card}>
      <Card.Section>
        <Center style={{ width: '100%', height: 200 }}>
          <Logo monochrome />
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

    background-color: #f7dec0;
    border: 10px solid white;
    border-radius: 22px;
  `,
}
