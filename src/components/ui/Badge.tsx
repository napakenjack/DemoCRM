import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary-100 text-primary-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    neutral: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function getStatusBadgeVariant(status: string): BadgeProps['variant'] {
  const s = status.toLowerCase();
  
  if (s.includes('paid') || s.includes('confirmed') || s.includes('converted') || s.includes('done') || s.includes('verified') || s.includes('оплачен') || s.includes('подтвержден') || s.includes('успешно') || s.includes('выполнено') || s.includes('проверен')) {
    return 'success';
  }
  if (s.includes('partial') || s.includes('waiting') || s.includes('progress') || s.includes('частично') || s.includes('ожидание') || s.includes('в работе') || s.includes('ожидает')) {
    return 'warning';
  }
  if (s.includes('overdue') || s.includes('lost') || s.includes('cancelled') || s.includes('missing') || s.includes('просрочен') || s.includes('отказ') || s.includes('отменен') || s.includes('отсутствует') || s.includes('истек')) {
    return 'danger';
  }
  if (s.includes('new') || s.includes('contacted') || s.includes('sent') || s.includes('новый') || s.includes('новая') || s.includes('связались') || s.includes('отправлен')) {
    return 'info';
  }
  return 'neutral';
}
