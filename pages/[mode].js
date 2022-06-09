import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

const Post = () => {
  const router = useRouter()
  const mode = router.query.mode
  const [track, setTrack] = useState()
  const ref = useRef()

  useEffect(() => {
    if (!mode) {
      return
    }
      fetch(`/api/tracks?mode=${mode}`)
        .then((res) => {
          res.json().then((json) => {
            setTrack(json.path)
          })
        })
  }, [mode])

  useEffect(() => {
    if(ref) {
      ref.current.pause();
      ref.current.load();
    }
},[ref, track])


  if (mode === 'focus') {
  } else if (mode === 'relax') {
  } else if (mode === 'sleep') {
  }

  return (
    <>
      <Link href='/'>Back</Link>
      <div>{mode}</div>
      <div>{track}</div>
      <audio controls ref={ref}>
        <source src={track} type='audio/mp3'></source>
      </audio>
    </>
  )
}

export default Post