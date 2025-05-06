import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const subjects = [
    'Style Inquiry',
    'Featured Item Question',
    'Celebrity Style Suggestion',
    'Partnership Inquiry',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://server-gussy.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="bg-white text-black py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send Us A Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-3 px-4 rounded bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                required
              >
                <option value="">Select a subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full py-3 px-4 rounded bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                required
              />
            </div>

            <button
  type="submit"
  disabled={status === 'loading'}
  className={`w-full py-3 px-6 rounded font-medium flex items-center justify-center transition-all
    ${
      status === 'loading'
        ? 'bg-amber-600 cursor-wait'
        : 'bg-gradient-to-r from-[#b87d2e] via-[#f1d3a0] to-[#b87d2e] hover:from-amber-600 hover:via-yellow-500 hover:to-amber-600'
    }`}
>

              {status === 'loading' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;