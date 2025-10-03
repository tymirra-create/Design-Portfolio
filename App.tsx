import { useState } from "react";
import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { Experience } from "./components/Experience.tsx";
import { PixelPerfectDesigns } from "./components/PixelPerfectDesigns.tsx";
import { ProtectedCaseStudies } from "./components/ProtectedCaseStudies.tsx";
import { About } from "./components/About.tsx";
import { Contact } from "./components/Contact.tsx";
import { CaseStudiesSlideshow } from "./components/CaseStudiesSlideshow.tsx";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard.tsx";
import { PDFGenerator } from "./components/PDFGenerator.tsx";
import { useAuth } from "./components/useAuth.tsx";

export default function App() {
  const [showPDFGenerator, setShowPDFGenerator] = useState(false);
  const { isAuthenticated } = useAuth();

  // Check for URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const slideshowMode = urlParams.get('slideshow') === 'true';
  const analyticsMode = urlParams.get('analytics') === 'true';
  const pdfMode = urlParams.get('pdf') === 'true';

  // Handle slideshow mode
  if (slideshowMode) {
    return <CaseStudiesSlideshow />;
  }

  // Handle analytics mode
  if (analyticsMode) {
    return <AnalyticsDashboard />;
  }

  // Handle PDF generator mode
  if (pdfMode || showPDFGenerator) {
    return <PDFGenerator />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onTogglePDFGenerator={() => setShowPDFGenerator(!showPDFGenerator)}
        showPDFGenerator={showPDFGenerator}
      />
      <main>
        <Hero />
        <Experience />
        <PixelPerfectDesigns />
        <ProtectedCaseStudies />
        <About />
        <Contact />
      </main>
    </div>
  );
}