/* Project data — edit this file to update the cards on the home page AND the project details screens.
   Replace each "#" in `links` with your real Google Play / App Store URL.
   `icon` is the app icon shown on the home page (hero + cards), `cover` the app screen used on project pages, `images` the Screenshots section. */
window.PROJECTS = [
  {
    id: 'farrah-now', name: 'Farrah now', kind: 'Social travel', emoji: '📍', g: 'g1',
    tagline: 'Discover nearby places, share moments and explore together.',
    summary: 'A social discovery app for iOS and Android that helps people find, view and share places around them.',
    highlights: ['Google Maps & geolocation to find nearby places', 'Google Sign-In and deep linking', 'Camera, microphone and photo library sharing'],
    chips: ['Flutter', 'Clean Architecture', 'MVVM', 'FCM'],
    images: ['assets/projects/farrah-now/1.webp', 'assets/projects/farrah-now/2.webp', 'assets/projects/farrah-now/3.webp'],
    cover: 'assets/projects/farrah-now/cover.webp',
    icon: 'assets/projects/farrah-now/icon.png',
    overview: 'A cross-platform social discovery app built with Flutter for iOS and Android. Users find and view nearby places on the map, sign in with Google, and share photos and audio, all on a scalable codebase structured with Clean Architecture and the MVVM pattern.',
    facts: [['Platforms', 'iOS & Android'], ['Framework', 'Flutter & Dart'], ['Architecture', 'Clean Architecture · MVVM'], ['Notifications', 'Firebase Cloud Messaging']],
    features: [
      ['Nearby places', 'Google Maps API and geolocation let users find and view places around them.'],
      ['Secure sign-in', 'Google Sign-In and deep linking for a secure, seamless login experience.'],
      ['Media sharing', 'Camera, microphone and photo library integration for sharing moments.'],
      ['Real-time alerts', 'Push notifications delivered with Firebase Cloud Messaging.']
    ],
    stack: {
      'Framework': ['Flutter', 'Dart'],
      'Architecture': ['Clean Architecture', 'MVVM'],
      'Maps & location': ['Google Maps API', 'Geolocation'],
      'Auth & linking': ['Google Sign-In', 'Deep Linking'],
      'Device APIs': ['Camera', 'Microphone', 'Photo Library'],
      'Messaging': ['Firebase Cloud Messaging']
    },
    links: { play: '#', store: '#' }
  },
  {
    id: 'mv-limousine', name: 'MV Limousine', kind: 'Car rental', emoji: '🚘', g: 'g2',
    tagline: 'Standard and VIP car rental with live pricing and tracking.',
    summary: 'A rental experience with two service tiers, live pricing, driver availability and multi-step booking.',
    highlights: ['Google Maps & Places for delivery and tracking links', 'Complex state handled with Cubit', 'Data layer on a RESTful Laravel API'],
    chips: ['Flutter', 'Cubit', 'Google Places', 'Laravel API', 'FCM'],
    images: ['assets/projects/mv-limousine/1.webp', 'assets/projects/mv-limousine/2.webp', 'assets/projects/mv-limousine/3.webp'],
    cover: 'assets/projects/mv-limousine/cover.webp',
    icon: 'assets/projects/mv-limousine/icon.png',
    overview: 'A cross-platform car rental app supporting two distinct service tiers: Standard and VIP. It handles delivery locations, dynamic tracking links for orders and multi-step booking workflows, on top of a RESTful Laravel API.',
    facts: [['Platforms', 'iOS & Android'], ['State management', 'Cubit (BLoC)'], ['Backend', 'RESTful Laravel API'], ['Maps', 'Google Maps & Places SDK']],
    features: [
      ['Two service tiers', 'Standard and VIP experiences supported in one app.'],
      ['Delivery & tracking', 'Google Maps & Places SDK handle delivery locations and generate dynamic tracking links for orders.'],
      ['Live booking logic', 'Cubit manages real-time price calculations, driver availability and multi-step booking workflows.'],
      ['Robust data layer', 'Interacts with a RESTful Laravel API for car data, owner profiles and order history.'],
      ['Push notifications', 'Real-time updates delivered with Firebase Cloud Messaging.']
    ],
    stack: {
      'Framework': ['Flutter', 'Dart'],
      'State management': ['Cubit (BLoC)'],
      'Backend': ['RESTful Laravel API'],
      'Maps & places': ['Google Maps SDK', 'Google Places SDK'],
      'Messaging': ['Firebase Cloud Messaging']
    },
    links: { play: '#', store: '#' }
  },
  {
    id: 'babytrack', name: 'BabyTrack', kind: 'Baby care · On-device AI', emoji: '👶', g: 'g3',
    tagline: 'Growth tracking and real-time cry detection, in a Liquid Glass interface.',
    summary: 'Growth tracking, analytics and real-time cry detection, wrapped in a custom Liquid Glass interface.',
    highlights: ['On-device TensorFlow Lite cry classifier', 'Dio networking with token-refresh interceptors', 'Arabic & English with full RTL, light & dark themes'],
    chips: ['Riverpod', 'go_router', 'TFLite', 'fl_chart', 'Dio'],
    images: ['assets/projects/babytrack/1.webp', 'assets/projects/babytrack/2.webp', 'assets/projects/babytrack/3.webp'],
    cover: 'assets/projects/babytrack/cover.webp',
    icon: 'assets/projects/babytrack/icon.png',
    overview: 'A cross-platform baby care app for iOS and Android with 20+ screens, real-time cry detection, growth tracking and analytics. It pairs an on-device TensorFlow Lite audio classifier with a server-side prediction API, and wraps everything in a custom Liquid Glass UI.',
    facts: [['Platforms', 'iOS & Android'], ['State management', 'Riverpod'], ['Navigation', 'go_router'], ['On-device AI', 'TensorFlow Lite']],
    features: [
      ['Real-time cry detection', 'An on-device TensorFlow Lite audio classifier, alongside a server-side prediction API.'],
      ['Growth tracking & analytics', '20+ screens with animated dashboards and interactive charts built with fl_chart.'],
      ['Robust networking', 'Dio with token-refresh interceptors, integrating Laravel and Sanctum REST APIs for authentication, baby profiles and notifications.'],
      ['Arabic & English', 'Full localization with RTL support and persistent light and dark themes.'],
      ['Liquid Glass UI', 'A custom glass-style interface with animated dashboards.'],
      ['Secure by default', 'flutter_secure_storage for credentials and Firebase Cloud Messaging for push notifications.']
    ],
    stack: {
      'Framework': ['Flutter', 'Dart'],
      'State & navigation': ['Riverpod', 'go_router'],
      'Networking': ['Dio', 'Token-refresh interceptors', 'Laravel Sanctum REST APIs'],
      'Machine learning': ['TensorFlow Lite', 'Server-side prediction API'],
      'UI & charts': ['Liquid Glass UI', 'fl_chart', 'Arabic/English RTL', 'Light & dark themes'],
      'Security & messaging': ['flutter_secure_storage', 'Firebase Cloud Messaging']
    },
    links: { play: '#', store: '#' }
  },
  {
    id: 'foteek', name: 'Foteek', kind: 'E-commerce · Footwear', emoji: '👟', g: 'g4',
    tagline: 'A sneaker store — brands, wishlist, cart and live order tracking.',
    summary: 'A footwear shopping app with brand filters, product discovery, wishlist, cart and end-to-end order tracking.',
    highlights: ['Brand discovery — Nike, Adidas, Puma, Reebok', 'Order tracking across All, Active, Completed and Cancelled', 'Wishlist, cart and profile in one clean retail UI'],
    chips: ['Flutter', 'E-commerce', 'Search & filters', 'Order tracking'],
    images: ['assets/projects/foteek/1.webp', 'assets/projects/foteek/2.webp', 'assets/projects/foteek/3.webp'],
    cover: 'assets/projects/foteek/cover.webp',
    icon: 'assets/projects/foteek/icon.png',
    overview: 'A cross-platform footwear store where customers discover sneakers by brand, search the catalogue, save favourites to a wishlist and follow every order from confirmation to delivery. The UI pairs a monochrome base with a single strong accent, keeping product photography front and centre.',
    facts: [['Platforms', 'iOS & Android'], ['Category', 'E-commerce · Footwear'], ['Core flows', 'Search · Wishlist · Cart · Orders'], ['Order states', 'All · Active · Completed · Cancelled']],
    features: [
      ['Brand discovery', 'A brand row and filters let shoppers jump straight to Nike, Adidas, Puma and Reebok.'],
      ['Featured products', 'Home surfaces featured products with favourites and quick product cards.'],
      ['Wishlist & cart', 'Save products for later and collect picks into a single cart before checkout.'],
      ['Order tracking', 'Every order shows its live status — pending confirmation through to completed or cancelled.'],
      ['Profile & notifications', 'A lightweight profile tab with notifications and account settings.']
    ],
    stack: {
      'Framework': ['Flutter', 'Dart'],
      'UI': ['Search & brand filters', 'Product grids & cards', 'Cart & wishlist'],
      'Flows': ['Order history', 'Order status tracking', 'Notifications']
    },
    links: { play: '#', store: '#' }
  },
  {
    id: 'rbcs', name: 'RBCS', kind: 'E-learning · Medical', emoji: '🩺', g: 'g5',
    tagline: 'A medical learning hub — classes, specialties and mentors.',
    summary: 'An e-learning app for medical learners: categorised classes, free video previews, lesson breakdowns and top mentors.',
    highlights: ['Class catalogue by category and specialty', 'Course detail with lessons, reviews and free previews', 'Mentor profiles, ratings and favourites'],
    chips: ['Flutter', 'E-learning', 'Video lessons', 'Course detail'],
    images: ['assets/projects/rbcs/1.webp', 'assets/projects/rbcs/2.webp', 'assets/projects/rbcs/3.webp'],
    cover: 'assets/projects/rbcs/cover.webp',
    icon: 'assets/projects/rbcs/icon.png',
    overview: 'A medical learning hub that organises classes, specialties and mentors around one home feed. Learners browse categories, open a class detail screen with a free video preview, work through structured lessons and keep the classes they care about in favourites.',
    facts: [['Platforms', 'iOS & Android'], ['Domain', 'Medical education'], ['Content', 'Classes · Lessons · Mentors'], ['Extras', 'Ratings · Free previews']],
    features: [
      ['Learning hub home', 'Greeting header, category carousel, featured classes and a top-mentor rail.'],
      ['Class detail', 'Video hero with a free preview, category, duration, lesson count and mentor.'],
      ['Structured lessons', 'Expandable lesson lists with sections, free items and locked content.'],
      ['Ratings & reviews', 'Star ratings and reviews for classes, plus a tools tab per class.'],
      ['Favourites', 'Save classes and mentors to revisit later.']
    ],
    stack: {
      'Framework': ['Flutter', 'Dart'],
      'UI': ['Category carousels', 'Video previews', 'Tabbed class detail'],
      'Flows': ['Search & filters', 'Favourites', 'Mentor profiles']
    },
    links: { play: '#', store: '#' }
  },
  {
    id: 'gobite', name: 'GoBite', kind: 'Food delivery · RTL', emoji: '🍔', g: 'g6',
    tagline: 'Order food the easy way — restaurants, offers and fast delivery.',
    summary: 'An Arabic (RTL) food ordering app with restaurants, daily offers, favourites, cart and order tracking.',
    highlights: ['Full Arabic interface with complete RTL support', 'Restaurant menus with categories, discounts and ratings', 'Cart, favourites and order history'],
    chips: ['Flutter', 'Arabic RTL', 'Food ordering', 'Cart & checkout'],
    images: ['assets/projects/gobite/1.webp', 'assets/projects/gobite/2.webp', 'assets/projects/gobite/3.webp'],
    cover: 'assets/projects/gobite/cover.webp',
    icon: 'assets/projects/gobite/icon.png',
    overview: 'An Arabic food ordering app built right-to-left from the ground up. Customers pick a restaurant, browse a menu with categories and discounts, add items to the cart and follow the order — with first-order offers and daily promos built into the home feed.',
    facts: [['Platforms', 'iOS & Android'], ['Language', 'Arabic · Full RTL'], ['Core flows', 'Restaurants · Menu · Cart · Orders'], ['Promos', 'Discounts & first-order offers']],
    features: [
      ['Restaurant discovery', 'A restaurant list with search, ratings and delivery info for the customer area.'],
      ['Menu & categories', 'Dish grids with prices, ratings, discount badges and category chips.'],
      ['Favourites & cart', 'Heart any dish, then collect the order in a cart before checking out.'],
      ['Orders', 'Order history and live order status from the customer account.'],
      ['Offers', 'First-order discounts and promo banners surfaced on the home feed.']
    ],
    stack: {
      'Framework': ['Flutter', 'Dart'],
      'Localization': ['Arabic', 'Full RTL layouts'],
      'UI': ['Menu grids', 'Cart & checkout', 'Offers & banners'],
      'Flows': ['Restaurant list', 'Order history', 'Favourites']
    },
    links: { play: '#', store: '#' }
  }
];
