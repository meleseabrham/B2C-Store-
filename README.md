# B2C-Store-

# Modern B2C E-Commerce Website (React + Tailwind CSS)

A modern, responsive, and minimalist B2C online shopping store frontend built in **React 18** and **Tailwind CSS**, designed based on the **Relume wireframes and styleguide** ([Project P3575263](https://www.relume.ai/app/project/P3575263_h4E5wwCm6yKlvEPfYsb_j4kcBn4OJDpZ4rxpRKP4DIo#mode=styleguide)).

---

## 🚀 Getting Started

To run the application locally:

```bash
# 1. Install dependencies (already pre-installed)
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

## 📱 Page Overview & Relume Sitemap Implementation

### 1. Home / Landing Page (Primary Focus)
- **Navbar:** Slate-blue header bar (`#537993`), cursive script "Logo", navigation links (Home, Shop, Categories, About), quick search button, and live cart counter badge.
- **Hero Header Section:** High-impact banner featuring the exact headline *"Everything you need, delivered fast"*, description, "Shop Now" and "Explore Categories" buttons, and trust metrics (Free 2-day delivery, 30-day money back guarantee).
- **Search Feature Section:** *"Find what you need, fast"* dedicated search bar with category selector and one-click trending search tags.
- **Services Section (Featured Categories):** Visual category cards with photography for *Electronics & Audio*, *Modern Fashion*, *Home & Living*, and *Lifestyle & Travel*.
- **Best-Selling Products Section:** *"Top picks"* 8-product grid with badges, star ratings, review counts, pricing, and 1-click Add-to-Cart.
- **New Arrivals Section:** *"Just in"* fresh product grid highlighting the latest releases.
- **CTA / Promo Section:** Limited-time flash sale banner with a real-time countdown timer and one-click coupon copy button (`SAVE20`).
- **Testimonial Section:** Verified buyer testimonials with star ratings and photos.
- **Newsletter Subscription:** *"Stay in the loop"* subscription card with 15% discount incentive.
- **Footer:** Deep slate blue (`#1e3547`) with brand story, customer care links, accepted payment methods (Visa, MC, Amex, Apple Pay, PayPal), and social icons.

### 2. Shop / Product Listing Page
- Responsive product grid with flexible 3 or 4 column layout toggle.
- Category filtering with real-time product counts.
- Price range slider with budget adjustment.
- Sort controls: *Most Popular*, *Newest Arrivals*, *Price: Low to High*, *Price: High to Low*, and *Highest Rated*.
- Filters for *On-Sale Only* and *In-Stock Only*.
- Search bar filtering and active filter pills with 1-click removal.

### 3. Product Details Page
- High-resolution image showcase with thumbnail switcher.
- Product name, SKU, rating stars, price, discount badge, and availability status.
- Color variant and size selection buttons.
- Quantity selector (+ / -), animated Add to Cart button, and instant "Buy Now" button.
- Value guarantees (Free 2-day delivery, 30-day returns, 2-year warranty).
- Tabbed specifications: *Description & Features*, *Technical Specifications*, *Shipping & Returns*.
- Related products grid to drive discovery.

### 4. Shopping Cart Page
- Itemized cart table with images, selected color/size, and quantity adjustments.
- Real-time Free Shipping progress bar with dynamic dollar amount needed to unlock.
- Coupon code engine (supports `SAVE20` for 20% off and `WELCOME10` for 10% off).
- Order summary card with subtotal, discount, shipping, tax, and final total.
- "Continue Shopping" and "Proceed to Checkout" buttons.

### 5. Checkout Page
- 2-column conversion-optimized layout.
- Customer Information form (name, email, phone).
- Shipping Address form (street, apartment, city, state, zip).
- Payment Method selection (Credit Card with card inputs, PayPal, Apple Pay, COD).
- Sticky order summary preview with line items and security badges.
- Place Order button with simulated processing loader.

### 6. Order Confirmation Page
- Green checkmark confirmation with unique Order Reference Number (e.g. `AUR-89421`).
- Delivery window estimate (e.g. Nov 12 – Nov 14).
- Receipt breakdown: purchased items, price paid, shipping destination, and payment method.
- Print Order Receipt button and Continue Shopping button.

### 7. About Page
- Brand narrative, heritage, craft philosophy, and core principles (*Timeless Simplicity*, *Ethical & Sustainable*, *Uncompromising Quality*, *Human-First Support*).
- Impact metrics (50k+ orders delivered worldwide, 4.9/5 rating).

### 8. Contact Page
- Customer service inquiry form with topic/subject selector and order number linking.
- Direct helpline cards (Toll-Free Phone: `1-800-555-0199`, Email: `support@aurastore.com`, Hours, Fulfillment Center address).
- Interactive FAQ accordion for instant answers.

### 9. Additional Interactive Features
- **Wishlist Drawer:** 1-click heart icon on all cards with dedicated side drawer to manage saved items.
- **Live Search Autocomplete:** Instant drop-down search matches as you type in the header.
- **Customer Reviews:** Interactive review submission modal on the product details page.
- **Quick View Modal:** Preview any product without leaving the catalog.

### 10. Authentication & Checkout Protection Gate
- **Register & Login System:** User registration with name, email, password, and quick 1-click demo login accounts (*Alex Morgan*, *Sarah Jenkins*).
- **Checkout Login Gate:** If a customer is logged in, they proceed directly to Checkout with their details pre-populated. If not logged in, they are prompted to sign in or create an account, after which they are seamlessly forwarded straight into the checkout flow.
- **Account & Orders Dashboard:** View verified member status, order history, placed packages, and live tracking status.
- **Sign Out / Logout:** Secure sign-out with instant state cleanup and safe redirection.

