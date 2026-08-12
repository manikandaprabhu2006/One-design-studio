"use client";

import { useState } from "react";
import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "One Design Studio",
    siteDescription: "Luxury Architecture & Construction",
    contactEmail: "hello@onedesignstudio.com",
    contactPhone: "+1 (234) 567-890",
    address: "123 Architecture Lane, Design District, NY 10001",
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl text-luxury-text mb-2">Settings</h1>
        <p className="text-luxury-ash">Manage your website settings</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-luxury-text mb-2">Site Name</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-luxury-text mb-2">Site Description</label>
            <input
              type="text"
              value={settings.siteDescription}
              onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-luxury-text mb-2">Contact Email</label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-luxury-text mb-2">Contact Phone</label>
            <input
              type="tel"
              value={settings.contactPhone}
              onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-luxury-text mb-2">Address</label>
            <textarea
              rows={3}
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors resize-none"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-gradient text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
