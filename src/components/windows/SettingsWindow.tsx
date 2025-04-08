
import React from 'react';
import { Check, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

const SettingsWindow: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const backgrounds = [
    { id: 'green', color: 'bg-[hsl(82,30%,50%)]', name: 'Meadow' },
    { id: 'blue', color: 'bg-[#3498db]', name: 'Ocean' },
    { id: 'purple', color: 'bg-[#9b59b6]', name: 'Lavender' },
    { id: 'dark', color: 'bg-[#2d3436]', name: 'Midnight' },
  ];
  
  const handleBackgroundChange = (backgroundId: string) => {
    // This would be implemented to change the desktop background
    console.log(`Changing background to ${backgroundId}`);
  };
  
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="mb-6">SETTING.APP</h2>
        
        <div className="space-y-8">
          <div className="border-2 border-black/20 dark:border-white/20 p-4">
            <h3 className="text-lg font-medium mb-3 uppercase">Change Theme</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setTheme('light')}
                className={cn(
                  "relative flex flex-col items-center p-4 rounded-none border-2 hover:bg-gray-100 dark:hover:bg-gray-800",
                  theme === 'light' 
                    ? "border-blue-500" 
                    : "border-gray-300 dark:border-gray-700"
                )}
              >
                <Sun className="w-8 h-8 mb-2" />
                <span className="text-sm">Light</span>
                {theme === 'light' && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-4 h-4 text-blue-500" />
                  </div>
                )}
              </button>
              
              <button
                onClick={() => setTheme('dark')}
                className={cn(
                  "relative flex flex-col items-center p-4 rounded-none border-2 hover:bg-gray-100 dark:hover:bg-gray-800",
                  theme === 'dark' 
                    ? "border-blue-500" 
                    : "border-gray-300 dark:border-gray-700"
                )}
              >
                <Moon className="w-8 h-8 mb-2" />
                <span className="text-sm">Dark</span>
                {theme === 'dark' && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-4 h-4 text-blue-500" />
                  </div>
                )}
              </button>
              
              <button
                onClick={() => {
                  // This would be implemented to use system preference
                  console.log('Using system preference');
                }}
                className="relative flex flex-col items-center p-4 rounded-none border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Monitor className="w-8 h-8 mb-2" />
                <span className="text-sm">System</span>
              </button>
            </div>
          </div>
          
          <div className="border-2 border-black/20 dark:border-white/20 p-4">
            <h3 className="text-lg font-medium mb-3 uppercase">Desktop Background</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {backgrounds.map(bg => (
                <button
                  key={bg.id}
                  onClick={() => handleBackgroundChange(bg.id)}
                  className="relative overflow-hidden aspect-video border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500"
                >
                  <div className={cn("w-full h-full", bg.color)}></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2 text-center">
                    {bg.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="border-2 border-black/20 dark:border-white/20 p-4">
            <h3 className="text-lg font-medium mb-3 uppercase">Interface Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border border-gray-300 dark:border-gray-600 p-2">
                <label className="text-sm">Enable animations</label>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between border border-gray-300 dark:border-gray-600 p-2">
                <label className="text-sm">Show window shadows</label>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between border border-gray-300 dark:border-gray-600 p-2">
                <label className="text-sm">Allow window transparency</label>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="border-2 border-black/20 dark:border-white/20 p-4">
            <h3 className="text-lg font-medium mb-3 uppercase">About This Portfolio</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-600">
              <p className="text-sm mb-2">
                Version: 1.0.0
              </p>
              <p className="text-sm mb-2">
                Created with React, TypeScript, and Tailwind CSS
              </p>
              <p className="text-sm">
                Inspired by Windows UI design and pixel art
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsWindow;
