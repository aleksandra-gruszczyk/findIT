import homepageimage from '@assets/homepage.png'
import { css } from '@emotion/react'
import {
  Button,
  Flex,
  Group,
  Image,
  List,
  MantineProvider,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function LandingView() {
  return (
    <MantineProvider
      theme={{
        fontSizes: { sm: 16 },
        fontFamily: 'Eb Garamond, serif',
        headings: { fontFamily: 'Eb Garamond, serif' },
      }}
    >
      <Flex
        mih={50}
        gap='md'
        justify='center'
        align='center'
        direction='row'
        wrap='wrap'
      >
        <div>
          <Heading />
          <IntroText color='purple' />
          <BulletPoints />
          <ButtonStuff />
        </div>
        <Image src={homepageimage} width={600} />
      </Flex>
    </MantineProvider>
  )
}

function Heading() {
  return <Title align='left'>The tinder of job sites</Title>
}

function IntroText() {
  return (
    <Text mt='md'>
      Tired of scrolling through long lists of paginated jobs to apply for? Try
      findIT!
    </Text>
  )
}

function BulletPoints() {
  return (
    <List
      mt={30}
      spacing='sm'
      size='sm'
      icon={
        <ThemeIcon size={24} radius='xl' css={buttonColor}>
          <BsPatchCheckFill />
        </ThemeIcon>
      }
    >
      <List.Item>
        <b>Quick</b> - Satisfy todays small attention span with job cards!
      </List.Item>
      <List.Item>
        <b>Effortless</b> - Swipe left to forget 👻 Swipe right for keen as 😎
      </List.Item>
      <List.Item>
        <b>Legit roles for graduates</b> - Less than a year of experience is the
        norm 🥳
      </List.Item>
    </List>
  )
}

function ButtonStuff() {
  const navigate = useNavigate()

  return (
    <Group mt={30}>
      <Button
        radius='xl'
        color='orange'
        onClick={() => navigate('/jobs/swipe')}
      >
        Get started
      </Button>
      <Text variant='default' radius='xl' underline='true' color={'#071013'}>
        Are you an employer?
      </Text>
    </Group>
  )
}

const buttonColor = css`
  background-color: #ea7e1f;
`
