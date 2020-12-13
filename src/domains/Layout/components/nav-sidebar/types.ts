export interface SidebarProps {
  isSidebarOpen: boolean;
  handleIsSidebarOpen?: (flag: boolean) => void;
}

export interface SidebarOverlayProps {
  handleIsSidebarOpen: (flag: boolean) => void;
  isSidebarOpen: boolean;
}

export interface NavSidebarProps {
  isSidebarOpen: boolean;
  handleIsSidebarOpen: (flag: boolean) => void;
}
