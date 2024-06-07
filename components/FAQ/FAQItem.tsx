import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="flex h-full w-full items-start justify-center gap-6 rounded-xl bg-white p-6 py-8 shadow-lg transition-transform duration-700 ease-in-out hover:scale-[1.15]">
      <div className="text-4xl text-primary">
        <FaQuestionCircle />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 text-start">
        <p className="text-xl font-bold">{question}</p>
        <p className="text-lg text-neutral-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
