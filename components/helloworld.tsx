import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Lucide } from 'lucide-react';
import { HiOutlineExternalLink } from 'lucide-react';

interface Props {
}

const helloWorld: React.FC<Props> = () => {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">hello, world!</h1>
      <p className="text-lg mb-4">this is a sample component using tailwind css, shadcn ui, and lucide react.</p>
      <Button
        variant="primary"
        size="lg"
        className="mb-4"
      >
        click me!
      </Button>
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        visit example.com
        <HiOutlineExternalLink className="ml-2" />
      </a>
    </div>
  );
};

export default helloWorld;
