import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md relative">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full py-3 px-4 rounded-l pr-24 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className={`absolute right-0 top-0 h-full rounded-r px-4 font-medium transition-all ${
            status === 'loading' 
              ? 'bg-amber-600 cursor-wait' 
              : 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700'
          }`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : (
            <span>Subscribe</span>
          )}
        </button>
      </div>

      {message && (
        <p className={`mt-2 text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'} transition-opacity duration-300`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;