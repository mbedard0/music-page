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
      <button onClick={skip} className='btn btn-active btn-ghost'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skip-forward" viewBox="0 0 16 16">
        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z" />
      </svg></button>
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