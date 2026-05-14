export function ScreenPlaceholder() {
  return (
    <div className="w-full md:w-64 aspect-[9/16] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
      <svg
        className="w-12 h-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}
