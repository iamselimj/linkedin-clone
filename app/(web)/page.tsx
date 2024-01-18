import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'
import { Widgets } from '@/components/Widgets'

export default function HomePage() {
  return (
    <main className="container flex pt-4">
      <Sidebar />
      <Feed />
      <Widgets />
    </main>
  )
}
