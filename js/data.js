/* Project data — edit this file to update the cards on the home page AND the project details screens.
   Replace each "#" in `links` with your real Google Play / App Store URL. */
window.PROJECTS = [
  {
    id: 'farrah-now', name: 'Farrah now', kind: 'Social travel', emoji: '📍', g: 'g1',
    tagline: 'Discover nearby places, share moments and explore together.',
    summary: 'A social discovery app for iOS and Android that helps people find, view and share places around them.',
    highlights: ['Google Maps & geolocation to find nearby places', 'Google Sign-In and deep linking', 'Camera, microphone and photo library sharing'],
    chips: ['Flutter', 'Clean Architecture', 'MVVM', 'FCM'],
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
  }
];
