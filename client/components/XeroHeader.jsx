import {
  Avatar,
  Button,
  createStyles,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function XeroHeader() {
  const [loggedIn, setLoggedIn] = useState(false)

  function login() {
    setLoggedIn(!loggedIn)
  }
  return loggedIn ? (
    <UserMenu logout={login} />
  ) : (
    <Button onClick={login}>Log in</Button>
  )
}

function UserMenu({ logout }) {
  const { classes, cx } = useStyles()
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <Menu
      width={130}
      position='bottom-end'
      transition='pop-top-right'
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar
              src='/assets/logo/xero.svg'
              alt='xero'
              radius='xl'
              size={40}
              // style={{
              //   border: '2px solid #eee',
              // }}
            />
            <Text
              weight={500}
              size='lg'
              sx={{ paddingLeft: 4, lineHeight: 1 }}
              mr={3}
            >
              Xero
            </Text>
            <BsChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate('/add')}>Post a role</Menu.Item>
        <Menu.Item onClick={handleLogout}>Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

const useStyles = createStyles((theme) => {
  const hoverStyles = {
    color: theme.colorScheme === 'dark' ? theme.colors.hotpink[0] : theme.black,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.hotpink[4]
        : theme.colors.customLight[1],
  }

  return {
    user: {
      color:
        theme.colorScheme === 'dark' ? theme.colors.hotpink[0] : theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      transition: 'background-color 100ms ease',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.hotpink[3]
          : theme.fn.primaryColor(),
      // backgroundColor: theme.colorScheme === 'dark'
      //   ? theme.colors.dark[8]
      //   : theme.colors.customLight[4],

      '&:hover': hoverStyles,

      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },

    userActive: hoverStyles,
  }
})
