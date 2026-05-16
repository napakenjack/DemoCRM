import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { EmptyState } from '../../components/ui/EmptyState';
import { Map, Plane, CreditCard, Files, Cog, PlusCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CreatePage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Успешно создано! (Режим демо)', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const getTitle = () => {
    switch (type) {
      case 'lead': return 'Создать лид';
      case 'application': return 'Создать заявку';
      case 'tourist': return 'Добавить туриста';
      case 'task': return 'Создать задачу';
      default: return `Создать ${type}`;
    }
  };

  if (type) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{getTitle()}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleCreate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Полное имя</label>
                <Input required placeholder="Напр. Иван Иванов" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Телефон</label>
                <Input required placeholder="+123456789" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Источник / Откуда пришел</label>
              <Select options={[
                { label: 'Instagram', value: 'instagram' },
                { label: 'Website', value: 'website' },
                { label: 'WhatsApp', value: 'whatsapp' },
                { label: 'Рекомендация', value: 'referral' },
              ]} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Интересующее направление</label>
              <Input placeholder="Напр. Мальдивы, Турция" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Заметки</label>
              <textarea 
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border py-2 px-3 min-h-[100px]"
                placeholder="Дополнительные детали или пожелания..."
              />
            </div>

            <div className="pt-4 flex justify-end space-x-3">
              <Button type="button" variant="outline" asChild>
                <Link to="/app/create">Отмена</Link>
              </Button>
              <Button type="submit">Создать запись</Button>
            </div>
          </form>
        </CardContent>
        <ToastContainer />
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'lead', title: 'Создать лид', desc: 'Новый контакт', icon: PlusCircle },
          { id: 'application', title: 'Создать заявку', desc: 'Запрос на тур', icon: BriefcaseIcon },
          { id: 'tourist', title: 'Добавить туриста', desc: 'Информация о клиенте', icon: UsersIcon },
          { id: 'task', title: 'Создать задачу', desc: 'Напоминание', icon: TaskIcon },
        ].map(item => (
          <Link key={item.id} to={`/app/create?type=${item.id}`}>
             <Card className="hover:border-primary-400 hover:shadow-md transition-all cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-4 bg-primary-50 rounded-full mb-4">
                   <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

const BriefcaseIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const UsersIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const TaskIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>;
