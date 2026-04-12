export interface MenuItem {
  id: string;
  nameTh: string;
  nameEn: string;
  description?: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  slug: string;
  name: string;
  nameTh: string;
  subtitle?: string;
  icon: string;
  carouselImages: string[];
  items: MenuItem[];
}

// Image path helper: /images/{slug}/{itemIndex+1}.webp
export function itemImagePath(slug: string, index: number): string {
  return `/images/${slug}/${index + 1}.webp`;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizer",
    slug: "appetizer",
    name: "Appetizer",
    nameTh: "อาหารว่าง",
    icon: "🍢",
    carouselImages: [
      "/images/appetizer/1.webp",
      "/images/appetizer/2.webp",
      "/images/appetizer/3.webp",
    ],
    items: [
      { id: "a1", nameTh: "ปอเปี๊ยะทอด", nameEn: "Spring Rolls", description: "Chicken or Vegetable Spring rolls", price: 27 },
      { id: "a2", nameTh: "ลูกชิ้นปิ้ง", nameEn: "Grill Beef Balls", price: 35.5 },
      { id: "a3", nameTh: "ไก่สะเต๊ะ", nameEn: "Chicken Satay", price: 27 },
      { id: "a4", nameTh: "ไก่ทอด", nameEn: "Fried Chicken", price: 28 },
      { id: "a5", nameTh: "เกี๊ยวทอด", nameEn: "Fried Chinese chive Dumpling", price: 70.75 },
      { id: "a6", nameTh: "กุ้งชุบแป้งทอด", nameEn: "Fried Shrimp with bread crumbs", price: 75 },
    ],
  },
  {
    id: "maincourse",
    slug: "maincourse",
    name: "Thai menu",
    nameTh: "อาหารจานหลัก",
    subtitle: "MainCourse",
    icon: "🍽️",
    carouselImages: [
      "/images/maincourse/1.webp",
      "/images/maincourse/2.webp",
      "/images/maincourse/3.webp",
      "/images/maincourse/4.webp",
      "/images/maincourse/5.webp",
      "/images/maincourse/6.webp",
      "/images/maincourse/7.webp",
      "/images/maincourse/8.webp",
    ],
    items: [
      { id: "m1", nameTh: "ผัดไทย", nameEn: "Pad Thai", price: 65 },
      { id: "m2", nameTh: "แกงเขียวหวาน", nameEn: "Green Curry", price: 75 },
      { id: "m3", nameTh: "แกงแดง", nameEn: "Red Curry", price: 75 },
      { id: "m4", nameTh: "แกงมัสมั่น", nameEn: "Massaman Curry", price: 80 },
      { id: "m5", nameTh: "ผัดกะเพรา", nameEn: "Basil Stir-fry", price: 60 },
      { id: "m6", nameTh: "ผัดเปรี้ยวหวาน", nameEn: "Sweet & Sour", price: 65 },
      { id: "m7", nameTh: "ไข่เจียว", nameEn: "Thai Omelette", price: 45 },
      { id: "m8", nameTh: "ผัดเม็ดมะม่วง", nameEn: "Cashew Nut Stir-fry", price: 70 },
    ],
  },
  {
    id: "noodle",
    slug: "noodle",
    name: "Thai menu",
    nameTh: "อาหารประเภทเส้น",
    subtitle: "Noodle",
    icon: "🍜",
    carouselImages: [
      "/images/noodle/1.webp",
      "/images/noodle/2.webp",
    ],
    items: [
      { id: "n1", nameTh: "ก๋วยเตี๋ยวเรือ", nameEn: "Boat Noodle", price: 55 },
      { id: "n2", nameTh: "บะหมี่เกี้ยว", nameEn: "Wonton Noodle", price: 60 },
      { id: "n3", nameTh: "ก๋วยเตี๋ยวต้มยำ", nameEn: "Tom Yum Noodle", price: 65 },
      { id: "n4", nameTh: "ผัดซีอิ๊ว", nameEn: "Pad See Ew", price: 60 },
      { id: "n5", nameTh: "ผัดขี้เมา", nameEn: "Drunken Noodle", price: 65 },
      { id: "n6", nameTh: "ผัดวุ้นเส้น", nameEn: "Glass Noodle Stir-fry", price: 55 },
    ],
  },
  {
    id: "esarn",
    slug: "esarn",
    name: "Thai menu",
    nameTh: "อาหารอีสาน",
    subtitle: "E-sarn",
    icon: "🥗",
    carouselImages: [
      "/images/esarn/1.webp",
      "/images/esarn/2.webp",
      "/images/esarn/3.webp",
      "/images/esarn/4.webp",
    ],
    items: [
      { id: "e1", nameTh: "ส้มตำไทย", nameEn: "Som Tum", price: 50 },
      { id: "e2", nameTh: "ลาบหมู", nameEn: "Larb Moo", price: 60 },
      { id: "e3", nameTh: "น้ำตกหมู", nameEn: "Nam Tok Pork", price: 60 },
      { id: "e4", nameTh: "ไก่ย่าง", nameEn: "Grilled Chicken", price: 65 },
      { id: "e5", nameTh: "ข้าวเหนียว", nameEn: "Sticky Rice", price: 20 },
      { id: "e6", nameTh: "คอหมูย่าง", nameEn: "Grilled Pork Neck", price: 70 },
    ],
  },
  {
    id: "dessert",
    slug: "dessert",
    name: "Dessert",
    nameTh: "ของหวาน",
    icon: "🍮",
    carouselImages: [
      "/images/dessert/1.webp",
    ],
    items: [
      { id: "d1", nameTh: "ข้าวเหนียวมะม่วง", nameEn: "Mango Sticky Rice", price: 55 },
      { id: "d2", nameTh: "วุ้นกะทิ", nameEn: "Thai Coconut Pudding", price: 35 },
      { id: "d3", nameTh: "กล้วยบวชชี", nameEn: "Banana in Coconut Milk", price: 35 },
      { id: "d4", nameTh: "เผือกบวชชี", nameEn: "Taro in Coconut Milk", price: 35 },
      { id: "d5", nameTh: "ไอศครีมกะทิ", nameEn: "Coconut Ice Cream", price: 45 },
    ],
  },
  {
    id: "drink",
    slug: "drink",
    name: "Drink",
    nameTh: "เครื่องดื่ม",
    icon: "🧋",
    carouselImages: [
      "/images/drink/1.webp",
      "/images/drink/2.webp",
    ],
    items: [
      { id: "dr1", nameTh: "ชาไทย", nameEn: "Thai Iced Tea", price: 35 },
      { id: "dr2", nameTh: "กาแฟไทย", nameEn: "Thai Iced Coffee", price: 35 },
      { id: "dr3", nameTh: "น้ำลิ้นจี่", nameEn: "Lychee Juice", price: 30 },
      { id: "dr4", nameTh: "น้ำมะพร้าว", nameEn: "Coconut Water", price: 40 },
      { id: "dr5", nameTh: "น้ำโซดา", nameEn: "Sparkling Water", price: 25 },
      { id: "dr6", nameTh: "น้ำอัดลม", nameEn: "Soft Drinks", price: 25 },
    ],
  },
  {
    id: "set",
    slug: "set",
    name: "Set Menu",
    nameTh: "เซ็ตเมนู",
    icon: "📋",
    carouselImages: [
      "/images/set/1.webp",
    ],
    items: [
      { id: "s1", nameTh: "เซ็ต A", nameEn: "Set A – Pad Thai + Drink", price: 90 },
      { id: "s2", nameTh: "เซ็ต B", nameEn: "Set B – Green Curry + Rice + Drink", price: 105 },
      { id: "s3", nameTh: "เซ็ต C", nameEn: "Set C – Basil Stir-fry + Rice + Drink", price: 95 },
      { id: "s4", nameTh: "เซ็ตครอบครัว", nameEn: "Family Set (4 persons)", price: 350 },
    ],
  },
];
