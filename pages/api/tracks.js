// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const mode = req.query.mode
  res.status(200).json({ path: '/focus/aspen_migration.mp3' })
}
