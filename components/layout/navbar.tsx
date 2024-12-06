'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Wallet } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Wallet className="h-6 w-6" />
          <span className="font-bold text-xl">MaxiFolio</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <ConnectButton />
          <Button variant="default" asChild>
            <Link href="/dashboard">Launch App</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}