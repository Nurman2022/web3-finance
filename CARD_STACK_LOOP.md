# Card Stack Loop Animation 🔄

Komponen animasi card stack dengan pergantian loop otomatis menggunakan Framer Motion, terinspirasi dari GSAP timeline animation.

## 📦 Features

- ✨ **Auto Loop Animation**: Kartu bergantian menghilang dan muncul secara otomatis
- 🎯 **Smooth Transitions**: Animasi halus dengan easing curve
- 🎨 **Multiple Themes**: 4 kartu dengan gradient warna berbeda
- 📍 **Progress Indicator**: Dot navigation untuk melihat kartu aktif
- ⚡ **Clickable Navigation**: Klik dot untuk langsung ke kartu tertentu
- 🔄 **Infinite Loop**: Animasi terus berulang tanpa henti

## 🎬 Cara Kerja Animasi

### Konsep GSAP Timeline
Berdasarkan kode GSAP yang Anda berikan:

```javascript
// Kartu pertama menghilang
tl.to(".item:nth-child(1)", {
  scale: 0,
  opacity: 0,
  x: `-=${offset}`,
  y: `-=${-offset}`,
});

// Kartu lain bergerak maju
tl.to(".item:not(:nth-child(1))", {
  x: `-=${offset}`,
  y: `-=${-offset}`,
  stagger: 0.1,
}, "<");
```

### Implementasi Framer Motion

```javascript
const [activeIndex, setActiveIndex] = useState(0);

// Auto increment setiap 3 detik
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

// Setiap kartu dihitung posisinya relatif terhadap activeIndex
const relativeIndex = (index - activeIndex + cards.length) % cards.length;
const isActive = index === activeIndex;

// Kartu aktif: scale 0, opacity 0
// Kartu lain: bergerak sesuai relativeIndex
animate={{
  x: relativeIndex * offset,
  y: -relativeIndex * offset,
  scale: isActive ? 0 : 1,
  opacity: isActive ? 0 : 1,
  zIndex: cards.length - relativeIndex,
}}
```

## 🎨 Visual Flow

```
Initial State (activeIndex = 0):
┌─────────────────────────────────────┐
│                                     │
│           ┌───────┐  Card 4         │
│       ┌───────┐   │  (z-index: 1)   │
│   ┌───────┐   │   │  Card 3         │
│   │  [1]  │   │   │  (z-index: 2)   │
│   │       │   │   │  Card 2         │
│   └───────┘   │   │  (z-index: 3)   │
│       └───────┘   │  Card 1 (ACTIVE)│
│           └───────┘  (scale: 0)     │
│                                     │
└─────────────────────────────────────┘

After 3 seconds (activeIndex = 1):
┌─────────────────────────────────────┐
│                                     │
│           ┌───────┐  Card 1         │
│       ┌───────┐   │  (reappear)     │
│   ┌───────┐   │   │  Card 4         │
│   │  [2]  │   │   │  (z-index: 2)   │
│   │       │   │   │  Card 3         │
│   └───────┘   │   │  (z-index: 3)   │
│       └───────┘   │  Card 2 (ACTIVE)│
│           └───────┘  (scale: 0)     │
│                                     │
└─────────────────────────────────────┘
```

## 💻 Basic Usage

```jsx
import { CardStackLoop } from "@/components/svg/CardStackLoop";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <CardStackLoop />
    </div>
  );
}
```

## ⚙️ Customization

### 1. Mengubah Durasi Loop

```jsx
// Di dalam CardStackLoop.jsx
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, 3000); // Ubah 3000 ke durasi yang diinginkan (ms)
  
  return () => clearInterval(interval);
}, []);
```

### 2. Mengubah Offset Stack

```jsx
const offset = 60; // Ubah nilai ini untuk spacing yang berbeda
// offset = 40 → tumpukan lebih rapat
// offset = 80 → tumpukan lebih renggang
```

### 3. Mengubah Transition Timing

```jsx
transition={{
  duration: 0.6,        // Durasi total animasi
  ease: [0.23, 1, 0.32, 1], // Cubic bezier easing
  scale: { duration: 0.4 },  // Durasi scale kartu hilang
  opacity: { duration: 0.4 }, // Durasi fade out
}}
```

### 4. Menambahkan Kartu Baru

```jsx
const cards = [
  {
    id: 1,
    gradient: "from-orange-500 to-amber-500",
    title: "Card 1",
    subtitle: "Orange Theme"
  },
  // Tambahkan kartu baru di sini
  {
    id: 5,
    gradient: "from-emerald-500 to-teal-500",
    title: "Card 5",
    subtitle: "Emerald Theme"
  }
];
```

## 🎯 Animation Properties

### Position Animation
- **x**: Bergerak horizontal berdasarkan `relativeIndex * offset`
- **y**: Bergerak vertikal berdasarkan `-relativeIndex * offset` (negatif untuk ke atas)

### State Animation
- **scale**: `0` untuk kartu aktif (menghilang), `1` untuk yang lain
- **opacity**: `0` untuk kartu aktif, `1` untuk yang lain
- **zIndex**: `cards.length - relativeIndex` (kartu paling depan = z-index tertinggi)

## 📊 Comparison: GSAP vs Framer Motion

| Feature | GSAP | Framer Motion |
|---------|------|---------------|
| Timeline | Manual `tl.to()` per step | State-driven auto-recalculation |
| Loop | `repeat: -1` on timeline | `setInterval` + state |
| Stagger | Built-in `stagger: 0.1` | Calculated via `relativeIndex` |
| Performance | Excellent | Excellent |
| React Integration | Need cleanup | Native hooks |

## 🎨 Gradient Presets

```jsx
// Orange-Amber
"from-orange-500 to-amber-500"

// Purple-Pink
"from-purple-500 to-pink-500"

// Blue-Cyan
"from-blue-500 to-cyan-500"

// Violet-Indigo
"from-violet-500 to-indigo-500"

// Emerald-Teal
"from-emerald-500 to-teal-500"

// Red-Orange
"from-red-500 to-orange-500"

// Fuchsia-Pink
"from-fuchsia-500 to-pink-500"

// Sky-Blue
"from-sky-500 to-blue-500"
```

## 🎪 Advanced Examples

### 1. Manual Control dengan Buttons

```jsx
"use client";
import { CardStackLoop } from "@/components/svg/CardStackLoop";
import { useState } from "react";

export default function ManualControl() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div>
      <CardStackLoop activeIndex={activeIndex} />
      
      <div className="flex gap-4 mt-8 justify-center">
        <button 
          onClick={() => setActiveIndex(prev => (prev - 1 + 4) % 4)}
          className="px-6 py-2 bg-white/10 rounded-lg"
        >
          Previous
        </button>
        <button 
          onClick={() => setActiveIndex(prev => (prev + 1) % 4)}
          className="px-6 py-2 bg-white/10 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

### 2. Pause on Hover

Modifikasi component dengan menambahkan pause state:

```jsx
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return; // Jangan increment jika di-pause
  
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, 3000);
  
  return () => clearInterval(interval);
}, [isPaused]);

// Di return JSX
<div 
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {/* Cards */}
</div>
```

### 3. Custom Card Data via Props

```jsx
export function CardStackLoop({ cards: customCards, className }) {
  const defaultCards = [...]; // Default cards
  const cards = customCards || defaultCards;
  
  // Rest of component...
}

// Usage
<CardStackLoop 
  cards={[
    { id: 1, gradient: "from-red-500 to-pink-500", title: "My Card", subtitle: "Custom" },
    // ... more cards
  ]}
/>
```

## 🎭 Easing Curves

### Current: Ease Out Expo
```jsx
ease: [0.23, 1, 0.32, 1]
```

### Alternative Easings

```jsx
// Ease In Out Cubic (lebih smooth)
ease: [0.65, 0, 0.35, 1]

// Ease Out Back (bounce effect)
ease: [0.34, 1.56, 0.64, 1]

// Ease In Out Quart (lebih dramatis)
ease: [0.76, 0, 0.24, 1]

// Spring-like
ease: [0.43, 0.13, 0.23, 0.96]
```

## 📱 Responsive Design

```jsx
<div className={cn(
  "relative w-full h-[500px]",
  "lg:h-[600px]",  // Lebih tinggi di desktop
  "md:h-[450px]",  // Medium di tablet
  "sm:h-[400px]",  // Lebih kecil di mobile
  className
)}>

<motion.div
  className={cn(
    "absolute rounded-[32px]",
    "w-[420px] h-[260px]",     // Desktop
    "lg:w-[480px] lg:h-[300px]", // Large desktop
    "md:w-[380px] md:h-[240px]", // Tablet
    "sm:w-[320px] sm:h-[200px]", // Mobile
  )}
>
```

## 🔧 Performance Tips

1. **Use `initial={false}`**: Hindari animasi saat mount pertama kali
2. **Optimize re-renders**: State hanya berubah setiap 3 detik
3. **GPU Acceleration**: Transform properties (x, y, scale) di-handle GPU
4. **Clean interval**: Selalu cleanup interval di useEffect

## 🎬 Animation Timeline

```
Time: 0s
├─ Card 1: visible (z-3)
├─ Card 2: visible (z-2)
├─ Card 3: visible (z-1)
└─ Card 4: hidden (scale: 0)

Time: 3s (activeIndex = 1)
├─ Card 1: scale to 0, opacity to 0
├─ Card 2: move x-=60, y+=60 (z-3)
├─ Card 3: move x-=60, y+=60 (z-2)
└─ Card 4: reappear, move x-=60, y+=60 (z-1)

Time: 6s (activeIndex = 2)
├─ Card 1: reappear at back (z-1)
├─ Card 2: scale to 0, opacity to 0
├─ Card 3: move x-=60, y+=60 (z-3)
└─ Card 4: move x-=60, y+=60 (z-2)

... loop continues infinitely
```

## 🎯 Key Differences from Static Version

| Feature | Static Stack | Loop Animation |
|---------|-------------|----------------|
| Card disappearance | No | Yes, one at a time |
| Auto animation | Once on mount | Continuous loop |
| Card recycling | No | Yes, reappears at back |
| Progress indicator | No | Yes, with dots |
| User interaction | Hover only | Click dots + hover |
| State management | None | activeIndex state |

## 💡 Use Cases

1. **Feature Showcase**: Highlight rotating features automatically
2. **Testimonial Carousel**: Show customer reviews in loop
3. **Product Gallery**: Display products with auto-rotation
4. **Stats Dashboard**: Rotate between different metric cards
5. **Notification Center**: Cycle through alerts/messages
6. **Pricing Plans**: Show different tiers in sequence
7. **Team Members**: Introduce team in auto-rotating cards

## 🚀 Live Demo

Lihat demo lengkap di: `http://localhost:3001/demo`

Component ini adalah implementasi Framer Motion dari konsep GSAP timeline yang Anda berikan, dengan state management React untuk kontrol yang lebih baik! 🎉
