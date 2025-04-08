
import React from 'react';
import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface TaskbarProps {
  openWindows: {
    id: string;
    title: string;
    isMinimized: boolean;
  }[];
  activeWindowId: string | null;
  onTaskbarItemClick: (id: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ 
  openWindows, 
  activeWindowId, 
  onTaskbarItemClick 
}) => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <div className="taskbar">
      <div className="flex-1 flex items-center">
        {openWindows.map((window) => (
          <div
            key={window.id}
            onClick={() => onTaskbarItemClick(window.id)}
            className={cn("taskbar-item", {
              active: activeWindowId === window.id && !window.isMinimized,
            })}
            title={window.title}
          >
            {window.title.charAt(0).toUpperCase()}
          </div>
        ))}
      </div>
      
      <button 
        onClick={toggleTheme}
        className="taskbar-item"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default Taskbar;
