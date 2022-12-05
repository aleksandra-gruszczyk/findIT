import { ReactComponent as LogoSVG } from '@assets/logo-findit.svg'
import { useMantineTheme } from '@mantine/core'

export function Logo() {
  const theme = useMantineTheme()

  return (
    <LogoSVG
      style={{
        height: 48,
        '--logo-text': theme.other.logo.text,
        '--logo-symbol': theme.other.logo.symbol,
      }}
    />
  )
}
