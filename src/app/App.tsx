import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { WorkPage } from '../pages/WorkPage';
import { CaseStudyPage } from '../pages/CaseStudyPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { ArchitecturePage } from '../pages/ArchitecturePage';
import { AboutPage } from '../pages/AboutPage';
import { TestimonialsPage } from '../pages/TestimonialsPage';
import { InsightsPage } from '../pages/InsightsPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function App() {
  return <BrowserRouter><Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<CaseStudyPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/experience.html" element={<Navigate to="/experience" replace />} />
      <Route path="/architecture.html" element={<Navigate to="/architecture" replace />} />
      <Route path="/about.html" element={<Navigate to="/about" replace />} />
      <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
      <Route path="/testimonials.html" element={<Navigate to="/testimonials" replace />} />
      <Route path="/work/index.html" element={<Navigate to="/work" replace />} />
      <Route path="/work/payment-engine.html" element={<Navigate to="/work/payment-engine" replace />} />
      <Route path="/work/advisory-platform.html" element={<Navigate to="/work/advisory-platform" replace />} />
      <Route path="/work/cybersecurity-platform.html" element={<Navigate to="/work/cybersecurity-platform" replace />} />
      <Route path="/work/system-improvement.html" element={<Navigate to="/work/system-improvement" replace />} />
      <Route path="/insights/index.html" element={<Navigate to="/insights" replace />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes></BrowserRouter>;
}
