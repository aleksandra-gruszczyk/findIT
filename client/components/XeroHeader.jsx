import {
  Avatar,
  createStyles,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'

export default function XeroHeader() {
  const { classes, cx } = useStyles()
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  return (
    <Menu
      width={260}
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
              src='assets/logo/xero.svg'
              alt='xero'
              radius='xl'
              size={40}
            />
            <Text weight={500} size='lg' sx={{ lineHeight: 1 }} mr={3}>
              Xero
            </Text>
            <BsChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Add Job Entry</Menu.Item>
        <Menu.Item icon={<TbLogout size={14} stroke={1.5} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}))
