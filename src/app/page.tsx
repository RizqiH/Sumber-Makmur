import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import LatestProducts from '../components/LatestProducts';
import BestSellerProducts from '../components/BestSellerProducts';
import FullImageSection from '../components/FullImageSection';
import MobileBottomNav from '../components/MobileBottomNav';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Carousel Section */}
      <HeroCarousel />
      
      {/* Latest Products Section */}
      <LatestProducts />
      
      {/* Best Seller Products Section */}
      <BestSellerProducts />
      
      {/* Full Image Section */}
      <FullImageSection />
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
