"use client";

import { AI_MODELS, TargetAI } from "@/lib/promptTemplates";

interface TargetSelectorProps {
  selected: TargetAI;
  onSelect: (target: TargetAI) => void;
}

export default function TargetSelector({
  selected,
  onSelect,
}: TargetSelectorProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {AI_MODELS.map((model) => (
          <button
            key={model.id}
            onClick={() => onSelect(model.id)}
            className={`group relative flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 active:scale-95 ${
              selected === model.id
                ? "border-indigo-500 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 shadow-lg shadow-indigo-500/20"
                : "border-gray-200/60 dark:border-gray-700/60 active:border-indigo-300 dark:active:border-indigo-600 bg-white/50 dark:bg-gray-800/50"
            }`}
          >
            {selected === model.id && (
              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            <span className={`text-3xl sm:text-4xl transition-transform duration-200 ${
              selected === model.id ? "scale-110" : ""
            }`}>
              {model.icon}
            </span>
            <div className="text-center">
              <span className={`font-semibold text-xs sm:text-sm block ${
                selected === model.id
                  ? "text-indigo-700 dark:text-indigo-300"
                  : "text-gray-800 dark:text-gray-200"
              }`}>
                {model.name}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 block leading-tight">
                {model.description}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
