import { menuCategories } from "@/lib/menuData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CategoryTabs from "@/components/CategoryTabs";
import ImageCarousel from "@/components/ImageCarousel";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return menuCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const cat = menuCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name}${cat.subtitle ? ` (${cat.subtitle})` : ""} | Tuk-Tuk Restaurant`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = menuCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">

      {/* 1. Back button + ชื่อร้าน */}
      <div className="bg-[#f47920] px-4 pt-10 pb-3 flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/35 active:bg-white/50 text-white font-bold rounded-xl px-4 py-2 text-sm transition-colors flex-shrink-0 backdrop-blur-sm"
        >
          <ChevronLeft size={16} />
          Back
        </Link>
        <div className="flex-1 text-center pr-16">
          <p className="font-bold text-base leading-tight text-white drop-shadow-sm">
            Tuk-Tuk Restaurant
          </p>
          <p className="text-[11px] text-white/75 tracking-[0.2em] uppercase">
            Thai Street Food
          </p>
        </div>
      </div>

      {/* 2. Category tabs */}
      <CategoryTabs currentSlug={cat.slug} />

      {/* 3. Carousel รูปเต็มจอ */}
      <ImageCarousel images={cat.carouselImages} categoryName={cat.name} />

    </main>
  );
}
