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
    if (ref) {
      ref.current.pause();
      ref.current.load();
      ref.current.play()
    }
  }, [ref, track])

  function skip() {
    setTrack((track + 1) % tracks.length)
  }

  // name should ideally come from backend instead of manipulating here
  function getName(url) {
    if (!url) {
      return ''
    } else {
      return url.split('/')[2].split('.')[0]
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-2'>
      <div className='text-6xl uppercase'>{mode}</div>
      <div>{getName(tracks[track])}</div>
      <button onClick={skip} className='btn btn-active btn-ghost'>Skip</button>
      <audio controls ref={ref}>
        <source src={tracks[track]} type='audio/mp3'></source>
      </audio>
      <Link href='/'>
        <div className='btn btn-warning'>
          Back
        </div>
      </Link>
    </div>
  )
}

export default Post