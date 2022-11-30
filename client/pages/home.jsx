import { useEffect, useState } from 'react'
import request from 'superagent'
import Badger from '@components/badger'

function Home() {
  const [honeybadgers, setBadgers] = useState(null)

  useEffect(() => {
    request
      .get('/api/v1/badgers')
      .then((res) => setBadgers(JSON.parse(res.text)))
  }, [])

  if (!honeybadgers) {
    return
  }

  return (
    <div>
      <Badger.List badgers={honeybadgers} />
    </div>
  )
}

export default Home
