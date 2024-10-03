import React from 'react';
import { LucideIcon } from 'lucide-react'; // Assuming you want to use a specific icon from lucide-react
import { Button } from '@/components/ui/button'; // Example of importing a shadcn/ui component
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

interface HelloWorldProps {
  icon: LucideIcon;
  message: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ icon: Icon, message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <Icon size={48} className="mb-4 text-blue-500" />
        <h1 className="text-2xl font-bold text-gray-800">{message}</h1>
        <Button variant="outline" className="mt-4">Click Me</Button>
      </div>
    </div>
  );
};

export default HelloWorld;
