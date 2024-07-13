"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { useSidebar } from "@/components/Layout/Dashboard/SidebarProvider";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isNarrow, setIsNarrow] = useState(true);

  const {
    showSidebarState: [isShowSidebar],
  } = useSidebar();

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    setIsNarrow(newValue);
  };

  return (
    <div
      className={classNames(
        "sidebar d-flex flex-column position-fixed h-100 border-end",
        {
          "sidebar-narrow": isNarrow,
          show: isShowSidebar,
        }
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
  );
}
