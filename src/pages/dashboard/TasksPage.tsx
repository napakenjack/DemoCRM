import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge, getStatusBadgeVariant } from '../../components/ui/Badge';
import { mockTasks } from '../../data/mockData';

export function TasksPage() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
            <tr>
              <th className="px-6 py-4">Задача</th>
              <th className="px-6 py-4">Приоритет</th>
              <th className="px-6 py-4">Дедлайн</th>
              <th className="px-6 py-4">Статус</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockTasks.map(task => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{task.title}</td>
                <td className="px-6 py-4">
                  <Badge variant={task.priority === 'Высокий' ? 'danger' : task.priority === 'Средний' ? 'warning' : 'neutral'}>
                    {task.priority}
                  </Badge>
                </td>
                <td className="px-6 py-4">{new Date(task.dueDate).toLocaleDateString('ru-RU')}</td>
                <td className="px-6 py-4"><Badge variant={getStatusBadgeVariant(task.status)}>{task.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
