import React from 'react';

const CloudIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.1-2.9-2.4-5.2-5.3-5.2-2.7 0-4.9 1.9-5.3 4.5-.1.3-.4.4-.7.4-2.2 0-4 1.8-4 4s1.8 4 4 4h11.4c2 0 3.6-1.6 3.6-3.6 0-1.9-1.6-3.6-3.6-3.6z" />
    </svg>
);

export default CloudIcon;
