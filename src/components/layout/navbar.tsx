"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
           <Image src="/logo.png" className="w-full" alt="Skill Bridge" width={40} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-600 hover:text-violet-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tutors"
              className="text-sm font-semibold text-gray-600 hover:text-violet-600 transition-colors"
            >
              Tutors
            </Link>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-gray-600 hover:text-violet-600 transition-colors"
            >
              How it Works
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              className="text-sm font-semibold text-gray-600 hover:text-violet-600 hover:bg-violet-50"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/tutors">Find a Tutor →</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-sm font-semibold text-gray-600 hover:text-violet-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/tutors"
                className="block text-sm font-semibold text-gray-600 hover:text-violet-600"
                onClick={() => setIsOpen(false)}
              >
                Tutors
              </Link>
              <a
                href="#how-it-works"
                className="block text-sm font-semibold text-gray-600 hover:text-violet-600"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </a>
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <Button
                  asChild
                  variant="outline"
                  className="w-full font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/tutors">Find a Tutor →</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
