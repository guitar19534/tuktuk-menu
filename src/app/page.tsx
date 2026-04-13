import Link from "next/link";
import { menuCategories } from "@/lib/menuData";
import {
  Utensils, Soup, Beef, Salad, IceCreamBowl, GlassWater, BookOpen, UtensilsCrossed,
} from "lucide-react";

const slugIconMap: Record<string, React.ReactNode> = {
  appetizer:         <Utensils        size={24} />,
  maincourse:        <Beef            size={24} />,
  noodle:            <Soup            size={24} />,
  esarn:             <Salad           size={24} />,
  "single-dish-meal":<UtensilsCrossed size={24} />,
  set:               <BookOpen        size={24} />,
  dessert:           <IceCreamBowl    size={24} />,
  drink:             <GlassWater      size={24} />,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fff8f3]">

      {/* Hero */}
      <div className="relative bg-[#f47920] pt-16 pb-12 px-6 text-center overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
        <div className="absolute -bottom-14 -left-10 w-56 h-56 bg-white/10 rounded-full" />

        <p className="relative text-white/80 text-sm tracking-[0.25em] uppercase mb-2">
          Welcome to
        </p>
        <h1 className="relative text-4xl font-bold text-white drop-shadow-sm leading-tight">
          Tuk-Tuk
          <br />Restaurant
        </h1>
        <div className="relative mt-3 inline-block bg-white/20 rounded-full px-5 py-1">
          <p className="text-white text-sm tracking-widest">THAI STREET FOOD</p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="bg-[#f47920]">
        <svg viewBox="0 0 375 32" className="w-full block" preserveAspectRatio="none" height="32">
          <path d="M0,0 C120,32 250,0 375,24 L375,32 L0,32 Z" fill="#fff8f3" />
        </svg>
      </div>

      {/* Section label */}
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-400 text-sm tracking-widest uppercase">Our Menu</p>
      </div>

      {/* Category Cards */}
      <div className="px-4 pb-16 flex flex-col gap-3">
        {menuCategories.map((cat) => (
          <Link key={cat.id} href={`/menu/${cat.slug}`} className="block">
            <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-orange-100 active:scale-[0.98] transition-transform">
              {/* icon circle */}
              <div className="w-12 h-12 rounded-xl bg-[#f47920] flex items-center justify-center flex-shrink-0 shadow-md text-white">
                {slugIconMap[cat.slug]}
              </div>
              {/* label */}
              <div className="flex-1">
                <p className="text-gray-800 text-lg font-bold leading-tight">
                  {cat.name}
                  {cat.subtitle && (
                    <span className="text-[#f47920]"> ({cat.subtitle})</span>
                  )}
                </p>
              </div>
              {/* arrow */}
              <div className="text-[#f47920] opacity-60">›</div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
