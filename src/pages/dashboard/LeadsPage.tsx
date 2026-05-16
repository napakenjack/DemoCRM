import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge, getStatusBadgeVariant } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { mockLeads, mockManagers } from '../../data/mockData';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter ? lead.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1 flex gap-4 max-w-2xl">
          <Input 
            placeholder="Поиск лидов по имени или телефону..." 
            icon={Search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white"
          />
          <Select 
            className="w-48 bg-white"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { label: 'Все статусы', value: '' },
              { label: 'Новый', value: 'Новый' },
              { label: 'Связались', value: 'Связались' },
              { label: 'Ожидание', value: 'Ожидание' },
              { label: 'Успешно', value: 'Успешно' },
              { label: 'Отказ', value: 'Отказ' },
            ]}
          />
        </div>
        <Button asChild>
          <Link to="/app/create?type=lead">
            <Plus className="h-4 w-4 mr-2" />
            Создать лид
          </Link>
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Клиент</th>
                <th className="px-6 py-4">Контакты</th>
                <th className="px-6 py-4">Источник</th>
                <th className="px-6 py-4">Направление</th>
                <th className="px-6 py-4 text-right">Бюджет</th>
                <th className="px-6 py-4">Статус</th>
                <th className="px-6 py-4">Менеджер</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead) => {
                const manager = mockManagers.find(m => m.id === lead.managerId);
                return (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
                    <td className="px-6 py-4 text-gray-600">{lead.phone}</td>
                    <td className="px-6 py-4 text-gray-600">{lead.source}</td>
                    <td className="px-6 py-4 text-gray-900">{lead.destination}</td>
                    <td className="px-6 py-4 text-right font-medium">${lead.budget}</td>
                    <td className="px-6 py-4">
                      <Badge variant={getStatusBadgeVariant(lead.status)}>{lead.status}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      {manager?.name}
                    </td>
                  </tr>
                );
              })}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    Лиды не найдены.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
