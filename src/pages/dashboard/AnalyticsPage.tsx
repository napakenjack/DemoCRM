import React from 'react';
import { EmptyState } from '../../components/ui/EmptyState';
import { BarChart3 } from 'lucide-react';

export function AnalyticsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <EmptyState 
        icon={BarChart3}
        title="Аналитика и отчеты"
        description="Расширенная аналитика и генерация отчетов доступны в полной версии Juye Systems."
      />
    </div>
  );
}
