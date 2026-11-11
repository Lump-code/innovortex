import courseWeb from "@/assets/course-web.jpg.asset.json";
import courseCpp from "@/assets/course-dsa-cpp.jpg.asset.json";
import courseMl from "@/assets/course-ml.jpg.asset.json";
import courseJava from "@/assets/course-dsa-java.jpg.asset.json";
import courseArvr from "@/assets/course-arvr.jpg.asset.json";
import courseApp from "@/assets/course-app.jpg.asset.json";
import g01 from "@/assets/glimps-01.jpg.asset.json";
import g02 from "@/assets/glimps-02.jpg.asset.json";
import g03 from "@/assets/glimps-03.jpg.asset.json";
import g04 from "@/assets/glimps-04.jpg.asset.json";
import g05 from "@/assets/glimps-05.jpg.asset.json";
import g06 from "@/assets/glimps-06.jpg.asset.json";
import g07 from "@/assets/glimps-07.jpg.asset.json";
import g08 from "@/assets/glimps-08.jpg.asset.json";
import g09 from "@/assets/glimps-09.jpg.asset.json";
import g10 from "@/assets/glimps-10.jpg.asset.json";
import g11 from "@/assets/glimps-11.jpg.asset.json";
import g12 from "@/assets/glimps-12.jpg.asset.json";

export const CONTACT = {
  email: "techneedsigdtuw@gmail.com",
  phone: "+91 8958898580",
  whatsapp: "https://wa.me/918958898580",
};

/**
 * Footer socials. `href: null` marks a link the existing site does not list yet —
 * it renders as a labelled placeholder until the real URL is supplied.
 */
export const SOCIALS: { label: string; href: string | null }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/techneeds-igdtuw" },
  { label: "Instagram", href: null },
  { label: "X/Twitter", href: null },
  { label: "GitHub", href: null },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/techboard", label: "Techboard" },
  { to: "/team", label: "Team" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/faq", label: "FAQ" },
  { to: "/profile", label: "Profile" },
] as const;

export type Course = { title: string; mentor: string; image: string };

export const COURSES: Course[] = [
  { title: "Web Development", mentor: "Vidushi Agarwal", image: courseWeb.url },
  { title: "DSA in C/C++", mentor: "Shefali Kaushal", image: courseCpp.url },
  { title: "Machine Learning", mentor: "Sripriya Aggarwal", image: courseMl.url },
  { title: "DSA in Java", mentor: "Tavleen Kaur", image: courseJava.url },
  { title: "AR/VR Mentorship", mentor: "Snighdha", image: courseArvr.url },
  { title: "App Development", mentor: "Muskan Manvi", image: courseApp.url },
];

export const GLIMPS: { src: string; alt: string }[] = [
  { src: g01.url, alt: "Students attending a TechNeeds session in a lecture hall" },
  { src: g02.url, alt: "TechNeeds team celebrating a hackathon win" },
  { src: g03.url, alt: "TechNeeds members posing together" },
  { src: g04.url, alt: "Online mentorship session on neural networks" },
  { src: g05.url, alt: "Students during an in-person workshop" },
  { src: g06.url, alt: "Speaker addressing students at an IGDTUW event" },
  { src: g07.url, alt: "11 Days of Code Challenge online kickoff" },
  { src: g08.url, alt: "Online cohort session with mentees" },
  { src: g09.url, alt: "Team on stage at an entrepreneurship event" },
  { src: g10.url, alt: "Microsoft Learn Student Ambassador session poster" },
  { src: g11.url, alt: "Summer Skill Sprint Challenge announcement" },
  { src: g12.url, alt: "A packed classroom during a TechNeeds talk" },
];

export const STATS = [
  { value: "1200+", label: "Trained mentees" },
  { value: "50+", label: "Professional mentors" },
  { value: "10+", label: "Mentorship cohorts" },
  { value: "100+", label: "Amazing events" },
];

export const OFFERINGS = [
  "In-depth insights",
  "Educational content",
  "Community engagement",
  "Hackathons",
  "Speaker sessions",
];

export type Testimonial = { name: string; text: string; rating: number };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kanika Chauhan",
    rating: 5,
    text: "TechNeeds has been my go-to platform for staying updated on the latest tech trends. The community is incredibly supportive, and the content is top-notch.",
  },
  {
    name: "Khushi Sharma",
    rating: 5,
    text: "The senior mentors offer detailed explanations and practical advice that make complex tech topics easier to grasp. The supportive community is an added bonus.",
  },
  {
    name: "Komal Maurya",
    rating: 5,
    text: "The senior-led mentorship has been particularly valuable, providing me with expert advice and helping me navigate my tech career path.",
  },
  {
    name: "Chahal Jain",
    rating: 5,
    text: "The community is welcoming, and the seniors are genuinely invested in helping you succeed. The courses cater to all levels of expertise.",
  },
  {
    name: "Mansi Solanki",
    rating: 4,
    text: "I've been using TechNeeds for several months now. The courses are well-structured, and the senior mentors are always ready to help.",
  },
  {
    name: "Sagar",
    rating: 5,
    text: "TechNeeds brings together tech enthusiasts from all backgrounds. The guidance from senior members helped me understand complex topics and apply them.",
  },
  {
    name: "Julie",
    rating: 4,
    text: "TechNeeds stands out for its dedication to empowering individuals. The mentors are approachable and their insights helped me advance my tech career.",
  },
  {
    name: "Tanishka Manwal",
    rating: 4,
    text: "Joining TechNeeds was one of the best decisions for my tech career. The seniors offer insights you can't get from textbooks alone.",
  },
];

export const FAQS = [
  {
    q: "What is TechNeeds?",
    a: "TechNeeds is a platform that provides technology solutions and support for various needs.",
  },
  {
    q: "How can I contact support?",
    a: "You can contact support via our official WhatsApp group or email us at techneedsigdtuw@gmail.com.",
  },
  {
    q: "What services do you offer?",
    a: "We offer a range of services including hackathon, tech introductory sessions, mentorship programs, tech engagement competition and speaker sessions.",
  },
  {
    q: "Where is TechNeeds located?",
    a: "TechNeeds is based in the heart of IGDTUW founded in 2023.",
  },
  {
    q: "Can I track my mentorship journey?",
    a: "Yes, you can track your journey through our online portal.",
  },
];

/** Placeholder standings — the existing site publishes no leaderboard data yet. */
export const LEADERBOARD: { name: string; cohort: string; points: number }[] = [
  { name: "Participant A", cohort: "Web Development", points: 2480 },
  { name: "Participant B", cohort: "DSA in C/C++", points: 2315 },
  { name: "Participant C", cohort: "Machine Learning", points: 2190 },
  { name: "Participant D", cohort: "DSA in Java", points: 2045 },
  { name: "Participant E", cohort: "App Development", points: 1960 },
  { name: "Participant F", cohort: "AR/VR Mentorship", points: 1875 },
  { name: "Participant G", cohort: "Web Development", points: 1790 },
  { name: "Participant H", cohort: "DSA in C/C++", points: 1655 },
  { name: "Participant I", cohort: "Machine Learning", points: 1540 },
  { name: "Participant J", cohort: "DSA in Java", points: 1420 },
  { name: "Participant K", cohort: "App Development", points: 1310 },
  { name: "Participant L", cohort: "Web Development", points: 1205 },
];
