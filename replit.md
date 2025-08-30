# Overview

A full-stack retirement planning calculator application built with React, Express, and PostgreSQL. The app allows users to input their current financial situation and retirement goals to calculate different investment scenarios (conservative, moderate, aggressive) and visualize their retirement savings projections. Features include interactive charts, progress tracking, and detailed financial insights to help users plan for their retirement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Hook Form for form handling and TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Charts**: Recharts library for data visualization

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Storage Layer**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for development
- **Middleware**: Custom logging middleware for API request monitoring
- **Error Handling**: Centralized error handling middleware

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for production with Neon Database)
- **Schema**: User management and retirement calculations tables
- **Migrations**: Drizzle migrations stored in `/migrations` directory
- **Validation**: Zod schemas for type-safe data validation

## Development Environment
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Development Server**: Custom Vite integration with Express in development mode
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Type Safety**: Shared TypeScript types between client and server via `/shared` directory

## Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Component Architecture**: Reusable UI components with consistent styling
- **Form Validation**: Schema-based validation with react-hook-form and zod
- **Responsive Design**: Mobile-first approach with Tailwind CSS

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Neon Database**: Cloud PostgreSQL service for production hosting
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Frontend Libraries
- **Shadcn/ui**: Pre-built component library based on Radix UI
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Charting library for financial data visualization
- **Lucide React**: Icon library
- **React Hook Form**: Form state management
- **TanStack Query**: Server state management and caching

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for backend
- **TypeScript**: Static type checking
- **tsx**: TypeScript execution for development
- **Replit Plugins**: Development environment integration for cartographer and runtime error overlay

## Validation & Utilities
- **Zod**: Schema validation library
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management