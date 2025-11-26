module.exports = {
  async redirects() {
    return [
      // ========================================
      // SBA CALCULATOR PAGES → SBACalculators.com
      // ========================================
      {
        source: '/calculators/sba',
        destination: 'https://sbacalculators.com/calculators/sba-7a',
        permanent: true,
      },
      {
        source: '/calculators/comparison',
        destination: 'https://sbacalculators.com/calculators/comparison',
        permanent: true,
      },
      {
        source: '/calculators/business-ops',
        destination: 'https://sbacalculators.com/',
        permanent: true,
      },
      {
        source: '/calculators/specialized',
        destination: 'https://sbacalculators.com/calculators/sba-express',
        permanent: true,
      },
      {
        source: '/calculators/real-estate',
        destination: 'https://sbacalculators.com/',
        permanent: true,
      },
      {
        source: '/calculators',
        destination: 'https://sbacalculators.com/',
        permanent: true,
      },
      
      // ========================================
      // EQUIPMENT PAGES → EquipmentCalculators.com
      // ========================================
      {
        source: '/calculators/equipment',
        destination: 'https://equipmentcalculators.com/calculators/equipment-lease',
        permanent: true,
      },
      {
        source: '/calculators/equipment/construction-equipment',
        destination: 'https://equipmentcalculators.com/industry/construction/equipment-financing',
        permanent: true,
      },
      {
        source: '/calculators/equipment/restaurant-equipment',
        destination: 'https://equipmentcalculators.com/industry/restaurants/equipment-financing',
        permanent: true,
      },
      {
        source: '/calculators/equipment/medical-equipment',
        destination: 'https://equipmentcalculators.com/calculators/medical',
        permanent: true,
      },
      {
        source: '/calculators/equipment/used-equipment-loan',
        destination: 'https://equipmentcalculators.com/calculators/equipment-loan',
        permanent: true,
      },
      {
        source: '/calculators/equipment/heavy-machinery',
        destination: 'https://equipmentcalculators.com/equipment/excavators',
        permanent: true,
      },
      {
        source: '/calculators/equipment/vehicle-fleet',
        destination: 'https://equipmentcalculators.com/equipment/delivery-vans',
        permanent: true,
      },
      {
        source: '/calculators/equipment/manufacturing-equipment',
        destination: 'https://equipmentcalculators.com/industry/manufacturing/equipment-financing',
        permanent: true,
      },
      {
        source: '/calculators/equipment/equipment-lease-vs-buy',
        destination: 'https://equipmentcalculators.com/compare/lease-vs-loan',
        permanent: true,
      },
      
      // ========================================
      // BLOG PAGES → SBACalculators.com
      // ========================================
      {
        source: '/blog/industry-specific-financing-guide',
        destination: 'https://sbacalculators.com/how-to/sba-eligibility-requirements',
        permanent: true,
      },
      {
        source: '/blog/business-loan-options',
        destination: 'https://sbacalculators.com/sba-loan-calculators-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/comparing-financing-options-guide',
        destination: 'https://sbacalculators.com/sba-7a-vs-504-vs-express-comparison',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://sbacalculators.com/',
        permanent: true,
      },
      
      // ========================================
      // UTILITY PAGES
      // ========================================
      {
        source: '/about',
        destination: 'https://sbacalculators.com/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://sbacalculators.com/contact',
        permanent: true,
      },
      {
        source: '/terms',
        destination: 'https://sbacalculators.com/terms',
        permanent: true,
      },
      {
        source: '/qualify',
        destination: 'https://sbacalculators.com/how-to/sba-eligibility-requirements',
        permanent: true,
      },
      
      // ========================================
      // HOMEPAGE & CATCH-ALL
      // ========================================
      {
        source: '/',
        destination: 'https://sbacalculators.com/',
        permanent: true,
      },
      // Note: Removed catch-all /:path* to allow sitemap.xml, robots.txt, and other static files to be served
      // Any undefined routes will naturally show 404, which is fine for a redirect-only site
    ]
  },
}

