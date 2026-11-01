// All heritage site content lives here, so the content can be changed
// without touching any component.

export const sites = [
  {
    slug: "hundred-islands",
    name: "Hundred Islands National Park",
    location: "Alaminos City",
    category: "Natural",
    summary: "A group of small islands in Lingayen Gulf, good for island hopping and swimming.",
    description:
      "The Hundred Islands are scattered across Lingayen Gulf and are the most visited place in Alaminos. Visitors ride a boat from the Lucap wharf and hop between islands to swim, snorkel, kayak or just rest on the small beaches. Some islands have caves and viewing decks.",
    tip: "Go early in the morning. The boats fill up fast on weekends and the water is calmer.",
    contact: "Alaminos City Tourism Office",
    image: "/images/hundred-islands.jpg",
    imageAlt: "Green islets rising from calm blue water",
  },
  {
    slug: "bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao",
    category: "Historical",
    summary: "A lighthouse at the northwestern tip of Pangasinan that overlooks the West Philippine Sea.",
    description:
      "Cape Bolinao Lighthouse stands on a cliff at the edge of Bolinao and has guided ships passing the cape for many years. The area around it has rocky shores and wide views of the sea, which makes it a popular place to watch the sunset.",
    tip: "Bring water and a hat. There is little shade near the lighthouse.",
    contact: null,
    image: "/images/bolinao-lighthouse.jpg",
    imageAlt: "White lighthouse on a cliff beside the sea",
  },
  {
    slug: "balungao -hot-spring",
    name: "Balungao Hot Spring",
    location: "Balungao",
    category: "Natural",
    summary: "Natural hot spring pools in the town of Balungao, known for warm mineral water.",
    description:
      "Balungao is known for its hot spring, where warm mineral water flows into pools. Families come to soak and relax, and many resorts in the area have their own pools. It is a good stop for people who prefer a quiet place over the beach.",
    tip: "Check the temperature of the pool first. Some pools are hotter than they look.",
    contact: null,
    image: "/images/Balungao-Hot-Spring.jpg",
    imageAlt: "Steam rising from a pool surrounded by trees",
  },
  {
    slug: "manaoag-basilica",
    name: "Manaoag Basilica",
    location: "Manaoag",
    category: "Religious",
    summary: "A well-known pilgrimage church dedicated to Our Lady of Manaoag.",
    description:
      "The Minor Basilica of Our Lady of the Rosary of Manaoag is one of the most visited churches in northern Luzon. Pilgrims travel here all year, and the crowd is biggest during Holy Week and the town fiesta. Candle stalls and souvenir shops line the streets nearby.",
    tip: "Dress modestly and expect long lines during holidays.",
    contact: null,
    image: "/images/manaoag-basilica.jpg",
    imageAlt: "Church with two bell towers under a blue sky",
  },
  {
    slug: "saint-james-church",
    name: "Saint James the Great Church",
    location: "Bolinao",
    category: "Historical",
    summary: "An old Spanish-era church in the center of Bolinao.",
    description:
      "This church in the middle of Bolinao dates back to the Spanish period and is one of the older church buildings in the province. Its thick stone walls and old facade make it a good stop for people interested in local history.",
    tip: "Visit between masses so you can look around inside without disturbing the service.",
    contact: null,
    image: "/images/saint-james-church.jpg",
    imageAlt: "Old stone church with a tall front wall",
  },
  {
    slug: "patar-beach",
    name: "Patar White Beach",
    location: "Bolinao",
    category: "Natural",
    summary: "A long white sand beach with clear water on the Bolinao coast.",
    description:
      "Patar is a stretch of fine white sand with calm, clear water in Bolinao. Small resorts and cottages are found along the shore. It is a quieter option compared with the more crowded island tours.",
    tip: "Bring sunscreen. The beach has few trees for shade.",
    contact: null,
    image: "/images/Patar-Beach.jpg ",
    imageAlt: "White sand beach with small waves",
  },
];

export const categories = ["Natural", "Historical", "Religious"];

export function getSiteBySlug(slug) {
  return sites.find((site) => site.slug === slug);
}
