"use client";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-patriotic-navy text-white overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-patriotic-navy" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M54.627%200l.83.828-1.415%201.415L51.8%200h2.827zM0%2054.627l1.415-.828L0%2051.8v2.827zm54.627%205.373l-.83-.828L51.8%2060h2.827l1.415-1.415zM0%205.373l1.415.828L0%208.2V5.373zm54.627%205.373L51.8%2060h2.827l3.243-3.243-.828-.828zM5.373%200l-.828.83L8.2%200H5.373zM0%2054.627l1.415%201.415L0%2057.485V54.627zM48.97%205.373L51.8%208.2l-1.415-.828-1.415.828zm2.343%205.8L48.97%208.2l-.828.828L51.8%2012.6l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2017.43l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2023.257l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2029.085l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2034.914l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2040.742l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2046.57l1.414-1.415zm-2.343%205.8l-1.415-.828-1.415.828L51.8%2052.4l1.414-1.415z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="text-center">
          {/* Decorative Stars */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <span className="text-4xl text-patriotic-red">★</span>
              <span className="text-4xl text-white">★</span>
              <span className="text-4xl text-patriotic-red">★</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Making the Lives of American Heroes and their Families Better
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Help 4 America&apos;s Heroes
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" href="#donate">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" href="#programs">
              Our Programs
            </Button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-red">20+</div>
              <div className="text-gray-300">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-red">501(c)(3)</div>
              <div className="text-gray-300">Tax Exempt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-red">100%</div>
              <div className="text-gray-300">Dedicated to Veterans</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
