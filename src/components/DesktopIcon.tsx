import React from 'react';
import { cn } from '@/lib/utils';

interface DesktopIconProps {
  id: string;
  label: string;
  imageSrc: string; // caminho da imagem (ex: /image/aboutme_icon.png)
  onClick: () => void;
  isActive?: boolean;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ 
  id, 
  label, 
  imageSrc, 
  onClick, 
  isActive = false 
}) => {
  return (
    <div 
      className={cn(
        "desktop-item", 
        { "bg-black/10 dark:bg-white/10": isActive }
      )}
      onClick={onClick}
      data-id={id}
    >
      <div className="icon-wrapper">
        <div className="icon">
          <img 
            src={imageSrc} 
            alt={label} 
            className="w-30 h-30 object-contain image-rendering-pixelated" 
          />
        </div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default DesktopIcon;
