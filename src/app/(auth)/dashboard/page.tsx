import { permanentRedirect } from 'next/navigation'

const page = async () => {
  permanentRedirect('/dashboard/agressors')
  return null
}

export default page
