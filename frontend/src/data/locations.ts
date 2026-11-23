export interface LocationData {
  slug: string;
  name: string;
  title: string;
  h1: string;
  metaDesc: string;
  pincodes: string[];
  deliveryTime: string;
  hub: string;
  popularPlaces: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
  intro: string;
  faqs: {
    q: string;
    a: string;
  }[];
}

export const bangaloreLocations: LocationData[] = [
  {
    slug: 'koramangala',
    name: 'Koramangala',
    title: 'Vape Shop Koramangala | 2-4 Hrs Express Vape Delivery Bangalore',
    h1: 'Vape Shop Koramangala — Same-Day 2-4 Hours Express Delivery',
    metaDesc: 'Order authentic disposable vapes, pod kits & imported e-liquids in Koramangala, Bengaluru. Express 2-4 hours doorstep delivery with QR scannable verification.',
    pincodes: ['560034', '560095', '560047'],
    deliveryTime: '45 - 90 Minutes',
    hub: 'Koramangala 5th Block Express Hub',
    popularPlaces: ['5th Block Cafe Street', 'Sony World Junction', 'Jyoti Nivas College Rd', '80ft Road', 'Koramangala 1st-8th Blocks'],
    geo: { latitude: 12.9352, longitude: 77.6245 },
    intro: 'Looking for a verified authentic vape shop in Koramangala? Vape Shop Bangalore provides lightning-fast 45 to 90 minutes doorstep courier dispatch across all Koramangala blocks (1st to 8th Block). From high-puff Elf Bar and Lost Mary disposables to Caliburn pod mods and imported UK nicotine salts, everything is 100% genuine with scannable QR codes.',
    faqs: [
      {
        q: 'How fast can I get vape delivery in Koramangala?',
        a: 'Our central dispatch hub is located right near Koramangala 5th Block. Average delivery time across 1st to 8th Block is between 45 to 90 minutes from WhatsApp confirmation.',
      },
      {
        q: 'Are products delivered to Koramangala 100% authentic?',
        a: 'Yes! Every device features a manufacturer scratch-and-verify security hologram QR code that can be authenticated directly on official brand portals.',
      },
      {
        q: 'Is the packaging discreet for apartment deliveries in Koramangala?',
        a: 'Absolutely. All orders are packed in completely plain, unbranded opaque security mailers with zero external product branding.',
      },
    ],
  },
  {
    slug: 'indiranagar',
    name: 'Indiranagar',
    title: 'Vape Shop Indiranagar | Express Doorstep Vape Delivery Bangalore',
    h1: 'Vape Shop Indiranagar — 100% Authentic Vapes & Express Delivery',
    metaDesc: 'Buy original disposable vapes, Caliburn pod systems & e-juices in Indiranagar, Bangalore. 1-2 hours fast delivery to 100ft Road, CMH Road, and Defence Colony.',
    pincodes: ['560038', '560008'],
    deliveryTime: '60 - 90 Minutes',
    hub: 'Indiranagar 100ft Road Dispatch Line',
    popularPlaces: ['100ft Road', '12th Main', 'CMH Road', 'Defence Colony', 'HAL 2nd Stage'],
    geo: { latitude: 12.9784, longitude: 77.6408 },
    intro: 'Indiranagar premier vape destination. Whether you need a fresh Elfbar BC5000, Lost Mary MT35000 Turbo, or replacement pods for your Uwell Caliburn, our express couriers deliver straight to your residence or cafe along 100ft Road, 12th Main, and Defence Colony.',
    faqs: [
      {
        q: 'Can I get vape delivery at cafes or offices on 100ft Road Indiranagar?',
        a: 'Yes, our delivery executive can meet you at your office reception, apartment lobby, or designated landmark along 100ft Road and CMH Road.',
      },
      {
        q: 'What payment options are accepted for Indiranagar orders?',
        a: 'We accept instant secure UPI transfers (Google Pay, PhonePe, Paytm) upon order confirmation on WhatsApp.',
      },
      {
        q: 'Which disposable vapes are most popular in Indiranagar?',
        a: 'Elfbar BC5000, Lost Mary MT35000 Turbo, and Nasty Bolt 50K are the top requested disposables in Indiranagar.',
      },
    ],
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    title: 'Vape Shop HSR Layout | 2-4 Hours Same-Day Delivery Bangalore',
    h1: 'Vape Shop HSR Layout — Premium Devices & Express BLR Delivery',
    metaDesc: 'Verified vape shop serving HSR Layout Sectors 1 to 7. Order authentic imported disposable vapes, pod kits, and e-liquids with 2-4 hours delivery in Bengaluru.',
    pincodes: ['560102'],
    deliveryTime: '60 - 90 Minutes',
    hub: 'HSR Sector 2 Hub',
    popularPlaces: ['27th Main Road', '19th Main Startup Corridor', 'HSR Club', 'Agara Lake Road', 'Sectors 1 to 7'],
    geo: { latitude: 12.9121, longitude: 77.6446 },
    intro: 'For startup founders, professionals, and residents in HSR Layout, Vape Shop Bangalore guarantees prompt same-day doorstep dispatch across Sectors 1 through 7. Enjoy authentic scannable devices without leaving your desk.',
    faqs: [
      {
        q: 'Do you deliver to all sectors of HSR Layout?',
        a: 'Yes, our express riders cover Sectors 1, 2, 3, 4, 5, 6, and 7 of HSR Layout with typical delivery in under 90 minutes.',
      },
      {
        q: 'Can I verify the security code before opening the pod kit?',
        a: 'Yes! The scratch QR code is located on the external box packaging so you can verify authenticity immediately.',
      },
    ],
  },
  {
    slug: 'whitefield',
    name: 'Whitefield',
    title: 'Vape Store Whitefield & ITPL | Same-Day Express Delivery Bangalore',
    h1: 'Vape Store Whitefield — Authentic Vapes Delivered to ITPL & EPIP',
    metaDesc: 'Fast doorstep vape delivery in Whitefield, ITPL, EPIP Zone, and Hope Farm. Original Elf Bar, Caliburn, Geekvape & nicotine salts with same-day express dispatch.',
    pincodes: ['560066', '560048'],
    deliveryTime: '90 - 120 Minutes',
    hub: 'Whitefield Main Road Courier Hub',
    popularPlaces: ['ITPL Bangalore', 'EPIP Zone', 'Hope Farm Junction', 'Prestige Shantiniketan', 'Nallurhalli'],
    geo: { latitude: 12.9698, longitude: 77.75 },
    intro: 'Living or working in Whitefield tech parks? Skip the wait. We provide reliable same-day delivery across Whitefield, ITPL, EPIP Zone, Hoodi, and surrounding tech hubs with discreet, tamper-proof packaging.',
    faqs: [
      {
        q: 'Do you deliver inside ITPL and tech parks in Whitefield?',
        a: 'Our courier will coordinate via call or WhatsApp to meet you at your campus gate, security reception, or residential tower.',
      },
      {
        q: 'How long does delivery take to Whitefield?',
        a: 'Delivery to Whitefield typically takes between 90 to 120 minutes from WhatsApp confirmation.',
      },
    ],
  },
  {
    slug: 'jp-nagar',
    name: 'JP Nagar',
    title: 'Vape Shop JP Nagar & Jayanagar | 2-4 Hours Vape Delivery Bangalore',
    h1: 'Vape Shop JP Nagar — Genuine Imported Vapes & Pods',
    metaDesc: 'Authentic vape store delivering to JP Nagar Phases 1 to 9 & Jayanagar. 100% original disposable vapes, refillable pods, and nic salts with same-day dispatch.',
    pincodes: ['560078', '560041'],
    deliveryTime: '60 - 90 Minutes',
    hub: 'JP Nagar 24th Main Hub',
    popularPlaces: ['JP Nagar 2nd Phase', 'Brigade Millennium', 'Central Mall JP Nagar', '15th Cross Road', 'Phases 1 to 9'],
    geo: { latitude: 12.9063, longitude: 77.5857 },
    intro: 'Vape Shop Bangalore offers swift, discrete delivery across JP Nagar Phases 1 through 9, Bannerghatta Road, and Jayanagar. Verified authentic hardware, fresh coils, and imported nic salts delivered to your doorstep.',
    faqs: [
      {
        q: 'How do I place an order for JP Nagar?',
        a: 'Simply browse our catalog, select your device, and click "Order on WhatsApp" to confirm your address and dispatch.',
      },
    ],
  },
  {
    slug: 'mg-road',
    name: 'MG Road',
    title: 'Vape Store MG Road & Brigade Road | Central Bangalore Vape Delivery',
    h1: 'Vape Store MG Road — Central Bangalore Same-Day Dispatch',
    metaDesc: 'Order vapes near MG Road, Brigade Road, Church Street, and Lavelle Road. Express 60-minute delivery for authentic disposables, pod kits & premium e-liquids.',
    pincodes: ['560001', '560025'],
    deliveryTime: '45 - 60 Minutes',
    hub: 'Central Bangalore Express Line',
    popularPlaces: ['MG Road Boulevard', 'Brigade Road', 'Church Street', 'Lavelle Road', 'Richmond Circle', 'Cubbon Park Area'],
    geo: { latitude: 12.9756, longitude: 77.6066 },
    intro: 'In the heart of Bengaluru. We deliver to MG Road, Brigade Road, Church Street, Residency Road, and Lavelle Road within 45 to 60 minutes. Perfect for downtown executives and residents.',
    faqs: [
      {
        q: 'Can I get delivery to hotels or serviced apartments near MG Road?',
        a: 'Yes, we frequently deliver to hotels and residences around MG Road and Brigade Road with 100% discrete plain packaging.',
      },
    ],
  },
  {
    slug: 'bellandur',
    name: 'Bellandur',
    title: 'Vape Delivery Bellandur & Outer Ring Road | Vape Shop Bangalore',
    h1: 'Vape Delivery Bellandur — Express 2-4 Hours ORR Delivery',
    metaDesc: 'Reliable vape delivery in Bellandur, Ecospace, EcoWorld, and Outer Ring Road Bengaluru. 100% genuine scannable vapes, pod kits and nicotine salts.',
    pincodes: ['560103'],
    deliveryTime: '60 - 90 Minutes',
    hub: 'Bellandur ORR Hub',
    popularPlaces: ['Rmz Ecospace', 'EcoWorld Tech Park', 'Green Glen Layout', 'Outer Ring Road Corridor'],
    geo: { latitude: 12.926, longitude: 77.6762 },
    intro: 'Tech corridor vape delivery made effortless. Serving Bellandur, RMZ Ecospace, RMZ EcoWorld, and Green Glen Layout with authentic disposable vapes and pod systems delivered in 60 to 90 minutes.',
    faqs: [
      {
        q: 'Can I order during office hours in Bellandur tech parks?',
        a: 'Yes! Couriers deliver directly to your office tech park gate or designated pick-up spot with discrete packaging.',
      },
    ],
  },
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    title: 'Vape Shop Electronic City Phase 1 & 2 | Same-Day Delivery Bangalore',
    h1: 'Vape Shop Electronic City — 100% Original Vapes Delivered',
    metaDesc: 'Same-day doorstep vape delivery in Electronic City Phase 1, Phase 2, and Neeladri Nagar. Authentic Elfbar, Lost Mary, Caliburn, and nicotine salts.',
    pincodes: ['560100'],
    deliveryTime: '90 - 120 Minutes',
    hub: 'Electronic City Tollgate Courier Point',
    popularPlaces: ['Infosys Campus Phase 1', 'Wipro Gate', 'Neeladri Nagar', 'Phase 2 Industrial Area'],
    geo: { latitude: 12.8452, longitude: 77.6602 },
    intro: 'South Bangalore tech hub coverage. We deliver authentic disposable vapes, refillable pod kits, and e-juices across Electronic City Phase 1, Phase 2, and Neeladri Nagar with fast same-day courier dispatch.',
    faqs: [
      {
        q: 'How long does delivery take to Electronic City?',
        a: 'Delivery to Electronic City typically takes 90 to 120 minutes via express courier.',
      },
    ],
  },
  {
    slug: 'marathahalli',
    name: 'Marathahalli',
    title: 'Vape Shop Marathahalli | Same-Day Express Vape Delivery Bangalore',
    h1: 'Vape Shop Marathahalli — Original Disposables & Pod Kits',
    metaDesc: 'Vape delivery in Marathahalli, Kundalahalli, and Spice Garden. Guaranteed genuine QR verified vapes delivered within 2-4 hours across Bengaluru.',
    pincodes: ['560037'],
    deliveryTime: '60 - 90 Minutes',
    hub: 'Marathahalli Bridge Hub',
    popularPlaces: ['Marathahalli Bridge', 'Spice Garden Layout', 'Munnekollal', 'Kundalahalli Gate'],
    geo: { latitude: 12.9591, longitude: 77.6974 },
    intro: 'East Bangalore express vape delivery. From Marathahalli Bridge to Kundalahalli Gate and Spice Garden, get your favorite disposable vapes and replacement pods delivered in 60 to 90 minutes.',
    faqs: [
      {
        q: 'Are packages discrete in Marathahalli?',
        a: 'Yes, packages are sealed in tamper-evident unbranded boxes with zero product mention.',
      },
    ],
  },
  {
    slug: 'jayanagar',
    name: 'Jayanagar',
    title: 'Vape Shop Jayanagar | 2-4 Hours Doorstep Delivery Bangalore',
    h1: 'Vape Shop Jayanagar — Authentic Vapes Across All Blocks',
    metaDesc: 'Order genuine vape kits, disposables and e-liquids in Jayanagar Blocks 1 to 9. Same-day express doorstep courier with anti-counterfeit QR codes.',
    pincodes: ['560011', '560041'],
    deliveryTime: '45 - 75 Minutes',
    hub: 'Jayanagar 4th Block Hub',
    popularPlaces: ['Jayanagar 4th Block Complex', 'Cool Joint Junction', 'Ashoka Pillar', '3rd to 9th Blocks'],
    geo: { latitude: 12.9308, longitude: 77.5838 },
    intro: 'Serving traditional South Bengaluru with modern convenience. We deliver 100% genuine vapes across Jayanagar 1st through 9th Block within 45 to 75 minutes of ordering.',
    faqs: [
      {
        q: 'Do you deliver to Jayanagar 4th Block?',
        a: 'Yes, our delivery riders can reach any block in Jayanagar within 45 to 75 minutes.',
      },
    ],
  },
  {
    slug: 'hebbal',
    name: 'Hebbal',
    title: 'Vape Store Hebbal & North Bangalore | Same-Day Vape Delivery',
    h1: 'Vape Store Hebbal — North Bangalore Express Delivery Hub',
    metaDesc: 'Fast vape delivery in Hebbal, Manyata Tech Park, Sahakara Nagar & Nagavara. Genuine imported disposable vapes and pod systems delivered same-day.',
    pincodes: ['560024', '560045'],
    deliveryTime: '90 - 120 Minutes',
    hub: 'Hebbal Flyover Express Hub',
    popularPlaces: ['Manyata Embassy Business Park', 'Hebbal Lake Road', 'Sahakara Nagar', 'Nagavara Junction'],
    geo: { latitude: 13.0358, longitude: 77.597 },
    intro: 'North Bangalore express coverage. Delivering authentic vapes and e-liquids to Manyata Tech Park, Sahakara Nagar, Hebbal, and Nagavara with guaranteed genuine products.',
    faqs: [
      {
        q: 'Can I order at Manyata Tech Park in Hebbal?',
        a: 'Yes, couriers meet you at your Manyata campus gate or apartment complex promptly.',
      },
    ],
  },
  {
    slug: 'btm-layout',
    name: 'BTM Layout',
    title: 'Vape Shop BTM Layout | 2-4 Hours Express Delivery Bangalore',
    h1: 'Vape Shop BTM Layout — 100% Genuine Vapes Delivered Fast',
    metaDesc: 'Order original disposable vapes, pod systems and nic salts in BTM Layout Stage 1 & 2. Same-day courier dispatch in 45-75 minutes.',
    pincodes: ['560068', '560076'],
    deliveryTime: '45 - 75 Minutes',
    hub: 'BTM 2nd Stage Udupi Garden Hub',
    popularPlaces: ['Udupi Garden Junction', 'BTM Water Tank', '100ft Ring Road BTM', 'Stage 1 & 2'],
    geo: { latitude: 12.9166, longitude: 77.6101 },
    intro: 'Rapid vape delivery across BTM Layout 1st and 2nd Stage. Get your favorite Elfbar, Caliburn, or Lost Mary devices delivered to your doorstep in 45 to 75 minutes.',
    faqs: [
      {
        q: 'How fast is delivery to BTM Layout?',
        a: 'Due to our proximity to BTM 2nd Stage, orders usually arrive within 45 to 75 minutes.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return bangaloreLocations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return bangaloreLocations.map((l) => l.slug);
}
