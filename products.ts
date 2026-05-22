export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  badge?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'ProBook Ultra X1',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    description:
      'The ProBook Ultra X1 redefines what a laptop can be. Engineered with a 13th-generation Intel Core i9 processor and up to 64GB of DDR5 RAM, it handles the most demanding workloads with ease. The stunning 16-inch OLED display delivers 3.5K resolution with 120Hz refresh rate and 100% DCI-P3 color coverage, making it perfect for creative professionals. An 18-hour battery life and whisper-quiet cooling system make it the ultimate tool for work anywhere.',
    shortDescription:
      'Blazing-fast performance in an ultra-thin chassis. Perfect for power users who never compromise.',
    price: 2499,
    category: 'Laptops',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Apex Studio Monitor 4K',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    description:
      'Designed for creative professionals, the Apex Studio Monitor 4K delivers breathtaking colour accuracy with Delta E < 1. The 32-inch IPS panel covers 99% of the Adobe RGB colour space and supports HDR600 for dazzling highlights and deep shadows. With USB-C 90W charging, a built-in KVM switch, and an ergonomic stand with full articulation, it becomes the centrepiece of any professional setup.',
    shortDescription:
      'True-to-life colours and stunning 4K clarity for designers, photographers, and video editors.',
    price: 1199,
    category: 'Monitors',
    badge: 'New',
  },
  {
    id: 3,
    name: 'SoundSphere Pro Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description:
      'Experience sound the way artists intended. The SoundSphere Pro features adaptive active noise cancellation that adjusts to your environment in real-time, blocking out distractions without sacrificing audio quality. 40mm custom drivers produce a wide soundstage with authoritative bass and crystalline highs. Up to 40 hours of playback, multipoint Bluetooth 5.3 connection, and a premium aluminium-and-leather build make these the last headphones you will ever need.',
    shortDescription:
      'Studio-grade audio meets all-day comfort with 40-hour battery and adaptive noise cancellation.',
    price: 379,
    category: 'Audio',
  },
  {
    id: 4,
    name: 'KeyForge Mechanical Keyboard',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    description:
      'Every keystroke matters. The KeyForge Mechanical Keyboard pairs custom linear switches with a solid aluminium deck and gasket-mounted PCB for a typing experience that is both satisfying and precise. Per-key RGB lighting with 16.8 million colours is fully programmable via the companion app. The compact tenkeyless layout and USB-C detachable cable make it ideal for travel, while tri-mode connectivity (USB / Bluetooth / 2.4 GHz wireless) keeps you connected everywhere.',
    shortDescription:
      'Premium aluminium build with custom switches and wireless tri-mode connectivity.',
    price: 249,
    category: 'Peripherals',
    badge: 'Editor\'s Pick',
  },
  {
    id: 5,
    name: 'NovaCam 8K Webcam',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    description:
      'Look your best on every call. The NovaCam 8K captures ultra-sharp 8K/30fps footage with a large 1/1.8" Sony sensor and f/1.8 aperture for beautiful background blur. AI-powered framing keeps you centred as you move, while the dual microphone array with beamforming technology ensures your voice comes through clear and natural. Works plug-and-play on any OS with no software required.',
    shortDescription:
      'Crystal-clear 8K video with AI framing and studio-quality audio for professional streaming and calls.',
    price: 299,
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'HyperDrive SSD 4TB',
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80',
    description:
      'Never wait for a file again. The HyperDrive SSD delivers sequential read speeds of up to 7,400 MB/s and write speeds of 6,900 MB/s over Thunderbolt 4 / USB4. With 4TB of capacity and an anodised aluminium enclosure that doubles as a heatsink, it keeps cool even during sustained transfers. A five-year warranty and included backup software make it the definitive external storage solution for professionals.',
    shortDescription:
      'Thunderbolt 4 speed meets massive 4TB capacity in a pocketable, heat-dissipating aluminium shell.',
    price: 449,
    category: 'Storage',
    badge: 'New',
  },
]

export default products
