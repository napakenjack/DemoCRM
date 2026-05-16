import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge, getStatusBadgeVariant } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { mockApplications, mockTourists, mockPackages } from '../../data/mockData';
import { Search, Plus, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input 
          placeholder="Поиск по ID заявки или туристу..." 
          icon={Search}
          className="w-full max-w-sm bg-white"
        />
        <Button asChild>
           <Link to="/app/create?type=application">
            <Plus className="h-4 w-4 mr-2" />
            Новая заявка
          </Link>
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Турист</th>
                <th className="px-6 py-4">Направление</th>
                <th className="px-6 py-4">Даты</th>
                <th className="px-6 py-4">Тур пакет</th>
                <th className="px-6 py-4">Статус</th>
                <th className="px-6 py-4">Оплата</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockApplications.map((app) => {
                const tourist = mockTourists.find(t => t.id === app.touristId);
                const pkg = mockPackages.find(p => p.id === app.packageId);
                
                return (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{app.id}</td>
                    <td className="px-6 py-4 text-gray-900">{tourist?.fullName}</td>
                    <td className="px-6 py-4 font-medium">{app.destination}</td>
                    <td className="px-6 py-4 text-gray-600">{app.dates}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {pkg ? (
                        <div className="truncate max-w-[200px]" title={pkg.name}>{pkg.name}</div>
                      ) : (
                        <span className="text-gray-400">Не выбран</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={getStatusBadgeVariant(app.status)}>{app.status}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={getStatusBadgeVariant(app.paymentStatus)}>{app.paymentStatus}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-primary-600">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
