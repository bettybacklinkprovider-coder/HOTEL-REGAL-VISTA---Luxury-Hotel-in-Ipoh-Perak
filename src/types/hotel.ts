export interface Room {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  priceMYR: number;
  originalPriceMYR?: number;
  capacity: string;
  maxGuests: number;
  bedType: string;
  roomSize: string;
  image: string;
  galleryImages: string[];
  amenities: string[];
  highlights: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
  featureList?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'exterior' | 'lobby' | 'amenities' | 'details';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests?: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
  category: string;
}
