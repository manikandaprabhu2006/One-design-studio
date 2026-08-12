import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/animations/fade-in";
import { FolderOpen, Image, MessageSquare, HelpCircle, Mail, TrendingUp } from "lucide-react";

async function getStats() {
  const [projects, gallery, testimonials, faqs, contacts] = await Promise.all([
    prisma.project.count(),
    prisma.galleryImage.count(),
    prisma.testimonial.count(),
    prisma.fAQ.count(),
    prisma.contactSubmission.count(),
  ]);
  return { projects, gallery, testimonials, faqs, contacts };
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  const statCards = [
    { label: "Total Projects", value: stats.projects, icon: FolderOpen, color: "bg-blue-50 text-blue-600" },
    { label: "Gallery Images", value: stats.gallery, icon: Image, color: "bg-purple-50 text-purple-600" },
    { label: "Testimonials", value: stats.testimonials, icon: MessageSquare, color: "bg-green-50 text-green-600" },
    { label: "FAQs", value: stats.faqs, icon: HelpCircle, color: "bg-orange-50 text-orange-600" },
    { label: "Contact Submissions", value: stats.contacts, icon: Mail, color: "bg-red-50 text-red-600" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl text-luxury-text mb-2">Dashboard</h1>
        <p className="text-luxury-ash">Welcome back to the One Design Studio admin panel.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
              <card.icon className="w-5 h-5" />
            </div>
            <p className="font-numbers text-2xl font-bold text-luxury-text">{card.value}</p>
            <p className="text-sm text-luxury-ash">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-heading text-lg text-luxury-text mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-luxury-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-luxury-text">New project added</p>
                <p className="text-xs text-luxury-ash">The Horizon Villa was published</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-luxury-text">New contact submission</p>
                <p className="text-xs text-luxury-ash">Sarah Mitchell sent a message</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-heading text-lg text-luxury-text mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Project", href: "/admin/projects" },
              { label: "Upload Image", href: "/admin/gallery" },
              { label: "Add Testimonial", href: "/admin/testimonials" },
              { label: "Add FAQ", href: "/admin/faq" },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="p-4 bg-gray-50 rounded-lg text-sm font-medium text-luxury-text hover:bg-luxury-gold/10 hover:text-luxury-gold transition-colors text-center"
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
