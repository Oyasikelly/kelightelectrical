import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTo from "@/components/ScrollTo";
import CookieConsent from "@/components/CookieConsent";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <ScrollTo />
      <Footer />
      <CookieConsent />
    </>
  );
}
