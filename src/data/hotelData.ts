import { Room, Facility, GalleryItem, Attraction } from '../types/hotel';

import heroExteriorImg from '../assets/images/hero_hotel_exterior_1791191949752.jpg';
import deluxeRoomImg from '../assets/images/deluxe_room_1791191963417.jpg';
import superiorRoomImg from '../assets/images/superior_room_1791191974771.jpg';
import familyRoomImg from '../assets/images/family_room_1791191984972.jpg';
import premiumSuiteImg from '../assets/images/premium_suite_1791191994804.jpg';
import hotelLobbyImg from '../assets/images/hotel_lobby_1791192004733.jpg';
import bathroomImg from '../assets/images/hotel_bathroom_1791192015213.jpg';
import loungeImg from '../assets/images/hotel_lounge_1791192027926.jpg';

import malaysianReceptionImg from '../assets/images/ipoh_malaysian_reception_1791192338712.jpg';
import ipohBreakfastImg from '../assets/images/ipoh_breakfast_spread_1791192356229.jpg';
import ipohHeritageViewImg from '../assets/images/ipoh_heritage_views_1791192374649.jpg';

export const HOTEL_INFO = {
  name: 'HOTEL REGAL VISTA',
  tagline: 'Experience Comfort, Elegance & Exceptional Hospitality in Ipoh',
  phone: '+60 11-6251 2899',
  phoneClean: '+601162512899',
  address: 'No 2, The Host, Jalan Veerasamy, Kampung Jawa, 30300 Ipoh, Perak, Malaysia',
  email: 'reservations@hotelregalvista.com',
  whatsappUrl: 'https://wa.me/601162512899?text=Hello%20Hotel%20Regal%20Vista%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay.',
  googleMapsUrl: 'https://maps.google.com/?q=No+2,+The+Host,+Jalan+Veerasamy,+Kampung+Jawa,+30300+Ipoh,+Perak,+Malaysia',
  coordinates: {
    lat: 4.5936,
    lng: 101.0847,
  },
  checkInTime: '3:00 PM',
  checkOutTime: '12:00 PM',
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    subtitle: 'Comfortable and elegant accommodation for a relaxing stay.',
    description: 'Comfortable and elegant accommodation for a relaxing stay.',
    detailedDescription: 'Thoughtfully appointed with plush bedding, climate control, premium ambient lighting, and bespoke dark purple velvet accents. Perfect for solo travellers or couples seeking a quiet luxury retreat in Ipoh.',
    priceMYR: 188,
    originalPriceMYR: 220,
    capacity: '2 Guests',
    maxGuests: 2,
    bedType: '1 King Bed or 2 Single Beds',
    roomSize: '28 m²',
    image: deluxeRoomImg,
    galleryImages: [deluxeRoomImg, bathroomImg, loungeImg],
    amenities: [
      'High-Speed Free Wi-Fi',
      'Individual Air Conditioning',
      'Flat-screen Smart TV',
      'En-suite Bathroom with Rain Shower',
      'Complimentary Bottled Water & Coffee/Tea',
      'In-room Safe Box',
      'Hairdryer & Luxury Toiletries',
      'Daily Housekeeping'
    ],
    highlights: [
      'Ergonomic workstation',
      'Blackout curtains for restful sleep',
      'Crisp 400-thread count cotton linens',
      'City or tranquil courtyard views'
    ]
  },
  {
    id: 'superior',
    name: 'Superior Room',
    subtitle: 'A stylish room designed for guests seeking additional comfort.',
    description: 'A stylish room designed for guests seeking additional comfort.',
    detailedDescription: 'Featuring extended floor area, refined contemporary furnishings, elevated gold fixtures, and an inviting seating nook. Designed to offer superior relaxation after exploring Ipoh’s vibrant food trails and heritage sites.',
    priceMYR: 238,
    originalPriceMYR: 280,
    capacity: '2 - 3 Guests',
    maxGuests: 3,
    bedType: '1 Executive King Bed',
    roomSize: '34 m²',
    image: superiorRoomImg,
    galleryImages: [superiorRoomImg, bathroomImg, hotelLobbyImg],
    amenities: [
      'Ultra High-Speed Wi-Fi',
      'Whisper-quiet Air Conditioning',
      '50" HD Smart TV with Streaming',
      'Marble En-suite Bathroom',
      'Mini Fridge & Premium Tea/Coffee Bar',
      'Plush Bathrobes & Slippers',
      'Ironing Facilities',
      '24/7 Room Concierge Service'
    ],
    highlights: [
      'Spacious sitting area with plush armchairs',
      'Warm ambient dimmable lighting',
      'Walk-in rain shower with gold fittings',
      'Quiet acoustic soundproofing'
    ]
  },
  {
    id: 'family',
    name: 'Family Room',
    subtitle: 'A spacious option suitable for families and groups.',
    description: 'A spacious option suitable for families and groups.',
    detailedDescription: 'Generously proportioned with twin queen beds, ample storage space, and dedicated comfort areas for group relaxation. An ideal choice for families visiting Ipoh with kids or groups of friends travelling together.',
    priceMYR: 328,
    originalPriceMYR: 380,
    capacity: '4 Guests',
    maxGuests: 4,
    bedType: '2 Queen Beds',
    roomSize: '46 m²',
    image: familyRoomImg,
    galleryImages: [familyRoomImg, bathroomImg, loungeImg],
    amenities: [
      'High-Speed Wi-Fi for Multiple Devices',
      'Dual-zone Air Conditioning',
      '55" HD Smart TV',
      'Large Family Bathroom with Rain Shower',
      'Family Beverage & Snack Corner',
      'In-room Safe & Wardrobe',
      'Hairdryer & Extended Towel Set',
      'Daily Express Housekeeping'
    ],
    highlights: [
      'Two full-size plush Queen beds',
      'Extra luggage storage space',
      'Child-safe layout and power outlets',
      'Complimentary extra mineral water supply'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Room',
    subtitle: 'An elevated accommodation experience with a refined interior.',
    description: 'An elevated accommodation experience with a refined interior.',
    detailedDescription: 'Our flagship sanctuary of luxury, showcasing custom dark plum paneling, metallic gold handcrafted accents, a spacious lounge suite, and sweeping views over Ipoh town. Includes elite VIP welcome amenities.',
    priceMYR: 428,
    originalPriceMYR: 490,
    capacity: '2 Guests',
    maxGuests: 2,
    bedType: '1 Luxury Royal King Bed',
    roomSize: '52 m²',
    image: premiumSuiteImg,
    galleryImages: [premiumSuiteImg, bathroomImg, hotelLobbyImg, loungeImg],
    amenities: [
      'Dedicated High-Speed Fiber Wi-Fi',
      'Climate Control with Air Purifier',
      '65" 4K OLED TV with Premium Soundbar',
      'Spacious Marble Bathroom with Tub & Rain Shower',
      'Nespresso Coffee Machine & Gourmet Teas',
      'Luxury Velvet Dressing Gowns & Premium Slippers',
      'VIP Welcome Heritage Fruit Basket',
      'Priority Check-in & Late Check-out'
    ],
    highlights: [
      'Separate luxury lounge living area',
      'Hand-crafted gold brass decor details',
      'Panoramic floor-to-ceiling city vista',
      'Complimentary evening tea service'
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Seamless optical fiber internet connection available across all rooms, lobby, and guest areas.',
    iconName: 'Wifi',
    image: loungeImg,
    featureList: ['Unlimited devices', 'High-speed fiber connection', 'Secure guest network']
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Individually controlled modern climate systems in every room for optimal indoor comfort.',
    iconName: 'Wind',
    image: deluxeRoomImg,
    featureList: ['Individual room thermostat', 'Air purification filtration', 'Quiet nighttime mode']
  },
  {
    id: 'reception',
    title: '24/7 Reception',
    description: 'Our hospitable front desk team is always ready to assist with check-in, local tips, and guest requests.',
    iconName: 'Clock',
    image: malaysianReceptionImg,
    featureList: ['Round-the-clock desk assistance', 'Express check-in / check-out', 'Luggage storage service']
  },
  {
    id: 'parking',
    title: 'On-Site Parking',
    description: 'Secure, hassle-free parking facilities for registered hotel guests during their stay.',
    iconName: 'Car',
    image: heroExteriorImg,
    featureList: ['Protected parking spaces', '24/7 CCTV surveillance', 'Easy vehicle access']
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    description: 'Meticulous daily cleaning and room refreshment to ensure a spotless, comfortable atmosphere.',
    iconName: 'Sparkles',
    image: bathroomImg,
    featureList: ['Fresh linen replacement', 'Sanitized surfaces', 'Replenished luxury amenities']
  },
  {
    id: 'comfortable-rooms',
    title: 'Comfortable Guest Rooms',
    description: 'Elegantly furnished rooms equipped with premium mattresses, blackout drapery, and acoustic insulation.',
    iconName: 'Bed',
    image: superiorRoomImg,
    featureList: ['400-thread count cotton sheets', 'Acoustic soundproofing', 'Ergonomic seating & desk']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Twilight View of Hotel Regal Vista Exterior',
    category: 'exterior',
    categoryLabel: 'Hotel Exterior',
    image: heroExteriorImg,
    caption: 'The majestic dark purple facade and warm gold lighting welcoming guests in Ipoh, Perak.'
  },
  {
    id: 'gal-2',
    title: 'Warm Malaysian Reception Desk',
    category: 'lobby',
    categoryLabel: 'Lobby & Reception',
    image: malaysianReceptionImg,
    caption: 'Our welcoming reception team at Hotel Regal Vista front desk offering warm Malaysian hospitality.'
  },
  {
    id: 'gal-3',
    title: 'Authentic Ipoh White Coffee & Breakfast Spread',
    category: 'amenities',
    categoryLabel: 'Dining & Heritage',
    image: ipohBreakfastImg,
    caption: 'Traditional Ipoh white coffee, kaya toast, and dim sum breakfast served for hotel guests.'
  },
  {
    id: 'gal-4',
    title: 'Grand Hotel Reception Lobby',
    category: 'lobby',
    categoryLabel: 'Lobby & Reception',
    image: hotelLobbyImg,
    caption: 'Elegantly styled reception lounge featuring marble accents and warm hospitality.'
  },
  {
    id: 'gal-5',
    title: 'Deluxe Room King Sanctuary',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    image: deluxeRoomImg,
    caption: 'Plush velvet decorative cushions and crisp white bedding for a relaxing sleep.'
  },
  {
    id: 'gal-6',
    title: 'Superior Room Lounge Area',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    image: superiorRoomImg,
    caption: 'Stylish accommodations with ambient gold lighting and plush armchairs.'
  },
  {
    id: 'gal-7',
    title: 'Spacious Family Room Layout',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    image: familyRoomImg,
    caption: 'Two queen beds with rich purple and gold accents for family and group comfort.'
  },
  {
    id: 'gal-8',
    title: 'Flagship Premium Room Suite',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    image: premiumSuiteImg,
    caption: 'Sophisticated living space with handcrafted gold details and luxury seating.'
  },
  {
    id: 'gal-9',
    title: 'En-Suite Bathroom & Rain Shower',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: bathroomImg,
    caption: 'Polished marble finishes, gold fixtures, and glass-enclosed rain shower.'
  },
  {
    id: 'gal-10',
    title: 'Panoramic Ipoh Limestone Hills Vista',
    category: 'exterior',
    categoryLabel: 'Ipoh Scenery',
    image: ipohHeritageViewImg,
    caption: 'Breathtaking golden hour view of Ipoh limestone hills and historic shophouses from Hotel Regal Vista.'
  },
  {
    id: 'gal-11',
    title: 'Relaxing Hotel Guest Lounge',
    category: 'details',
    categoryLabel: 'Common Areas',
    image: loungeImg,
    caption: 'Serene guest lounge corner ideal for quiet conversations and complimentary tea.'
  }
];

export const IPOH_ATTRACTIONS: Attraction[] = [
  {
    name: 'Concubine Lane (Lorong Panglima)',
    distance: '1.2 km (4 mins drive)',
    description: 'Famous heritage alley filled with vibrant cafes, traditional Ipoh pastries, souvenir shops, and murals.',
    category: 'Culture & Heritage'
  },
  {
    name: 'Ipoh Railway Station (Taj Mahal of Ipoh)',
    distance: '1.5 km (5 mins drive)',
    description: 'Stunning Moorish and Victorian colonial architecture landmark surrounded by lush gardens.',
    category: 'Landmark'
  },
  {
    name: 'Ipoh Parade Shopping Mall',
    distance: '1.8 km (6 mins drive)',
    description: 'Premier shopping, dining, and entertainment destination in central Ipoh.',
    category: 'Shopping & Dining'
  },
  {
    name: 'Gerakipoh / Jalan Veerasamy Local Food Trails',
    distance: '0.2 km (2 mins walk)',
    description: 'Located right outside the hotel, offering famous Ipoh White Coffee, Bean Sprout Chicken, and Dim Sum.',
    category: 'Gastronomy'
  },
  {
    name: 'Kek Lok Tong & Sam Poh Tong Cave Temples',
    distance: '6.5 km (12 mins drive)',
    description: 'Breathtaking limestone cave temples with ornamental gardens and peaceful Buddha sanctuaries.',
    category: 'Nature & Heritage'
  }
];

export const HOTEL_REVIEWS = [
  {
    guestName: 'Dato’ Kenneth Tan',
    origin: 'Kuala Lumpur, Malaysia',
    rating: 5,
    roomStayed: 'Premium Room',
    comment: 'Hotel Regal Vista offers a truly refined boutique stay in Ipoh. The dark purple and gold aesthetic is breathtaking, and the bed comfort is 5-star standard. Staff were exceptionally courteous!',
    date: 'September 2026'
  },
  {
    guestName: 'Aisha & Imran Ahmad',
    origin: 'Singapore',
    rating: 5,
    roomStayed: 'Family Room',
    comment: 'Perfect location for our family holiday in Ipoh! The Family Room was spacious, spotless, and quiet. Great Wi-Fi and parking convenience. Highly recommended!',
    date: 'August 2026'
  },
  {
    guestName: 'Rachel Vance',
    origin: 'Melbourne, Australia',
    rating: 5,
    roomStayed: 'Superior Room',
    comment: 'Loved the attention to detail, from the rain shower gold fittings to the prompt 24/7 reception service. Walking distance to famous food spots in Ipoh town.',
    date: 'July 2026'
  }
];
