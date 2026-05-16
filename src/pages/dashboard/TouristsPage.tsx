import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { mockTourists } from '../../data/mockData';
import { Search } from 'lucide-react';
import { Input } from '../../components/ui/Input';

export function TouristsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Input icon={Search} placeholder="Поиск туристов..." className="w-80 bg-white" />
        <Button>Добавить туриста</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTourists.map(tourist => (
          <Card key={tourist.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{tourist.fullName}</h3>
                  <p className="text-sm text-gray-500">{tourist.phone}</p>
                </div>
                <div className="h-10 w-10 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold text-lg">
                  {tourist.fullName.charAt(0)}
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Паспорт:</span>
                  <Badge variant={tourist.passportStatus === 'Действителен' ? 'success' : 'danger'}>{tourist.passportStatus}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Виза:</span>
                   <Badge variant={tourist.visaStatus === 'Не требуется' ? 'success' : tourist.visaStatus === 'Действительна' ? 'success' : 'warning'}>
                     {tourist.visaStatus}
                   </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Всего поездок:</span>
                  <span className="font-medium">{tourist.totalTrips}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Интересы:</span>
                  <span className="text-right truncate ml-4 font-medium">{tourist.interests.join(', ')}</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">Профиль туриста</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
