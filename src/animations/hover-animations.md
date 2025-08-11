# Hover Animations Implementation Plan

## CSS Animations

### 1. Basic Hover Effects
- Smooth transition for all interactive elements (300ms ease-in-out)
- Elevation change with box-shadow
- Subtle scale transformation (1.02x)
- Border color transition to yellow accent

### 2. Card Flip Animation
- 3D perspective container
- Backface visibility hidden
- RotateY transformation for flip effect
- Smooth timing function for natural movement

### 3. Content Reveal Transitions
- Staggered animations for list items
- Fade in/out effects with opacity transitions
- Slide effects for text elements
- Delayed animations for sequential reveals

## GSAP Animations

### 1. Entrance Animations
```javascript
// Staggered card entrance
gsap.from(".cocktail-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out"
});

// Staggered ingredient list items
gsap.from(".ingredient-item", {
  opacity: 0,
  x: -20,
  duration: 0.3,
  stagger: 0.05,
  ease: "power1.out"
});
```

### 2. Hover Enhancements
```javascript
// Enhanced hover effect
gsap.to(".cocktail-card:hover", {
  scale: 1.03,
  duration: 0.3,
  ease: "back.out(1.7)"
});

// Shadow enhancement
gsap.to(".cocktail-card:hover", {
  boxShadow: "0 20px 40px rgba(231, 211, 147, 0.3)",
  duration: 0.3
});
```

### 3. Content Reveal Animations
```javascript
// Front to back transition
const flipTimeline = gsap.timeline();
flipTimeline
  .to(".card-front", {
    opacity: 0,
    duration: 0.3
  })
  .to(".card-back", {
    opacity: 1,
    duration: 0.3
  }, "-=0.15");
```

## Animation Sequence

### 1. Page Load
1. Cards fade in from below with staggered delay
2. Title elements animate in
3. Section background elements animate

### 2. Card Hover
1. Immediate elevation and scale change
2. 300ms delay before content flip
3. Back content elements animate in sequentially

### 3. Card Unhover
1. Immediate reversal of elevation and scale
2. Content flip back to front
3. Front content elements fade back in

## Performance Considerations

### 1. Animation Optimization
- Use transform and opacity for best performance
- Limit simultaneous animations
- Use requestAnimationFrame for smooth transitions
- Implement will-change property for complex animations

### 2. Mobile Considerations
- Reduce animation complexity on mobile
- Use hover alternatives for touch devices (click/tap)
- Implement media queries to disable heavy animations
- Ensure animations don't block user interactions

## CSS Classes for Animations

```css
/* Base transition classes */
.transition-all {
  transition: all 0.3s ease-in-out;
}

.transform {
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Hover effects */
.card-hover:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Flip animation */
.card-flip {
  perspective: 1000px;
}

.card-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-flip:hover .card-flip-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: opacity 0.3s ease;
}

.card-back {
  transform: rotateY(180deg);
  opacity: 0;
}

.card-flip:hover .card-back {
  opacity: 1;
}

.card-flip:hover .card-front {
  opacity: 0;
}
```

## GSAP Timeline Structure

```javascript
// Create master timeline for section entrance
const cocktailsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#cocktails",
    start: "top 80%",
    end: "bottom 90%",
    toggleActions: "play none none reverse"
  }
});

// Add animations to timeline
cocktailsTimeline
  .from(".section-title", {
    opacity: 0,
    y: 30,
    duration: 0.8
  })
  .from(".cocktail-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1
  }, "-=0.5");
```

## Responsive Animation Adjustments

### Desktop (> 1024px)
- Full 3D flip animations
- Complex staggered effects
- Enhanced shadow effects

### Tablet (768px - 1024px)
- Simplified flip (fade instead of 3D)
- Reduced stagger delays
- Moderate shadow effects

### Mobile (< 768px)
- Tap/click to reveal instead of hover
- Simple fade transitions
- Minimal or no shadow effects
- Touch-friendly sizing