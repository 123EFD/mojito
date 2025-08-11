# Cocktail Hover Card Design

## Component Structure

```
CocktailCard
├── Card Container (with hover effect)
│   ├── Front Face (visible by default)
│   │   ├── Cocktail Name
│   │   ├── Country
│   │   ├── Price
│   │   └── Visual Indicator (hover hint)
│   │
│   └── Back Face/Reveal (shown on hover)
│       ├── Ingredients List
│       ├── Preparation Details
│       └── Visual Elements (icons, etc.)
```

## Data Structure

Each card will require:
- name (string)
- country (string)
- price (string)
- ingredients (array of strings)
- preparation (string)

## Hover Animation Concept

1. **Initial State**: Card shows basic info (name, country, price) with a subtle visual indicator that there's more content on hover
2. **Hover Effect**: 
   - Card elevates slightly with a shadow
   - Background may change subtly
   - Content transitions to show ingredients and preparation
3. **Reveal Animation**: 
   - Use GSAP for smooth content transition
   - Front content fades out while back content fades in
   - Possible 3D flip or slide effect

## Visual Design

- Match existing site aesthetic (dark theme, yellow accents)
- Use fonts from the existing design system (Modern Negra, Mona Sans, DM Serif Text)
- Maintain consistent spacing and padding
- Responsive design for all screen sizes

## Implementation Plan

1. Create reusable CocktailCard component
2. Enhance data structure to include ingredients and preparation
3. Implement CSS animations for hover effects
4. Add GSAP for advanced reveal animations
5. Integrate into Cocktails section