import imagesPath from "./imagesPath";

const homeConfiguration = {
  // Home Page Information

  // Welcome Section Information
  heroSection: {
    title: "Comfort and Efficiency for Your Home and Business",
    subtitle:
      "Experts in repair, installation, and maintenance of HVAC systems.",
  },
  // Services Section Information
  servicesSection: {
    title: "Our Services",
    subtitle: "Fast and effective solutions for all your HVAC systems.",
  },

  // Services Information
  companyServices: [
    {
      id: 1,
      image: imagesPath.services[0],
      title: "HVAC Installation",
      description:
        "We are dedicated to delivering HVAC installations that ensure lasting comfort and dependable performance.",
      badge: {
        text: "1-Year Full Installation Warranty!",
        //types: "success" (green) | "warning" (yellow) | "error" (red) | "secondary" (blue) || null (primary)
        type: "success",
      },
    },
    {
      id: 2,
      image: imagesPath.services[1],
      title: "Repair and Maintenance",
      description:
        "We offer repair services to quickly restore system performance, alongside comprehensive maintenance to optimize efficiency, prevent issues, and extend the lifespan of your equipment.",
      badge: null,
    },
    {
      id: 3,
      image: imagesPath.services[2],
      title: "Maintenance Plans",
      description:
        "Our maintenance plans provide regular, scheduled service to keep your HVAC system running efficiently, prevent unexpected breakdowns, and extend its lifespan.",
      badge: {
        text: "Coming Soon!",
        //types: "success" (green) | "warning" (yellow) | "error" (red) | "secondary" (blue) || null (primary)
        type: "warning",
      },
    },
  ],

  // Our Values Section Information
  companyValues: {
    title: "Our Values",
    subtitle:
      "At Polar Point HVAC, we’re driven by a mission to provide exceptional HVAC solutions built on a foundation of trust, quality, and care. Our commitment to customer satisfaction is guided by three core values.",
    values: [
      {
        id: 1,
        iconName: "Handshake",
        title: "Honestly",
        description:
          "When it comes to HVAC service, we know you want a company you can trust. At Polar Point we provide honest assessments, clear explanations, and fair pricing—no hidden fees, no surprises. You can count on us to be upfront about what’s best for you and your system, ensuring you always feel confident in the work we do.",
        //types: "success" (green) | "warning" (yellow) | "error" (red) | "secondary" (blue) || null (primary)
        type: "secondary",
      },
      {
        id: 2,
        iconName: "Toolbox",
        title: "Quality",
        description:
          "This is at the heart of everything we do. Our skilled technicians are dedicated to delivering results that exceed expectations, using top-of-the-line materials and industry-best practices. Whether it’s a routine repair, a complex installation, or preventive maintenance, we take pride in doing the job right the first time. Our focus on quality ensures the systems we install or service are efficient, reliable, and built to last.",
        //types: "success" (green) | "warning" (yellow) | "error" (red) | "secondary" (blue) || null (primary)
        type: "success",
      },
      {
        id: 3,
        iconName: "MessageTextFast",
        title: "Communication",
        description:
          "Clear, open communication is essential to delivering outstanding service. From your initial inquiry to project completion, we make sure you’re informed and involved every step of the way. We prioritize keeping you in the loop, this ensures we understand your needs and can deliver solutions tailored to your home or business.",
        //types: "success" (green) | "warning" (yellow) | "error" (red) | "secondary" (blue) || null (primary)
        type: "warning",
      },
    ],
  },
};

export default homeConfiguration;
