import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceTimeline from "@/components/experience-timeline";
import CertificationsSection from "@/components/certifications-section";
import EducationTimeline from "@/components/education-timeline";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceTimeline />
      <CertificationsSection />
      <EducationTimeline />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg mb-4">
              © 2024 陳重光 Professional Portfolio. Building the future through technology innovation and sustainability.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>AIoT Leadership</span>
              <span>•</span>
              <span>Energy Innovation</span>
              <span>•</span>
              <span>Corporate Transformation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
