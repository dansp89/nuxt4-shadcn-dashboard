import type { NavMenu, NavMenuItems } from '~/types/nav'
import bottom from './bottom.json'
import components from './componentes.json'
import general from './general.json'
import pages from './pages.json'

export const navMenu: NavMenu[] = [
  {
    heading: 'General',
    items: general,
  },
  {
    heading: 'Pages',
    items: pages,
  },
  {
    heading: 'Components',
    items: components,
  },
]

export const navMenuBottom: NavMenuItems = bottom
