// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const mode = req.query.mode
  let tracks = []

  if (mode === 'focus') {
    tracks = [
      'focus/aspen_migration.mp3',
      'focus/cyan.mp3',
      'focus/treasure_map.mp3'
    ]
  } else if (mode === 'relax') {
    tracks = [
      'relax/bathed_in_neon.mp3',
      'relax/low_tide.mp3',
      'relax/vapor.mp3'
    ]
  } else if (mode === 'sleep') {
    tracks = [
      'sleep/dark_moon.mp3',
      'sleep/lunaris.mp3',
      'sleep/moonflower.mp3',
    ]
  }

  res.status(200).json({ tracks })
}
