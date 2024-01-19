import { Icons } from '@/components/Icons'
import { WebConfig } from '@/types'

export const webConfig: WebConfig = {
  mainNav: [
    {
      Icon: Icons.home,
      heading: 'Home',
      href: '/feed'
    },
    {
      Icon: Icons.users,
      heading: 'My Network',
      href: '/my-network'
    },
    {
      Icon: Icons.jobs,
      heading: 'Jobs',
      href: '/jobs'
    },
    {
      Icon: Icons.message,
      heading: 'Messaging',
      href: '/messaging'
    },
    {
      Icon: Icons.notifications,
      heading: 'Notifications',
      href: '/notifications'
    },
    {
      heading: 'Me ▼',
      href: '/me'
    },
    {
      Icon: Icons.apps,
      heading: 'For Business ▼',
      href: '/for-business'
    }
  ]
}
