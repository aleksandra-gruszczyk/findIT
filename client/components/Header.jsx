import { Box, Group, Header } from '@mantine/core'
import { Link } from 'react-router-dom'

import Logo from './Logo'

export default function NavHeader({ children }) {
  return (
    <Box w='100%'>
      <Header
        height={80}
        px='md'
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
              : theme.colors.customLight[0],
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
