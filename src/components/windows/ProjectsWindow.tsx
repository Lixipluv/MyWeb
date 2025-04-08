import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsWindow: React.FC = () => {
  const auditAI = {
    title: "AuditAI",
    description: "An intelligent audit automation platform for smart contracts using AI and Slither.",
    tags: ["FastAPI", "Groq AI", "SvelteKit", "Docker", "TailwindCSS"],
    image: "/image/auditai_preview.png", 
    links: {
      demo: "#", 
      github: "https://github.com/Lixipluv/AuditAI"
    },
    role: "Full-Stack Developer",
    task: "Developed the entire platform architecture, UI/UX, backend and AI integration."
  };

  return (
    <div className="h-full overflow-y-auto p-4">
      <h2 className="mb-6">PROJECT</h2>

      <div className="pixel-card">
        <div className="h-48 overflow-hidden border-b-2 border-black/20 dark:border-white/20">
          <img 
            src={auditAI.image} 
            alt={auditAI.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 mb-2 inline-block text-xs border border-black/20 dark:border-white/20">
            {auditAI.role}
          </div>

          <h3 className="text-xl font-medium mb-1">{auditAI.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
            {auditAI.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {auditAI.tags.map((tag, index) => (
              <span key={index} className="pixel-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <a 
              href={auditAI.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button flex items-center text-xs"
            >
              <ExternalLink size={12} className="mr-1" />
              View
            </a>
            <a 
              href={auditAI.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button flex items-center text-xs"
            >
              <Github size={12} className="mr-1" />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;
