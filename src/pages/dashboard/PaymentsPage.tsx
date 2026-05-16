import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge, getStatusBadgeVariant } from '../../components/ui/Badge';
import { mockPayments } from '../../data/mockData';

export function PaymentsPage() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
            <tr>
              <th className="px-6 py-4">ID заявки</th>
              <th className="px-6 py-4">Сумма</th>
              <th className="px-6 py-4">Оплачено</th>
              <th className="px-6 py-4">Остаток</th>
              <th className="px-6 py-4">Метод оплаты</th>
              <th className="px-6 py-4">Статус</th>
              <th className="px-6 py-4">Дедлайн</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPayments.map(payment => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-primary-600 cursor-pointer hover:underline">{payment.applicationId}</td>
                <td className="px-6 py-4 font-bold text-gray-900">${payment.totalPrice}</td>
                <td className="px-6 py-4 text-emerald-600">${payment.paidAmount}</td>
                <td className="px-6 py-4 text-red-600">${payment.remainingBalance}</td>
                <td className="px-6 py-4">{payment.method}</td>
                <td className="px-6 py-4"><Badge variant={getStatusBadgeVariant(payment.status)}>{payment.status}</Badge></td>
                <td className="px-6 py-4">{new Date(payment.dueDate).toLocaleDateString('ru-RU')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
