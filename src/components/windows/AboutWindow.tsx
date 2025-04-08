import React from 'react';
import {
  Instagram, Linkedin
} from 'lucide-react';

const AboutWindow: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="mb-4">ABOUT.TXT</h2>

        <div className="flex flex-col gap-6 mb-6">
          {/* Profile Section */}
          <div className="w-full flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-200 w-24 h-24 flex items-center justify-center mb-4 overflow-hidden border-2 border-black/20">
              <img
                src="/image/me.jpg"
                alt="Livia Carrera"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl">Livia Carrera</h3>
            <p className="text-gray-500 dark:text-gray-400">Application Security Engineer · Brazil</p>

            {/* Social Links */}
            <div className="pt-4 border-t-2 border-dashed border-gray-300 dark:border-gray-600">
              <h4 className="font-medium mb-3">Social Links</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/emanuelle_condosele/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center 
                    hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors border-2 border-black/20 dark:border-white/20"
                >
                  <Instagram className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/livia-carrera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center 
                    hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors border-2 border-black/20 dark:border-white/20"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                </a>

                <a
                  href="https://github.com/Lixipluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center 
                    hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors border-2 border-black/20 dark:border-white/20"
                >
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.76c-1.1-.76.09-.75.09-.75a2.52 2.52 0 011.84 1.24 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.66-.3-5.47-1.33-5.47-5.9a4.6 4.6 0 011.22-3.2 4.3 4.3 0 01.12-3.15s1-.31 3.3 1.2a11.4 11.4 0 016 0c2.3-1.51 3.3-1.2 3.3-1.2a4.3 4.3 0 01.12 3.15 4.6 4.6 0 011.22 3.2c0 4.58-2.81 5.6-5.49 5.9a2.83 2.83 0 01.81 2.2v3.26c0 .32.22.69.83.58A12 12 0 0012 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="space-y-4">
            <h3 className="font-medium uppercase">Profile</h3>
            <p>
              Results-driven Application Security Engineer with a proven track record in securing software systems and mitigating vulnerabilities. Skilled in secure coding, threat modeling, and advanced security assessments. Passionate about contributing to safe, scalable, and efficient applications.
            </p>

            {/* Technical Skills */}
            <h3 className="font-medium uppercase mt-6">Technical Skills</h3>
            <div className="space-y-2">
              <p>
                <strong>Cybersecurity & Pentesting</strong> – Vulnerability assessment, exploit development, and security research.
              </p>
              <p>
                <strong>Blockchain Security & Smart Contract Auditing</strong> – Analyzing and securing decentralized applications.
              </p>
              <p>
                <strong>Security Tools</strong> – Proficient with Burp Suite, Nmap, Wireshark, Docker, and Tenable.io.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 pt-6">
            <h3 className="text-xl font-medium mb-2">Experience Timeline</h3>

            <div className="space-y-4">
              {/* Entry */}
              {[
                {
                  title: "Bug Bounter & Independent Security Researcher",
                  period: "Nov 2024 – Present | Remote",
                  desc: "Reports vulnerabilities in web applications, APIs, and smart contracts via Bugcrowd and HackerOne. Develops exploits and proof-of-concepts to validate critical security flaws."
                },
                {
                  title: "Jr Cybersecurity Analyst, Pagbank",
                  period: "Oct 2023 – Jun 2024 | SP, Brazil – Remote",
                  desc: "Conducted security assessments and improved vulnerability mitigation processes. Automated risk detection and collaborated on the implementation of security best practices."
                },
                {
                  title: "IT Intern, SiDi (Samsung R&D Partner)",
                  period: "Jan 2023 – Jul 2023 | SP, Brazil – Remote",
                  desc: "Performed security analysis on Android applications. Built and optimized automation scripts for vulnerability testing and report generation."
                }
              ].map((exp, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1 bg-blue-500 relative">
                    <div className="absolute top-0 -left-1.5 w-3 h-3 bg-blue-500 border border-black/20"></div>
                    {idx === 2 && (
                      <div className="absolute bottom-0 -left-1.5 w-3 h-3 bg-blue-500 border border-black/20"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{exp.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    <p className="mt-1">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
