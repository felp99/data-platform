import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { Page } from '@/components/Page/Page'
import { PageHeader } from '@/components/Page/PageHeader'
import { BackpageButton } from '@/components/ui/Button/BackpageButton'

async function Home({ params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <Page>
      <BackpageButton></BackpageButton>
      <PageHeader
        title={`Seeing edit of id: ${params.id}`}
        className={'inline-flex pl-5'}
      />
    </Page>
  )
}

export default Home
