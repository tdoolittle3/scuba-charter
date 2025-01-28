import Header from "@/components/Header"
import Hero from "@/components/Hero"
import CertificationSection from "@/components/CertificationSection"
import LocalDivesSection from "@/components/LocalDivesSection"
import GearSection from "@/components/GearSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CertificationSection />
      <LocalDivesSection />
      <GearSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

