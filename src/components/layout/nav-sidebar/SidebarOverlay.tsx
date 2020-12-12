import { FC } from 'react';
import { SidebarOverlayProps } from './types';

const SidebarOverlay: FC<SidebarOverlayProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
}) => (
  <div
    onClick={() => handleIsSidebarOpen(false)}
    className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
      isSidebarOpen ? 'block' : 'hidden'
    }`}
  />
);

export default SidebarOverlay;
