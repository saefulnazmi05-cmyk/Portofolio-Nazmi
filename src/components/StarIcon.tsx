interface StarIconProps {
  className?: string;
  size?: number;
}

export function StarIcon({ className = "w-5 h-5 text-[#E31B35]", size = 20 }: StarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0C12 7.5 16.5 12 24 12C16.5 12 12 16.5 12 24C12 16.5 7.5 12 0 12C7.5 12 12 7.5 12 0Z" />
    </svg>
  );
}
