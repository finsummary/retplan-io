# RetPlan.io

A comprehensive retirement planning calculator that helps you visualize your financial future and plan for a secure retirement.

## Features

- **Smart Calculations**: Calculate monthly savings needed across three investment scenarios (Conservative 4%, Moderate 7%, Aggressive 10%)
- **Visual Projections**: Interactive charts showing your savings growth over time
- **Scenario Management**: Save and compare multiple retirement scenarios with secure authentication
- **Educational Content**: Built-in blog with retirement planning guides and tips
- **Mobile-First Design**: Responsive design optimized for all devices
- **Privacy-Focused**: Your financial data stays secure and private

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Tailwind CSS + Shadcn/ui components
- **Charts**: Recharts for data visualization
- **Authentication**: Email/password with session management

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Copy .env.example to .env and fill in your database URL
   DATABASE_URL="your_postgresql_url_here"
   SESSION_SECRET="your_session_secret_here"
   ```

3. Push database schema:
   ```bash
   npm run db:push
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5000](http://localhost:5000) in your browser

## Deployment

This app is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

## Financial Methodology

- **Inflation Rate**: 3% annually
- **Withdrawal Rate**: 4% annually (safe withdrawal rate)
- **Compounding**: Monthly
- **Tax Consideration**: Pre-tax calculations
- **Return Scenarios**:
  - Conservative: 4% annual return
  - Moderate: 7% annual return  
  - Aggressive: 10% annual return

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, contact us at hi@retplan.io

---

**Disclaimer**: RetPlan.io is for educational purposes only and does not constitute financial advice. Always consult with qualified financial professionals for personalized retirement planning guidance.