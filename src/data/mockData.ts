import { Application, DashboardStats, Lead, Operator, Payment, Task, TourPackage, Tourist } from '../types/crm';

export const mockManagers = [
  { id: 'm1', name: 'Айгерим' },
  { id: 'm2', name: 'Диас' },
  { id: 'm3', name: 'Алина' },
  { id: 'm4', name: 'Айдар' },
];

export const mockLeads: Lead[] = [
  { id: 'ld-1', name: 'Азамат Нуржанов', phone: '+7 701 123 4567', source: 'Instagram', destination: 'Мальдивы', budget: 3000, status: 'Новый', managerId: 'm1', createdAt: '2023-10-25T10:00:00Z' },
  { id: 'ld-2', name: 'Динара Касымова', phone: '+7 777 987 6543', source: 'WhatsApp', destination: 'ОАЭ', budget: 1500, status: 'Связались', managerId: 'm2', createdAt: '2023-10-24T14:30:00Z' },
  { id: 'ld-3', name: 'Тимур Бек', phone: '+7 705 555 1122', source: 'Сайт', destination: 'Таиланд', budget: 2000, status: 'Ожидание', managerId: 'm3', createdAt: '2023-10-23T09:15:00Z' },
  { id: 'ld-4', name: 'Аружан', phone: '+7 702 333 4455', source: 'Рекомендация', destination: 'Турция', budget: 4000, status: 'Успешно', managerId: 'm1', createdAt: '2023-10-20T11:45:00Z' },
  { id: 'ld-5', name: 'Олжас', phone: '+7 707 888 9900', source: '2GIS', destination: 'Египет', budget: 1200, status: 'Отказ', managerId: 'm4', createdAt: '2023-10-18T16:20:00Z' },
];

export const mockTourists: Tourist[] = [
  { id: 't-1', fullName: 'Алихан Омаров', phone: '+7 701 000 0001', email: 'alikhan@example.com', passportStatus: 'Действителен', visaStatus: 'Не требуется', interests: ['Турция', 'ОАЭ'], totalTrips: 3, notes: 'Предпочитает 5* семейные отели' },
  { id: 't-2', fullName: 'Мадина Болат', phone: '+7 705 000 0002', email: 'madina@example.com', passportStatus: 'Истек', visaStatus: 'Требуется', interests: ['Европа', 'Япония'], totalTrips: 1, notes: 'Нужна помощь с Шенгенской визой' },
  { id: 't-3', fullName: 'Арман Жумагалиев', phone: '+7 777 000 0003', email: 'arman@example.com', passportStatus: 'Действителен', visaStatus: 'Не требуется', interests: ['Мальдивы', 'Таиланд'], totalTrips: 5, notes: 'VIP клиент, только индивидуальные трансферы' },
];

export const mockOperators: Operator[] = [
  { id: 'op-1', name: 'Anex Tour', contactPerson: 'Игорь', phone: '+7 727 111 2233', email: 'kazakhstan@anextour.com', countries: ['Турция', 'Египет', 'ОАЭ', 'Таиланд'], commissionTerms: '10% база + 2% бонус за объем', activePackagesCount: 45, status: 'Активен' },
  { id: 'op-2', name: 'Join UP!', contactPerson: 'Светлана', phone: '+7 727 222 3344', email: 'sales@joinup.kz', countries: ['Египет', 'ОАЭ', 'Мальдивы'], commissionTerms: '12%', activePackagesCount: 30, status: 'Активен' },
  { id: 'op-3', name: 'Kompas', contactPerson: 'Руслан', phone: '+7 727 333 4455', email: 'info@kompastour.kz', countries: ['Европа', 'Грузия'], commissionTerms: '9%', activePackagesCount: 15, status: 'Активен' },
  { id: 'op-4', name: 'Fun&Sun', contactPerson: 'Елена', phone: '+7 727 444 5566', email: 'booking@funsun.kz', countries: ['Турция', 'Египет'], commissionTerms: '11%', activePackagesCount: 20, status: 'Активен' },
];

export const mockPackages: TourPackage[] = [
  { id: 'pkg-1', name: 'Rixos Premium Belek Family Escape', destination: 'Турция', country: 'Турция', resort: 'Анталья/Белек', hotel: 'Rixos Premium Belek 5*', nights: 7, mealType: 'UAI', flightIncluded: true, operatorId: 'op-1', price: 3500, commission: 350, availability: 'Доступен', status: 'Активен' },
  { id: 'pkg-2', name: 'Dubai Marina Luxury', destination: 'ОАЭ', country: 'ОАЭ', resort: 'Дубай Марина', hotel: 'Address Dubai Marina 5*', nights: 5, mealType: 'BB', flightIncluded: true, operatorId: 'op-2', price: 2100, commission: 252, availability: 'Под запрос', status: 'Активен' },
  { id: 'pkg-3', name: 'Phuket Romantic Getaway', destination: 'Таиланд', country: 'Таиланд', resort: 'Пхукет', hotel: 'Banyan Tree Phuket 5*', nights: 10, mealType: 'BB', flightIncluded: true, operatorId: 'op-1', price: 4200, commission: 420, availability: 'Доступен', status: 'Активен' },
];

export const mockApplications: Application[] = [
  { id: 'app-1001', touristId: 't-1', destination: 'Турция', dates: '15-22 Ноя 2023', touristCount: 4, budget: 3500, packageId: 'pkg-1', operatorId: 'op-1', paymentStatus: 'Оплачен', status: 'Подтвержден', managerId: 'm1', nextTask: 'Отправить документы', createdAt: '2023-10-10T10:00:00Z' },
  { id: 'app-1002', touristId: 't-2', destination: 'Япония', dates: '01-10 Дек 2023', touristCount: 2, budget: 5000, paymentStatus: 'Не оплачен', status: 'В работе', managerId: 'm3', nextTask: 'Проверить статус визы', createdAt: '2023-10-24T10:00:00Z' },
  { id: 'app-1003', touristId: 't-3', destination: 'Мальдивы', dates: '20-27 Дек 2023', touristCount: 2, budget: 10000, paymentStatus: 'Частично', status: 'Ожидает оплаты', managerId: 'm2', nextTask: 'Напомнить об оплате', createdAt: '2023-10-25T14:00:00Z' },
];

export const mockTasks: Task[] = [
  { id: 'tsk-1', title: 'Позвонить Азамату для уточнения бюджета', applicationId: undefined, touristId: undefined, dueDate: '2023-10-27T10:00:00Z', priority: 'Высокий', status: 'К выполнению', managerId: 'm1' },
  { id: 'tsk-2', title: 'Подготовить документы на визу для Мадины', applicationId: 'app-1002', touristId: 't-2', dueDate: '2023-10-26T15:00:00Z', priority: 'Высокий', status: 'В работе', managerId: 'm3' },
  { id: 'tsk-3', title: 'Отправить билеты, ваучер и страховку Алихану', applicationId: 'app-1001', touristId: 't-1', dueDate: '2023-11-10T12:00:00Z', priority: 'Средний', status: 'К выполнению', managerId: 'm1' },
  { id: 'tsk-4', title: 'Проверить оплату от Армана', applicationId: 'app-1003', touristId: 't-3', dueDate: '2023-10-25T18:00:00Z', priority: 'Средний', status: 'Просрочена', managerId: 'm2' },
];

export const mockPayments: Payment[] = [
  { id: 'pay-1', applicationId: 'app-1001', touristId: 't-1', totalPrice: 3500, paidAmount: 3500, remainingBalance: 0, method: 'Kaspi', status: 'Оплачен', dueDate: '2023-10-15T00:00:00Z' },
  { id: 'pay-2', applicationId: 'app-1003', touristId: 't-3', totalPrice: 10000, paidAmount: 5000, remainingBalance: 5000, method: 'Банковский перевод', status: 'Частично', dueDate: '2023-10-28T00:00:00Z' },
  { id: 'pay-3', applicationId: 'app-1002', touristId: 't-2', totalPrice: 5000, paidAmount: 0, remainingBalance: 5000, method: 'Кредитная карта', status: 'Не оплачен', dueDate: '2023-11-20T00:00:00Z' },
];

export const mockStats: DashboardStats = {
  totalLeads: 154,
  activeApplications: 38,
  confirmedTours: 12,
  unpaidPayments: 4,
  monthlyRevenue: 145000,
  conversionRate: 24.6,
};
