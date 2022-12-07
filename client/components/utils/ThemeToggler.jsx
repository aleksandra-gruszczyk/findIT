import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { useMantineTheme } from '@mantine/core'
import { TbMoonStars, TbSun } from 'react-icons/tb'

export default function ThemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const theme = useMantineTheme()

  return (
    <ActionIcon
      variant='outline'
      color='primary'
      // sx={theme.colors.customLight[4]}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    >
      {dark ? <TbSun size={18} /> : <TbMoonStars size={18} />}
    </ActionIcon>
  )
}
