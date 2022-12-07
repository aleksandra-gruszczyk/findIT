import placeholder from '@assets/image-placeholder.svg'
import { BackgroundImage, Image } from '@mantine/core'

export default function JobLogo({ logo }) {
  return (
    <div
      style={{
        ...bg(logo.bg),
        backgroundSize: 'cover',
        height: 200,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // Prevent browser showing image drag overlay:
        pointerEvents: 'none',
      }}
    >
      <Image
        height={100}
        src={'/assets/logo/' + logo.url}
        alt='Company Logo'
        withPlaceholder
        placeholder={<BackgroundImage src='/assets/logo/xero-bg.jpeg' />}
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
