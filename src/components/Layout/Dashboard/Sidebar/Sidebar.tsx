'use client'

import React from 'react'
import classNames from 'classnames'
import { useSidebar } from '@/components/Layout/Dashboard/SidebarProvider'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const {
    showSidebarState: [isShowSidebar],
  } = useSidebar()

  return (
    <div
      className={classNames(
        'sidebar d-flex flex-column position-fixed h-100 border-end',
        {
          show: isShowSidebar,
        },
      )}
      id="sidebar"
    >
      <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
        <svg className="sidebar-brand-full" width="118" height="46">
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#full" />
        </svg>
        <svg className="sidebar-brand-narrow d-none" width="46" height="46">
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#signet" />
        </svg>
      </div>

      <div className="sidebar-nav flex-fill border-top">{children}</div>
    </div>
  )
}
