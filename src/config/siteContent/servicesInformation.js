import imagesPath from "./imagesPath";

const servicesInformation = {
  servicesSection: {
    title: "Services",
    subtitle: "Fast and effective solutions for all your HVAC systems.",
  },
  whyChooseUsSection: {
    title: "Why Choose Us",
    subtitle:
      "At Polar Point HVAC, we understand that your home or business deserves reliable, energy-efficient comfort systems tailored to your unique needs. With years of hands-on expertise in HVAC installation and repair, we specialize in delivering quality solutions for both residential and light commercial systems—including RTU, forced air, mini splits, VRV, VRF, and cutting-edge heat pump technology.",
    introduction: "Here is what sets us apart:",
    whyChooseUs: [
      {
        title: "Customer-Focused Service",
        description:
          "Your satisfaction is our priority. From the first call to the final walkthrough, we work with integrity, transparency, and a commitment to exceeding expectations.",
        iconName: "AccountGroupOutline",
      },
      {
        title: "Expert Craftsmanship",
        description:
          "Our experienced technicians are equipped to handle even the most complex installations or repairs with precision and care. No shortcuts—just top-tier results.",
        iconName: "WrenchOutline",
      },
      {
        title: "Energy Savings Expertise for Businesses",
        description:
          "We help our commercial clients take full advantage of state rebates and energy incentives, optimizing your investment while making your building more energy-efficient.",
        iconName: "LightbulbOnOutline",
      },
      {
        title: "Dependable & Responsive",
        description:
          "Whether it is a planned project or an emergency repair, you can count on us to show up on time, ready to deliver solutions that last.",
        iconName: "ClockCheckOutline",
      },
      {
        title: "Safety First",
        description:
          "Working with HVAC equipment requires skill and caution. Our team is trained to meet the highest safety standards, protecting you and your property.",
        iconName: "ShieldAlertOutline",
      },
    ],
    conclusion:
      "When you choose Polar Point HVAC, you are choosing a partner who takes pride in doing the job right the first time. Let us show you the difference of working with a team that truly cares.",
  },
  hvacInstallationPage: {
    title: "HVAC Installation",
    subtitle:
      "We are dedicated to delivering HVAC installations that ensure lasting comfort and dependable performance.",
    content: [
      {
        image: imagesPath.hvacInstallation[0],
        text: "In HVAC, a proper installation involves much more than setting up equipment—it’s about attending to every detail with precision and expertise. Our approach begins with selecting high-quality systems that align with the unique needs of your home or business.",
        direction: "row",
      },
      {
        image: imagesPath.hvacInstallation[1],
        text: "From there, we carefully plan each aspect of the installation, considering factors like airflow, efficiency, and overall performance to ensure your system operates seamlessly. Using proven techniques and adhering to industry best practices, we ensure the work is done right, creating a system that delivers exceptional comfort and energy efficiency.",
        direction: "row",
      },
      {
        image: imagesPath.hvacInstallation[2],
        text: "Equally important is thinking ahead to the system’s longevity. Maintenance is essential for any HVAC equipment, so we install units with future serviceability in mind, making it easier to keep them running smoothly year after year.",
        direction: "row-reverse",
      },
    ],
    conclusion:
      "This attention to detail, combined with our dedication to quality and thoughtful planning, results in installations that provide lasting performance, reliability, and comfort.",
  },
  repairAndMaintenancePage: {
    title: "Repair and Maintenance",
    subtitle:
      "We offer repair services to quickly restore system performance, alongside comprehensive maintenance to optimize efficiency, prevent issues, and extend the lifespan of your equipment.",
    content: [
      {
        subtitle: "Repair",
        content: "When an HVAC issue arises, it's important to address it promptly to avoid more extensive damage to your system.",
        image: imagesPath.hvacInstallation[0],
        text: "Our expert repair services are designed to quickly identify and resolve problems, restoring your system’s performance and reliability. Delaying repairs or ignoring issues can lead to long-term damage, reducing the lifespan of your equipment and leading to more costly repairs down the line. We understand that when your HVAC system isn’t functioning properly, it can disrupt your comfort and daily life, which is why we focus on providing dependable, efficient solutions to get your system back up and running as soon as possible.",
        direction: "row",
      },
      {
        subtitle: "Maintenance",
        content: "Regular HVAC maintenance is essential to keep your system operating at its best. Without it, small issues can escalate into major problems—leading to system failures when you need it most, costly repairs, or even water leaks that could damage your property.",
        image: imagesPath.hvacInstallation[1],
        text: "Routine maintenance ensures that your system is running efficiently, reduces the risk of breakdowns, and helps prevent long-term damage to both your equipment and your home or business. By investing in regular maintenance, you're protecting not only the comfort of your space but also the longevity of your HVAC system, keeping it running smoothly when you need it the most.",
        direction: "row",
      },
    ],
    conclusion:
      "This attention to detail, combined with our dedication to quality and thoughtful planning, results in installations that provide lasting performance, reliability, and comfort.",
  },
};

export default servicesInformation;
