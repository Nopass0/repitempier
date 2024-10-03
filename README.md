# Project Name

## Overview
This project is a React application that demonstrates the use of `lucide-react` for icons, `shadcn/ui` for UI components, and `tailwindcss` for styling. The main goal is to showcase how to integrate these libraries into a modern React project.

## Features
- **lucide-react**: For elegant and customizable icons.
- **shadcn/ui**: For pre-styled UI components that are easy to integrate.
- **tailwindcss**: For utility-first CSS that makes styling straightforward and efficient.

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

### Project Structure
- `components/`: Contains reusable React components.
  - `helloworld.tsx`: A component that uses `lucide-react`, `shadcn/ui`, and `tailwindcss`.
- `pages/`: Contains the main page of the application.
  - `index.tsx`: The main page where the `HelloWorld` component is used.
- `public/`: Static assets.
- `styles/`: Global styles and Tailwind CSS configuration.

## Usage
To use the `HelloWorld` component on your main page, follow these steps:
1. Import the `HelloWorld` component in your main page file (`pages/index.tsx`).
2. Define the necessary props (`icon` and `message`).
3. Include the `HelloWorld` component in the JSX structure of your main page.

### Example
