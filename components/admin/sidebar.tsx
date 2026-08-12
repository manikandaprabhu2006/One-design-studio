"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  FolderOpen,
  Image,
  MessageSquare,
  Briefcase,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/admin/projects", icon: FolderOpen },
  { label: "Gallery", href: "/admin/gallery", icon: Image },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { label: "Services", href: "/admin/services", icon: Briefcase },
  { label: "FAQ", href: "/admin/faq", icon: HelpCircle },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-luxury-gradient flex items-center justify-center">
            <span className="text-white font-heading text-sm font-bold">OD</span>
          </div>
          <div>
            <p className="font-heading text-sm font-medium text-luxury-text">One Design</p>
            <p className="text-[0.6rem] uppercase tracking-wider text-luxury-ash">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-luxury-gold/10 text-luxury-gold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-luxury-text"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
