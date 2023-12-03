import { UPLOAD_ITEMS } from './constants'

export { default } from 'next-auth/middleware'

export const config = { matcher: [`/dashboard/${UPLOAD_ITEMS[0]}`] }
