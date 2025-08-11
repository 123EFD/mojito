# CocktailCard Component Design

## Component Structure

```jsx
<CocktailCard 
  name="Chapel Hill Shiraz"
  country="AU"
  detail="Battle"
  price="$10"
  ingredients={[
    "2 oz Shiraz wine",
    "1/2 oz brandy",
    "1/4 oz lemon juice",
    "1 tsp sugar",
    "Lemon twist for garnish"
  ]}
  preparation="Shake all ingredients with ice. Strain into a chilled glass and garnish with a lemon twist."
/>
```

## Component Implementation Plan

### Props
- `name` (string): Cocktail name
- `country` (string): Country of origin
- `detail` (string): Additional details
- `price` (string): Price of the cocktail
- `ingredients` (array): List of ingredients
- `preparation` (string): Preparation instructions

### Visual Design
- Card dimensions: 300px wide x 400px tall (responsive)
- Dark theme to match site aesthetic
- Yellow accent for highlights
- Subtle border with hover effect
- Smooth transitions for all animations

### States
1. **Default State**
   - Show name, country, detail, and price
   - Subtle shadow
   - Small icon indicating hover interaction

2. **Hover State**
   - Card elevates with enhanced shadow
   - Smooth transition to back content
   - Ingredients and preparation details revealed

### Animation Details
- **Entrance**: Fade in with slight scale effect (0.95 → 1)
- **Hover Trigger**: 
  - Elevation change (z-index and shadow)
  - Content flip or slide transition (300ms)
- **Content Reveal**: 
  - Front content fades out (opacity 1 → 0)
  - Back content fades in (opacity 0 → 1)
  - Staggered list item animation for ingredients

## Component JSX Structure

```jsx
const CocktailCard = ({ 
  name, 
  country, 
  detail, 
  price, 
  ingredients, 
  preparation 
}) => {
  return (
    <div className="cocktail-card">
      <div className="card-inner">
        {/* Front Face */}
        <div className="card-front">
          <h3 className="cocktail-name">{name}</h3>
          <p className="cocktail-origin">{country} | {detail}</p>
          <p className="cocktail-price">{price}</p>
          <div className="hover-indicator">
            <span>Hover for details</span>
            <div className="indicator-icon">ⓘ</div>
          </div>
        </div>
        
        {/* Back Face */}
        <div className="card-back">
          <div className="ingredients-section">
            <h4>Ingredients</h4>
            <ul className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="preparation-section">
            <h4>Preparation</h4>
            <p className="preparation-details">{preparation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

## CSS Classes and Styling

```css
.cocktail-card {
  width: 100%;
  height: 200px;
  perspective: 1000px;
  margin-bottom: 1rem;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.cocktail-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #e7d393;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-front {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

.card-back {
  background: rgba(0, 0, 0, 0.9);
  color: white;
  transform: rotateY(180deg);
}

.cocktail-name {
  font-family: 'Modern Negra', sans-serif;
  font-size: 1.5rem;
  color: #e7d393;
  margin: 0 0 0.5rem 0;
}

.cocktail-origin {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0 0 1rem 0;
}

.cocktail-price {
  font-family: 'Modern Negra', sans-serif;
  font-size: 1.2rem;
  color: #e7d393;
  margin: 0;
}

.hover-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  opacity: 0.6;
}

.indicator-icon {
  width: 20px;
  height: 20px;
  border: 1px solid #e7d393;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

.ingredients-section h4,
.preparation-section h4 {
  font-family: 'Modern Negra', sans-serif;
  color: #e7d393;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.ingredient-item {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  padding-left: 1rem;
  position: relative;
}

.ingredient-item:before {
  content: "•";
  color: #e7d393;
  position: absolute;
  left: 0;
}

.preparation-details {
  font-size: 0.9rem;
  line-height: 1.4;
}
```

## Integration with GSAP

For enhanced animations, we'll use GSAP to:

1. Create staggered animations for ingredient list items
2. Add bounce effects on hover
3. Smooth transitions between states

```javascript
useGSAP(() => {
  // Staggered animation for ingredients
  gsap.from(".ingredient-item", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out"
  });
  
  // Hover effect enhancements
  gsap.to(".cocktail-card", {
    scale: 1.02