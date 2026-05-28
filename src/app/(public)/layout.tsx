import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTo from "@/components/ScrollTo";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <ScrollTo />
      <Footer />
    </>
  );
}
