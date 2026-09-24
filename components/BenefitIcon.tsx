const paths: React.ReactNode[] = [
  // tooth
  <path key="tooth" d="M12 3c-3.5 0-6 1.7-6 4.6 0 2.6 1 3.7 1.4 6.9.3 2.4.9 4.5 2 4.5 1.3 0 1.4-3.4 2.6-3.4S13.3 20 14.6 20c1.1 0 1.7-2.1 2-4.5.4-3.2 1.4-4.3 1.4-6.9C18 4.7 15.5 3 12 3z" />,
  // shield
  <path key="shield" d="M12 3l7 3v5c0 4.5-2.9 8.3-7 9.5-4.1-1.2-7-5-7-9.5V6l7-3z" />,
  // clock
  <g key="clock"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></g>,
  // sparkle
  <path key="sparkle" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
  // heart
  <path key="heart" d="M12 20s-7-4.4-9.3-8.8C1.3 8 3 5 6.2 5c1.8 0 3.3 1 3.8 2.4C10.5 6 12 5 13.8 5 17 5 18.7 8 17.3 11.2 15 15.6 12 20 12 20z" />,
  // check badge
  <g key="badge"><circle cx="12" cy="12" r="8" /><path d="M8.5 12.5l2.2 2.2 4.8-4.8" /></g>,
];

export function BenefitIcon({ index }: { index: number }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[index % paths.length]}
    </svg>
  );
}
