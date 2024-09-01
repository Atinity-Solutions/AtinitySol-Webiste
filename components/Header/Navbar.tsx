"use client";

import React, { useState, useCallback } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { navItems, services, portfolio } from "@/data";

type NavItem = {
  id: number;
  title: string;
  link: string;
  dropdown?: number[];
};

type Service = {
  id: number;
  title: string;
  link: string;
};

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
};

function getDropdownItems<T extends { id: number }>(
  ids: number[],
  items: T[]
): T[] {
  return ids
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is T => item !== undefined);
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Memoize the setActive function to prevent unnecessary re-renders
  const handleSetActive = useCallback((item: string | null) => {
    setActive(item);
  }, []);

  return (
    <nav
      className={cn(
        "hidden lg:block fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
      aria-label="Main Navigation"
    >
      <Menu setActive={handleSetActive}>
        {navItems.map((navItem) => (
          <MenuItem
            key={navItem.id}
            setActive={handleSetActive}
            active={active}
            item={navItem.title}
            link={navItem.link}
          >
            {navItem.dropdown && (
              <div className="text-sm">
                {navItem.title === "Projects" && (
                  <div className="grid grid-cols-2 gap-10 p-4">
                    {getDropdownItems(navItem.dropdown, portfolio).map(
                      (project) => (
                        <ProductItem
                          key={project.id}
                          title={project.title}
                          href={project.link}
                          src={project.img}
                          description={project.des}
                        />
                      )
                    )}
                  </div>
                )}
                {navItem.title === "Services" && (
                  <div className="flex flex-col space-y-5 text-sm">
                    {getDropdownItems(navItem.dropdown, services).map(
                      (service) => (
                        <HoveredLink
                          key={service.id}
                          href={service.link}
                          className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                          aria-label={service.title} // Accessibility: ARIA label
                        >
                          {service.title}
                        </HoveredLink>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}
