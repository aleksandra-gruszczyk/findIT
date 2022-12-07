import { ReactComponent as LogoSVG } from '@assets/logo-findit.svg'
import { useMantineTheme } from '@mantine/core'

export function Logo({ monochrome }) {
  const theme = useMantineTheme()

  return (
    <LogoSVG
      style={{
        marginTop: 6,
        height: 48,
        '--logo-text': monochrome || theme.other.logo.text,
        '--logo-symbol': monochrome || theme.other.logo.symbol,
      }}
    />
  )
}
