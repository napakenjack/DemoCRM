export type Status = 'Новый' | 'Связались' | 'Ожидание' | 'Успешно' | 'Отказ';
export type AppStatus = 'Новая заявка' | 'В работе' | 'Оффер отправлен' | 'Ожидает оплаты' | 'Подтвержден' | 'Документы' | 'Выполнена' | 'Отменена';
export type PaymentStatus = 'Оплачен' | 'Частично' | 'Не оплачен' | 'Просрочен';
export type TaskStatus = 'К выполнению' | 'В работе' | 'Выполнено' | 'Просрочена';
export type DocStatus = 'Отсутствует' | 'Загружен' | 'Проверен';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  source: string;
  destination: string;
  budget: number;
  status: Status;
  managerId: string;
  createdAt: string;
}

export interface Application {
  id: string;
  touristId: string;
  destination: string;
  dates: string;
  touristCount: number;
  budget: number;
  packageId?: string;
  operatorId?: string;
  paymentStatus: PaymentStatus;
  status: AppStatus;
  managerId: string;
  nextTask?: string;
  createdAt: string;
}

export interface Tourist {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  passportStatus: 'Действителен' | 'Истек' | 'Отсутствует';
  visaStatus: 'Действительна' | 'Требуется' | 'Не требуется';
  interests: string[];
  totalTrips: number;
  lastApplicationId?: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  country: string;
  resort: string;
  hotel: string;
  nights: number;
  mealType: string;
  flightIncluded: boolean;
  operatorId: string;
  price: number;
  commission: number;
  availability: 'Доступен' | 'Под запрос' | 'Распродан';
  status: 'Активен' | 'Черновик' | 'Архив';
}

export interface Operator {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  countries: string[];
  commissionTerms: string;
  activePackagesCount: number;
  status: 'Активен' | 'Неактивен';
}

export interface Task {
  id: string;
  title: string;
  applicationId?: string;
  touristId?: string;
  dueDate: string;
  priority: 'Высокий' | 'Средний' | 'Низкий';
  status: TaskStatus;
  managerId: string;
}

export interface Payment {
  id: string;
  applicationId: string;
  touristId: string;
  totalPrice: number;
  paidAmount: number;
  remainingBalance: number;
  method: 'Банковский перевод' | 'Кредитная карта' | 'Наличные' | 'Kaspi';
  status: PaymentStatus;
  dueDate: string;
}

export interface DashboardStats {
  totalLeads: number;
  activeApplications: number;
  confirmedTours: number;
  unpaidPayments: number;
  monthlyRevenue: number;
  conversionRate: number;
}
