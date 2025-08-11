    const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "work",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
    ];

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
        detail: "600 ml",
        price: "$29",
        ingredients: [
            "12 oz Guinness stout",
            "1/2 oz Irish whiskey",
            "1/4 oz cream",
            "Chocolate syrup"
        ],
        preparation: "Pour Guinness into a glass. Slowly layer whiskey on top. Add a drizzle of cream and chocolate syrup for flavor."
    },
    ];

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
    },
    ];

    const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
    ];

    const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
    ];

    const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
    ];

    const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@jsmcocktail.com",
    },
    };

    const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
    ];

    const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
    ];

    const allCocktails = [
    {
        id: 1,
        name: "Classic Mojito",
        image: "/images/drink1.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 2,
        name: "Raspberry Mojito",
        image: "/images/drink2.png",
        title: "A Zesty Classic That Never Fails",
        description:
        "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
        id: 3,
        name: "Violet Breeze",
        image: "/images/drink3.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 4,
        name: "Curacao Mojito",
        image: "/images/drink4.png",
        title: "Crafted With Care, Poured With Love",
        description:
        "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
    ];

    export {
        navLinks,
        cocktailLists,
        mockTailLists,
        profileLists,
        featureLists,
        goodLists,
        openingHours,
        storeInfo,
        socials,
        allCocktails,
    };