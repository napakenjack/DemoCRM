import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { mockPackages } from '../../data/mockData';
import { Search } from 'lucide-react';
import { Input } from '../../components/ui/Input';

export function TourPackagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Input icon={Search} placeholder="Поиск туров..." className="w-80 bg-white" />
        <Button>Добавить тур</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockPackages.map(pkg => (
          <Card key={pkg.id} className="overflow-hidden flex flex-col">
            <div className="h-32 bg-gradient-to-r from-primary-400 to-primary-600 relative">
               <div className="absolute top-4 right-4">
                 <Badge variant="neutral" className="bg-white/90 text-primary-900 border-none shadow-sm">{pkg.country}</Badge>
               </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{pkg.hotel} • {pkg.nights} ночей</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-6 flex-1">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Питание</p>
                  <p className="font-medium">{pkg.mealType}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Перелет</p>
                  <p className="font-medium">{pkg.flightIncluded ? 'Включен' : 'Не включен'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Оператор</p>
                  <p className="font-medium truncate">{pkg.operatorId}</p>
                </div>
                <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider">Цена</p>
                   <p className="font-bold text-primary-700">${pkg.price}</p>
                </div>
              </div>

              <Button className="w-full">Создать заявку</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
