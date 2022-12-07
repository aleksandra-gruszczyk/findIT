import { Homepage } from '@components/Graphics'

import {
  Button,
  Flex,
  Group,
  List,
  MantineProvider,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { getTheme } from '../theme'
export default function LandingView() {
  const { colorScheme } = useMantineColorScheme()

  return (
    <MantineProvider
      theme={{
        ...getTheme(colorScheme),
        // Nested MantineProvider to override the theme for
        // all mantine components wrapped by the provider:
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
        mt='25px'
      >
        <div>
          <Heading />
          <IntroText />
          <BulletPoints />
          <ButtonStuff />
        </div>
        <Homepage width={600} />
      </Flex>
    </MantineProvider>
  )
}

function Heading() {
  return <Title align='left'>The tinder of job sites</Title>
}

function IntroText() {
  return (
    <Text color='dimmed' mt='md'>
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
        <ThemeIcon size={24} radius='xl'>
          <BsPatchCheckFill color='white' />
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
      <Button radius='xl' onClick={() => navigate('/jobs/swipe')}>
        Get started
      </Button>
    </Group>
  )
}
