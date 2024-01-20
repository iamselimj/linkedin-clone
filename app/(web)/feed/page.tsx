import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'
import { Widgets } from '@/components/Widgets'

export default function FeedPage() {
  return (
    <main className="container h-screen flex flex-col md:flex-row pt-4">
      <Sidebar />
      <Feed />
      <Widgets />
    </main>
  )
}
