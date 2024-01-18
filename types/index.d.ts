import { type SvgIconComponent } from '@mui/icons-material'
import { type Url } from 'next/dist/shared/lib/router/router'

export type MainNavItem = {
  Icon?: SvgIconComponent
  heading: string
  href: Url
}

export type WebConfig = {
  mainNav: MainNavItem[]
}
