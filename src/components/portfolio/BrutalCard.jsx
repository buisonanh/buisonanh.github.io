
import React from 'react';
import { cn } from '@/lib/utils';

const BrutalCard = ({ children, className = '' }) => (
  <div className={cn('brutal-card', className)}>{children}</div>
);

export default BrutalCard;
