import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router as WouterRouter, Route, Switch } from 'wouter';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { BlogPage } from '@/pages/BlogPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { PackagesPage } from '@/pages/PackagesPage';
import { PackagesCollectionPage } from '@/pages/PackagesCollectionPage';
import { PackagesSubCollectionPage } from '@/pages/PackagesSubCollectionPage';
import { PackageDetailPage } from '@/pages/PackageDetailPage';
import { KidsThemesPage } from '@/pages/KidsThemesPage';
import { KidsThemePage } from '@/pages/KidsThemePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CelebrationBackground } from '@/components/CelebrationBackground';

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/packages" component={PackagesPage} />
      <Route path="/packages/collection/:category/:sub" component={PackagesSubCollectionPage} />
      <Route path="/packages/collection/:category" component={PackagesCollectionPage} />
      <Route path="/packages/:slug" component={PackageDetailPage} />
      <Route path="/kids-themes/:theme" component={KidsThemePage} />
      <Route path="/kids-themes" component={KidsThemesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <CelebrationBackground />
        <AppRoutes />
      </WouterRouter>
    </QueryClientProvider>
  );
}
