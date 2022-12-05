import { ReactComponent as SVG } from '@assets/undraw/homepage.svg'
import { useMantineTheme } from '@mantine/core'

export function Homepage({ width }) {
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
