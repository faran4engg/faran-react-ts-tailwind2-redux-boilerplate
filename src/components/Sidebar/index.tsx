// @ts-nocheck

import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import SidebarOverlay from './SidebarOverlay';

function Sidebar({ isSidebarOpen, handleIsSidebarOpen }) {
  return (
    <>
      <SidebarOverlay
        isSidebarOpen={isSidebarOpen}
        handleIsSidebarOpen={handleIsSidebarOpen}
      />
      <DesktopSidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default Sidebar;
