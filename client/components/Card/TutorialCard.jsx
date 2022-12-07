import { Logo } from '@components/Graphics'
import { css } from '@emotion/react'
import { Card, Center, Text, useMantineTheme } from '@mantine/core'

export function TutorialCard() {
  const theme = useMantineTheme()

  const cardBG = theme.colors[theme.primaryColor][2]
  const cardBorder = theme.colors[theme.primaryColor][3]

  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      css={styles.card}
      style={{ backgroundColor: cardBG, border: `10px solid ${cardBorder}` }}
    >
      <Card.Section>
        <Center style={{ width: '100%', height: 200 }}>
          <Logo monochrome={theme.black} />
        </Center>
      </Card.Section>
      <div
        style={{
          color: theme.black,
          whiteSpace: 'pre-wrap',
          margin: '0 auto',
        }}
      >
        <Text size='xl'>
          <b>Swipe left</b> to forget a role.
          {'\n'}
          <b>Swipe right</b> for keen as!
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
    /* border-radius: 12px; */
    border-radius: 22px;
    box-shadow: 0 12px 12px rgb(0 0 0 / 12%);

    /* prevent text selection */
    user-select: none;
  `,
}
