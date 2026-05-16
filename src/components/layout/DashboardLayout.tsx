import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserCircle2, Briefcase, 
  Map, CheckSquare, CreditCard, Files, BarChart3, 
  Settings, Plane, Menu, Bell, Search, PlusCircle, X
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

const sidebarLinks = [
  { label: 'Обзор', path: '/app', icon: LayoutDashboard },
  { label: 'Создать', path: '/app/create', icon: PlusCircle },
  { label: 'Лиды', path: '/app/leads', icon: Users },
  { label: 'Заявки', path: '/app/applications', icon: Briefcase },
  { label: 'Туристы', path: '/app/tourists', icon: UserCircle2 },
  { label: 'Туры', path: '/app/tour-packages', icon: Map },
  { label: 'Туроператоры', path: '/app/operators', icon: Plane },
  { label: 'Задачи', path: '/app/tasks', icon: CheckSquare },
  { label: 'Платежи', path: '/app/payments', icon: CreditCard },
  { label: 'Документы', path: '/app/documents', icon: Files },
  { label: 'Аналитика', path: '/app/analytics', icon: BarChart3 },
  { label: 'Настройки', path: '/app/settings', icon: Settings },
];

export function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    const link = sidebarLinks.find(l => l.path === location.pathname);
    return link ? link.label : 'Обзор';
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 flex items-center space-x-3 border-b border-gray-100">
        <div className="bg-primary-600 p-2 rounded-lg flex items-center justify-center">
          <Plane className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-primary-900">Juye Systems</span>
      </div>
      
      <div className="px-4 py-4 flex-1 flex flex-col">
        <nav className="space-y-1 flex-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/app'}
                onClick={() => setMobileSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary-50 text-primary-700" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <Icon className={cn("h-5 w-5", location.pathname === link.path ? "text-primary-700" : "text-gray-400")} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <div className="bg-primary-900 rounded-xl p-4 text-white">
            <p className="text-xs opacity-80 uppercase tracking-widest font-bold mb-1">Текущий план</p>
            <p className="text-sm font-semibold">Агентство Pro</p>
            <button className="mt-3 w-full py-2 bg-white text-primary-900 text-xs font-bold rounded-lg hover:bg-primary-50 transition-colors">Улучшить тариф</button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 left-0 bg-white border-r border-gray-200 z-20">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileSidebarOpen(false)}>
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" />
        </div>
      )}

      {/* Mobile Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden flex flex-col",
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileSidebarOpen(false)} className="text-gray-500 bg-gray-100 rounded-full p-1 border border-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <SidebarContent />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="lg:hidden mr-4 p-2 -ml-2 text-gray-600 rounded-md hover:bg-gray-100"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-gray-800 hidden sm:block">{getPageTitle()}</h1>
            <span className="text-gray-400 hidden sm:block">/</span>
            <span className="text-gray-500 text-sm font-medium hidden sm:block">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Поиск лидов или заявок..." 
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-primary-500 transition-all outline-none"
              />
              <Search className="absolute left-4 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <button className="relative p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors lg:hidden">
              <Search className="h-5 w-5" />
            </button>

            <button className="relative p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors hidden lg:block">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            
            <div className="flex items-center gap-3 border-l pl-6 border-gray-200 hidden sm:flex">
              <div className="text-right">
                <p className="text-xs font-bold text-gray-800">Алина З.</p>
                <p className="text-[10px] text-gray-500">Старший менеджер</p>
              </div>
              <div className="w-9 h-9 bg-primary-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-primary-700 font-bold text-sm">АЗ</div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
