import { ReactComponent as LogoSVG } from '@assets/logo-findit.svg'
import { useMantineTheme } from '@mantine/core'

export function Logo({ monochrome }) {
  const theme = useMantineTheme()

  const textColor = monochrome ? theme.white : theme.other.logo.text
  const symbolColor = monochrome ? theme.white : theme.other.logo.symbol

  return (
    <LogoSVG
      style={{
        marginTop: 6,
        height: 48,
        '--logo-text': textColor,
        '--logo-symbol': symbolColor,
      }}
    />
  )
}
