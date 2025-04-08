import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, Loader2,
  Instagram, Linkedin
} from 'lucide-react';
import { toast } from "sonner";

const ContactWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="mb-6">CONTACT.TXT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium mb-1">
                    {field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Subject"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-none focus:outline-none focus:border-blue-500"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-none focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="pixel-button w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info + Socials */}
          <div className="space-y-6">
            <div className="border-2 border-black/20 dark:border-white/20 p-4">
              <h3 className="text-xl font-medium mb-4">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out to me for any inquiries, project discussions, or just to say hello!
                I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-4">
              {/* Contact Info Cards */}
              <div className="flex items-center gap-3 border-2 border-black/20 dark:border-white/20 p-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:contact@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    lixpluv@proton.me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-2 border-black/20 dark:border-white/20 p-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +55 4002-8922
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-2 border-black/20 dark:border-white/20 p-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 flex items-center justify-center border border-black/10 dark:border-white/10">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p>Brazil</p>
                </div>
              </div>
            </div>

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
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
