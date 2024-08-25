"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
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

function getDropdownItems<T>(ids: number[], items: T[]): T[] {
  return ids
    .map((id) => items.find((item) => (item as any).id === id))
    .filter((item) => item !== undefined) as T[];
}

export function Navigation({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "hidden lg:block fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((navItem: NavItem) => (
          <div key={navItem.id}>
            <Link href={navItem.link}>
              <MenuItem
                setActive={setActive}
                active={active}
                item={navItem.title}
              >
                {navItem.dropdown && (
                  <div className="text-sm">
                    {navItem.title === "Projects" && (
                      <div className="grid grid-cols-2 gap-10 p-4">
                        {getDropdownItems(navItem.dropdown, portfolio).map(
                          (portfolio: Project) => (
                            <div key={portfolio.id}>
                              <ProductItem
                                title={portfolio.title}
                                href={portfolio.link}
                                src={portfolio.img}
                                description={portfolio.des}
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {navItem.title === "Services" && (
                      <div className="flex flex-col space-y-5 text-sm">
                        {getDropdownItems(navItem.dropdown, services).map(
                          (service: Service) => (
                            <div key={service.id}>
                              <HoveredLink href={service.link}>
                                {service.title}
                              </HoveredLink>
                            </div>
                          )
                        )}
                      </div>
                    )}
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
