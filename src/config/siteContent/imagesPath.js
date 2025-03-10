/**
 * Paths to various images used throughout the website.
 * This file allows to update image sources without modifying the core code.
 */
const imagesPath = {
  // ========== LOGOS ==========
  /**
   * Paths to different versions of the company logo.
   */
  logo: "/logo/logo-1.svg", // Default logo
  whiteLogo: "/logo/logo-2.svg", // Alternative white logo

  // ========== HOME PAGE ==========
  /**
   * Background image for the homepage hero section.
   */
  heroBackground: "/images/home/herosection/vrv_system.jpg",

  /**
   * Images used in the homepage carousel (rotating banner).
   * The `alt` attribute provides a textual description of the image for accessibility
   * and SEO purposes. It is displayed if the image fails to load.
   */
  summer1: {
    src: "/images/home/carousel/summer_1.jpg",
    alt: "Summer Image 1",
  },
  summer2: {
    src: "/images/home/carousel/summer_2.jpg",
    alt: "Summer Image 2",
  },
  winter1: {
    src: "/images/home/carousel/winter_1.jpg",
    alt: "Winter Image 1",
  },
  winter2: {
    src: "/images/home/carousel/winter_2.jpg",
    alt: "Winter Image 2",
  },
  winter3: {
    src: "/images/home/carousel/winter_3.jpg",
    alt: "Winter Image 3",
  },

  // ========== SERVICES IMAGES ==========
  /**
   * Images representing different services provided by the company.
   */
  services: [
    "/images/services/hvac_installation.jpg",
    "/images/services/repair_and_maintenance.jpg",
    "/images/services/maintenance_plans.jpg",
  ],

  // ========== HVAC INSTALLATION ==========
  /**
   * Images related to HVAC installation services.
   */
  hvacInstallation: [
    "/images/services/hvac/hvac_installation_1.webp",
    "/images/services/hvac/hvac_installation_2.webp",
    "/images/services/hvac/hvac_installation_3.webp",
  ],

  // ========== EQUIPMENT IMAGES ==========
  /**
   * Images of different HVAC equipment available for customers.
   * The `alt` attribute provides an alternative text description of the image.
   */
  equipments: [
    {
      src: "/images/equipment/equipments/condenser.jpg",
      alt: "Condenser",
    },
    {
      src: "/images/equipment/equipments/forced_air_units.jpg",
      alt: "Forced Air Units",
    },
    {
      src: "/images/equipment/equipments/heat_pump_forced_air.jpg",
      alt: "Heat Pump Forced Air",
    },
    {
      src: "/images/equipment/equipments/heat_pump_mini_splits.jpg",
      alt: "Heat Pump Mini Split",
    },
    {
      src: "/images/equipment/equipments/heat_pump.jpg",
      alt: "Heat Pump",
    },
    {
      src: "/images/equipment/equipments/ptac_unit.jpg",
      alt: "PTAC Unit",
    },
    {
      src: "/images/equipment/equipments/rtu_rooftop_packaged_units.jpg",
      alt: "RTU Rooftop Packaged Units",
    },
    {
      src: "/images/equipment/equipments/split_unit_wall_mount_mini_splits.jpg",
      alt: "Split Unit Wall Mount Mini Splits",
    },
    {
      src: "/images/equipment/equipments/vrv_vrf_systems.png",
      alt: "VRV VRF Systems",
    },
  ],

  // ========== BRANDS WE SERVICE ==========
  /**
   * Logos of HVAC brands that the company services.
   * The `alt` attribute describes the brand name for accessibility and SEO.
   */
  brands: [
    {
      src: "/images/equipment/brands/bryant.png",
      alt: "Bryant Logo",
    },
    {
      src: "/images/equipment/brands/carrier.png",
      alt: "Carrier Logo",
    },
    {
      src: "/images/equipment/brands/comfort_aire.png",
      alt: "Comfort Aire Logo",
    },
    {
      src: "/images/equipment/brands/concord.jpg",
      alt: "Concord Logo",
    },
    {
      src: "/images/equipment/brands/daikin.png",
      alt: "Daikin Logo",
    },
    {
      src: "/images/equipment/brands/fujitsu.png",
      alt: "Fujitsu Logo",
    },
    {
      src: "/images/equipment/brands/goodman.png",
      alt: "Goodman Logo",
    },
    {
      src: "/images/equipment/brands/lennox.jpg",
      alt: "Lennox Logo",
    },
    {
      src: "/images/equipment/brands/mitsubishi.jpg",
      alt: "Mitsubishi Logo",
    },
    {
      src: "/images/equipment/brands/trane.png",
      alt: "Trane Logo",
    },
    {
      src: "/images/equipment/brands/york.jpg",
      alt: "York Logo",
    },
  ],
};

export default imagesPath;
