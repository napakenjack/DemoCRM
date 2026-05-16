import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle, Database, Phone, FileCheck, Search, Users, PlaneTakeoff, TrendingUp, Briefcase } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-white to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="mb-6 mx-auto inline-flex">ВСТРЕЧАЙТЕ JUYE SYSTEMS 2.0</Badge>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-6 max-w-4xl mx-auto">
            CRM для турагентств, которые не хотят терять клиентов
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-500 mb-10 max-w-2xl mx-auto">
            Управляйте лидами, туристами, заявками, турами, операторами, платежами и задачами в одной красивой и понятной системе.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg" asChild>
              <Link to="/app">
                Открыть демо CRM <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg" asChild>
              <Link to="/features">Смотреть функции</Link>
            </Button>
          </div>
        </div>

        {/* Dashboard Preview Abstract */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-emerald-400 rounded-2xl blur opacity-30"></div>
          <div className="relative glass-card rounded-xl overflow-hidden shadow-2xl p-2 bg-white">
             {/* Mock Dashboard navbar */}
            <div className="border-b border-gray-100 p-4 flex items-center justify-between bg-gray-50/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-4 w-32 bg-gray-200 rounded-full" />
            </div>
            <div className="p-6 grid grid-cols-3 gap-6">
               <div className="col-span-1 border-r border-gray-100 pr-6 space-y-4">
                 <div className="w-full h-8 flex items-center space-x-3 text-primary-600 bg-primary-50 rounded-lg px-3"><Users className="w-4 h-4"/><span className="text-sm font-medium">Лиды</span></div>
                 <div className="w-full h-8 flex items-center space-x-3 text-gray-400 px-3"><Briefcase className="w-4 h-4"/><span className="text-sm font-medium">Заявки</span></div>
                 <div className="w-full h-8 flex items-center space-x-3 text-gray-400 px-3"><Database className="w-4 h-4"/><span className="text-sm font-medium">Туристы</span></div>
               </div>
               <div className="col-span-2 space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1 h-24 bg-primary-50 rounded-xl p-4 border border-primary-100">
                       <span className="text-sm text-primary-800 font-medium">Новые заявки</span>
                       <div className="text-2xl font-bold text-primary-900 mt-1">24</div>
                    </div>
                     <div className="flex-1 h-24 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                       <span className="text-sm text-emerald-800 font-medium">Месячная прибыль</span>
                       <div className="text-2xl font-bold text-emerald-900 mt-1">$45k</div>
                    </div>
                  </div>
                  <div className="h-40 bg-gray-50 rounded-xl border border-gray-100 p-4">
                     <div className="h-6 w-32 bg-gray-200 rounded-full mb-4" />
                     <div className="space-y-3">
                       <div className="h-4 w-full bg-white rounded border border-gray-100" />
                       <div className="h-4 w-3/4 bg-white rounded border border-gray-100" />
                       <div className="h-4 w-5/6 bg-white rounded border border-gray-100" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tighter text-gray-900 mb-4">Турагентства теряют деньги, когда работают хаотично</h2>
            <p className="text-lg font-medium text-gray-500">Если ваше агентство полагается на микс из WhatsApp, таблиц Excel и бумажных блокнотов, вы неизбежно уступаете клиентов более быстрым конкурентам.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Потеря лидов в мессенджерах", desc: "Менеджеры забывают отвечать или теряют суть разговора в длинных переписках.", icon: MessageSquare },
              { title: "Забытые обещания", desc: "Срыв сроков звонков и встреч ведет к потерянным продажам.", icon: Phone },
               { title: "Путаница в данных", desc: "Поиск нужной копии паспорта в диалогах занимает долгие часы.", icon: Search },
            ].map((p, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
                 <div className="mx-auto w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <p.icon className="h-7 w-7" />
                 </div>
                 <h3 className="text-xl font-bold tracking-tight mb-3 text-gray-900">{p.title}</h3>
                 <p className="text-gray-500 font-medium text-sm">{p.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Workflow Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 inline-flex">Как мы работаем</Badge>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4">Жизненный цикл клиента в Juye</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-100" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Захват лида", desc: "WhatsApp, Instagram или звонки легко превращаются в заявки." },
                { step: "2", title: "Создание заявки", desc: "Учет всех пожеланий клиента: бюджет, даты, направления." },
                { step: "3", title: "Данные туриста", desc: "Безопасное хранение паспортов, виз и истории поездок." },
                { step: "4", title: "Оформление тура", desc: "Выбор оператора, контроль оплат и выдача документов." },
              ].map((w, i) => (
                <div key={i} className="relative z-10 text-center">
                   <div className="w-12 h-12 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-white">
                    {w.step}
                   </div>
                   <h3 className="text-lg font-semibold mb-2">{w.title}</h3>
                   <p className="text-sm text-gray-500">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Pricing */}
      <section id="pricing" className="py-24 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Простые тарифы для бизнеса</h2>
            <p className="text-gray-400">Начните наводить порядок в продажах уже сегодня.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <Card className="bg-gray-800 border-gray-700 text-white flex flex-col">
               <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">Стартовый</h3>
                  <p className="text-gray-400 mb-6">Для частных агентов</p>
                  <p className="text-4xl font-bold mb-8">$29 <span className="text-lg text-gray-500 font-normal">/мес</span></p>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" /> 100 заявок в месяц</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" /> База туристов</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" /> Задачи и напоминания</li>
                  </ul>
                  <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">Начать бесплатно</Button>
               </CardContent>
             </Card>

             <Card className="bg-gradient-to-b from-primary-600 to-primary-800 border-none text-white flex flex-col relative transform md:-translate-y-4 shadow-2xl">
               <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                 <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Самый популярный</span>
               </div>
               <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">Агентство Pro</h3>
                  <p className="text-primary-200 mb-6">Для средних команд</p>
                  <p className="text-4xl font-bold mb-8">$79 <span className="text-lg text-primary-300 font-normal">/мес</span></p>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-300 mr-2" /> Безлимитные заявки</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-300 mr-2" /> Сделки и платежи</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-300 mr-2" /> Туры и операторы</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-300 mr-2" /> Полная аналитика</li>
                  </ul>
                  <Button className="w-full bg-white text-primary-900 hover:bg-gray-100">Начать бесплатно</Button>
               </CardContent>
             </Card>

             <Card className="bg-gray-800 border-gray-700 text-white flex flex-col">
               <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">Корпоративный</h3>
                  <p className="text-gray-400 mb-6">Для крупных сетей</p>
                  <p className="text-4xl font-bold mb-8">Свой тариф</p>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" /> API доступы</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" /> Индивидуальная настройка</li>
                    <li className="flex"><CheckCircle className="h-5 w-5 text-emerald-400 mr-2" /> Интеграция с сайтом</li>
                  </ul>
                  <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">Связаться с нами</Button>
               </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center px-4">
         <h2 className="text-4xl font-bold text-gray-900 mb-6">Готовы навести порядок в агентстве?</h2>
         <p className="text-lg text-gray-600 mb-10">Прекратите терять клиентов и начните продавать больше туров с Juye Systems.</p>
         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
           <Button size="lg" className="h-14 px-8 text-lg" asChild>
             <Link to="/app">Открыть демо CRM</Link>
           </Button>
         </div>
      </section>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={`bg-primary-50 text-primary-600 uppercase tracking-tighter text-[10px] font-bold px-3 py-1 rounded-full ${className}`}>{children}</span>;
}
