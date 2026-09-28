"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          YOUR BRAND
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/collections/all">
            Shop
          </Link>

          <Link href="/pages/about">
            About
          </Link>

          <Link href="/pages/support">
            Support
          </Link>

          <Link href="/pages/professionals">
            Professionals
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/search">
            Search
          </Link>

          <Link href="/cart">
            Cart
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t bg-white p-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            <Link href="/collections/all">
              Shop
            </Link>

            <Link href="/pages/about">
              About
            </Link>

            <Link href="/pages/support">
              Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}