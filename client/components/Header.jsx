import { Box, Button, Group, Header } from '@mantine/core'
import { Link } from 'react-router-dom'

import Logo from './Logo'

export default function NavHeader({ children }) {
  return (
    <Box w='100%'>
      <Header
        height={80}
        px='md'
        style={{
          backgroundColor: 'primary',
        }}
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
