// NewsletterForm.tsx
'use client';

import React from 'react';

const NewsletterForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full border-b-2 border-gray-300 pb-3 text-gray-800 placeholder-gray-500 focus:border-gray-800 focus:outline-none transition-colors duration-200"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-block border-b-2 border-gray-800 pb-2 text-gray-800 hover:text-gray-600 hover:border-gray-600 transition-colors duration-200"
      >
        SUBSCRIBE
      </button>
    </form>
  );
};

// Footer.tsx