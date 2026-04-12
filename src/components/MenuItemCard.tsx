"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuItem } from "@/lib/menuData";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  imagePath: string;
  isLast: boolean;
}

export default function MenuItemCard({ item, index, imagePath, isLast }: MenuItemCardProps) {
  const [imgError, setImgError] = useState(false);
  const itemNo = String(index + 1).padStart(2, "0");

  return (
    <>
      <div className="flex items-center gap-3 py-3">
        {/* Left: number + text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-[#f47920] font-bold text-sm">#{itemNo}</span>
            <span className="text-gray-800 font-bold text-base leading-tight">
              {item.nameTh}
            </span>
          </div>
          {item.description ? (
            <p className="text-gray-500 text-xs mt-0.5 leading-snug">
              {item.description}
            </p>
          ) : (
            <p className="text-gray-500 text-xs mt-0.5">{item.nameEn}</p>
          )}
          <p className="text-[#f47920] font-bold text-sm mt-1">
            {item.price % 1 === 0 ? item.price : item.price.toFixed(2)} AED
          </p>
        </div>

        {/* Right: food image */}
        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-[#ffe0c0] relative">
          {!imgError ? (
            <Image
              src={imagePath}
              alt={item.nameEn}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="80px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f47920] to-[#e06810]">
              <span className="text-2xl">🍜</span>
            </div>
          )}
        </div>
      </div>
      {!isLast && <hr className="border-gray-200" />}
    </>
  );
}
