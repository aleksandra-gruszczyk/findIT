import homepageimage from '@assets/homepageimg.png'
import { css } from '@emotion/react'
import {
  BackgroundImage,
  Button,
  Container,
  createStyles,
  Flex,
  Group,
  Header,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function LandingView() {
  return (
    <div style={{ position: 'relative' }}>
      <h1 css={headerColor}>f i n d i t</h1>

      <div css={homeComponent}>
        {/* <Image src={homepageimage} /> */}
        <div>
          <Heading />
          <IntroText />
          <BulletPoints />
          <ButtonStuff />
        </div>
      </div>
    </div>
  )
}

function Heading() {
  return (
    <Title
      style={{
        fontFamily: 'Eb Garamond',
        display: 'flex',
        color: '#071013',
      }}
    >
      How junior devs connect with reasonable employers
    </Title>
  )
}

function IntroText() {
  return (
    <Text color='dimmed' mt='md' style={{ fontFamily: 'Eb Garamond' }}>
      Here at findIT we believe the current state of hiring processes has skewed
      dynamics, in the name of laissez-faire, we are here to balance the scales
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
        <ThemeIcon size={20} radius='xl' css={buttonColor}>
          <BsPatchCheckFill />
        </ThemeIcon>
      }
      style={{ fontFamily: 'Eb Garamond' }}
    >
      <List.Item>
        <b>No account needed</b> – cause we could not be fucked with Auth0
      </List.Item>
      <List.Item>
        <b>Free to use</b> – just dont complain
      </List.Item>
      <List.Item>
        <b>Frictionless</b> – get connected with your future employers with just
        a swipe
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
        size='md'
        color='orange'
        style={{ fontFamily: 'Eb Garamond' }}
        onClick={() => navigate('/jobs/swipe')}
      >
        Get started
      </Button>
      <Text
        variant='default'
        radius='xl'
        size='md'
        underline='true'
        color={'#071013'}
        style={{ fontFamily: 'Eb Garamond' }}
      >
        Are you an employer?
      </Text>
    </Group>
  )
}

const buttonColor = css`
  background-color: #ea7e1f;
`

const headerColor = css`
  color: #ea7e1f;
`

const textContainer = css`
  position: absolute;
  top: 300px;
  right: 490px;
`

const homeComponent = css`
  position: relative;
  /* text-align: center; */
  /* color: white; */
  /* width: 100%; */
  max-width: 800px;
`
