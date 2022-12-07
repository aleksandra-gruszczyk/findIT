import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { TbMoonStars, TbSun } from 'react-icons/tb'

export default function ThemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      // variant='filled'
      // color='primary'
      sx={(theme) => {
        return {
          // An explicit color and shade:
          // backgroundColor: theme.colors.customLight[4],
          // These two achieve the same:
          // backgroundColor: theme.fn.primaryColor(), // default light shade is 6, dark theme sets shade to 3
          // But you could swap out the 2nd index for a different shade index
          // of that colour you want to use:
          // backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()]
          backgroundColor: theme.colors[theme.primaryColor][4],
          // If you need to change the icon colour:
          // color: theme.colors[theme.primaryColor][1],
          // Remember you can also use regular CSS values too:
          // color: 'red',
          // color: '#12ab42',
          // And you can conditionally use different colours based on theme:
          // color: dark ? 'hotpink' : theme.colors.customLight[4]
        }
      }}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    >
      {dark ? <TbSun size={18} /> : <TbMoonStars size={18} />}
    </ActionIcon>
  )
}
