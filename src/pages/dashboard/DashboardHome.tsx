import React from 'react';
import { StatCard } from '../../components/ui/StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge, getStatusBadgeVariant } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { mockStats, mockApplications, mockTasks } from '../../data/mockData';
import { Users, Briefcase, CheckCircle, CreditCard, DollarSign, TrendingUp, UserPlus, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Янв', apps: 40 },
  { name: 'Фев', apps: 30 },
  { name: 'Мар', apps: 45 },
  { name: 'Апр', apps: 50 },
  { name: 'Май', apps: 70 },
  { name: 'Июн', apps: 90 },
];

export function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Всего лидов" value={mockStats.totalLeads} icon={Users} trend={{ value: '+12%', isUp: true }} />
        <StatCard title="Активные заявки" value={mockStats.activeApplications} icon={Briefcase} trend={{ value: '+5%', isUp: true }} />
        <StatCard title="Подтверждено" value={mockStats.confirmedTours} icon={CheckCircle} />
        <StatCard title="Ожидают оплаты" value={mockStats.unpaidPayments} icon={CreditCard} trend={{ value: '-2%', isUp: true }} />
        <StatCard title="Прибыль" value={`$${mockStats.monthlyRevenue.toLocaleString()}`} icon={DollarSign} trend={{ value: '+18%', isUp: true }} />
        <StatCard title="Конверсия" value={`${mockStats.conversionRate}%`} icon={TrendingUp} trend={{ value: '+1.2%', isUp: true }} />
      </div>

      {/* Quick Actions & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Динамика заявок</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                  <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="apps" fill="var(--color-primary-500)" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Быстрые действия</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start overflow-hidden relative group" variant="secondary" asChild>
              <Link to="/app/create?type=lead">
                <UserPlus className="h-4 w-4 mr-2" />
                Новый лид
                <div className="absolute inset-0 bg-primary-200/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
              </Link>
            </Button>
            <Button className="w-full justify-start overflow-hidden relative group" variant="secondary" asChild>
              <Link to="/app/create?type=application">
                <FileText className="h-4 w-4 mr-2" />
                Новая заявка
                <div className="absolute inset-0 bg-primary-200/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
              </Link>
            </Button>
            <Button className="w-full justify-start overflow-hidden relative group" variant="outline" asChild>
              <Link to="/app/tasks">
                <CheckCircle className="h-4 w-4 mr-2" />
                Мои задачи
                <div className="absolute inset-0 bg-gray-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Последние заявки</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app/applications">Все заявки</Link>
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Направление</th>
                  <th className="px-6 py-3">Статус</th>
                  <th className="px-6 py-3 text-right">Бюджет</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockApplications.slice(0, 5).map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{app.id}</td>
                    <td className="px-6 py-4">{app.destination}</td>
                    <td className="px-6 py-4">
                      <Badge variant={getStatusBadgeVariant(app.status)}>{app.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right font-medium">${app.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ближайшие задачи</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app/tasks">Все задачи</Link>
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-3">Задача</th>
                  <th className="px-6 py-3">Дедлайн</th>
                  <th className="px-6 py-3">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockTasks.slice(0, 5).map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{task.title}</td>
                    <td className="px-6 py-4">{new Date(task.dueDate).toLocaleDateString('ru-RU')}</td>
                    <td className="px-6 py-4">
                       <Badge variant={getStatusBadgeVariant(task.status)}>{task.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
