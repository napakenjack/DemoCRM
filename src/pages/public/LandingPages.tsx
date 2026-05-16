import React from 'react';
import { EmptyState } from '../../components/ui/EmptyState';
import { Box } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function FeaturesPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
       <h1 className="text-4xl font-bold text-center mb-12">Функции</h1>
       <EmptyState 
         icon={Box}
         title="Список функций"
         description="Эта страница находится в разработке. Пожалуйста, откройте демо CRM, чтобы увидеть функции в действии."
         actionLabel="Открыть демо CRM"
         onAction={() => navigate('/app')}
       />
    </div>
  );
}

export function PricingPage() {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center">
         <h1 className="text-4xl font-bold mb-4">Тарифы</h1>
         <p className="text-gray-600 mb-12">Подробная информация о тарифах доступна на главной странице.</p>
         <Button asChild>
           <Link to="/">На главную</Link>
         </Button>
      </div>
    );
}

export function ContactPage() {
    return (
      <div className="max-w-xl mx-auto py-24 px-4 text-center">
         <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
         <p className="text-gray-600 mb-12">Оставьте ваш email, чтобы начать работу с бесплатной демо-версией.</p>
         <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Ваш Email" className="w-full p-3 border rounded-lg" required />
            <Button className="w-full">Запросить демо</Button>
         </form>
      </div>
    );
}

export function DemoPage() {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center">
         <h1 className="text-4xl font-bold mb-4">Интерактивное Демо</h1>
         <p className="text-gray-600 mb-12">Попробуйте в деле все возможности Juye Systems прямо сейчас.</p>
         <Button size="lg" asChild>
           <Link to="/app">Запустить CRM</Link>
         </Button>
      </div>
    );
}
