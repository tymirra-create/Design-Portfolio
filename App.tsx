import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { PixelPerfectDesigns } from "./components/PixelPerfectDesigns";
import { ProtectedCaseStudies } from "./components/ProtectedCaseStudies";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CaseStudiesSlideshow } from "./components/CaseStudiesSlideshow";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { PDFGenerator } from "./components/PDFGenerator";
import { useAuth } from "./components/useAuth";

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