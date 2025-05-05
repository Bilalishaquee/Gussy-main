import React from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center justify-center group">
      <div className="p-2 text-gray-300 group-hover:text-amber-500 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-400 group-hover:text-amber-500 transition-colors duration-300">
        {label}
      </span>
    </button>
  );
};

const ActionButtons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-10 md:space-x-16">
      <ActionButton icon={<Search size={20} />} label="FIND" />
      <ActionButton icon={<Heart size={20} />} label="LOVE" />
      <ActionButton icon={<ShoppingBag size={20} />} label="SHOP" />
    </div>
  );
};

export default ActionButtons;