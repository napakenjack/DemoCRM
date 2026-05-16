import React from 'react';
import { EmptyState } from '../../components/ui/EmptyState';
import { Plane } from 'lucide-react';

export function TourOperatorsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <EmptyState 
        icon={Plane}
        title="Туроператоры"
        description="Управляйте туроператорами, комиссиями и контактной информацией. В демо-версии этот раздел находится в разработке."
        actionLabel="Вернуться на главную"
        onAction={() => window.location.hash = '#/app'}
      />
    </div>
  );
}
