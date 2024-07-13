import {
  faCode,
  faGauge,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Badge } from 'react-bootstrap'
import SidebarNavItem from '@/components/Layout/Dashboard/Sidebar/SidebarNavItem'
import { getDictionary } from '@/locales/dictionary'

export default async function SidebarNav() {
  const dict = await getDictionary()
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        {dict.sidebar.items.dashboard}
        <small className="ms-auto">
          <Badge bg="info" className="ms-auto">
            NEW
          </Badge>
        </small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons">
        {dict.sidebar.items.sample}
        <small className="ms-auto">
          <Badge bg="danger" className="ms-auto">
            DEMO
          </Badge>
        </small>
      </SidebarNavItem>
    </ul>
  )
}
