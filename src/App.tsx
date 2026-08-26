import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToHash } from './components/common/ScrollToHash';

// Pages
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { WebDashboardPage } from './pages/platform/WebDashboardPage';
import { MobileAppPage } from './pages/platform/MobileAppPage';
import { FleetManagementPage } from './pages/platform/FleetManagementPage';
import { AdministrationPage } from './pages/platform/AdministrationPage';

import { FeaturesPage } from './pages/FeaturesPage';
import { FeatureDetailPage } from './pages/FeatureDetailPage';

import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';

import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';

import { PricingPage } from './pages/PricingPage';
import { DemoPage } from './pages/DemoPage';
import { QuotePage } from './pages/QuotePage';

import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { FAQPage } from './pages/FAQPage';
import { SupportPage } from './pages/SupportPage';

import { AboutPage } from './pages/AboutPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#005CCC] selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Platform Sub-architecture */}
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/platform/dashboard" element={<WebDashboardPage />} />
            <Route path="/platform/mobile-app" element={<MobileAppPage />} />
            <Route path="/platform/fleet-management" element={<FleetManagementPage />} />
            <Route path="/platform/administration" element={<AdministrationPage />} />

            {/* Features Directory & Detail */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/features/:slug" element={<FeatureDetailPage />} />

            {/* Solutions Directory & Detail */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

            {/* Industries Directory & Detail */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage />} />

            {/* Commercial & Leads */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/quote" element={<QuotePage />} />

            {/* Resources Hub & Subpages */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/support" element={<SupportPage />} />

            {/* Company & Technology */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/technology" element={<TechnologyPage />} />
            <Route path="/about/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/cookie-policy" element={<LegalPage />} />
            <Route path="/data-policy" element={<LegalPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
