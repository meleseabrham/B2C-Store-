export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics & Audio',
    slug: 'electronics',
    itemCount: '128+ items',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    description: 'Noise-canceling headphones, smart watches, premium audio, and modern desk gear.'
  },
  {
    id: 'apparel',
    name: 'Modern Fashion',
    slug: 'fashion',
    itemCount: '240+ items',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80',
    description: 'Minimalist streetwear, organic cotton essentials, and tailored everyday garments.'
  },
  {
    id: 'home',
    name: 'Home & Living',
    slug: 'home-living',
    itemCount: '95+ items',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
    description: 'Ceramics, ambient lighting, artisanal decor, and modern kitchen accessories.'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Travel',
    slug: 'lifestyle',
    itemCount: '74+ items',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    description: 'Waterproof backpacks, stainless tumblers, travel organizers, and leather goods.'
  }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'AcousticPro Wireless ANC Headphones',
    category: 'electronics',
    price: 189.99,
    originalPrice: 249.99,
    discount: '24% OFF',
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Best Seller',
    isBestSeller: true,
    isNew: false,
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Engineered for audiophiles with active noise cancellation, 40-hour battery life, and ultra-plush memory foam earcups.',
    description: 'Immerse yourself in rich, high-fidelity sound. The AcousticPro wireless headphones combine bespoke 40mm dynamic drivers with hybrid ANC to eliminate up to 98% of ambient noise. Enjoy up to 40 hours of playtime on a single charge or get 4 hours of juice with a 10-minute quick charge.',
    specs: {
      'Battery Life': '40 Hours (ANC ON)',
      'Connectivity': 'Bluetooth 5.3 + 3.5mm Aux',
      'Weight': '250 grams',
      'Charging': 'USB-C Fast Charging',
      'Microphone': 'Quad Beamforming with ENC'
    },
    colors: ['Space Gray', 'Matte Black', 'Sandstone Beige']
  },
  {
    id: 'prod-2',
    name: 'Minimalist Horizon Automatic Chrono Watch',
    category: 'lifestyle',
    price: 145.00,
    originalPrice: 195.00,
    discount: '25% OFF',
    rating: 4.8,
    reviewsCount: 198,
    badge: 'Popular',
    isBestSeller: true,
    isNew: false,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Crafted with scratch-resistant sapphire glass, Japanese movement, and top-grain Italian leather strap.',
    description: 'A timeless minimalist timepiece that effortlessly moves from morning boardroom meetings to weekend dinners. Featuring a surgical stainless steel 40mm case and water resistance up to 50 meters.',
    specs: {
      'Case Diameter': '40 mm',
      'Glass': 'Sapphire Crystal Coated',
      'Movement': 'Precision Japanese Quartz',
      'Water Resistance': '5 ATM / 50m',
      'Strap Material': 'Genuine Italian Calfskin'
    },
    colors: ['Midnight Black', 'Caramel Brown', 'Rose Gold']
  },
  {
    id: 'prod-3',
    name: 'Organic Heavyweight French Terry Hoodie',
    category: 'apparel',
    price: 74.50,
    originalPrice: 89.00,
    discount: '16% OFF',
    rating: 4.7,
    reviewsCount: 145,
    badge: 'Top Pick',
    isBestSeller: true,
    isNew: false,
    stock: 42,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Custom-milled 480 GSM organic cotton with relaxed drop shoulders and double-lined hood.',
    description: 'The definitive daily hoodie. Built from heavyweight 480 GSM organic ring-spun cotton that gets softer with every wash. Preshrunk to guarantee consistent fit, finished with ribbed hem and cuffs.',
    specs: {
      'Fabric': '100% Organic French Terry Cotton',
      'Weight': '480 GSM Heavyweight',
      'Origin': 'Ethically Made in Portugal',
      'Care': 'Machine wash cold, air dry flat'
    },
    colors: ['Oatmeal Heather', 'Vintage Sage', 'Washed Black'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'prod-4',
    name: 'Handcrafted Ceramic Dripper & Carafe Set',
    category: 'home',
    price: 52.00,
    originalPrice: 65.00,
    discount: '20% OFF',
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Best Seller',
    isBestSeller: true,
    isNew: false,
    stock: 19,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Artisanal stoneware coffee dripper with heat-resistant borosilicate glass pot.',
    description: 'Brew cafe-grade pour-over coffee right at home. Features internal spiral ridges designed to optimize water extraction and ensure balanced aroma and notes.',
    specs: {
      'Capacity': '650 ml (2-4 cups)',
      'Material': 'Stoneware Ceramic & Borosilicate',
      'Dishwasher Safe': 'Yes',
      'Compatibility': 'Standard V02 cone filters'
    },
    colors: ['Matte Terracotta', 'Chalk White', 'Charcoal']
  },
  {
    id: 'prod-5',
    name: 'Ergonomic Mechanical Wireless Keyboard',
    category: 'electronics',
    price: 129.00,
    originalPrice: 159.00,
    discount: '18% OFF',
    rating: 4.8,
    reviewsCount: 267,
    badge: 'Trending',
    isBestSeller: true,
    isNew: false,
    stock: 31,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Hot-swappable tactile switches, aluminum top plate, and triple-device seamless switching.',
    description: 'Elevate your typing flow. Equipped with pre-lubed silent tactile switches, double-shot PBT keycaps that never shine or fade, and warm white backlighting.',
    specs: {
      'Layout': '75% Compact 84-Key',
      'Battery': '4000 mAh (up to 200 hours)',
      'Connection': '2.4Ghz Dongle / Bluetooth 5.1 / Type-C',
      'Switches': 'Gateron G-Pro Yellow pre-lubed'
    },
    colors: ['Retro Slate', 'Arctic White']
  },
  {
    id: 'prod-6',
    name: 'Waterproof Commuter Urban Daypack 22L',
    category: 'lifestyle',
    price: 89.99,
    originalPrice: 119.99,
    discount: '25% OFF',
    rating: 4.9,
    reviewsCount: 312,
    badge: 'Best Seller',
    isBestSeller: true,
    isNew: false,
    stock: 28,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Weatherproof 900D Cordura nylon with suspended 16" laptop sleeve and luggage pass-through.',
    description: 'Engineered for seamless daily commutes and weekend flights. Includes hidden passport pocket, YKK Aquaguard zippers, and padded air-mesh back panel.',
    specs: {
      'Volume': '22 Liters',
      'Laptop Compartment': 'Fits up to 16" MacBook Pro',
      'Fabric': '900D Recycled Ripstop Cordura',
      'Weight': '850 grams'
    },
    colors: ['Slate Grey', 'Olive Moss', 'Obsidian Black']
  },
  {
    id: 'prod-7',
    name: 'Nordic Solid Oak Ambient Table Lamp',
    category: 'home',
    price: 68.00,
    originalPrice: 85.00,
    discount: '20% OFF',
    rating: 4.6,
    reviewsCount: 79,
    badge: 'Popular',
    isBestSeller: true,
    isNew: false,
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Natural turned oak base with frosted opal glass globe diffuser and step-less touch dimming.',
    description: 'Soft, ambient 2700K warm glow for bedside or living desk. Features capacitive touch base control to transition from reading light to cozy nightlight.',
    specs: {
      'Light Output': '450 Lumens (Warm 2700K)',
      'Power': 'USB-C Rechargeable or Plug-in',
      'Base': 'FSC Certified Solid European Oak',
      'Diameter': '18 cm'
    },
    colors: ['Natural Oak', 'Smoked Walnut']
  },
  {
    id: 'prod-8',
    name: 'Italian Suede Low-Profile Sneakers',
    category: 'apparel',
    price: 115.00,
    originalPrice: 140.00,
    discount: '18% OFF',
    rating: 4.8,
    reviewsCount: 164,
    badge: 'Best Seller',
    isBestSeller: true,
    isNew: false,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Buttery Italian calf suede upper with Margom cupsole and cushioned memory foam insole.',
    description: 'Understated elegance meets day-long cloud comfort. Pairs with raw denim, chinos, or relaxed tailored trousers.',
    specs: {
      'Upper': '100% Genuine Italian Calf Suede',
      'Sole': 'Natural Vulcanized Rubber Cupsole',
      'Lining': 'Breathable Calfskin Leather',
      'Sizes Available': 'EU 40 - 46'
    },
    colors: ['Warm Taupe', 'Navy Dusk', 'Chalk Off-White'],
    sizes: ['40', '41', '42', '43', '44', '45']
  },
  {
    id: 'prod-9',
    name: 'Smart Ambient Climate & Air Monitor',
    category: 'electronics',
    price: 94.00,
    originalPrice: 120.00,
    discount: '21% OFF',
    rating: 4.7,
    reviewsCount: 84,
    badge: 'Just In',
    isBestSeller: false,
    isNew: true,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Tracks CO2, VOCs, humidity, temperature, and dust particles with E-ink glare-free display.',
    description: 'Keep your indoor air pristine. Syncs instantly with Apple HomeKit and Google Home to automate air purifiers and humidifiers.',
    specs: {
      'Display': '2.8" High-contrast E-Paper',
      'Sensors': 'Swiss NDIR CO2 Sensor & Laser PM2.5',
      'Battery': 'Rechargeable 6-month standby'
    },
    colors: ['Snow White', 'Matte Basalt']
  },
  {
    id: 'prod-10',
    name: 'Double-Walled Insulated Travel Tumbler 750ml',
    category: 'lifestyle',
    price: 34.00,
    originalPrice: 42.00,
    discount: '19% OFF',
    rating: 4.9,
    reviewsCount: 420,
    badge: 'New Arrival',
    isBestSeller: false,
    isNew: true,
    stock: 65,
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Triple-insulated 18/8 kitchen grade steel. Keeps iced drinks cold for 24h, hot for 12h.',
    description: 'Cup-holder friendly taper with leakproof magnetic splash-guard lid and condensation-free powder coat exterior.',
    specs: {
      'Capacity': '750 ml / 25 oz',
      'Insulation': 'Vacuum Double Wall TempShield',
      'BPA Free': '100% Certified'
    },
    colors: ['Sage Green', 'Pacific Blue', 'Matte Cream']
  },
  {
    id: 'prod-11',
    name: 'Relaxed Fit Linen Resort Shirt',
    category: 'apparel',
    price: 58.00,
    originalPrice: 75.00,
    discount: '22% OFF',
    rating: 4.6,
    reviewsCount: 92,
    badge: 'New Season',
    isBestSeller: false,
    isNew: true,
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900&auto=format&fit=crop&q=80'
    ],
    summary: '100% Normandy flax linen with garment washed hand-feel and camp collar.',
    description: 'The pinnacle of warm-weather sophistication. Breathable, lightweight, and designed with a casual boxy silhouette.',
    specs: {
      'Fabric': '100% Pure Normandy Flax Linen',
      'Buttons': 'Natural Mother-of-Pearl',
      'Collar': 'Open Cuban Camp Collar'
    },
    colors: ['Sand Dunes', 'Crisp White', 'Sea Salt Blue'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'prod-12',
    name: 'Cast Iron Enameled Dutch Oven 5.5 Qt',
    category: 'home',
    price: 139.00,
    originalPrice: 175.00,
    discount: '20% OFF',
    rating: 4.9,
    reviewsCount: 178,
    badge: 'New Arrival',
    isBestSeller: false,
    isNew: true,
    stock: 14,
    images: [
      'https://images.unsplash.com/photo-1584990347449-397c02b37803?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Heavy-gauge cast iron with 3 layers of non-reactive chip-resistant porcelain enamel.',
    description: 'Ideal for slow-simmered stews, artisan crusty sourdough bread, and braising. Oven safe up to 500°F (260°C).',
    specs: {
      'Capacity': '5.5 Quarts (5.2 Liters)',
      'Heat Resistance': 'Up to 500°F / 260°C',
      'Compatibility': 'Induction, Gas, Electric, Ceramic'
    },
    colors: ['Ocean Teal', 'French Navy', 'Deep Cherry']
  },
  {
    id: 'prod-13',
    name: 'MagSafe Multi-Device Fast Charging Dock',
    category: 'electronics',
    price: 79.00,
    originalPrice: 99.00,
    discount: '20% OFF',
    rating: 4.8,
    reviewsCount: 215,
    badge: 'Trending',
    isBestSeller: false,
    isNew: true,
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1622445268047-975c699965d1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Fast 15W wireless charging pad for smartphone, smartwatch, and earbuds simultaneously.',
    description: 'Streamline your nightstand or office desk. Features weighted zinc alloy base with non-slip silicone feet.',
    specs: {
      'Total Output': '25W Max Fast Wireless',
      'Materials': 'Anodized Aircraft Aluminum + Vegan Leather',
      'Power Adapter': 'Includes 35W GaN USB-C Wall Brick'
    },
    colors: ['Space Grey', 'Arctic Silver']
  },
  {
    id: 'prod-14',
    name: 'Full-Grain Leather Bi-Fold Wallet',
    category: 'lifestyle',
    price: 49.00,
    originalPrice: 65.00,
    discount: '24% OFF',
    rating: 4.9,
    reviewsCount: 389,
    badge: 'Classic',
    isBestSeller: true,
    isNew: false,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Vegetable-tanned full grain leather with RFID blocking foil and slim quick-access pull tab.',
    description: 'Slim enough for your front pocket, yet holds up to 10 cards and flat cash bills. Develops a gorgeous vintage patina over time.',
    specs: {
      'Capacity': '8-10 cards + Cash Billfold',
      'Security': 'Built-in RFID shielding',
      'Dimensions': '10.5 cm x 8 cm x 1.2 cm'
    },
    colors: ['Bourbon Tan', 'Espresso Dark Brown', 'Jet Black']
  },
  {
    id: 'prod-15',
    name: 'Pure Mulberry Silk Pillowcase Set',
    category: 'home',
    price: 48.00,
    originalPrice: 60.00,
    discount: '20% OFF',
    rating: 4.7,
    reviewsCount: 153,
    badge: 'Popular',
    isBestSeller: false,
    isNew: true,
    stock: 29,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?w=900&auto=format&fit=crop&q=80'
    ],
    summary: '22 Momme grade 6A 100% natural mulberry silk for frizz-free hair and anti-crease skin hydration.',
    description: 'Experience pure nightly luxury. Silk reduces sleep friction on delicate hair and retains natural skin moisture.',
    specs: {
      'Fabric': '100% Grade 6A Pure Mulberry Silk',
      'Weight': '22 Momme Luxury Weight',
      'Closure': 'Hidden YKK invisible zipper'
    },
    colors: ['Champagne Pearl', 'Silver Frost', 'Blush Pink']
  },
  {
    id: 'prod-16',
    name: 'Precision Wireless Stylus Pen',
    category: 'electronics',
    price: 64.00,
    originalPrice: 85.00,
    discount: '25% OFF',
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Popular',
    isBestSeller: false,
    isNew: true,
    stock: 33,
    images: [
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&auto=format&fit=crop&q=80'
    ],
    summary: 'Pixel-perfect precision with tilt sensitivity, magnetic charging, and zero perceptible lag.',
    description: 'Whether sketching, note-taking, or photo editing, this wireless stylus delivers natural pencil-like tactile feedback.',
    specs: {
      'Pressure Sensitivity': '4096 levels with Tilt Sensor',
      'Charging': 'Wireless Magnetic or USB-C',
      'Battery Life': '12 hours continuous'
    },
    colors: ['Snow White', 'Space Grey']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Verified Buyer',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'The checkout was super smooth and my package arrived in just 2 days. The headphones sound amazing — far better than my older $300 set. Will definitely shop here again!',
    productPurchased: 'AcousticPro Wireless ANC Headphones'
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Verified Buyer',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'Exceptional craftsmanship. The leather backpack feels bulletproof and has so many thoughtful compartments for my laptop and camera gear. 10/10.',
    productPurchased: 'Waterproof Commuter Daypack'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Verified Buyer',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'I love how clean and organized this store is. The filter tools made finding the exact home items so effortless. Packaging was 100% recyclable too!',
    productPurchased: 'Ceramic Dripper & Carafe Set'
  }
];

