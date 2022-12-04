import { Box, Button, Group, Header } from '@mantine/core'

import Logo from './Logo'

export default function NavHeader() {
  return (
    <Box w='100%'>
      <Header
        height={80}
        px='md'
        style={{
          // backgroundColor: '#2a2b3e',
          // backgroundColor: '#e9e9f8',
          backgroundColor: '#f6f6f6',
        }}
      >
        <Group position='apart' sx={{ height: '100%' }}>
          <Logo />

          <Group>
            <Button variant='default'>Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </Header>
    </Box>
  )
}
