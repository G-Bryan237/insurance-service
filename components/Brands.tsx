export function Brands() {
  const brands = [
    { name: "Brand 1", logo: "/brands/brand1.png" },
    { name: "Brand 2", logo: "/brands/brand2.png" },
    { name: "Brand 3", logo: "/brands/brand3.png" },
    { name: "Brand 4", logo: "/brands/brand4.png" },
    { name: "Brand 5", logo: "/brands/brand5.png" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-base lg:text-lg font-semibold text-gray-700">
              Trusted and funded by <br className="hidden lg:block" /> more than 800 companies
            </h2>
          </div>

          {/* Brand logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 lg:gap-10">
            {brands.map((brand, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-12 w-24 lg:h-16 lg:w-40 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
