import React from 'react';
import HeroSection from './HeroSection';
import SearchFeatureSection from './SearchFeatureSection';
import CategorySection from './CategorySection';
import BestSellersSection from './BestSellersSection';
import NewArrivalsSection from './NewArrivalsSection';
import PromoBannerSection from './PromoBannerSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 1. Hero Header Section */}
      <HeroSection />

      {/* 2. Feature Section (Search bar allowing visitors to quickly find products) */}
      <SearchFeatureSection />

      {/* 3. Services / Category Section (Featured categories displayed as visually appealing cards) */}
      <CategorySection />

      {/* 4. Best-selling products grid with images, names, prices, ratings */}
      <BestSellersSection />

      {/* 5. New arrivals product grid showcasing latest items */}
      <NewArrivalsSection />

      {/* 6. CTA Section: Promotional offers and discount banner */}
      <PromoBannerSection />

      {/* 7. Testimonial Section: Customer testimonials and reviews */}
      <TestimonialsSection />

      {/* 8. Newsletter Section: Newsletter subscription form */}
      <NewsletterSection />
    </main>
  );
}

