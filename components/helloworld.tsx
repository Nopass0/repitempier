import * as React from 'react';
import { Button } from '../ui/Button';
import { Lucide } from 'lucide-react';
import { HiOutlineExternalLink } from 'lucide-react';

interface Props {
}

const HelloWorld: React.FC<Props> = () => {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Hello, World!</h1>
      <p className="text-lg mb-4">This is a sample component using Tailwind CSS, Shadcn UI, and Lucide React.</p>
      <Button
        variant="primary"
        size="lg"
        className="mb-4"
      >
        Click me!
      </Button>
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        Visit example.com
        <HiOutlineExternalLink className="ml-2" />
      </a>
    </div>
  );
};

export default HelloWorld;
