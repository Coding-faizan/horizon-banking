import * as React from 'react';
import { cn } from '@/lib/utils';

interface CoinsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CoinsIcon = ({
  size = 20,
  className,
  ...props
}: CoinsIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      {...props}
    >
      <g clipPath="url(#coins-clip)">
        <path
          d="M13.2814 13.2815C16.1336 12.8996 18.3333 10.4567 18.3333 7.50002C18.3333 4.27836 15.7216 1.66669 12.5 1.66669C9.54328 1.66669 7.10037 3.86641 6.71852 6.71858M13.3333 12.5C13.3333 15.7217 10.7216 18.3334 7.49996 18.3334C4.2783 18.3334 1.66663 15.7217 1.66663 12.5C1.66663 9.27836 4.2783 6.66669 7.49996 6.66669C10.7216 6.66669 13.3333 9.27836 13.3333 12.5Z"
          stroke="currentColor"
          strokeWidth={1.66667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="coins-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
