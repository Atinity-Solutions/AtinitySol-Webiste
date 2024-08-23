"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data";

import { AlignJustify } from "lucide-react";

import Link from "next/link";

export function MobileNavbar() {
  return (
    <div className="lg:hidden fixed top-16 flex justify-end right-10 z-20">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="absolute top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl">
                {navItems.map((navItems) => (
                  <div key={navItems.id}>
                    <Link href={navItems.link}>{navItems.name}</Link>
                  </div>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
