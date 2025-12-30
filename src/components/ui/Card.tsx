'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'bg-white rounded-lg p-6 border border-gray-100 shadow-sm transition-colors',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
