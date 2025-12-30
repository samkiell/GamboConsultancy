import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'accent' | 'primary';
  id?: string;
}

export function Section({ children, className, background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    accent: 'bg-brand-accent',
    primary: 'bg-brand-primary text-white',
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24',
        backgrounds[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
