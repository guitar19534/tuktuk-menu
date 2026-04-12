"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { menuCategories } from "@/lib/menuData";

interface CategoryTabsProps {
  currentSlug: string;
}

export default function CategoryTabs({ currentSlug }: CategoryTabsProps) {
  const activeRef = useRef<HTMLAnchorElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const tab = activeRef.current;
      const container = scrollRef.current;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      const containerWidth = container.offsetWidth;
      // เลื่อนให้ active tab อยู่กึ่งกลาง
      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [currentSlug]);

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-2 px-3 py-2.5">
        {menuCategories.map((cat) => {
          const isActive = cat.slug === currentSlug;
          return (
            <Link
              key={cat.id}
              href={`/menu/${cat.slug}`}
              ref={isActive ? activeRef : null}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? "bg-[#f47920] text-white shadow-md shadow-orange-200"
                  : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-[#f47920]"
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>
                {cat.name}
                {cat.subtitle ? ` (${cat.subtitle})` : ""}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
