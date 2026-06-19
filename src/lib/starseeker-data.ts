export type Astrologer = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  country: string;
  countrySlug: string;
  city: string;
  citySlug: string;
  languages: string[];
  experience: number;
  rating: number;
  reviews: number;
  price: string;
  specialities: string[];
  sessions: string[];
  bio: string;
  longBio: string;
  verified: boolean;
  featured?: boolean;
};

export const astrologers: Astrologer[] = [
  {
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    tagline: "Vedic & Karmic Astrology · 15+ years",
    location: "Mumbai, India",
    country: "India", countrySlug: "india",
    city: "Mumbai", citySlug: "mumbai",
    languages: ["English", "Hindi", "Marathi"],
    experience: 15,
    rating: 4.9, reviews: 312,
    price: "$80 / 60 min",
    specialities: ["Vedic Astrology", "Karmic Astrology", "Predictive Astrology"],
    sessions: ["Birth Chart Reading", "Compatibility / Synastry", "Annual Forecast", "Online / Virtual Session"],
    bio: "Mumbai-based Vedic astrologer specialising in karmic patterns and life timing.",
    longBio: "Ananya has spent 15 years studying classical Vedic texts under traditional gurus. Her approach blends Parashari fundamentals with modern psychological insight, helping clients understand the deeper karmic story behind transit windows, relationship dynamics, and career inflection points.",
    verified: true, featured: true,
  },
  {
    slug: "marcus-bellweather",
    name: "Marcus Bellweather",
    tagline: "Psychological Astrology · Jungian approach",
    location: "London, United Kingdom",
    country: "United Kingdom", countrySlug: "united-kingdom",
    city: "London", citySlug: "london",
    languages: ["English"],
    experience: 22,
    rating: 4.8, reviews: 184,
    price: "£120 / 75 min",
    specialities: ["Psychological Astrology", "Evolutionary Astrology"],
    sessions: ["Natal Chart Analysis", "Career & Life Path", "Online / Virtual Session"],
    bio: "Jungian astrologer working at the intersection of archetype and lived experience.",
    longBio: "Marcus trained with the Centre for Psychological Astrology in London. He treats the natal chart as a mirror for the soul's developmental arc — particularly useful at moments of transition or identity reorientation.",
    verified: true, featured: true,
  },
  {
    slug: "lucia-fernandez",
    name: "Lucia Fernández",
    tagline: "Love, synastry & relationship astrology",
    location: "Barcelona, Spain",
    country: "Spain", countrySlug: "spain",
    city: "Barcelona", citySlug: "barcelona",
    languages: ["Spanish", "English", "Catalan"],
    experience: 9,
    rating: 4.9, reviews: 226,
    price: "€75 / 60 min",
    specialities: ["Love & Relationships", "Synastry", "Composite Charts"],
    sessions: ["Compatibility / Synastry", "Love & Relationships", "Online / Virtual Session"],
    bio: "Helping seekers understand love through the lens of synastry and composite work.",
    longBio: "Lucia is a relationship-focused astrologer based in Barcelona. She specialises in synastry, composite charts, and the timing of relationship milestones using progressions and transits.",
    verified: true, featured: true,
  },
  {
    slug: "david-okoye",
    name: "David Okoye",
    tagline: "Career & vocational astrology",
    location: "Lagos, Nigeria",
    country: "Nigeria", countrySlug: "nigeria",
    city: "Lagos", citySlug: "lagos",
    languages: ["English"],
    experience: 11,
    rating: 4.7, reviews: 98,
    price: "$60 / 60 min",
    specialities: ["Career & Life Path", "Predictive Astrology"],
    sessions: ["Career & Life Path", "Transit Forecast", "Online / Virtual Session"],
    bio: "Vocational guidance through MC, 10th house and Jupiter cycles.",
    longBio: "David works with professionals navigating career change, entrepreneurship and timing. His approach combines traditional chart analysis with modern coaching frameworks.",
    verified: true,
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    tagline: "Hellenistic & traditional astrology",
    location: "Paris, France",
    country: "France", countrySlug: "france",
    city: "Paris", citySlug: "paris",
    languages: ["French", "English"],
    experience: 18,
    rating: 4.9, reviews: 271,
    price: "€110 / 75 min",
    specialities: ["Hellenistic Astrology", "Traditional Astrology", "Horary"],
    sessions: ["Natal Chart Analysis", "Annual Forecast", "Online / Virtual Session"],
    bio: "Classical methods, modern questions. Specialist in zodiacal releasing.",
    longBio: "Isabelle trained in the Hellenistic tradition and uses time-lord techniques like zodiacal releasing and profections to identify life chapters and peak windows.",
    verified: true,
  },
  {
    slug: "raj-patel",
    name: "Raj Patel",
    tagline: "Vedic, Nakshatra & remedial astrology",
    location: "Delhi, India",
    country: "India", countrySlug: "india",
    city: "Delhi", citySlug: "delhi",
    languages: ["English", "Hindi", "Gujarati"],
    experience: 25,
    rating: 4.8, reviews: 410,
    price: "$70 / 60 min",
    specialities: ["Vedic Astrology", "Nakshatra Astrology", "Remedial Astrology"],
    sessions: ["Birth Chart Reading", "Annual Forecast", "Predictive Astrology", "Online / Virtual Session"],
    bio: "25 years of Jyotish practice rooted in classical texts.",
    longBio: "Raj combines Vimshottari dasha analysis with nakshatra study and traditional remedial recommendations. His client base spans India, the UK, and the US diaspora.",
    verified: true,
  },
  {
    slug: "elena-volkova",
    name: "Elena Volkova",
    tagline: "Evolutionary & soul-based astrology",
    location: "Berlin, Germany",
    country: "Germany", countrySlug: "germany",
    city: "Berlin", citySlug: "berlin",
    languages: ["English", "German", "Russian"],
    experience: 13,
    rating: 4.9, reviews: 156,
    price: "€95 / 60 min",
    specialities: ["Evolutionary Astrology", "Karmic Astrology", "Psychological Astrology"],
    sessions: ["Natal Chart Analysis", "Career & Life Path", "Online / Virtual Session"],
    bio: "Pluto-centric evolutionary work for the spiritually curious.",
    longBio: "Elena studied with the Jeffrey Wolf Green school of Evolutionary Astrology. She focuses on the soul's evolutionary intent as shown through Pluto, the Nodes, and their planetary rulers.",
    verified: true,
  },
  {
    slug: "maya-johnson",
    name: "Maya Johnson",
    tagline: "Modern psychological astrology for women",
    location: "New York City, United States",
    country: "United States", countrySlug: "united-states",
    city: "New York City", citySlug: "new-york-city",
    languages: ["English"],
    experience: 7,
    rating: 4.8, reviews: 134,
    price: "$110 / 60 min",
    specialities: ["Psychological Astrology", "Love & Relationships", "Career & Life Path"],
    sessions: ["Natal Chart Analysis", "Solar Return Reading", "Online / Virtual Session"],
    bio: "Approachable, grounded readings for modern lives.",
    longBio: "Maya blends classical chart analysis with contemporary psychology. Her sessions are warm, practical, and ideal for first-time seekers.",
    verified: true,
  },
  {
    slug: "thomas-richter",
    name: "Thomas Richter",
    tagline: "Mundane & financial astrology",
    location: "Zurich, Switzerland",
    country: "Switzerland", countrySlug: "switzerland",
    city: "Zurich", citySlug: "zurich",
    languages: ["German", "English"],
    experience: 20,
    rating: 4.7, reviews: 88,
    price: "CHF 180 / 75 min",
    specialities: ["Mundane Astrology", "Financial Astrology"],
    sessions: ["Transit Forecast", "Annual Forecast", "Online / Virtual Session"],
    bio: "Cycles, markets, and the larger collective story.",
    longBio: "Thomas applies mundane astrology to financial cycles, geopolitics, and long-range planning for executives and family offices.",
    verified: true,
  },
  {
    slug: "sara-mendez",
    name: "Sara Méndez",
    tagline: "Family & child chart specialist",
    location: "Mexico City, Mexico",
    country: "Mexico", countrySlug: "mexico",
    city: "Mexico City", citySlug: "mexico-city",
    languages: ["Spanish", "English"],
    experience: 12,
    rating: 4.9, reviews: 201,
    price: "$65 / 60 min",
    specialities: ["Child Chart Reading", "Family Astrology", "Karmic Astrology"],
    sessions: ["Child Chart Reading", "Birth Chart Reading", "Online / Virtual Session"],
    bio: "Supporting parents through chart-informed parenting.",
    longBio: "Sara works with parents and families, reading children's charts to help caregivers understand temperament, learning style, and karmic inheritance.",
    verified: true,
  },
  {
    slug: "yuki-tanaka",
    name: "Yuki Tanaka",
    tagline: "Eastern + Western synthesis",
    location: "Tokyo, Japan",
    country: "Japan", countrySlug: "japan",
    city: "Tokyo", citySlug: "tokyo",
    languages: ["Japanese", "English"],
    experience: 16,
    rating: 4.8, reviews: 147,
    price: "¥18,000 / 60 min",
    specialities: ["Vedic Astrology", "Psychological Astrology"],
    sessions: ["Birth Chart Reading", "Annual Forecast", "Online / Virtual Session"],
    bio: "Bridging Jyotish, Western tropical, and Japanese 9-star ki.",
    longBio: "Yuki offers a unique multi-system view, drawing on Vedic, Western, and Japanese 9-star ki astrology to give clients a layered perspective on their charts.",
    verified: true,
  },
  {
    slug: "olivia-pearce",
    name: "Olivia Pearce",
    tagline: "Lunar living & solar return work",
    location: "Sydney, Australia",
    country: "Australia", countrySlug: "australia",
    city: "Sydney", citySlug: "sydney",
    languages: ["English"],
    experience: 8,
    rating: 4.9, reviews: 165,
    price: "AU$140 / 60 min",
    specialities: ["Lunar Astrology", "Predictive Astrology"],
    sessions: ["Lunar Return", "Solar Return Reading", "Annual Forecast", "Online / Virtual Session"],
    bio: "Living in rhythm with the Moon — practical lunar guidance.",
    longBio: "Olivia helps clients live in conscious rhythm with the Moon. Her solar and lunar return work is rooted in classical predictive technique with a modern, livable framing.",
    verified: true,
  },
];

export type Speciality = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  long: string;
};

export const specialities: Speciality[] = [
  { slug: "vedic-astrology", name: "Vedic Astrology", icon: "🕉️",
    short: "Ancient Indian system using sidereal calculations and lunar mansions.",
    long: "Vedic astrology (Jyotish) is the classical Indian system of astrology, rooted in the sidereal zodiac and refined over thousands of years. It places special emphasis on dashas (planetary periods), nakshatras (lunar mansions), and remedial measures." },
  { slug: "love-relationships", name: "Love & Relationships", icon: "💞",
    short: "Synastry, composite, and timing for partnerships.",
    long: "Love and relationship astrology examines compatibility through synastry (comparing two charts), composite charts (the relationship itself), and predictive techniques for relationship timing." },
  { slug: "career-life-path", name: "Career & Life Path", icon: "🧭",
    short: "Vocation, calling, and timing for major career moves.",
    long: "Career astrology focuses on the Midheaven, 10th house, and significators of vocation. Practitioners help clients align their work with their chart's underlying calling and identify supportive timing windows." },
  { slug: "predictive-astrology", name: "Predictive Astrology", icon: "🔮",
    short: "Transits, progressions, and timing of life events.",
    long: "Predictive astrologers use transits, progressions, solar arcs, and traditional time-lord techniques to identify upcoming windows of opportunity, challenge, and transformation." },
  { slug: "psychological-astrology", name: "Psychological Astrology", icon: "🧠",
    short: "Jungian, archetypal, and depth-oriented chart work.",
    long: "Psychological astrology treats the chart as a map of the psyche. Influenced by Jung, it explores archetypes, complexes, and the individuation process." },
  { slug: "karmic-astrology", name: "Karmic Astrology", icon: "♾️",
    short: "Lunar nodes, soul lessons, and past-life patterns.",
    long: "Karmic astrology centers the lunar nodes, Saturn, Pluto, and the 12th house to reveal soul-level patterns, inherited lessons, and the path of growth in this lifetime." },
  { slug: "hellenistic-astrology", name: "Hellenistic Astrology", icon: "🏛️",
    short: "Traditional Greek-era technique revival.",
    long: "Hellenistic astrology revives the techniques of the ancient Greek tradition: sect, zodiacal releasing, profections, and triplicity rulers." },
  { slug: "evolutionary-astrology", name: "Evolutionary Astrology", icon: "🌱",
    short: "Pluto-centric soul evolution work.",
    long: "Evolutionary astrology, developed by Jeffrey Wolf Green, places Pluto and the lunar nodes at the center of chart interpretation to describe the soul's intent and evolution." },
  { slug: "horary-astrology", name: "Horary Astrology", icon: "❓",
    short: "Answering specific questions from the moment chart.",
    long: "Horary astrology answers a specific question using the chart cast for the moment the question is asked. A traditional technique with strict rules and remarkable specificity." },
  { slug: "lunar-astrology", name: "Lunar Astrology", icon: "🌙",
    short: "Living in rhythm with lunar cycles.",
    long: "Lunar astrology focuses on the Moon's cycles, lunar returns, and the eight-phase Moon as a framework for daily and monthly living." },
  { slug: "child-chart-reading", name: "Child Chart Reading", icon: "👶",
    short: "Chart-informed parenting and family dynamics.",
    long: "Specialists in child charts help parents understand temperament, learning style, sensitivities, and the timing of developmental windows." },
  { slug: "financial-astrology", name: "Financial Astrology", icon: "📈",
    short: "Markets, business cycles, and timing.",
    long: "Financial astrology applies mundane and electional methods to markets, investment timing, and business strategy." },
];

export type Session = {
  slug: string;
  name: string;
  duration: string;
  description: string;
  ideal: string;
  prep: string;
};

export const sessions: Session[] = [
  { slug: "birth-chart-reading", name: "Birth Chart Reading", duration: "60–90 min",
    description: "A comprehensive interpretation of your natal chart — the snapshot of the sky at your moment of birth.",
    ideal: "First-time seekers, anyone who wants a full overview of their chart.",
    prep: "Have your exact date, time, and place of birth ready. The more precise the time, the more accurate the chart." },
  { slug: "natal-chart-analysis", name: "Natal Chart Analysis", duration: "75–90 min",
    description: "A deep, focused analysis of natal placements with attention to themes you most want to explore.",
    ideal: "Seekers who have already had a basic reading and want to go deeper.",
    prep: "Bring 2–3 questions or life themes you want to explore." },
  { slug: "compatibility-synastry", name: "Compatibility / Synastry", duration: "75–90 min",
    description: "Comparison of two charts to understand the dynamics of a partnership — romantic, family, or business.",
    ideal: "Couples, parents and children, business partners.",
    prep: "Both people's full birth data. Both parties don't have to attend, but their permission is appreciated." },
  { slug: "solar-return-reading", name: "Solar Return Reading", duration: "60–75 min",
    description: "A reading of the chart cast for your exact solar return — the moment the Sun returns to its natal position each year.",
    ideal: "Anyone within ~2 months of their birthday wanting a year-ahead overview.",
    prep: "Birth data and your current location (for relocation purposes)." },
  { slug: "career-life-path", name: "Career & Life Path", duration: "60–75 min",
    description: "Focused reading on vocation, calling, and timing windows for career moves.",
    ideal: "Anyone in a career transition or wanting to understand their professional calling.",
    prep: "A brief note on your career history and current questions." },
  { slug: "love-relationships", name: "Love & Relationships", duration: "60–75 min",
    description: "Focused reading on relationship themes, partnership timing, and emotional patterns.",
    ideal: "Anyone exploring love-related questions, single or partnered.",
    prep: "Your birth data plus your partner's if applicable." },
  { slug: "transit-forecast", name: "Transit Forecast", duration: "60 min",
    description: "A look ahead at the major transits shaping the next 6–18 months.",
    ideal: "Seekers wanting to understand timing windows.",
    prep: "Birth data and the time period you want to cover." },
  { slug: "annual-forecast", name: "Annual Forecast", duration: "75 min",
    description: "Year-ahead reading combining solar return, profections, and major transits.",
    ideal: "Annual planning, big-decision years, milestone birthdays.",
    prep: "Birth data and your goals for the year." },
  { slug: "lunar-return", name: "Lunar Return", duration: "45 min",
    description: "Reading of the chart cast for the Moon's monthly return — the emotional weather for the coming 28 days.",
    ideal: "Seekers wanting to live in conscious rhythm with the Moon.",
    prep: "Birth data and current location." },
  { slug: "predictive-astrology", name: "Predictive Astrology", duration: "75 min",
    description: "Traditional time-lord techniques (profections, zodiacal releasing) for identifying peak life chapters.",
    ideal: "Seekers fascinated by classical timing methods.",
    prep: "Birth data with exact time of birth." },
  { slug: "child-chart-reading", name: "Child Chart Reading", duration: "60 min",
    description: "Reading of a child's natal chart for parents seeking insight into temperament and development.",
    ideal: "Parents, caregivers, grandparents.",
    prep: "Child's full birth data." },
  { slug: "online-virtual-session", name: "Online / Virtual Session", duration: "Varies",
    description: "Any of the above readings delivered via video call. The default format for international clients.",
    ideal: "Anyone outside the astrologer's home city.",
    prep: "A quiet space, headphones, and your birth data." },
];

export type Country = {
  slug: string;
  name: string;
  flag: string;
  cities: { slug: string; name: string }[];
};

export const countries: Country[] = [
  { slug: "united-states", name: "United States", flag: "🇺🇸",
    cities: [{ slug: "new-york-city", name: "New York City" }, { slug: "los-angeles", name: "Los Angeles" }, { slug: "san-francisco", name: "San Francisco" }] },
  { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧",
    cities: [{ slug: "london", name: "London" }, { slug: "manchester", name: "Manchester" }] },
  { slug: "india", name: "India", flag: "🇮🇳",
    cities: [{ slug: "mumbai", name: "Mumbai" }, { slug: "delhi", name: "Delhi" }, { slug: "bangalore", name: "Bangalore" }] },
  { slug: "australia", name: "Australia", flag: "🇦🇺",
    cities: [{ slug: "sydney", name: "Sydney" }, { slug: "melbourne", name: "Melbourne" }] },
  { slug: "germany", name: "Germany", flag: "🇩🇪",
    cities: [{ slug: "berlin", name: "Berlin" }, { slug: "munich", name: "Munich" }] },
  { slug: "france", name: "France", flag: "🇫🇷",
    cities: [{ slug: "paris", name: "Paris" }] },
  { slug: "spain", name: "Spain", flag: "🇪🇸",
    cities: [{ slug: "barcelona", name: "Barcelona" }, { slug: "madrid", name: "Madrid" }] },
  { slug: "mexico", name: "Mexico", flag: "🇲🇽",
    cities: [{ slug: "mexico-city", name: "Mexico City" }] },
  { slug: "japan", name: "Japan", flag: "🇯🇵",
    cities: [{ slug: "tokyo", name: "Tokyo" }] },
  { slug: "nigeria", name: "Nigeria", flag: "🇳🇬",
    cities: [{ slug: "lagos", name: "Lagos" }] },
  { slug: "switzerland", name: "Switzerland", flag: "🇨🇭",
    cities: [{ slug: "zurich", name: "Zurich" }] },
  { slug: "brazil", name: "Brazil", flag: "🇧🇷",
    cities: [{ slug: "sao-paulo", name: "São Paulo" }] },
];

export type ZodiacSign = {
  slug: string;
  name: string;
  symbol: string;
  dates: string;
  element: string;
  modality: string;
  ruler: string;
  traits: string[];
  description: string;
};

export const zodiacSigns: ZodiacSign[] = [
  { slug: "aries", name: "Aries", symbol: "♈", dates: "Mar 21 – Apr 19", element: "Fire", modality: "Cardinal", ruler: "Mars",
    traits: ["Bold", "Direct", "Pioneering", "Impulsive"],
    description: "Aries is the cardinal fire sign — the spark, the initiator, the one who begins. Ruled by Mars, Aries energy is courageous, restless, and built for action." },
  { slug: "taurus", name: "Taurus", symbol: "♉", dates: "Apr 20 – May 20", element: "Earth", modality: "Fixed", ruler: "Venus",
    traits: ["Grounded", "Sensual", "Patient", "Stubborn"],
    description: "Taurus is the fixed earth sign — steady, sensual, devoted to the tangible. Ruled by Venus, it cherishes beauty, comfort, and the slow accumulation of value." },
  { slug: "gemini", name: "Gemini", symbol: "♊", dates: "May 21 – Jun 20", element: "Air", modality: "Mutable", ruler: "Mercury",
    traits: ["Curious", "Witty", "Adaptable", "Restless"],
    description: "Gemini is the mutable air sign — the messenger, the connector, the curious mind. Ruled by Mercury, Gemini thrives on language, learning, and lateral thinking." },
  { slug: "cancer", name: "Cancer", symbol: "♋", dates: "Jun 21 – Jul 22", element: "Water", modality: "Cardinal", ruler: "Moon",
    traits: ["Nurturing", "Intuitive", "Sensitive", "Protective"],
    description: "Cancer is the cardinal water sign — the home-builder, the feeler, the keeper of memory. Ruled by the Moon, Cancer attunes to emotional currents others miss." },
  { slug: "leo", name: "Leo", symbol: "♌", dates: "Jul 23 – Aug 22", element: "Fire", modality: "Fixed", ruler: "Sun",
    traits: ["Generous", "Expressive", "Loyal", "Proud"],
    description: "Leo is the fixed fire sign — the heart, the performer, the creative force. Ruled by the Sun, Leo shines through self-expression and warm-hearted leadership." },
  { slug: "virgo", name: "Virgo", symbol: "♍", dates: "Aug 23 – Sep 22", element: "Earth", modality: "Mutable", ruler: "Mercury",
    traits: ["Precise", "Helpful", "Analytical", "Discerning"],
    description: "Virgo is the mutable earth sign — the craftsperson, the analyst, the one who refines. Ruled by Mercury, Virgo serves through skill, precision, and care." },
  { slug: "libra", name: "Libra", symbol: "♎", dates: "Sep 23 – Oct 22", element: "Air", modality: "Cardinal", ruler: "Venus",
    traits: ["Diplomatic", "Aesthetic", "Fair", "Indecisive"],
    description: "Libra is the cardinal air sign — the partner, the diplomat, the lover of balance. Ruled by Venus, Libra weaves harmony through relationship and beauty." },
  { slug: "scorpio", name: "Scorpio", symbol: "♏", dates: "Oct 23 – Nov 21", element: "Water", modality: "Fixed", ruler: "Pluto / Mars",
    traits: ["Intense", "Perceptive", "Loyal", "Private"],
    description: "Scorpio is the fixed water sign — the depth-diver, the alchemist, the keeper of secrets. Co-ruled by Mars and Pluto, Scorpio transforms through truth." },
  { slug: "sagittarius", name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21", element: "Fire", modality: "Mutable", ruler: "Jupiter",
    traits: ["Adventurous", "Philosophical", "Optimistic", "Blunt"],
    description: "Sagittarius is the mutable fire sign — the seeker, the philosopher, the cross-cultural traveler. Ruled by Jupiter, Sagittarius expands toward meaning." },
  { slug: "capricorn", name: "Capricorn", symbol: "♑", dates: "Dec 22 – Jan 19", element: "Earth", modality: "Cardinal", ruler: "Saturn",
    traits: ["Disciplined", "Ambitious", "Strategic", "Reserved"],
    description: "Capricorn is the cardinal earth sign — the architect, the elder, the long-game player. Ruled by Saturn, Capricorn builds structures that last." },
  { slug: "aquarius", name: "Aquarius", symbol: "♒", dates: "Jan 20 – Feb 18", element: "Air", modality: "Fixed", ruler: "Saturn / Uranus",
    traits: ["Innovative", "Independent", "Humanitarian", "Detached"],
    description: "Aquarius is the fixed air sign — the futurist, the systems-thinker, the community-builder. Co-ruled by Saturn and Uranus, Aquarius reimagines what's possible." },
  { slug: "pisces", name: "Pisces", symbol: "♓", dates: "Feb 19 – Mar 20", element: "Water", modality: "Mutable", ruler: "Jupiter / Neptune",
    traits: ["Compassionate", "Imaginative", "Spiritual", "Boundary-fluid"],
    description: "Pisces is the mutable water sign — the dreamer, the mystic, the channel. Co-ruled by Jupiter and Neptune, Pisces dissolves the boundary between self and source." },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  { slug: "how-to-read-your-birth-chart", title: "How to Read Your Birth Chart: A Beginner's Guide",
    excerpt: "Your birth chart is a snapshot of the sky at the moment you were born. Here's how to start reading yours.",
    category: "Beginner Guides", readTime: "8 min", date: "2026-05-12",
    body: "Your natal chart shows where every planet was at the moment of your birth, mapped onto a wheel of 12 houses. The three most important placements to know first are your Sun, Moon, and Rising sign — together they form what astrologers call the 'big three.'\n\nThe Sun shows your core identity and creative will. The Moon describes your emotional inner life. The Rising sign (Ascendant) describes how you meet the world and how others first perceive you. Once you understand these three, you have a strong foundation to explore the rest of the chart." },
  { slug: "saturn-return-explained", title: "Saturn Return Explained: The Cosmic Coming-of-Age",
    excerpt: "Every 29.5 years, Saturn returns to where it was at your birth — and life as you know it tends to restructure.",
    category: "Transits", readTime: "10 min", date: "2026-05-05",
    body: "Saturn takes about 29.5 years to orbit the Sun. When it returns to the position it occupied at your birth — usually around ages 28–30, 58–60, and 87–89 — you experience what astrologers call a Saturn Return.\n\nThis is the cosmic coming-of-age. Structures that no longer fit collapse. Choices that were postponed demand to be made. By the end of it, you're recognisably more yourself than you were before." },
  { slug: "synastry-vs-composite-charts", title: "Synastry vs Composite Charts: What's the Difference?",
    excerpt: "Two powerful tools for understanding relationships — and when to use which.",
    category: "Relationships", readTime: "7 min", date: "2026-04-28",
    body: "Synastry compares two individual charts side by side. It shows how your planets activate the other person's chart — the chemistry, the friction, the karmic threads.\n\nA composite chart, by contrast, treats the relationship itself as a third entity, with its own birth chart calculated from the midpoints of both people's planets. Use synastry to understand each person's experience of the relationship; use composite to understand the relationship's own character and trajectory." },
  { slug: "12th-house-mysteries", title: "The 12th House: The Mystery Zone of the Chart",
    excerpt: "The most misunderstood house — and what it really represents.",
    category: "Houses", readTime: "9 min", date: "2026-04-21",
    body: "The 12th house has a fearsome reputation: hidden enemies, self-undoing, institutions. But it's also the house of the unconscious, of dreams, of the soul's connection to something larger than itself.\n\nPlanets in the 12th tend to operate below the surface — powerfully present, but rarely loud. Working with the 12th house is less about fixing what's there and more about learning to listen to it." },
  { slug: "mercury-retrograde-real-talk", title: "Mercury Retrograde: Real Talk",
    excerpt: "Three or four times a year, Mercury appears to move backwards. Here's what actually happens.",
    category: "Transits", readTime: "6 min", date: "2026-04-14",
    body: "Mercury retrograde is an optical illusion — Mercury never actually reverses direction. But the experience of it is real: a slowdown in communication, technology, and travel. Three weeks where it pays to review rather than launch.\n\nThe wisdom isn't to do nothing — it's to do the kind of work that retrograde supports: revisit, revise, reconnect, refine." },
  { slug: "north-node-life-purpose", title: "The North Node: Your Life Purpose Compass",
    excerpt: "What the lunar nodes reveal about why you're here.",
    category: "Karmic Astrology", readTime: "11 min", date: "2026-04-07",
    body: "The lunar nodes are mathematical points, not planets — where the Moon's orbit crosses the ecliptic. The South Node represents what's familiar and karmically inherited. The North Node points toward what your soul is here to grow into.\n\nIt rarely feels comfortable. The North Node is the direction of stretch, of awkward newness, of the life you're learning to live." },
  { slug: "houses-explained", title: "The 12 Houses Explained Simply",
    excerpt: "Each house is a stage of life. Here's the whole map in one place.",
    category: "Beginner Guides", readTime: "12 min", date: "2026-03-31",
    body: "The 12 houses divide the chart into 12 life areas — self, money, communication, home, creativity, work, relationships, transformation, philosophy, career, community, and the unconscious. Together they form a complete map of human experience." },
  { slug: "moon-sign-emotional-self", title: "Your Moon Sign: The Emotional Self",
    excerpt: "The Moon describes how you feel, soothe, and need to be cared for.",
    category: "Planets", readTime: "8 min", date: "2026-03-24",
    body: "Where your Sun says 'I am,' your Moon says 'I feel.' Your Moon sign describes your emotional baseline, what soothes you, and how you instinctively respond to stress." },
  { slug: "rising-sign-mask-or-truth", title: "Rising Sign: Mask or Truth?",
    excerpt: "Your Ascendant is how the world meets you — and it's more than a mask.",
    category: "Beginner Guides", readTime: "7 min", date: "2026-03-17",
    body: "Your Rising sign (Ascendant) was on the eastern horizon at your birth. It colours your appearance, your default mode of meeting strangers, and the way your chart's themes get filtered before they reach the world." },
  { slug: "transit-vs-progression", title: "Transits vs Progressions: Two Clocks of the Chart",
    excerpt: "Astrology uses two main timing systems — and they answer different questions.",
    category: "Predictive", readTime: "9 min", date: "2026-03-10",
    body: "Transits are real-time — where the planets are right now, hitting your natal chart. Progressions are symbolic — the chart aged forward at a rate of one day per year. Transits describe the weather; progressions describe inner ripening." },
  { slug: "venus-retrograde-relationships", title: "Venus Retrograde and Your Relationships",
    excerpt: "Every 18 months, Venus retrogrades — and the past tends to revisit.",
    category: "Transits", readTime: "8 min", date: "2026-03-03",
    body: "Venus retrogrades roughly every 18 months for about 40 days. During this time, ex-partners reappear, relationship patterns surface, and values get reexamined. It's not the moment for new love commitments — it's the moment to integrate." },
  { slug: "chart-ruler", title: "The Chart Ruler: A Key You Might Be Missing",
    excerpt: "Your Rising sign's ruling planet is the captain of your chart.",
    category: "Technique", readTime: "7 min", date: "2026-02-24",
    body: "The ruler of your Rising sign — your 'chart ruler' — is one of the most important planets in your entire chart. Its sign, house, and aspects describe how your whole life unfolds." },
];

export const featuredAstrologers = astrologers.filter((a) => a.featured);
