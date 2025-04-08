
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Maximize, Minimize, X } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  isActive: boolean;
  isMinimized: boolean;
  zIndex: number;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onActivate: () => void;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, width: number, height: number) => void;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  isActive,
  isMinimized,
  zIndex,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 500, height: 350 },
  children,
  onClose,
  onMinimize,
  onMaximize,
  onActivate,
  onMove,
  onResize,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState({ position: initialPosition, size: initialSize });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        setPosition({ x: newX, y: newY });
        onMove(id, newX, newY);
      }
      
      if (isResizing && windowRef.current) {
        e.preventDefault();
        
        let newWidth = size.width;
        let newHeight = size.height;
        let newX = position.x;
        let newY = position.y;
        
        if (resizeDirection.includes('e')) {
          newWidth = Math.max(300, e.clientX - position.x);
        }
        if (resizeDirection.includes('s')) {
          newHeight = Math.max(200, e.clientY - position.y);
        }
        if (resizeDirection.includes('w')) {
          const deltaX = e.clientX - position.x;
          newWidth = Math.max(300, size.width - deltaX);
          if (newWidth !== size.width) {
            newX = position.x + deltaX;
          }
        }
        if (resizeDirection.includes('n')) {
          const deltaY = e.clientY - position.y;
          newHeight = Math.max(200, size.height - deltaY);
          if (newHeight !== size.height) {
            newY = position.y + deltaY;
          }
        }
        
        setSize({ width: newWidth, height: newHeight });
        if (newX !== position.x || newY !== position.y) {
          setPosition({ x: newX, y: newY });
          onMove(id, newX, newY);
        }
        onResize(id, newWidth, newHeight);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };
    
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, position, size, id, onMove, onResize, isMaximized, resizeDirection]);
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMaximized) {
      onActivate();
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };
  
  const startResize = (direction: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onActivate();
    setIsResizing(true);
    setResizeDirection(direction);
  };
  
  const handleMaximize = () => {
    onActivate();
    if (isMaximized) {
      setIsMaximized(false);
      setPosition(preMaximizeState.position);
      setSize(preMaximizeState.size);
      onResize(id, preMaximizeState.size.width, preMaximizeState.size.height);
      onMove(id, preMaximizeState.position.x, preMaximizeState.position.y);
    } else {
      setPreMaximizeState({ position, size });
      setIsMaximized(true);
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 56 }); // Minus taskbar height
      onResize(id, window.innerWidth, window.innerHeight - 56);
      onMove(id, 0, 0);
    }
    onMaximize();
  };

  if (isMinimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={cn('window', { active: isActive })}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
      }}
      onClick={onActivate}
    >
      <div 
        className={cn('titlebar', { active: isActive })}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleMaximize}
      >
        <div className="window-buttons">
          <button className="close-button" onClick={onClose}>
            <X className="w-2 h-2" />
          </button>
          <button className="minimize-button" onClick={onMinimize}>
            <Minimize className="w-2 h-2" />
          </button>
          <button className="maximize-button" onClick={handleMaximize}>
            <Maximize className="w-2 h-2" />
          </button>
        </div>
        <div className="title text-sm font-medium truncate text-center flex-1">{title.toUpperCase()}</div>
        <div className="w-16"></div> {/* Spacer for visual balance */}
      </div>
      <div className="window-content">
        {children}
      </div>
      
      {!isMaximized && (
        <>
          <div className="resize-handle resize-handle-n" onMouseDown={(e) => startResize('n', e)}></div>
          <div className="resize-handle resize-handle-e" onMouseDown={(e) => startResize('e', e)}></div>
          <div className="resize-handle resize-handle-s" onMouseDown={(e) => startResize('s', e)}></div>
          <div className="resize-handle resize-handle-w" onMouseDown={(e) => startResize('w', e)}></div>
          <div className="resize-handle resize-handle-ne" onMouseDown={(e) => startResize('ne', e)}></div>
          <div className="resize-handle resize-handle-nw" onMouseDown={(e) => startResize('nw', e)}></div>
          <div className="resize-handle resize-handle-se" onMouseDown={(e) => startResize('se', e)}></div>
          <div className="resize-handle resize-handle-sw" onMouseDown={(e) => startResize('sw', e)}></div>
        </>
      )}
    </div>
  );
};

export default Window;
