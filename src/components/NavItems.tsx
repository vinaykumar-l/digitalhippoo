"use client";

import { PRODUCTS_CATEGORIES } from "@/config";
import { ReactNode, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = (): ReactNode => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
 
  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(navRef,()=>setActiveIndex(null))

  return (
    <div className="flex gap-4 h-full " ref={navRef}>
      {PRODUCTS_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOPen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOPen}
            isAnyOpen={isAnyOpen}
            key={category.value}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
