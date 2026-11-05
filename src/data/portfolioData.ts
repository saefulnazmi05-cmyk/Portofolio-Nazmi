export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  icon: string;
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  fullStory: string;
  image: string;
  year: string;
  client: string;
  role: string;
  highlights: string[];
  tools: string[];
  demoUrl?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  abbr: string;
  logoType: "figma" | "xd" | "ps" | "ai" | "webflow" | "html" | "css" | "js";
}

export const PERSONAL_INFO = {
  name: "Saeful Nazmi",
  signature: "Saeful Nazmi",
  role: "UI/UX Designer & Web Developer",
  location: "Serang, Banten, Indonesia",
  phone: "+62 838 7764 4088",
  phoneRaw: "6283877644088",
  whatsappUrl: "https://wa.me/6283877644088",
  instagram: "@najm1__",
  instagramUrl: "https://instagram.com/najm1__",
  email: "hello@saefulnazmi.com",
  linkedinUrl: "https://linkedin.com/in/saefulnazmi",
  behanceUrl: "https://behance.net/saefulnazmi",
  githubUrl: "https://github.com/saefulnazmi",
  heroBio:
    "Saya adalah seorang desainer UI/UX dan pengembang web yang berfokus pada pengalaman pengguna terbaik, desain kreatif, dan solusi digital yang inovatif.",
  quote: "Terus belajar, berkarya, dan memberikan yang terbaik.",
  quotePhilosophy:
    "Desain yang baik bukan hanya tentang estetika, tetapi juga tentang bagaimana ia bekerja untuk pengguna.",
  aboutBio: [
    "Halo, saya Saeful Nazmi, seorang UI/UX Designer dan Web Developer. Saya memiliki ketertarikan mendalam dalam dunia teknologi, desain, dan inovasi digital untuk menciptakan solusi yang bermanfaat bagi banyak orang.",
    "Saya percaya bahwa desain yang baik bukan hanya tentang tampilan visual semata, melainkan tentang bagaimana sebuah produk memberikan pengalaman terbaik, intuitif, dan efisien bagi setiap penggunanya.",
  ],
  strengths: [
    { title: "Kreatif & Teliti", desc: "Detail visual pixel-perfect dan arsitektur rapi." },
    { title: "Berorientasi Solusi", desc: "Menjawab kebutuhan pengguna dengan empati desain." },
    { title: "Adaptif & Pembelajar", desc: "Cepat mengadopsi stack dan teknologi modern terkini." },
    { title: "Fokus Pengalaman Pengguna", desc: "Menjamin interaksi mulus tanpa friksi teknis." },
  ],
  stats: [
    { value: 3, suffix: "+", label: "Tahun Pengalaman" },
    { value: 20, suffix: "+", label: "Proyek Selesai" },
    { value: 10, suffix: "+", label: "Klien Puas" },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    shortDesc: "Merancang pengalaman pengguna yang intuitif dan menarik.",
    fullDesc:
      "Merancang antarmuka aplikasi mobile dan web berstandar industri dengan riset mendalam, wireframing, arsitektur informasi, serta user testing untuk memastikan kemudahan navigasi.",
    deliverables: ["User Research & Persona", "Wireframe & Information Architecture", "High-Fidelity Visual UI", "Interactive Usability Testing"],
    tools: ["Figma", "Adobe XD", "FigJam"],
    icon: "monitor",
  },
  {
    id: "web-dev",
    number: "02",
    title: "Web Development",
    shortDesc: "Membangun website modern, cepat, dan responsif.",
    fullDesc:
      "Pengembangan website modern dengan performa tinggi, aksesibilitas tinggi (WCAG AA), SEO optimal, dan adaptasi responsif di seluruh perangkat layar desktop hingga mobile.",
    deliverables: ["Full-Stack Responsive Website", "Clean Semantic Code", "Performa & SEO Optimization", "Integrasi API & Headless CMS"],
    tools: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    icon: "code",
  },
  {
    id: "interaction",
    number: "03",
    title: "Interaction Design",
    shortDesc: "Menciptakan interaksi yang hidup dan mudah digunakan.",
    fullDesc:
      "Mendesain transisi dinamis, micro-interactions, gesture feedback, dan motion visual yang memberikan nuansa hidup tanpa mengorbankan performa kecepatan situs.",
    deliverables: ["Micro-interactions & Hover States", "Page Transition Systems", "Lottie & Motion Specs", "Accessible Touch Gestures"],
    tools: ["Motion", "CSS Animations", "Figma Smart Animate"],
    icon: "box",
  },
  {
    id: "prototyping",
    number: "04",
    title: "Prototyping",
    shortDesc: "Mengembangkan konsep menjadi produk nyata.",
    fullDesc:
      "Membuat prototipe klik interaktif dengan logika navigasi autentik, input simulasi, dan flow komprehensif untuk pengujian stakeholder sebelum fase penulisan kode dimulai.",
    deliverables: ["High-Fidelity Clickable Prototype", "Component State Variables", "Stakeholder Presentation Walkthrough", "Developer Handoff Specs"],
    tools: ["Figma Advanced Prototyping", "Protopie"],
    icon: "smartphone",
  },
  {
    id: "design-systems",
    number: "05",
    title: "Design Systems",
    shortDesc: "Membangun desain konsisten untuk pengalaman terbaik.",
    fullDesc:
      "Menyusun fondasi desain modular berupa token desain, sistem warna, skala tipografi, dan pustaka komponen yang dapat digunakan berulang secara skalabel dan terstandarisasi.",
    deliverables: ["Atomic Design Library", "Design Tokens (Color, Spacing, Radius)", "Component Documentation", "Cross-Platform Sync Guidelines"],
    tools: ["Figma Design Systems", "Tailwind Theme Tokens"],
    icon: "layers",
  },
];

export const WORKFLOW: ProcessItem[] = [
  {
    number: "01",
    title: "Discover",
    description: "Memahami kebutuhan dan tujuan.",
    details: "Menganalisis profil target audiens, tujuan bisnis utama, preferensi estetika, dan studi komparasi industri untuk merumuskan landasan proyek yang kuat.",
  },
  {
    number: "02",
    title: "Define",
    description: "Merumuskan masalah dan solusi.",
    details: "Menyusun peta alur pengguna (user journey), pemetaan fitur esensial, arsitektur data, dan prioritas implementasi yang terukur.",
  },
  {
    number: "03",
    title: "Design",
    description: "Mendesain konsep terbaik.",
    details: "Mengeksekusi moodboard, wireframe lo-fi hingga hi-fi UI desain visual mewah dengan palet harmonis, tipografi tertata rapi, dan sistem komponen konsisten.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Mengembangkan solusi.",
    details: "Mentransformasikan desain menjadi kode yang bersih, cepat, terstruktur, responsif sempurna di perangkat mobile hingga desktop resolusi tinggi.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Menyerahkan hasil dan melakukan evaluasi.",
    details: "Uji coba komprehensif, optimasi performa dan SEO, dokumentasi serah terima lengkap, serta evaluasi kepuasan klien untuk iterasi berkelanjutan.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "naj-quran",
    title: "Naj Quran",
    category: "Aplikasi Al-Qur'an Digital",
    tag: "Mobile App UI/UX",
    description: "Aplikasi Al-Qur'an digital dengan pengalaman membaca yang nyaman, modern, dan intuitif.",
    fullStory:
      "Naj Quran didesain untuk memberikan kenyamanan maksimal bagi umat Muslim saat membaca dan mendengarkan lantunan ayat suci Al-Qur'an dalam genggaman. Desain mengadopsi nuansa Islami modern dengan aksen hijau zamrud dan tipografi Arab yang tajam, fitur penanda juz & ayat terakhir dibaca, mode malam bebas silau, audio murattal jernih, serta jadwal salat otomatis yang presisi.",
    image: "/assets/extracted/project_naj_quran.png",
    year: "2026",
    client: "Digital Islamic Initiative",
    role: "Lead UI/UX Designer & Mobile App Architect",
    highlights: [
      "Dark mode kontras tinggi ramah mata untuk tadarus malam hari",
      "Navigasi cepat pencarian surah, juz, dan ayat favorit",
      "Integrasi audio player murattal dengan kontrol offline",
      "Pembaruan waktu salat dan arah kiblat berbasis lokasi",
    ],
    tools: ["Figma", "UI Architecture", "Mobile Prototyping"],
    demoUrl: "https://wa.me/6283877644088?text=Halo%20Saeful,%20saya%20tertarik%20dengan%20proyek%20Naj%20Quran",
  },
  {
    id: "ziezan-station",
    title: "Ziezan Station",
    category: "PS4 Rental & Gaming Center",
    tag: "Branding & Web App",
    description: "Konsep branding dan media digital untuk tempat rental PlayStation dan gaming.",
    fullStory:
      "Ziezan Station adalah pusat hiburan gaming dan rental konsol PlayStation premium. Proyek ini mencakup perancangan identitas visual neon futuristik bergaya PlayStation, antarmuka sistem reservasi stasiun gaming secara realtime, katalog game terlengkap, sistem leaderboard turnamen berkala, dan integrasi pemesanan makanan/minuman langsung dari tempat duduk gamer.",
    image: "/assets/extracted/project_ziezan.png",
    year: "2025",
    client: "Ziezan Gaming Station",
    role: "Brand Identity Designer & Frontend Developer",
    highlights: [
      "Sistem reservasi slot rental interaktif dengan visual denah stasiun",
      "Katalog game PS4/PS5 dengan filter genre dan status ketersediaan",
      "Desain identitas neon blue khas kultur gaming kompetitif",
      "Integrasi membership loyalitas poin untuk pelanggan setia",
    ],
    tools: ["Photoshop", "Illustrator", "Web UI", "React"],
    demoUrl: "https://wa.me/6283877644088?text=Halo%20Saeful,%20saya%20tertarik%20dengan%20proyek%20Ziezan%20Station",
  },
  {
    id: "ayam-geprek-jariah",
    title: "Ayam Geprek Jariah",
    category: "Brand UMKM Kuliner",
    tag: "Culinary Branding",
    description: "Identitas visual dan desain promosi digital untuk bisnis kuliner.",
    fullStory:
      "Membangun branding kuliner yang menggugah selera untuk Ayam Geprek Jariah, brand UMKM lokal dengan cita rasa sambal pedas autentik khas Nusantara. Desain berani memadukan warna merah cabai menyala, tipografi kasual ekspresif, kemasan ramah lingkungan, template materi promosi media sosial, serta menu online interaktif berbasis QR code untuk efisiensi pemesanan.",
    image: "/assets/extracted/project_ayam_geprek.png",
    year: "2025",
    client: "Ayam Geprek Jariah UMKM",
    role: "Brand Visual Designer & Digital Marketing Strategist",
    highlights: [
      "Desain logo dan maskot ikonik yang berkarakter kuat",
      "Katalog menu digital interaktif dengan QR code scan langsung di meja",
      "Kemasan take-away tahan panas dan estetik untuk unboxing content",
      "Peningkatan 65% interaksi visual di media sosial Instagram",
    ],
    tools: ["Illustrator", "Photoshop", "Packaging Design", "Social Kit"],
    demoUrl: "https://wa.me/6283877644088?text=Halo%20Saeful,%20saya%20tertarik%20dengan%20proyek%20Ayam%20Geprek%20Jariah",
  },
  {
    id: "hari-santri-2026",
    title: "Hari Santri 2026",
    category: "Media Kampanye Digital",
    tag: "Digital Campaign",
    description: "Konsep kampanye visual digital yang kreatif dan komunikatif.",
    fullStory:
      "Konseptualisasi kampanye digital nasional memperingati Hari Santri 2026 bertema 'Santri Berdaya Menuju Indonesia Emas'. Desain mengombinasikan elemen siluet kubah masjid bersejarah, ilustrasi santri generasi muda penuh optimisme, ornamen geometris Islam klasik, dan sistem aset visual siap pakai untuk media sosial, baliho digital, twibbon, dan landing page kampanye.",
    image: "/assets/extracted/project_hari_santri.png",
    year: "2026",
    client: "Komite Peringatan Hari Santri Nasional",
    role: "Creative Director & Visual Communication Designer",
    highlights: [
      "Key visual editorial bertaraf nasional dengan tipografi mewah",
      "Sistem modular twibbon dan template postingan multi-platform",
      "Penyampaian pesan patriotik dan religius yang modern bagi generasi muda",
      "Digunakan oleh ribuan peserta dalam parade dan media digital",
    ],
    tools: ["Photoshop", "Illustrator", "Editorial Layout"],
    demoUrl: "https://wa.me/6283877644088?text=Halo%20Saeful,%20saya%20tertarik%20dengan%20proyek%20Hari%20Santri%202026",
  },
];

export const TOOLS: ToolItem[] = [
  { name: "Figma", category: "UI/UX & Prototyping", color: "#F24E1E", bgColor: "#1e1014", abbr: "Fg", logoType: "figma" },
  { name: "Adobe XD", category: "Experience Design", color: "#FF61F6", bgColor: "#200d1e", abbr: "Xd", logoType: "xd" },
  { name: "Photoshop", category: "Photo & Raster Editing", color: "#31A8FF", bgColor: "#0d1825", abbr: "Ps", logoType: "ps" },
  { name: "Illustrator", category: "Vector & Branding", color: "#FF9A00", bgColor: "#251808", abbr: "Ai", logoType: "ai" },
  { name: "Webflow", category: "Visual Web Development", color: "#4353FF", bgColor: "#111425", abbr: "W", logoType: "webflow" },
  { name: "HTML5", category: "Semantic Markup", color: "#E34F26", bgColor: "#22110c", abbr: "</>", logoType: "html" },
  { name: "CSS3", category: "Responsive Styling", color: "#1572B6", bgColor: "#0c1825", abbr: "{;}", logoType: "css" },
  { name: "JavaScript", category: "Interactive Logic", color: "#F7DF1E", bgColor: "#23200b", abbr: "JS", logoType: "js" },
];
