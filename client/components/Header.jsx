import { Logo } from '@components/Graphics'
import { Box, Group, Header } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function NavHeader({ children }) {
  return (
    <Box w='100%'>
      <Header
        height={80}
        px='xs'
        // Without theme, manual inline styles:
        // Has priority over sx and other style overrides:
        // style={{
        //   // backgroundColor: '#2a2b3e',
        //   // backgroundColor: 'rgb(59 65 91)',
        //   backgroundColor: '#f6f6f6',
        // }}
        // Theme override on mantine components,
        // use a color[shade] based on the current color scheme:
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.customLight[5],
        })}
      >
        <Group position='apart' sx={{ height: '100%' }}>
          <Link to='/'>
            <Logo />
          </Link>
          <Group>{children}</Group>
        </Group>
      </Header>
    </Box>
  )
}
