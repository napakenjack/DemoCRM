import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Профиль агентства</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Название агентства</label>
            <Input defaultValue="Juye Demo Agency" />
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">Email адрес</label>
             <Input defaultValue="hello@juyedemo.com" />
          </div>
          <Button>Сохранить изменения</Button>
        </CardContent>
      </Card>
    </div>
  );
}
