/* Project data — edit this file to update the cards on the home page AND the case-study modals.
   Replace each "#" in `links` with your real Google Play / App Store / GitHub repository URL.
   `icon` is the app icon shown on the home page (hero + cards), `cover` the app screen used on cards & case studies, `images` the screenshot carousel. */
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
    challenge: {
      problem: 'Fuse continuous device geolocation with map-backed place discovery while keeping the UI free of platform-service concerns, and make authenticated sessions survive deep-link entry from external surfaces.',
      solution: 'Clean Architecture under MVVM: domain use-cases stay framework-agnostic, repositories abstract Maps, location and auth providers, and view-models expose immutable state streams. Auth session lifecycle is first-class state so deep links mid-session resolve without re-auth; media capture sits behind an injectable device-API gateway for testability.'
    },
    polish: [
      'Location updates debounced and batched so map interaction stays on the main path',
      'Media compression handled off the UI thread',
      'Responsive layouts across phone classes',
      'FCM notifications surfaced without blocking the UI'
    ],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.wanderr.app&hl=en',
      store: 'https://apps.apple.com/us/app/farrah-now/id6760767174?l=ar',
      repo: '#'
    }
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
    challenge: {
      problem: 'A single booking funnel spans two service tiers with live price recalculation, driver availability, delivery-location selection, and an order lifecycle that must stay consistent across multi-step navigation and intermittent connectivity.',
      solution: 'The booking flow is an explicit Cubit state machine — typed states with guarded transitions per step, with price recalculation as a pure derivation of current state. Dio interceptors centralize auth, error normalization and retries behind a repository layer over the Laravel API; Maps and Places sit behind service abstractions; order tracking is a reactive stream.'
    },
    polish: [
      'Booking wizard state preserved across route transitions',
      'Price and availability calls debounced to cut API chatter',
      'Live tracking stays smooth under status updates',
      'Dual-tier flows responsive across devices'
    ],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.Triple.MVLimousine&hl=en',
      store: 'https://apps.apple.com/eg/app/mv-limousine/id6757188466',
      repo: '#'
    }
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
    challenge: {
      problem: 'Run continuous audio-based cry classification on-device with acceptable latency and battery cost, reconcile model inferences with server-side predictions, keep auth fresh across long sessions, and drive 20+ chart-heavy screens inside a heavily animated custom UI.',
      solution: 'A two-tier ML pipeline: on-device TensorFlow Lite classifier for real-time, privacy-preserving detection plus a server-side prediction API, reconciled at the domain level. Riverpod providers stream classification events reactively; Dio token-refresh uses single-flight refresh with queued replay to eliminate race conditions; credentials live in flutter_secure_storage; go_router keeps the 20+ screen tree declarative.'
    },
    polish: [
      'Inference runs off the UI isolate',
      'fl_chart dashboards animate without jank via scoped Riverpod rebuilds',
      'Full Arabic RTL with persistent light and dark themes',
      'Secure credential storage by default'
    ],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.babytrackk.app',
      store: 'https://apps.apple.com/us/app/baby-track/id6770317630',
      repo: '#'
    }
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
    challenge: {
      problem: 'Keep catalogue search, brand filters, wishlist mutations and cart operations instantly consistent while orders move through four lifecycle states — without stale UI or duplicate sources of truth between tabs.',
      solution: 'Immutable domain models behind a repository-backed data layer, with presentation state derived reactively so a wishlist mutation reflects instantly across grids, cards and detail screens. Order status is a single enum driving both tab filters and per-item presentation; search and brand filters compose as pure predicate layers over the catalogue stream.'
    },
    polish: [
      'Lazy product grids with image caching for smooth scrolling',
      'Optimistic cart and wishlist actions with API reconciliation',
      'Single-accent design system keeps product photography dominant',
      'Lightweight profile and notifications preserve navigation speed'
    ],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.footek.triple&hl=en',
      store: 'https://apps.apple.com/au/app/footek/id6795145200',
      repo: '#'
    }
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
    challenge: {
      problem: 'Present a deep content hierarchy — category to class to lesson sections with free vs. locked items — alongside ratings, reviews and mentors, without overwhelming learners or duplicating state logic per content type.',
      solution: 'A layered domain graph of categories, classes, lesson sections and mentors behind a content repository; the class-detail screen composes reusable sections from one view-model. Free-preview vs. locked access rules live at the domain level; favourites are a reactive persisted set syncing hearts across rails and cards; video playback sits behind its own abstraction.'
    },
    polish: [
      'Carousels and lesson lists virtualized for smooth scrolling',
      'Expandable lesson sections animate without layout thrash',
      'Tabs preserve scroll and playback state',
      'Ratings rendered from pre-aggregated streams to avoid waterfalls'
    ],
    links: { play: '#', store: '#', repo: '#' }
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
    challenge: {
      problem: 'Deliver a production ordering experience that is natively RTL — not a mirrored afterthought — while cart, favourites, promo eligibility and order status stay consistent across deep navigation stacks.',
      solution: 'RTL designed in from the design-system level: direction-aware spacing and alignment plus ARB-based localization so mirrored layouts are structural. The cart is one reactive aggregate with promo eligibility and totals as pure functions; restaurants, menus and discounts stream through a catalogue repository; order tracking drives history and live status from a single stream.'
    },
    polish: [
      'Menu grids lazy-loaded with cached imagery',
      'Promo eligibility resolved client-side against cart state',
      'RTL transitions and gestures validated at edge cases',
      'Responsive across device classes with native-feeling RTL motion'
    ],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.gobite.triple',
      store: 'https://apps.apple.com/ng/app/gobite/id6800733653',
      repo: '#'
    }
  }
];
