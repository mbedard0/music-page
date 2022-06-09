import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const mode = router.query.mode

  const track = '/focus/aspen_migration.mp3'

  if (mode === 'focus') {
    return (
      <>
        <Link href='/'>Back</Link>
        <div>{mode}</div>
        <div>{track}</div>
        <audio controls>
          <source src={track} type='audio/mp3'></source>
        </audio>
      </>
    )
  } else if (mode === 'relax') {
    return (
      <>
      sleep
      </>
    )
  } else if (mode === 'sleep') {
    return (
      <>
      sleep
      </>
    )
  }
}

export default Post