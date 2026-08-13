import figmaIcon from "../assets/icons/figmaIcon.svg";
import jsIcon from "../assets/icons/jsIcon.svg";
import nodeIcon from "../assets/icons/nodeIcon.svg";
import reactIcon from "../assets/icons/reactIcon.svg";
import reduxIcon from "../assets/icons/reduxIcon.svg";
import vscodeIcon from "../assets/icons/vscodeIcon.svg";
import bookVaultImage from "../assets/images/bookVault.webp";
import technologicalMealsImage from "../assets/images/teknolojikYemekler.webp";

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
    common: {
      status: {
        loading: "Sending portfolio data...",
        error: "Portfolio data could not be sent.",
      },
    },

    header: {
      name: "Doğukan Bozkır",
      languageButton: "TÜRKÇE'YE GEÇ",
      themeLabelToDark: "DARK MODE",
      themeLabelToLight: "LIGHT MODE",
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
          title: "Book Vault",
          description:
            "A personal book discovery and library management application built with React. Users can search thousands of books through the Open Library API, build their own collection, track reading progress, mark favorites, rate books, and save personal notes. The application combines API integration, Context API state management, routing, and persistent local storage to deliver a practical and seamless library experience.",
          technologies: ["React", "Context API", "Axios"],
          liveUrl: null,
          githubUrl: "https://github.com/Dogukan3648/book-library",
          image: bookVaultImage,
        },
        {
          id: 2,
          title: "Teknolojik Yemekler",
          description:
            "A responsive pizza ordering application that recreates a real-world e-commerce ordering flow. Users can customize their order by selecting pizza size, dough type, ingredients, and quantity while the application validates their choices and calculates the total price dynamically. The project includes API-based order submission, multi-page navigation, form state management, responsive design, and automated testing.",
          technologies: ["React", "Axios", "Cypress"],
          liveUrl: null,
          githubUrl: "https://github.com/Dogukan3648/fsweb-s8-challenge-pizza",
          image: technologicalMealsImage,
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
    common: {
      status: {
        loading: "Portföy verileri gönderiliyor...",
        error: "Portföy verileri gönderilemedi.",
      },
    },

    header: {
      name: "Doğukan Bozkır",
      languageButton: "SWITCH TO ENGLISH",
      themeLabelToDark: "KARANLIK MOD",
      themeLabelToLight: "AYDINLIK MOD",
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
          title: "Book Vault",
          description:
            "React ile geliştirilmiş kişisel kitap keşif ve kütüphane yönetim uygulamasıdır. Kullanıcılar Open Library API üzerinden binlerce kitap arasında arama yapabilir, kendi kütüphanelerini oluşturabilir, okuma durumlarını takip edebilir, favorilerini belirleyebilir, kitapları puanlayabilir ve kişisel notlar ekleyebilir. Uygulama; API entegrasyonu, Context API ile state yönetimi, routing ve localStorage ile kalıcı veri yönetimini bir araya getirir.",
          technologies: ["React", "Context API", "Axios"],
          liveUrl: null,
          githubUrl: "https://github.com/Dogukan3648/book-library",
          image: bookVaultImage,
        },
        {
          id: 2,
          title: "Teknolojik Yemekler",
          description:
            "Gerçek bir e-ticaret sipariş deneyimini simüle eden responsive pizza sipariş uygulamasıdır. Kullanıcılar pizza boyutu, hamur tipi, ek malzemeler ve adet seçenekleriyle siparişlerini özelleştirebilir; uygulama seçimleri doğrular ve toplam fiyatı dinamik olarak hesaplar. Projede form state yönetimi, validasyon, API üzerinden sipariş gönderimi, çok sayfalı yönlendirme, responsive tasarım ve otomatik testler kullanılmıştır.",
          technologies: ["React", "Axios", "Cypress"],
          liveUrl: null,
          githubUrl: "https://github.com/Dogukan3648/fsweb-s8-challenge-pizza",
          image: technologicalMealsImage,
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
