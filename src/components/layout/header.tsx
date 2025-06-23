"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Create", href: "/post/create" },
    { name: "Profile", href: "/profile" },
    { name: "Search", href: "/search" },
  ];

  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link className="font-extrabold" href="/">
            Next JS Blog
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "tex-sm font-medium transition-colors hover:text-primary"
                )}
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {/* Placeholder for Search */}
          </div>

          <div className="flex items-center gap-2">
            <Button variant={'ghost'} asChild>
              <Link href="/auth">
                LogIn
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
}
export default Header;
