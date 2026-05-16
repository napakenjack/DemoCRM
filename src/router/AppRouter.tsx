import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from '../components/layout/PublicLayout';
import { DashboardLayout } from '../components/layout/DashboardLayout';

// Public Pages
import { HomePage } from '../pages/public/HomePage';
import { FeaturesPage, PricingPage, ContactPage, DemoPage } from '../pages/public/LandingPages';

// Dashboard Pages
import { DashboardHome } from '../pages/dashboard/DashboardHome';
import { LeadsPage } from '../pages/dashboard/LeadsPage';
import { ApplicationsPage } from '../pages/dashboard/ApplicationsPage';
import { TouristsPage } from '../pages/dashboard/TouristsPage';
import { TourPackagesPage } from '../pages/dashboard/TourPackagesPage';
import { TourOperatorsPage } from '../pages/dashboard/TourOperatorsPage';
import { TasksPage } from '../pages/dashboard/TasksPage';
import { PaymentsPage } from '../pages/dashboard/PaymentsPage';
import { DocumentsPage } from '../pages/dashboard/DocumentsPage';
import { AnalyticsPage } from '../pages/dashboard/AnalyticsPage';
import { SettingsPage } from '../pages/dashboard/SettingsPage';
import { CreatePage } from '../pages/dashboard/CreatePage';

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="tourists" element={<TouristsPage />} />
          <Route path="tour-packages" element={<TourPackagesPage />} />
          <Route path="operators" element={<TourOperatorsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
