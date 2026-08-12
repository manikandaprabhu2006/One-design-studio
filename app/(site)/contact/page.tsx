"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <p className="label-text mb-4">Contact Us</p>
            <h1 className="heading-lg mb-6">
              Let's Build Something <span className="text-luxury-gold">Extraordinary</span>
            </h1>
            <p className="body-lg">
              Ready to start your project? We'd love to hear from you. Reach out and let's 
              discuss how we can bring your vision to life.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
                  <h3 className="font-heading text-2xl text-luxury-text mb-3">Thank You!</h3>
                  <p className="body-lg">We have received your message and will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-text mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-luxury-gold/10 rounded-xl text-luxury-text focus:outline-none focus:border-luxury-gold/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-text mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-luxury-gold/10 rounded-xl text-luxury-text focus:outline-none focus:border-luxury-gold/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-text mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-luxury-gold/10 rounded-xl text-luxury-text focus:outline-none focus:border-luxury-gold/50 transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-text mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-luxury-gold/10 rounded-xl text-luxury-text focus:outline-none focus:border-luxury-gold/50 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="residential">Residential Project</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-text mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-luxury-gold/10 rounded-xl text-luxury-text focus:outline-none focus:border-luxury-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-luxury-text mb-1">Visit Us</h4>
                  <p className="text-sm text-luxury-ash">123 Architecture Lane<br />Design District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-luxury-text mb-1">Call Us</h4>
                  <p className="text-sm text-luxury-ash">+1 (234) 567-890<br />+1 (234) 567-891</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-luxury-text mb-1">Email Us</h4>
                  <p className="text-sm text-luxury-ash">hello@onedesignstudio.com<br />projects@onedesignstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-luxury-text mb-1">Working Hours</h4>
                  <p className="text-sm text-luxury-ash">Monday - Saturday: 9AM - 6PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-luxury-warm-gray">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
