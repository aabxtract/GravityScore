import type { SVGProps } from 'react';

export function GravityScoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="3" fill="url(#grad)" />
      <path d="M12 16.5A4.5 4.5 0 1 0 12 7.5" stroke="hsl(var(--foreground) / 0.5)" />
      <path d="M12 18.5A6.5 6.5 0 1 0 12 5.5" stroke="hsl(var(--foreground) / 0.3)" />
      <path d="M12 20.5A8.5 8.5 0 1 0 12 3.5" stroke="hsl(var(--foreground) / 0.1)" />
    </svg>
  );
}
