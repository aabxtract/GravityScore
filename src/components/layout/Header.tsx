'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Gift, Bot, Star, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GravityScoreIcon } from '@/components/icons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/actions', label: 'Actions', icon: Star },
  { href: '/rewards', label: 'Rewards', icon: Gift },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const NavLink = ({
    href,
    label,
    icon: Icon,
    isMobile = false,
  }: {
    href: string;
    label: string;
    icon: React.ElementType;
    isMobile?: boolean;
  }) => (
    <Link href={href} legacyBehavior passHref>
      <a
        onClick={() => isMobile && setIsSheetOpen(false)}
        className={cn(
          'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
          pathname === href
            ? 'bg-accent/10 text-accent-foreground'
            : 'text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground',
          isMobile ? 'text-lg' : ''
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GravityScoreIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Gravity Score
            </span>
          </Link>
          <nav className="flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <GravityScoreIcon className="h-6 w-6" />
                    <span>Gravity Score</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink key={item.href} {...item} isMobile />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center gap-2">
            <Button>
              <span>Connect Wallet</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
