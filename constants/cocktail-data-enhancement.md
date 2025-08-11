# Enhanced Cocktail Data Structure

## Current Data Structure

### cocktailLists
```javascript
const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  // ... other cocktails
];
```

### mockTailLists
```javascript
const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  // ... other mocktails
];
```

## Enhanced Data Structure

To support the hover cards with ingredients and preparation details, we need to enhance the data structure:

### Enhanced cocktailLists
```javascript
const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
    ingredients: [
      "2 oz Shiraz wine",
      "1/2 oz brandy",
      "1/4 oz lemon juice",
      "1 tsp sugar",
      "Lemon twist for garnish"
    ],
    preparation: "Shake all ingredients with ice. Strain into a chilled glass and garnish with a lemon twist."
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
    ingredients: [
      "2 oz Malbee liqueur",
      "1/2 oz vodka",
      "1/4 oz lime juice",
      "Fresh mint leaves",
      "Soda water"
    ],
    preparation: "Muddle mint leaves in shaker. Add other ingredients with ice and shake well. Strain over fresh ice and top with soda water."
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
    ingredients: [
      "12 oz Rhino Pale Ale",
      "1/2 oz whiskey",
      "1/4 oz honey syrup",
      "Lemon wedge"
    ],
    preparation: "Pour whiskey and honey syrup into a glass. Add beer slowly and stir gently. Garnish with a lemon wedge."
  },
  {
    name: "Irish Guinness",
    country: "IE",
    direct: "600 ml",
    price: "$29",
    ingredients: [
      "12 oz Guinness stout",
      "1/2 oz Irish whiskey",
      "1/4 oz cream",
      "Chocolate syrup"
    ],
    preparation: "Pour Guinness into a glass. Slowly layer whiskey on top. Add a drizzle of cream and chocolate syrup for flavor."
  }
];
```

### Enhanced mockTailLists
```javascript
const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
    ingredients: [
      "2 oz pineapple juice",
      "1/2 oz coconut cream",
      "1/4 oz passionfruit syrup",
      "1/2 oz lime juice",
      "Pineapple slice for garnish"
    ],
    preparation: "Blend all ingredients with ice until smooth. Pour into a chilled glass and garnish with a pineapple slice."
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
    ingredients: [
      "2 oz passionfruit juice",
      "1/2 oz mint syrup",
      "1/4 oz lime juice",
      "Soda water",
      "Fresh mint sprig"
    ],
    preparation: "Mix passionfruit juice, mint syrup, and lime juice in a glass with ice. Top with soda water and garnish with a mint sprig."
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
    ingredients: [
      "1 oz orange juice",
      "1 oz grapefruit juice",
      "1/2 oz lemon juice",
      "1/4 oz agave syrup",
      "Sparkling water",
      "Orange slice for garnish"
    ],
    preparation: "Combine all fruit juices and agave syrup in a shaker with ice. Shake well and strain into a glass filled with ice. Top with sparkling water and garnish."
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
    ingredients: [
      "2 oz lavender tea (cooled)",
      "1/2 oz lemon juice",
      "1/4 oz honey syrup",
      "Soda water",
      "Lavender sprig for garnish"
    ],
    preparation: "Fill a glass with ice. Add lavender tea, lemon juice, and honey syrup. Top with soda water and gently stir. Garnish with a lavender sprig."
  }
];