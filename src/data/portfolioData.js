import figmaIcon from "../assets/icons/figmaIcon.svg";
import jsIcon from "../assets/icons/jsIcon.svg";
import nodeIcon from "../assets/icons/nodeIcon.svg";
import reactIcon from "../assets/icons/reactIcon.svg";
import reduxIcon from "../assets/icons/reduxIcon.svg";
import vscodeIcon from "../assets/icons/vscodeIcon.svg";

import journeyImage from "../assets/images/journeyImage.svg";
import workintechImage from "../assets/images/workintechImage.svg";

const githubUrl = "https://github.com/Dogukan3648/dogukan-portfolio";

const skills = [
  {
    id: "javascript",
    name: "JAVASCRIPT",
    icon: jsIcon,
  },
  {
    id: "react",
    name: "REACT",
    icon: reactIcon,
  },
  {
    id: "redux",
    name: "REDUX",
    icon: reduxIcon,
  },
  {
    id: "node",
    name: "NODE",
    icon: nodeIcon,
  },
  {
    id: "vscode",
    name: "VS CODE",
    icon: vscodeIcon,
  },
  {
    id: "figma",
    name: "FIGMA",
    icon: figmaIcon,
  },
];

export const portfolioData = {
  en: {
    header: {
      name: "Doğukan Bozkır",
      languageButton: "TÜRKÇE'YE GEÇ",
      themeLabel: "DARK MODE",
      themeAriaLabelToDark: "Switch to dark theme",
      themeAriaLabelToLight: "Switch to light theme",
    },

    hero: {
      title: "I am a Frontend Developer...",
      description:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      imageAlt: "Doğukan Bozkır",
      links: {
        github: {
          label: "GitHub",
          url: "https://github.com/Dogukan3648",
        },
        linkedin: {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/dogukanbozkir/",
        },
      },
    },

    skills: {
      title: "Skills",
      items: skills,
    },

    profile: {
      title: "Profile",
      basicInfoTitle: "Basic Information",
      aboutTitle: "About Me",
      imageAlt: "Doğukan Bozkır's workspace",
      info: [
        {
          id: "birthDate",
          label: "Birth Date",
          value: "05.06.1996",
        },
        {
          id: "location",
          label: "Location",
          value: "Istanbul",
        },
        {
          id: "education",
          label: "Education",
          value: "Istanbul Esenyurt University, Computer Engineering, 2025",
        },
        {
          id: "preferredRole",
          label: "Preferred Role",
          value: "Full-Stack Developer",
        },
      ],
      about:
        "I focus on building user-centered, clear, and maintainable interfaces in frontend development. While working with React, JavaScript, and modern frontend tools, I care about both writing clean code and creating strong user experiences.",
    },

    projects: {
      title: "Projects",
      viewSiteLabel: "View Site",
      githubLabel: "GitHub",
      items: [
        {
          id: 1,
          title: "Workintech",
          image: workintechImage,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows users to choose which cookies to accept or decline. It was built with modern frontend technologies and designed with a clean, user-friendly interface.",
          technologies: ["React", "Redux", "Vercel"],
          liveUrl: "#",
          githubUrl: githubUrl,
        },
        {
          id: 2,
          title: "Journey",
          image: journeyImage,
          description:
            "A responsive frontend project focused on creating a clear and accessible user experience. The application was developed using reusable components and modern state management techniques.",
          technologies: ["React", "Redux", "Vercel"],
          liveUrl: "#",
          githubUrl: githubUrl,
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "dogukan12216@gmail.com",
      socialLinks: {
        x: "#",
        codepen: "#",
        instagram: "#",
      },
      ariaLabels: {
        x: "X profile",
        codepen: "CodePen profile",
        email: "Send an email",
        instagram: "Instagram profile",
      },
    },
  },

  tr: {
    header: {
      name: "Doğukan Bozkır",
      languageButton: "SWITCH TO ENGLISH",
      themeLabel: "KARANLIK MOD",
      themeAriaLabelToDark: "Karanlık temayı aç",
      themeAriaLabelToLight: "Aydınlık temayı aç",
    },

    hero: {
      title: "Ben bir Frontend Developer'ım...",
      description:
        "...sağlam, ölçeklenebilir ve iyi kullanıcı deneyimi sunan frontend ürünleri geliştirmeyi seviyorum.",
      imageAlt: "Doğukan Bozkır",
      links: {
        github: {
          label: "GitHub",
          url: "https://github.com/Dogukan3648",
        },
        linkedin: {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/dogukanbozkir/",
        },
      },
    },

    skills: {
      title: "Yetenekler",
      items: skills,
    },

    profile: {
      title: "Profil",
      basicInfoTitle: "Temel Bilgiler",
      aboutTitle: "Hakkımda",
      imageAlt: "Doğukan Bozkır çalışma ortamı",
      info: [
        {
          id: "birthDate",
          label: "Doğum Tarihi",
          value: "05.06.1996",
        },
        {
          id: "location",
          label: "İkamet Yeri",
          value: "İstanbul",
        },
        {
          id: "education",
          label: "Eğitim Durumu",
          value:
            "İstanbul Esenyurt Üniversitesi, Bilgisayar Mühendisliği, 2025",
        },
        {
          id: "preferredRole",
          label: "Tercih Ettiği Rol",
          value: "Full-Stack Developer",
        },
      ],
      about:
        "Frontend geliştirme alanında kullanıcı odaklı, anlaşılır ve sürdürülebilir arayüzler geliştirmeye odaklanıyorum. React, JavaScript ve modern frontend araçlarıyla çalışırken hem temiz kod yazmaya hem de güçlü bir kullanıcı deneyimi oluşturmaya önem veriyorum.",
    },

    projects: {
      title: "Projeler",
      viewSiteLabel: "Siteyi Görüntüle",
      githubLabel: "GitHub",
      items: [
        {
          id: 1,
          title: "Workintech",
          image: workintechImage,
          description:
            "Kullanıcıların kabul etmek veya reddetmek istedikleri çerezleri seçebilmesini sağlayan sade ve özelleştirilebilir bir frontend projesidir. Modern frontend teknolojileriyle geliştirilmiş ve kullanıcı dostu bir arayüz oluşturulmuştur.",
          technologies: ["React", "Redux", "Vercel"],
          liveUrl: "#",
          githubUrl: githubUrl,
        },
        {
          id: 2,
          title: "Journey",
          image: journeyImage,
          description:
            "Anlaşılır ve erişilebilir bir kullanıcı deneyimi oluşturmaya odaklanan responsive bir frontend projesidir. Uygulama, yeniden kullanılabilir componentler ve modern state yönetimi teknikleri kullanılarak geliştirilmiştir.",
          technologies: ["React", "Redux", "Vercel"],
          liveUrl: "#",
          githubUrl: githubUrl,
        },
      ],
    },
    footer: {
      title: "Bana mesaj gönder!",
      description:
        "Bir sorun veya teklifin mi var, yoksa sadece merhaba mı demek istiyorsun? Mesajını bekliyorum.",
      email: "dogukan12216@gmail.com",
      socialLinks: {
        x: "#",
        codepen: "#",
        instagram: "#",
      },
      ariaLabels: {
        x: "X profili",
        codepen: "CodePen profili",
        email: "E-posta gönder",
        instagram: "Instagram profili",
      },
    },
  },
};
