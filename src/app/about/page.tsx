import Image from 'next/image';
import Navbar from '../../components/Navbar';
import MobileBottomNav from '../../components/MobileBottomNav';
import AnimatedSection from '../../components/AnimatedSection';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in">
              About Sumber Makmur
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-fade-in-delay">
              Crafting quality fashion since 2020, we believe in creating timeless pieces that combine comfort, style, and sustainability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Founded in 2020, Sumber Makmur began as a small dream to create high-quality, 
                  affordable fashion for everyone. What started in a small workshop has grown into 
                  a beloved brand known for its attention to detail and commitment to customer satisfaction.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  We source the finest materials and work with skilled artisans to ensure every piece 
                  meets our high standards. Our mission is to make fashion accessible while maintaining 
                  the quality and craftsmanship that sets us apart.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-neutral-900">10K+</h3>
                    <p className="text-neutral-600">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-neutral-900">500+</h3>
                    <p className="text-neutral-600">Products</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="relative h-96 lg:h-[500px] hover-lift">
                <Image
                  src="/image/Product-1.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Quality First</h3>
              <p className="text-neutral-600">
                We never compromise on quality. Every piece is carefully inspected to ensure it meets our high standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Customer Care</h3>
              <p className="text-neutral-600">
                Our customers are at the heart of everything we do. We strive to exceed expectations in every interaction.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Sustainability</h3>
              <p className="text-neutral-600">
                We're committed to sustainable practices and reducing our environmental impact through conscious choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The passionate people behind Sumber Makmur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/image/Product-1.jpg"
                    alt={`Team Member ${member}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Team Member {member}
                </h3>
                <p className="text-neutral-600 mb-3">Position Title</p>
                <p className="text-sm text-neutral-500">
                  Brief description about the team member and their role in the company.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileBottomNav />
    </div>
  );
}
