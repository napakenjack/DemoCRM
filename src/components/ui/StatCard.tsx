import React from 'react';
import { Card, CardContent } from './Card';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isUp: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-tight">{title}</p>
          <div className="bg-primary-50 rounded-lg text-primary-600 p-1">
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">{value}</span>
          {trend && (
            <span className={cn(
              "text-xs font-bold",
              trend.isUp ? "text-emerald-500" : "text-red-500"
            )}>
              {trend.value}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
