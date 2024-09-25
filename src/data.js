import thumbnail1 from "./png/thumbnail3.png";
import thumbnail2 from "./png/thumbnail4.png";
import thumbnail3 from "./png/thumbnail5.png";
import logo1 from "./png/logo-5.png";

import logo3 from "./png/logo3.png";
import logo4 from "./png/logo1.png";

import badge2 from "./png/badge4.png";
import badge3 from "./png/badge5.png";
import badge4 from "./png/badge6.png";

import coffee from "./png/coffee mokup.png"; // fixed typo
import tshirt from "./png/tshirt2.png";
import poster1 from "./png/postcard.png";
import poster2 from "./png/poster2.png";

import {
  faPaintBrush,
  faPalette,
  faTag,
  faPrint,
  faLaptop,
  faChartBar,
  faMobileAlt,
  faCogs,
  faBrush,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    title: "Eye-Catching Thumbnails",
    subtitle:
      "Create visually striking thumbnails that grab viewers' attention and boost click-through rates.",
    image: thumbnail1,
    link: "https://drive.google.com/file/d/1_obQyLTbsqAIeIcb3wf-4xEweIAtkK82/view?usp=sharing",
  },
  {
    title: "Consistent Branding",
    subtitle:
      "Ensure your thumbnails reflect your channel’s identity, promoting a cohesive look across all videos.",
    image: thumbnail2,
    link: "https://drive.google.com/file/d/17w9802pFfVKG1O9Kz5mdiHo6k6lZKmj4/view?usp=sharing",
  },
  {
    title: "Optimized for Engagement",
    subtitle:
      "Design thumbnails that not only attract clicks but also set clear expectations for your content.",
    image: thumbnail3,
    link: "https://drive.google.com/file/d/1QYnB-pRxtqwMD-y7pw8Bekzsg0WrXK-o/view?usp=sharing",
  },
  {
    title: "Unique Identity",
    subtitle:
      "Develop a logo that encapsulates your brand’s essence and stands out in the marketplace.",
    image: logo1,
    link: "https://drive.google.com/file/d/17fEtC9wgub-zQ-w6xtv4sWJhk6g1KlWo/view?usp=sharing",
  },
  {
    title: "Versatile & Scalable",
    subtitle:
      "Craft logos that maintain clarity and impact at any size, from business cards to billboards.",
    image: logo3,
    link: "https://drive.google.com/file/d/1Zpgz2A71AJcArMUvfQf9wUPcDa_8DG69/view?usp=sharing",
  },
  {
    title: "Timeless Design",
    subtitle:
      "Focus on creating logos that won’t go out of style, ensuring longevity and brand recognition.",
    image: logo4,
    link: "https://drive.google.com/file/d/1nl6RlfAkSl_BKvHvPETs2c2bYrb37Baz/view?usp=sharing",
  },
  {
    title: "Recognition & Achievement",
    subtitle:
      "Design badges that celebrate accomplishments and encourage user engagement.",
    image: badge4,
    link: "https://drive.google.com/file/d/1z-eEyCZjeMivSHuUO2Xhiscsj0Jx9lRE/view?usp=sharing",
  },
  {
    title: "Customizable Options",
    subtitle:
      "Offer a variety of badge designs that can be tailored to different achievements or milestones.",
    image: badge2,
    link: "https://drive.google.com/file/d/1JQlv6VDlrKhxqmvDsEO7PRff1wjEaAW2/view?usp=sharing",
  },
  {
    title: "Enhancing User Experience",
    subtitle:
      "Use badges to enhance the user experience, providing visual rewards that motivate continued interaction.",
    image: badge3,
    link: "https://drive.google.com/file/d/1vN6iVguKIdXrNvDYFIGQdxalyg_XJ4uy/view?usp=sharing",
  },
  {
    title: "Cup with Logo",
    subtitle:
      "A stylish cup featuring a custom logo, perfect for branding and promotional purposes.",
    image: coffee, // corrected reference
    link: "https://drive.google.com/file/d/13H0crc1dpF723tbNd_KpzbcSLeTZokmn/view?usp=sharing",
  },
  {
    title: "T-Shirt with Logo",
    subtitle:
      "An eye-catching t-shirt design that showcases a unique logo, ideal for events and merchandise.",
    image: tshirt, // corrected reference
    link: "https://drive.google.com/file/d/1Sae-hGrYHk7rpfiXeo1ZmmUApf2rsCdP/view?usp=sharing",
  },
  {
    title: "Postcard Design",
    subtitle:
      "A beautifully designed postcard for promotional use, combining visuals and messaging effectively.",
    image: poster1, // corrected reference
    link: "https://drive.google.com/file/d/1u5BKlPQtutfyRWTmfTuYYjp3WjVmBKYR/view?usp=sharing",
  },
  {
    title: "Social Media Post",
    subtitle:
      "A creative social media post design tailored for a fashion brand, aimed at boosting online engagement.",
    image: poster2, // corrected reference
    link: "https://drive.google.com/file/d/1zW2oxC_-70cSLCFTYF6qHkd72bcqGbw-/view?usp=sharing",
  },
];

export const testimonials = [
  {
    quote:
      "I was blown away by the quality of work and attention to detail. The designer was able to deliver a high-quality product on time and exceeded my expectations.",
    name: "Khalid Mohammed",
    company: "Khalid Graphics",
  },
  {
    quote:
      "The designer was very professional and easy to work with. They were able to understand my requirements and deliver a product that met my needs.",
    name: "Bint Ebrahim",
    company: "Fehda Graphics",
  },
];

export const skills = [
  { name: "Adobe Creative Suite", icon: faPaintBrush },
  { name: "Graphic Design", icon: faPalette },
  { name: "Branding", icon: faTag },
  { name: "Print Design", icon: faPrint },
  { name: "Digital Design", icon: faLaptop },
  { name: "Data Visualization", icon: faChartBar },
  { name: "UI/UX Design", icon: faMobileAlt },
  { name: "Design Principles", icon: faCogs },
  { name: "Color Theory", icon: faBrush },
  { name: "Typography", icon: faFont },
];
