import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 px-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="p-4 text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We aim to respond to all inquiries within 1-2 business days. For urgent matters related to orders or product questions, please specify "urgent" in your subject line.',
    },
    {
      question: 'How can I suggest a celebrity look to feature?',
      answer: 'We welcome style suggestions! You can submit your ideas through our social media channels or email us at style@example.com with detailed references.',
    },
    {
      question: 'Do you offer styling consultations?',
      answer: 'Yes! We offer both virtual and in-person styling consultations. Book a session through our scheduling portal to get personalized fashion advice.',
    },
    {
      question: 'Can I return items purchased through your affiliate links?',
      answer: 'Return policies are determined by individual retailers. We recommend checking the specific store\'s return policy before making a purchase.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'For our curated collections and merchandise, we currently ship to select countries. Check our shipping page for the full list of supported regions.',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;