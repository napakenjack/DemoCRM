import React from 'react';
import { EmptyState } from '../../components/ui/EmptyState';
import { Files } from 'lucide-react';

export function DocumentsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <EmptyState 
        icon={Files}
        title="Документы"
        description="Хранилище паспортов, виз, договоров и ваучеров. Генерация документов недоступна в текущей демо-версии."
        actionLabel="Вернуться на главную"
        onAction={() => window.location.hash = '#/app'}
      />
    </div>
  );
}
