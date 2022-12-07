import placeholder from '@assets/image-placeholder.svg'
import { Image } from '@mantine/core'

export default function JobLogo({ logo }) {
  return (
    <div
      style={{
        ...bg(logo.bg),
        height: 200,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 32,
      }}
    >
      <Image
        height={100}
        src={'/assets/logo/' + logo.url}
        alt='With default placeholder'
        withPlaceholder
        fit='contain'
      />
    </div>
  )
}

function bg(logo_bg) {
  return logo_bg.includes('.')
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7)) , url(/assets/logo/${logo_bg})`,
      }
    : { backgroundColor: `#${logo_bg}` }
}

// color: #868e96;
// background-color: #f8f9fa;
