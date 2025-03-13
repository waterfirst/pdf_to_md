"use client";

import React from "react";

type HeaderProps = {
  currentStep?: "upload" | "analyze" | "result";
  isInitialUpload?: boolean;
  onReset?: () => void;
};
export default function Header({isInitialUpload = false, onReset }: HeaderProps) {
  return (
    <header
      className={`py-6 px-6 flex select-none ${
        isInitialUpload ? "justify-center" : "justify-between items-center"
      }`}
    >
      {!isInitialUpload && (
        <div className="flex-1">
          {onReset && (
            <button
              onClick={onReset}
              className="px-2 py-2 bg-white/20 hover:bg-gray-200 rounded-2xl text-sm transition-colors flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              return
            </button>
          )}
        </div>
      )}
      <h1 className={`text-2xl font-bold ${!isInitialUpload && "text-center"}`}>PDF to Markdown</h1>
      {!isInitialUpload && <div className="flex-1" />}
    </header>
  );
}
