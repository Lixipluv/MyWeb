import React, { useState } from 'react';
import Window from './Window';
import DesktopIcon from './DesktopIcon';
import Taskbar from './Taskbar';
import AboutWindow from './windows/AboutWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import SkillsWindow from './windows/SkillsWindow';
import ContactWindow from './windows/ContactWindow';
import SettingsWindow from './windows/SettingsWindow';
import DoomWindow from './windows/DoomWindow';


// Define window types
type WindowType = {
  id: string;
  title: string;
  component: React.FC;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowType[]>([
    {
      id: 'about',
      title: 'About.txt',
      component: AboutWindow,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 100, y: 100 },
      size: { width: 600, height: 450 }
    },
    {
      id: 'projects',
      title: 'Portfolio',
      component: ProjectsWindow,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 150, y: 150 },
      size: { width: 700, height: 500 }
    },
    {
      id: 'skills',
      title: 'Skills.txt',
      component: SkillsWindow,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 200, y: 200 },
      size: { width: 650, height: 480 }
    },
    {
      id: 'contact',
      title: 'Contact.txt',
      component: ContactWindow,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 250, y: 250 },
      size: { width: 680, height: 550 }
    },
    {
      id: 'settings',
      title: 'Setting.app',
      component: SettingsWindow,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 300, y: 300 },
      size: { width: 550, height: 500 }
    },
    {
      id: 'doom',
      title: 'Doom.exe',
      component: DoomWindow,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 400, y: 200 },
      size: { width: 800, height: 600 }
    }
  ]);

  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const desktopIcons = [
    { id: 'about', label: 'About.txt', imageSrc: '/image/aboutme_icon.png' },
    { id: 'projects', label: 'Portfolio', imageSrc: '/image/portfolio_icon.png' },
    { id: 'skills', label: 'Skills.txt', imageSrc: '/image/skills_icon.png' },
    { id: 'contact', label: 'Contact.txt', imageSrc: '/image/contact_icon.png' },
    { id: 'settings', label: 'Setting.app', imageSrc: '/image/settings_icon.png' },
    { id: 'doom', label: 'Doom.exe', imageSrc: '/image/doom_icon.png' }
  ];

  const openWindow = (id: string) => {
    setWindows(prev => 
      prev.map(window => {
        if (window.id === id) {
          if (window.isOpen && window.isMinimized) {
            return { ...window, isMinimized: false };
          }
          return { ...window, isOpen: true, isMinimized: false };
        }
        return window;
      })
    );
    activateWindow(id);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === id ? { ...window, isOpen: false } : window
      )
    );

    if (activeWindowId === id) {
      const openWindows = windows.filter(w => w.isOpen && !w.isMinimized && w.id !== id);
      if (openWindows.length > 0) {
        const nextActive = openWindows.reduce((prev, current) => 
          current.zIndex > prev.zIndex ? current : prev
        );
        setActiveWindowId(nextActive.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === id ? { ...window, isMinimized: true } : window
      )
    );

    if (activeWindowId === id) {
      const visibleWindows = windows.filter(w => w.isOpen && !w.isMinimized && w.id !== id);
      if (visibleWindows.length > 0) {
        const nextActive = visibleWindows.reduce((prev, current) => 
          current.zIndex > prev.zIndex ? current : prev
        );
        setActiveWindowId(nextActive.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const maximizeWindow = (id: string) => {
    // This is handled within the Window component
  };

  const activateWindow = (id: string) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    setWindows(prev => 
      prev.map(window => 
        window.id === id ? { ...window, zIndex: newZIndex } : window
      )
    );

    setActiveWindowId(id);
  };

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === id ? { ...window, position: { x, y } } : window
      )
    );
  };

  const resizeWindow = (id: string, width: number, height: number) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === id ? { ...window, size: { width, height } } : window
      )
    );
  };

  const handleTaskbarItemClick = (id: string) => {
    const window = windows.find(w => w.id === id);
    if (!window) return;

    if (window.isMinimized) {
      setWindows(prev => 
        prev.map(w => 
          w.id === id ? { ...w, isMinimized: false } : w
        )
      );
      activateWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      activateWindow(id);
    }
  };

  return (
    <div className="desktop w-full h-screen bg-desktop-background relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="desktop-icons p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 max-w-xs">
        {desktopIcons.map(icon => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            imageSrc={icon.imageSrc}
            onClick={() => openWindow(icon.id)}
            isActive={windows.find(w => w.id === icon.id)?.isOpen || false}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map(window => 
        window.isOpen && (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            isActive={activeWindowId === window.id}
            isMinimized={window.isMinimized}
            zIndex={window.zIndex}
            initialPosition={window.position}
            initialSize={window.size}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onActivate={() => activateWindow(window.id)}
            onMove={moveWindow}
            onResize={resizeWindow}
          >
            <window.component />
          </Window>
        )
      )}

      {/* Taskbar */}
      <Taskbar
        openWindows={windows
          .filter(w => w.isOpen)
          .map(w => ({ id: w.id, title: w.title, isMinimized: w.isMinimized }))}
        activeWindowId={activeWindowId}
        onTaskbarItemClick={handleTaskbarItemClick}
      />
    </div>
  );
};

export default Desktop;