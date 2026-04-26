import jwt from 'jsonwebtoken'

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET || 'secret-key')
    return decoded
  } catch (error) {
    console.error('[v0] Token verification failed:', error)
    return null
  }
}

export function getTokenFromRequest(req: any) {
  const authHeader = req.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  return req.cookies.get('auth-token')?.value
}
