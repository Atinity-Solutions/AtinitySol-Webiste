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
              >
                {navItems.Projects && (
                  <div className="ftext-sm grid grid-cols-2 gap-10 p-4">
                    {navItems.Projects.map((projects) => (
                      <div key={projects.id}>
                        <ProductItem
                          title={projects.title}
                          href={projects.link}
                          src={projects.img}
                          description={projects.des}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {navItems.Services && (
                  <div className="flex flex-col space-y-5 text-sm">
                    {navItems.Services.map((services) => (
                      <div key={services.id}>
                        <HoveredLink href={services.link}>
                          {services.name}
                        </HoveredLink>
                      </div>
                    ))}
                  </div>
                )}
              </MenuItem>
            </Link>
          </div>
        ))}
      </Menu>
    </div>
  );
}
