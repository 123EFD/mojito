# Cocktails Section Integration Plan

## Current Implementation

The current Cocktails.jsx component renders two lists:
1. `cocktailLists` - Most Popular Cocktails
2. `mockTailLists` - Most Loved Mocktails

Each list uses a simple mapping function to render list items:

```jsx
<ul>
  {cocktailLists.map(({name, country, detail, price}) => (
    <li key={name}>
      <div className='md:me-28'>
        <h3>{name}</h3>
        <p>{country} | {detail}</p>
      </div>
      <span>- {price}</span>
    </li>
  ))}
</ul>
```

## Integration Plan

### 1. Update Data Structure
First, we need to update the data in `constants/index.js` to include the new fields:
- `ingredients` (array)
- `preparation` (string)

### 2. Create CocktailCard Component
Create a new `CocktailCard.jsx` component in `src/components/` that implements the design we've planned.

### 3. Modify Cocktails Component
Update the `Cocktails.jsx` component to use the new CocktailCard components instead of simple list items.

### 4. Enhanced Component Structure

```jsx
// Before (current implementation)
<li key={name}>
  <div className='md:me-28'>
    <h3>{name}</h3>
    <p>{country} | {detail}</p>
  </div>
  <span>- {price}</span>
</li>

// After (with CocktailCard)
<CocktailCard
  name={name}
  country={country}
  detail={detail}
  price={price}
  ingredients={ingredients}
  preparation={preparation}
/>
```

### 5. Grid Layout for Cards
Replace the current list structure with a grid layout for better presentation of cards:

```jsx
// Current structure
<div className='list'>
  <div className='popular'>
    <h2>Most Popular Cocktails:</h2>
    <ul>
      {/* list items */}
    </ul>
  </div>
  
  <div className='loved'>
    <h2>Most Loved Mocktails:</h2>
    <ul>
      {/* list items */}
    </ul>
  </div>
</div>

// New structure with cards
<div className='cocktails-container'>
  <div className='popular-cocktails'>
    <h2>Most Popular Cocktails:</h2>
    <div className='cocktails-grid'>
      {cocktailLists.map((cocktail) => (
        <CocktailCard key={cocktail.name} {...cocktail} />
      ))}
    </div>
  </div>
  
  <div className='popular-mocktails'>
    <h2>Most Loved Mocktails:</h2>
    <div className='cocktails-grid'>
      {mockTailLists.map((mocktail) => (
        <CocktailCard key={mocktail.name} {...mocktail} />
      ))}
    </div>
  </div>
</div>
```

### 6. CSS Updates
Update the CSS in `src/index.css` to include styles for:
- Card grid layout
- Responsive design for different screen sizes
- Hover effects and animations

### 7. GSAP Integration
Integrate GSAP animations for:
- Staggered card entrance animations
- Enhanced hover effects
- Smooth content transitions

## Implementation Steps

1. Update data structure in constants/index.js
2. Create CocktailCard.jsx component
3. Update Cocktails.jsx to use CocktailCard components
4. Add CSS styles for card layout and animations
5. Integrate GSAP for enhanced animations
6. Test responsive design
7. Refine animations and transitions