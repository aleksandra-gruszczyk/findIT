import { ReactComponent as SVG } from '@assets/undraw/favourites.svg'
import { useMantineTheme } from '@mantine/core'

export function FavouritesPage({ width }) {
  const theme = useMantineTheme()

  return (
    <SVG
      style={{
        width,
        color: theme.fn.primaryColor(),
      }}
    />
  )
}
