import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const mode = router.query.mode

  if (mode === 'focus') {
    return (
      <>
      focus
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