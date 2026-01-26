'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, MoveLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* 404 Visual */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-brand-primary/10 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100">
            <Search className="w-12 h-12 text-brand-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 max-w-md mx-auto mb-10 leading-relaxed">
        We couldn't find the page you're looking for. It might have been moved, 
        deleted, or the link might be broken.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button variant="primary" size="lg" className="gap-2 group">
            <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            Back to Home
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="lg" 
          className="gap-2"
          onClick={() => window.history.back()}
        >
          <MoveLeft className="w-5 h-5" />
          Go Previous
        </Button>
      </div>

      {/* Quick Links */}
      <div className="mt-16 pt-8 border-t border-gray-100 w-full max-w-lg">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Helpful Links
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/services" className="text-gray-600 hover:text-brand-primary transition-colors text-sm font-medium">
            Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-brand-primary transition-colors text-sm font-medium">
            About Us
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-brand-primary transition-colors text-sm font-medium">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-brand-primary transition-colors text-sm font-medium">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
