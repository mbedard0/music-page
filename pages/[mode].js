import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

const Post = () => {
  const router = useRouter()
  const mode = router.query.mode
  const [tracks, setTracks] = useState([])
  const [track, setTrack] = useState()
  const ref = useRef()

  useEffect(() => {
    if (!mode) {
      return
    }
      fetch(`/api/tracks?mode=${mode}`)
        .then((res) => {
          res.json().then((json) => {
            setTracks(json.tracks)
            setTrack(0)
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

  function skip() {
    setTrack(track + 1)
  }

  return (
    <>
      <Link href='/'>Back</Link>
      <div>{mode}</div>
      <div>{tracks[track]}</div>
      <button onClick={skip}>Skip</button>
      <audio controls ref={ref}>
        <source src={tracks[track]} type='audio/mp3'></source>
      </audio>
    </>
  )
}

export default Post