"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navItems } from "@/data";

export function Navigation({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "hidden lg:block fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((navItems) => (
          <div key={navItems.id}>
            <Link href={navItems.link}>
              <MenuItem
                setActive={setActive}
                active={active}
                item={navItems.name}
                navItems={navItems}
              />
            </Link>
          </div>
        ))}
      </Menu>
    </div>
  );
}
