# คู่มือแก้ไขเมนูและรูปภาพ — Tuk-Tuk Restaurant

## โครงสร้างโฟลเดอร์รูปภาพ

รูปทั้งหมดอยู่ใน `public/images/` แบ่งตามหมวดหมู่

```
public/images/
├── appetizer/     ← Appetizer
├── maincourse/    ← Thai menu (MainCourse)
├── noodle/        ← Thai menu (Noodle)
├── esarn/         ← Thai menu (E-sarn)
├── dessert/       ← Dessert
├── drink/         ← Drink
└── set/           ← Set Menu
```

---

## เพิ่ม / เปลี่ยนรูปใน Carousel

**กฎการตั้งชื่อไฟล์** — ตัวเลขเรียงลำดับ นามสกุล `.webp` เท่านั้น

```
1.webp, 2.webp, 3.webp, ...
```

**ตัวอย่าง** — เพิ่มรูป Appetizer อีก 2 รูป:

1. วางไฟล์ลงในโฟลเดอร์
```
public/images/appetizer/4.webp
public/images/appetizer/5.webp
```

2. เปิดไฟล์ `src/lib/menuData.ts` หาหมวด `appetizer` แล้วเพิ่มใน `carouselImages`

```ts
carouselImages: [
  "/images/appetizer/1.webp",
  "/images/appetizer/2.webp",
  "/images/appetizer/3.webp",
  "/images/appetizer/4.webp",  // ← เพิ่มตรงนี้
  "/images/appetizer/5.webp",  // ← เพิ่มตรงนี้
],
```

---

## แก้ชื่อเมนูและราคา

เปิดไฟล์ `src/lib/menuData.ts` — ทุกอย่างอยู่ที่นี่

```ts
items: [
  {
    id: "a1",
    nameTh: "ปอเปี๊ยะทอด",       // ← ชื่อภาษาไทย
    nameEn: "Spring Rolls",       // ← ชื่อภาษาอังกฤษ
    description: "Chicken or Vegetable Spring rolls",  // ← คำอธิบาย (ไม่มีก็ได้)
    price: 27,                    // ← ราคา (AED)
  },
```

---

## เพิ่มหมวดหมู่ใหม่

1. สร้างโฟลเดอร์รูปภาพ เช่น `public/images/soup/` แล้วใส่รูป `1.webp`, `2.webp`, ...

2. เปิด `src/lib/menuData.ts` เพิ่ม object ใหม่ใน array `menuCategories`

```ts
{
  id: "soup",
  slug: "soup",
  name: "Soup",
  nameTh: "ซุป",
  icon: "🍲",
  carouselImages: [
    "/images/soup/1.webp",
    "/images/soup/2.webp",
  ],
  items: [
    { id: "sp1", nameTh: "ต้มยำกุ้ง", nameEn: "Tom Yum Goong", price: 75 },
    { id: "sp2", nameTh: "ต้มข่าไก่", nameEn: "Tom Kha Gai", price: 70 },
  ],
},
```

---

## อัพโหลดขึ้นเว็บหลังแก้ไข

```bash
git add -A
git commit -m "update menu"
git push
```

Vercel จะ deploy ให้อัตโนมัติภายใน ~2 นาที

เว็บไซต์: **https://tuktuk-menu.vercel.app**
