// Travel Agency - Redesigned Vanilla JavaScript

const destinationsData = [
  { id: 1, name: "Bali, Indonesia", category: "Beach", duration: "7 days", price: 1299, rating: 4.9, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", description: "Tropical paradise with stunning beaches and vibrant culture", highlights: ["Ubud Monkey Forest", "Tanah Lot Temple", "Nusa Penida Day Trip", "Traditional Cooking Class"] },
  { id: 2, name: "Santorini, Greece", category: "Romance", duration: "5 days", price: 1899, rating: 4.8, image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", description: "Iconic white architecture and breathtaking sunsets", highlights: ["Oia Sunset Cruise", "Wine Tasting Tour", "Private Beach Dinner", "Caldera Hiking"] },
  { id: 3, name: "Kyoto, Japan", category: "Culture", duration: "10 days", price: 2199, rating: 4.9, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", description: "Ancient temples, traditional gardens, and cherry blossoms", highlights: ["Tokyo Food Tour", "Mount Fuji Day Trip", "Kyoto Temple Stay", "Tea Ceremony Experience"] },
  { id: 4, name: "Maldives", category: "Luxury", duration: "6 days", price: 3499, rating: 4.7, image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", description: "Overwater bungalows and crystal clear waters", highlights: ["Overwater Villa Stay", "Private Yacht Excursion", "Spa & Wellness", "Underwater Dining"] }
];

const testimonialsData = [
  { quote: "The best travel experience I have ever had. Everything was perfectly organized from start to finish.", author: "Sarah Johnson", location: "Bali Trip 2024" },
  { quote: "Exceptional service and attention to detail. Our guide knew all the hidden spots that tourists never see.", author: "Michael Chen", location: "Japan Tour 2024" },
  { quote: "Stress-free booking and amazing value. The 24/7 support gave us peace of mind throughout our honeymoon.", author: "Emma and James", location: "Maldives Honeymoon 2024" }
];

const valuesData = [
  { title: "Authenticity", description: "We connect you with genuine local experiences, not tourist traps." },
  { title: "Sustainability", description: "Responsible tourism that preserves destinations for future generations." },
  { title: "Personalization", description: "Every journey is tailored to your interests, pace, and preferences." },
  { title: "Trust", description: "Transparent pricing, honest advice, and 24/7 support you can count on." }
];

const teamData = [
  { name: "Alexandra Morrison", role: "Founder & CEO", bio: "Twenty years in the travel industry, visited eighty-five countries.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "James Chen", role: "Head of Operations", bio: "Expert in logistics and destination management.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Maria Santos", role: "Travel Experience Designer", bio: "Creates unique itineraries and cultural experiences.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "David Okafor", role: "Customer Success Lead", bio: "Ensures every traveler has an exceptional journey.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" }
];

const milestonesData = [
  { year: "2004", title: "The First Journey", description: "Alexandra Morrison launches Travel Agency with a single client and a rented van." },
  { year: "2010", title: "Fifty Destinations", description: "The collection grows from one region to six continents." },
  { year: "2016", title: "The Collective", description: "Local guides, designers, and conservationists join the agency." },
  { year: "2024", title: "Fifty Thousand Travelers", description: "Travel Agency reaches its fiftieth thousand happy customer." }
];
  {
    id: 1,
    name: "Bali Paradise Escape",
    category: "Beach",
    duration: "7 days",
    price: 1299,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Experience the magic of Bali with visits to ancient temples, rice terraces, and pristine beaches.",
    highlights: ["Ubud Monkey Forest", "Tanah Lot Temple", "Nusa Penida Day Trip", "Traditional Cooking Class"]
  },
  {
    id: 2,
    name: "Santorini Dream",
    category: "Romance",
    duration: "5 days",
    price: 1899,
    rating: 4.8,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    description: "Romantic getaway to the iconic Greek island with stunning sunsets and white-washed architecture.",
    highlights: ["Oia Sunset Cruise", "Wine Tasting Tour", "Private Beach Dinner", "Caldera Hiking"]
  },
  {
    id: 3,
    name: "Japan Cultural Journey",
    category: "Culture",
    duration: "10 days",
    price: 2199,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    description: "Immerse yourself in Japanese culture from Tokyo's neon streets to Kyoto's ancient temples.",
    highlights: ["Tokyo Food Tour", "Mount Fuji Day Trip", "Kyoto Temple Stay", "Tea Ceremony Experience"]
  },
  {
    id: 4,
    name: "Maldives Luxury Retreat",
    category: "Luxury",
    duration: "6 days",
    price: 3499,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    description: "Ultimate luxury in overwater villas with private pools and world-class spa treatments.",
    highlights: ["Overwater Villa Stay", "Private Yacht Excursion", "Spa & Wellness", "Underwater Dining"]
  },
  {
    id: 5,
    name: "Swiss Alps Adventure",
    category: "Adventure",
    duration: "8 days",
    price: 2499,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    description: "Hike through breathtaking Alpine landscapes and charming mountain villages.",
    highlights: ["Matterhorn Glacier Paradise", "Jungfraujoch Railway", "Interlaken Paragliding", "Chocolate Factory Tour"]
  },
  {
    id: 6,
    name: "Thailand Island Hopping",
    category: "Beach",
    duration: "9 days",
    price: 1599,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    description: "Explore Thailand's most beautiful islands with snorkeling, kayaking, and beach parties.",
    highlights: ["Phi Phi Islands", "Maya Bay", "Railay Beach Rock Climbing", "Full Moon Party"]
  },
  {
    id: 7,
    name: "Italian Romance Tour",
    category: "Romance",
    duration: "12 days",
    price: 2799,
    rating: 4.9,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    description: "Fall in love with Italy - from Venice's canals to Rome's ancient ruins and Tuscany's hills.",
    highlights: ["Venice Gondola Ride", "Florence Art Tour", "Tuscany Wine Tasting", "Rome Colosseum VIP"]
  },
  {
    id: 8,
    name: "Peru Machu Picchu Trek",
    category: "Adventure",
    duration: "9 days",
    price: 1899,
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    description: "Trek the ancient Inca Trail to Machu Picchu and explore the Sacred Valley.",
    highlights: ["4-Day Inca Trail", "Machu Picchu Sunrise", "Sacred Valley Tour", "Cusco Cultural Experience"]
  }
];

const bookingDestinations = [
  { value: "bali", label: "Bali Paradise Escape - 7 days - $1,299", price: 1299 },
  { value: "santorini", label: "Santorini Dream - 5 days - $1,899", price: 1899 },
  { value: "japan", label: "Japan Cultural Journey - 10 days - $2,199", price: 2199 },
  { value: "maldives", label: "Maldives Luxury Retreat - 6 days - $3,499", price: 3499 },
  { value: "swiss", label: "Swiss Alps Adventure - 8 days - $2,499", price: 2499 },
  { value: "thailand", label: "Thailand Island Hopping - 9 days - $1,599", price: 1599 },
  { value: "italy", label: "Italian Romance Tour - 12 days - $2,799", price: 2799 },
  { value: "peru", label: "Peru Machu Picchu Trek - 9 days - $1,899", price: 1899 },
  { value: "custom", label: "Custom Tour Request", price: 0 }
];
