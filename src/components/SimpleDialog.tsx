"use client";
import { useState } from "react";

const SimpleDialog = ({
  label,
  title,
  content,
}: {
  label: string;
  title: string;
  content: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-800 hover:text-[#b59459] dark:text-gray-300 dark:hover:text-[#b59459]"
      >
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl max-w-md w-full shadow-xl relative">
            <h2 className="text-xl font-semibold text-[#b59459] mb-4">
              {title}
            </h2>
            <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {content}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-4 py-2 bg-[#b59459] text-white rounded hover:bg-[#a57c44]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleDialog;
