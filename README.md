# B2C-Store-

# Modern B2C E-Commerce Website (React + Tailwind CSS)

A modern, responsive, and minimalist B2C online shopping store frontend built in **React 18** and **Tailwind CSS**, designed based on the **Relume wireframes and styleguide** ([Project P3575263](https://www.relume.ai/app/project/P3575263_h4E5wwCm6yKlvEPfYsb_j4kcBn4OJDpZ4rxpRKP4DIo#mode=styleguide)).

Every navigation element opens on its own dedicated, responsive page (zero unwanted popups).

---

## 🚀 Getting Started

To run the application locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Or build for production
npm run build
```

---

## 🎨 Design System & Styleguide

- **Primary Brand Color:** Slate Steel Blue (`#537993`) matching the top navigation bar from the Relume mockup.
- **Hero & Scrim Color:** Deep Architectural Slate (`#1e3547` / `#244255`).
- **Warm Neutral Background:** Cream / Sand tint (`#fbf8f3`) for search and promo features.
- **Surface / Card Color:** Pure White (`#ffffff`) with rounded corners (`rounded-2xl` / `rounded-3xl`) and subtle drop-shadows.
- **Typography:**
  - Modern Sans-Serif: `Inter` & `Plus Jakarta Sans` for clean readability.
  - Distinct Cursive Script: `Dancing Script` for the signature "Logo" brand identity as shown in the wireframe.

---

## 📱 Dedicated Pages (Zero Popups)

### 1. Home / Landing Page (Primary Focus)
- **Navbar:** Slate-blue header bar (`#537993`), cursive script "Logo", navigation links (Home, Shop, Categories, About, Contact), live search autocomplete, wishlist counter badge, user account profile, and live cart counter badge.
- **Hero Header Section:** High-impact banner featuring the exact headline *"Everything you need, delivered fast"*, description, "Shop Now" and "Explore Categories" buttons, and trust metrics (Free 2-day delivery, 30-day money back guarantee).
- **Search Feature Section:** *"Find what you need, fast"* dedicated search bar with category selector and one-click trending search tags.
- **Services Section (Featured Categories):** Visual category cards with photography for *Electronics & Audio*, *Modern Fashion*, *Home & Living*, and *Lifestyle & Travel*.
- **Best-Selling Products Section:** *"Top picks"* 8-product grid with badges, star ratings, review counts, pricing, and 1-click Add-to-Cart.
- **New Arrivals Section:** *"Just in"* fresh product grid highlighting the latest releases.
- **CTA / Promo Section:** Limited-time flash sale banner with a real-time countdown timer and one-click coupon copy button (`SAVE20`).
- **Testimonial Section:** Verified buyer testimonials with star ratings and photos.
- **Newsletter Subscription:** *"Stay in the loop"* subscription card with 15% discount incentive.
- **Footer:** Deep slate blue (`#1e3547`) with brand story, customer care links, direct contact, accepted payment methods (Visa, MC, Amex, Apple Pay, PayPal), and social icons.

### 2. Shop / Product Listing Page
- Responsive product grid with flexible 3 or 4 column layout toggle.
- Category filtering with real-time product counts.
- Price range slider with budget adjustment ($30 – $250).
- Sort controls: *Most Popular*, *Newest Arrivals*, *Price: Low to High*, *Price: High to Low*, and *Highest Rated*.
- Filters for *On-Sale Only* and *In-Stock Only*.
- Search bar filtering and active filter pills with 1-click removal.

### 3. Categories Page
- Dedicated full page showcasing all collections: Electronics & Audio, Modern Fashion, Home & Living, and Lifestyle & Travel.
- Sample item thumbnails with quick links to explore each category.

### 4. Product Details Page
- High-resolution image showcase with thumbnail switcher.
- Product name, SKU, rating stars, price, discount badge, and availability status.
- Color variant and size selection buttons.
- Quantity selector (+ / -), animated Add to Cart button, and instant "Buy Now" button.
- Value guarantees (Free 2-day delivery, 30-day returns, 2-year warranty).
- Tabbed specifications: *Description & Features*, *Technical Specifications*, *Shipping & Returns*, and *Customer Reviews* with interactive review submission modal.
- Related products grid to drive discovery.

### 5. Shopping Cart Page
- Itemized cart table with images, selected color/size, and quantity adjustments.
- Real-time Free Shipping progress bar with dynamic dollar amount needed to unlock.
- Coupon code engine (supports `SAVE20` for 20% off and `WELCOME10` for 10% off).
- Order summary card with subtotal, discount, shipping, tax, and final total.
- "Continue Shopping" and "Proceed to Checkout" buttons.

### 6. Checkout Page & Checkout Protection Gate
- If a customer is logged in, they proceed directly to Checkout with their details pre-populated.
- If not logged in, clicking Checkout in Cart forwards them cleanly to the Sign In / Register Page, which returns them straight into Checkout upon sign-in.
- 2-column conversion-optimized layout.
- Customer Information form, Shipping Address form, Payment Method selection (Credit Card, PayPal, Apple Pay).
- Sticky order summary preview with line items and security badges.
- Place Order button with simulated processing loader.

### 7. Order Confirmation Page
- Green checkmark confirmation with unique Order Reference Number (e.g. `AUR-89421`).
- Delivery window estimate (e.g. Nov 12 – Nov 14).
- Receipt breakdown: purchased items, price paid, shipping destination, and payment method.
- Print Order Receipt button and Continue Shopping button.

### 8. Customer Sign In & Registration Page
- Dedicated full page for authentication.
- Sign In and Register tabs with form validation and show/hide password toggle.
- 1-click quick demo accounts for rapid testing (`👤 Alex` and `👤 Sarah`).

### 9. My Saved Wishlist Page
- Dedicated full page displaying all items saved with the heart icon.
- Actions: "Add All to Cart", individual add to cart, and "Clear Wishlist".

### 10. Track Your Order Page
- Dedicated full page for package tracking.
- Order number & email lookup.
- Real-time milestone stepper (Confirmed, Packed, Departed Hub, In Transit, Out for Delivery).

### 11. About Us Page
- Brand heritage, craft philosophy, and core principles (*Timeless Simplicity*, *Ethical & Sustainable*, *Uncompromising Quality*, *Human-First Support*).
- Impact metrics (50k+ orders delivered worldwide, 4.9/5 rating).

### 12. Contact Us Page
- Customer service inquiry form with topic/subject selector and order number linking.
- Direct helpline cards (Toll-Free Phone: `1-800-555-0199`, Email: `support@aurastore.com`, Hours, Fulfillment Center address).
- Interactive FAQ accordion for instant answers.

### 13. My Account & Order History Page
- Profile summary, verified member badge, and order history dashboard tracking all placed orders.
