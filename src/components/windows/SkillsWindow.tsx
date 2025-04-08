
import React from 'react';
import { Code, PencilRuler, Database, Globe, Shield, Book } from 'lucide-react';

const SkillsWindow: React.FC = () => {
  const skillCategories = [
    {
      id: 'security',
      title: 'Security Skills',
      icon: Shield,
      skills: [
        { name: 'Cybersecurity & Pentesting', level: 85 },
        { name: 'Blockchain Security', level: 80 },
        { name: 'Smart Contract Auditing', level: 75 },
        { name: 'Vulnerability Assessment', level: 90 },
        { name: 'Threat Modeling', level: 80 },
        { name: 'Security Code Review', level: 85 }
      ]
    },
    {
      id: 'development',
      title: 'Development',
      icon: Code,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 60 },
        { name: 'APIs Development', level: 85 },
        { name: 'Technical Documentation', level: 90 }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Software',
      icon: Database,
      skills: [
        { name: 'Burp Suite', level: 90 },
        { name: 'Nmap', level: 85 },
        { name: 'Wireshark', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Tenable.io', level: 90 }
      ]
    },
    {
      id: 'languages',
      title: 'Languages',
      icon: Globe,
      skills: [
        { name: 'Portuguese (Native)', level: 100 },
        { name: 'English (Proficient)', level: 90 },
        { name: 'Spanish (Basic)', level: 40 },
        { name: 'Norwegian (Basic)', level: 20 }
      ]
    }
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="mb-6">SKILLS.TXT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(category => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2 mb-3 bg-gray-100 dark:bg-gray-800 p-2 border border-black/20 dark:border-white/20">
                <category.icon className="w-5 h-5" />
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map(skill => (
                  <div key={skill.name} className="border border-black/10 dark:border-white/10 p-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 border-t-2 border-dashed border-gray-300 dark:border-gray-600 pt-6">
          <h3 className="text-xl font-medium mb-4">Additional Expertise</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Code Auditing', 
              'Security Testing Tools', 
              'Automation Scripts',
              'Risk Assessment',
              'Bug Bounty Programs',
              'Exploit Development',
              'Mobile App Security',
              'Creator of AuditAI'
            ].map(item => (
              <div 
                key={item}
                className="p-3 text-center border-2 border-black/20 dark:border-white/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;
