import React from 'react';

const DoomWindow: React.FC = () => {
  return (
    <div className="h-full w-full bg-black">
      <iframe
        src="/doom/index.html"
        className="w-full h-full border-none"
        title="DOOM"
        allowFullScreen
      />
    </div>
  );
};

export default DoomWindow;
