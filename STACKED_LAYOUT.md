# Card Stack Animation - STACKED Layout

## 📐 Layout Structure

Kartu-kartu sekarang **BERTUMPUK** (stacked) dengan offset diagonal dari kanan atas ke kiri bawah:

```
┌─────────────────────┐
│   Card 3 (Belakang) │  ← Position: top: 0%, right: 0%
│   z-index: 1        │     Masuk PERTAMA (delay: 0s)
└─────────────────────┘
      ┌─────────────────────┐
      │   Card 2 (Tengah)   │  ← Position: top: 60px, right: 60px
      │   z-index: 2        │     Masuk KEDUA (delay: 0.3s)
      └─────────────────────┘
            ┌─────────────────────┐
            │   Card 1 (Depan)    │  ← Position: top: 120px, right: 120px
            │   z-index: 3        │     Masuk KETIGA (delay: 0.6s)
            └─────────────────────┘
```

## 🎬 Animation Flow

### From (Hidden State)
```
                                    ╔═══════════╗
                                    ║  All 3    ║ ← Start position
                                    ║  Cards    ║   x: 400, y: -300
                                    ╚═══════════╝   (Kanan Atas)
                                          ↓
                                          ↓ Cascade animation
                                          ↓ (Spring effect)
                                          ↓
```

### To (Visible State - Stacked)
```
┌──────────┐
│  Card 3  │ ← Posisi akhir bertumpuk
└──────────┘   dengan offset 60px diagonal
   ┌──────────┐
   │  Card 2  │
   └──────────┘
      ┌──────────┐
      │  Card 1  │ ← Paling depan
      └──────────┘
```

## 🔢 Positioning System

### CardStackDiv & CardStackCustom

| Card | Position | Z-Index | Offset | Delay |
|------|----------|---------|--------|-------|
| 3 (Back) | `top: 0%, right: 0%` | 1 | None | 0s |
| 2 (Mid) | `top: 60px, right: 60px` | 2 | 60px diagonal | 0.3s |
| 1 (Front) | `top: 120px, right: 120px` | 3 | 120px diagonal | 0.6s |

## 🎨 Visual Effect

```
BEFORE Animation (Hidden):
                                ╔═══╗
                                ║ 3 ║ 
                                ║ 2 ║ All cards at x:400, y:-300
                                ║ 1 ║ (Kanan atas, off screen)
                                ╚═══╝


DURING Animation (Cascade):
                  ╔═══╗
                  ║ 3 ║ → Moving & rotating
                  ╚═══╝
         ╔═══╗
         ║ 2 ║ → Following with delay
         ╚═══╝
╔═══╗
║ 1 ║ → Last to animate
╚═══╝


AFTER Animation (Stacked):
┌─────┐
│  3  │ ← Belakang (opacity: 0.4)
└─────┘
  ┌─────┐
  │  2  │ ← Tengah (opacity: 0.35)
  └─────┘
    ┌─────┐
    │  1  │ ← Depan (opacity: 0.45)
    └─────┘
    ↑
    Stack effect dengan glassmorphism
```

## 📏 Measurements

### Container
- Width: `100%` (responsive)
- Height: `450px`
- Display: `flex items-center justify-center`

### Cards
- Width: `420px`
- Height: `260px`
- Border Radius: `32px`
- Backdrop Blur: `xl` (24px)
- Shadow: `2xl`

### Stack Offset
- Horizontal: `60px` per card
- Vertical: `60px` per card
- Creates diagonal stack effect

## 🎭 Key Features

### 1. Stacked Layout
✅ Cards overlap with visible edges
✅ Creates depth perception
✅ Modern card stack effect

### 2. Animation Sequence
```
Card 3 → Card 2 → Card 1
  0s       0.3s     0.6s
```

### 3. Entry Animation
- **From**: Top-right corner (x: 400, y: -300)
- **To**: Stacked position
- **Effect**: Spring physics with rotation
- **Duration**: 1.2s per card

### 4. Hover Effect
```
Normal: scale(1)
Hover:  scale(1.05) ← Zoom in slightly
        transition: 0.3s
```

## 🎯 Comparison

### SVG Version vs DIV Stacked

**SVG (CardStackAnimation)**
- Uses horizontal layout
- Cards side by side
- Large viewBox

**DIV Stacked (CardStackDiv/Custom)**
- Uses diagonal stack
- Cards overlapping
- Compact layout
- More modern look

## 🔧 Customization

### Adjust Stack Offset
```jsx
// Lebih rapat (30px)
const positions = [
    { top: "0%", right: "0%", zIndex: 1 },
    { top: "30px", right: "30px", zIndex: 2 },
    { top: "60px", right: "60px", zIndex: 3 }
];

// Lebih renggang (90px)
const positions = [
    { top: "0%", right: "0%", zIndex: 1 },
    { top: "90px", right: "90px", zIndex: 2 },
    { top: "180px", right: "180px", zIndex: 3 }
];
```

### Change Stack Direction

**From Right-Top to Left-Bottom (Current)**
```jsx
{ top: "0%", right: "0%", zIndex: 1 }
{ top: "60px", right: "60px", zIndex: 2 }
```

**From Left-Top to Right-Bottom**
```jsx
{ top: "0%", left: "0%", zIndex: 1 }
{ top: "60px", left: "60px", zIndex: 2 }
```

**From Bottom to Top (Vertical)**
```jsx
{ bottom: "0%", left: "50%", transform: "translateX(-50%)", zIndex: 1 }
{ bottom: "80px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }
```

## 💡 Best Practices

1. **Container Height**: Minimum 450px untuk 3 kartu
2. **Card Size**: 420x260px optimal untuk desktop
3. **Stack Offset**: 60px memberikan visibility yang baik
4. **Z-Index**: Increment by 1 untuk stack yang jelas

## 🎬 Demo

Buka **http://localhost:3001/demo** untuk melihat:
- SVG Version (horizontal layout)
- **DIV Version (stacked layout)** ← NEW!
- **Custom Content (stacked layout)** ← NEW!

Semua dengan animasi cascade dari kanan atas! 🎉
