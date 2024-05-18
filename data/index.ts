export const navItems = [
    { name: "Sobre mí", link: "#sobremi" },
    { name: "Proyectos", link: "#proyectos" },
    { name: "Testimonios", link: "#testimonios" },
    { name: "Contacto", link: "#contacto" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Priorizo la colaboración con el cliente, fomentando una comunicación abierta",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Soy flexible con las comunicaciones en diferentes zonas horarias",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Mi tech stack",
      description: "En constante aprendizaje,",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Entusiasta de la tecnología con pasión por el desarrollo web",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Actualmente estoy construyendo una librería de UI en ReactJS",
      description: "Me encuentro trabajando en...",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "¿Tienes un proyecto o concepto en mente?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CRM - El Gato con Bolsas",
      des: "CRM para la creación de facturas, clientes, leads, productos y empleados.",
      img: "/elGatoConBolsasCap.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
      link: "https://crm.elgatoconbolsas.es",
    },
    {
      id: 2,
      title: "Bridge - Videollamadas",
      des: "Simplifica tu experiencia de videollamadas.",
      img: "/bridge.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://bridge.aracovita.dev",
    },
    {
      id: 2,
      title: "Rehatrans - Página web",
      img: "/rehatrans.png",
      des: "Página web con ecommerce y funcionalidades de llamadas y ticketing.",
      iconLists: ["/wp.svg", "/css.svg", "/ts.svg", "/php.svg", "/woo.svg"],
      link: "https://rehatrans.com",
    },
    {
      id: 2,
      title: "Conselh d'Aran - Ecommerce",
      des: "Página web con ecommerce para el ayuntamiento del valle de Arán.",
      img: "/aranes.png",
      iconLists: ["/wp.svg", "/css.svg", "/ts.svg", "/php.svg", "/woo.svg"],
      link: "https://aranes.conselharan.org",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "La implementación del CRM a través de nuestra nueva aplicación web ha transformado completamente nuestra forma de trabajar. La interfaz es intuitiva y permite a nuestro equipo gestionar las relaciones con los clientes de manera más eficiente. Gracias a esta solución, hemos visto un aumento significativo en la satisfacción de nuestros clientes y en nuestra productividad.",
      name: "Iván Moreno Osma",
      title: "El Gato Con Bolsas",
      imgClient: '/logo-gcb.png'
    },
    {
      quote:
        "Nuestra nueva web con ecommerce ha sido un cambio de juego para nuestro negocio. La experiencia de usuario es fluida y las funcionalidades de la tienda online son excepcionales. Las ventas han aumentado desde el lanzamiento y la gestión de pedidos es más sencilla que nunca. No podríamos estar más contentos con el resultado.",
      name: "Rehatrans",
      title: "Adaptación de vehículos",
      imgClient: '/rehatrans-logo.svg'

    },
    {
      quote:
        "El desarrollo de nuestra web con ecommerce ha superado nuestras expectativas. La plataforma es robusta, segura y fácil de usar tanto para nosotros como para nuestros clientes. La integración con nuestros sistemas internos ha sido perfecta, y las ventas online han crecido exponencialmente. ¡Estamos muy satisfechos con esta colaboración!",
      name: "Conselh d'Aran",
      title: "Ayuntamiento del valle de Arán",
      imgClient: '/logoAran.png'

    },
    {
      quote:
        "Decidimos modernizar nuestra tienda online y no podríamos estar más satisfechos con la nueva aplicación web. El proceso de compra es ahora mucho más intuitivo y hemos recibido comentarios positivos de nuestros clientes sobre la facilidad de uso. Además, la administración del inventario y los pedidos es mucho más eficiente. Esta actualización ha sido una excelente inversión para nuestro negocio.",
      name: "Floristería La Rosa",
      title: "Floristería",
      imgClient: '/logoRosa.png'
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Rehatrans",
      img: "/rehatrans-logo.svg",
      nameImg: "/rehatrans-logo.svg",
    },
    {
      id: 2,
      name: "El Gato Con Bolsas",
      nameImg: "/logo-gcb.png",
    },
    {
      id: 3,
      name: "Nexus CRM",
      nameImg: "/logoNexus.png",
    },
    {
      id: 4,
      name: "Club de Golf Retamares",
      nameImg: "/logoRetamares.png",
    },
    {
      id: 5,
      name: "Sive Fluids.",
      nameImg: "/logoSive.png",
    },
    {
      id: 6,
      name: "Taller Kyoto.",
      nameImg: "/logoKyoto.png",
    },
    {
      id: 5,
      name: "Conselh d'Aran",
      nameImg: "/logoAran.png",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Desarrollador Front-end",
      desc: "Trabajé en iempresa creando y manteniendo webs con HTML, CSS, JavaScript, React y WordPress, colaborando con diseñadores y desarrolladores.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
      company: 'iempresa',
      dates: '2021 - 2024',
      link: 'https://iempresa.net'

    },
    {
      id: 2,
      title: "Project Manager",
      desc: "Gestiono proyectos en iempresa, planificando, asignando recursos y liderando equipos para asegurar entregas puntuales y dentro del presupuesto, usando metodologías ágiles.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
      company: 'iempresa',
      dates: '2024 - Actualidad',
      link: 'https://iempresa.net'
    
    },
    {
      id: 3,
      title: "Desarrollador de Aplicaciones Web",
      desc: "Como freelance, diseño y desarrollo aplicaciones web personalizadas, abarcando tanto el front-end como el back-end, utilizando tecnologías como Node.js y MongoDB.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
      company: 'Freelance',
      dates: '2021 - Actualidad',
      link: 'https://aracovita.dev'

    },
    {
      id: 4,
      title: "Account Manager",
      desc: "He asumido diversas responsabilidades, contribuyendo al desarrollo de software y la gestión de proyectos, trabajando en equipo para entregar productos de alta calidad.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
      company: 'iempresa',
      dates: '2024 - Actualidad',
      link: 'https://iempresa.net'
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: 'https://github.com/adrianRacovitaJSX'
    },
    {
      id: 2,
      img: "/link.svg",
      link: 'https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/'

    },
  ];