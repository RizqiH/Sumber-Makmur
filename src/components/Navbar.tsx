import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <div className="w-10 h-10 bg-neutral-900 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-neutral-800">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
            <span className="hidden sm:block text-xl font-bold text-neutral-900 transition-colors duration-200">Sumber Makmur</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-900 hover:text-neutral-600 transition-all duration-300 font-medium relative group">
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-neutral-900 hover:text-neutral-600 transition-all duration-300 font-medium relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-neutral-900 hover:text-neutral-600 transition-all duration-300 font-medium relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/shop" className="text-neutral-900 hover:text-neutral-600 transition-all duration-300 font-medium relative group">
              <span>Shop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
