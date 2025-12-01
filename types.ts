export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  category?: string;
  preparationTime?: string;
  isSignature?: boolean;
  dietary?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  source: string; // e.g., "Michelin Guide", "The New York Times"
  rating?: number;
  title?: string;
  avatar?: string;
}

export interface EventType {
  id: string;
  title: string;
  capacity: string;
  description: string;
}
