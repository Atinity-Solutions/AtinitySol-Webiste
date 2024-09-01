"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent as RawSheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { navItems } from "@/data";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const SheetContent = motion(RawSheetContent);

export function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleNavItemClick = useCallback((id: number) => {
    setActiveItem(id);
    setOpen(false); // Close the navbar on item click
  }, []);

  return (
    <div className="lg:hidden fixed top-16 right-10 z-20">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger aria-label="Open navigation menu">
          <AlignJustify className="text-white h-8 w-8" />
        </SheetTrigger>
        <SheetContent
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }} // Adjusted timing for smoothness
        >
          <SheetHeader className="border-b-0">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-full gap-8 text-4xl">
            {navItems.map((navItem, index) => (
              <motion.div
                key={navItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              >
                <Link
                  href={navItem.link}
                  className={`text-white ${
                    activeItem === navItem.id ? "font-bold" : ""
                  } no-underline`} // No underline
                  onClick={() => handleNavItemClick(navItem.id)}
                  aria-label={navItem.title} // Accessibility: Add ARIA label for links
                >
                  {navItem.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
