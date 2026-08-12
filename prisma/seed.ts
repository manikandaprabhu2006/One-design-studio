import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@onedesignstudio.com" },
    update: {},
    create: {
      email: "admin@onedesignstudio.com",
      name: "Admin User",
      role: "ADMIN",
    },
  });

  // Seed projects
  const projects = [
    {
      title: "The Horizon Villa",
      slug: "horizon-villa",
      description: "A 12,000 sq ft luxury residence perched on a hillside overlooking the Pacific Ocean. Features infinity pool, smart home integration, and sustainable design.",
      category: "Residential",
      location: "Beverly Hills, CA",
      area: "12,000 sq ft",
      year: "2024",
      client: "Private Residence",
      status: "Completed",
      featured: true,
      images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"],
    },
    {
      title: "Meridian Tower",
      slug: "meridian-tower",
      description: "An 85,000 sq ft commercial office tower in the heart of Manhattan. LEED Platinum certified with cutting-edge sustainable features.",
      category: "Commercial",
      location: "Manhattan, NY",
      area: "85,000 sq ft",
      year: "2023",
      client: "Meridian Corp",
      status: "Completed",
      featured: true,
      images: ["https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"],
    },
    {
      title: "Serenity Residence",
      slug: "serenity-residence",
      description: "An 8,500 sq ft waterfront home in Miami featuring floor-to-ceiling glass, private dock, and resort-style outdoor living spaces.",
      category: "Residential",
      location: "Miami, FL",
      area: "8,500 sq ft",
      year: "2024",
      client: "Private Residence",
      status: "Completed",
      featured: true,
      images: ["https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop"],
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
  }

  // Seed services
  const services = [
    {
      title: "Residential Construction",
      slug: "residential",
      description: "Custom homes designed for comfort, style and modern living.",
      icon: "Home",
      features: ["Custom Home Design", "Luxury Villas", "Modern Apartments", "Smart Home Integration"],
      order: 1,
    },
    {
      title: "Commercial Construction",
      slug: "commercial",
      description: "High-performance spaces that reflect your brand and purpose.",
      icon: "Building2",
      features: ["Corporate Offices", "Retail Spaces", "Hospitality", "Mixed-Use Developments"],
      order: 2,
    },
    {
      title: "Renovation & Remodeling",
      slug: "renovation",
      description: "Transforming existing spaces with smart design and quality.",
      icon: "Paintbrush",
      features: ["Interior Renovation", "Exterior Facelifts", "Historic Restoration", "Space Optimization"],
      order: 3,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  // Seed testimonials
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      company: "Private Residence",
      content: "One Design Studio transformed our vision into a breathtaking reality. Their attention to detail and commitment to quality is unmatched.",
      rating: 5,
      featured: true,
    },
    {
      name: "James Chen",
      role: "CEO",
      company: "Meridian Corp",
      content: "The commercial space they designed for us has become a landmark. Every client who visits compliments the architecture.",
      rating: 5,
      featured: true,
    },
    {
      name: "Elena Rodriguez",
      role: "Property Developer",
      company: "Rodriguez Developments",
      content: "Working with One Design Studio was seamless from start to finish. They delivered on time, within budget, and beyond expectations.",
      rating: 5,
      featured: true,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.createMany({
      data: [testimonial],
      skipDuplicates: true,
    });
  }

  // Seed FAQs
  const faqs = [
    {
      question: "What types of projects does One Design Studio handle?",
      answer: "We specialize in luxury residential construction, commercial buildings, and high-end renovations.",
      category: "General",
      order: 1,
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "A custom residential project typically takes 12-18 months from concept to completion.",
      category: "Process",
      order: 1,
    },
    {
      question: "What is your design process?",
      answer: "Our process begins with discovery, followed by concept development, detailed design, construction documentation, and execution.",
      category: "Process",
      order: 2,
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.createMany({
      data: [faq],
      skipDuplicates: true,
    });
  }

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
