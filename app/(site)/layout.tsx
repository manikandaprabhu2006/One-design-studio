import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/layout/floating-contact";
import { ScrollProgress } from "@/components/animations/scroll-progress";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
