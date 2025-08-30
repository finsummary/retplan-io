export interface RetirementScenario {
  roi: number;
  requiredMonthlySavings: number;
  futureMonthlyIncome: number;
  todaysPurchasingPower: number;
  totalSavingsAtRetirement: number;
  progressToGoal: number;
}

export interface RetirementInputs {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  desiredMonthlyIncome: number;
  customRoi?: number;
}

export interface RetirementResults {
  conservative: RetirementScenario;
  moderate: RetirementScenario;
  aggressive: RetirementScenario;
  custom?: RetirementScenario;
  inflationRate: number;
  yearsToRetirement: number;
}

const INFLATION_RATE = 0.03;
const WITHDRAWAL_RATE = 0.04; // 4% rule

export function calculateRetirementScenarios(inputs: RetirementInputs): RetirementResults {
  const { currentAge, retirementAge, currentSavings, desiredMonthlyIncome, customRoi } = inputs;
  const yearsToRetirement = retirementAge - currentAge;
  
  if (yearsToRetirement <= 0) {
    throw new Error("Retirement age must be greater than current age");
  }

  // Calculate future value of desired income accounting for inflation
  const futureMonthlyIncome = desiredMonthlyIncome * Math.pow(1 + INFLATION_RATE, yearsToRetirement);
  
  // Calculate required savings at retirement (25x annual expenses for 4% rule)
  const requiredSavingsAtRetirement = (futureMonthlyIncome * 12) / WITHDRAWAL_RATE;

  const scenarios = [
    { name: 'conservative', roi: 0.04 },
    { name: 'moderate', roi: 0.07 },
    { name: 'aggressive', roi: 0.10 }
  ];

  // Add custom scenario if provided
  if (customRoi && customRoi > 0) {
    scenarios.push({ name: 'custom', roi: customRoi / 100 });
  }

  const results: any = {
    inflationRate: INFLATION_RATE,
    yearsToRetirement
  };

  scenarios.forEach(scenario => {
    const monthlyRoi = scenario.roi / 12;
    const totalMonths = yearsToRetirement * 12;
    
    // Future value of current savings
    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRoi, totalMonths);
    
    // Required additional savings
    const additionalSavingsNeeded = Math.max(0, requiredSavingsAtRetirement - futureValueOfCurrentSavings);
    
    // Required monthly savings using future value of annuity formula
    let requiredMonthlySavings = 0;
    if (additionalSavingsNeeded > 0 && monthlyRoi > 0) {
      requiredMonthlySavings = additionalSavingsNeeded * monthlyRoi / (Math.pow(1 + monthlyRoi, totalMonths) - 1);
    } else if (additionalSavingsNeeded > 0 && monthlyRoi === 0) {
      requiredMonthlySavings = additionalSavingsNeeded / totalMonths;
    }

    // Calculate progress to goal based on current savings
    const progressToGoal = Math.min(100, (futureValueOfCurrentSavings / requiredSavingsAtRetirement) * 100);

    results[scenario.name] = {
      roi: scenario.roi,
      requiredMonthlySavings: Math.round(requiredMonthlySavings),
      futureMonthlyIncome: Math.round(futureMonthlyIncome),
      todaysPurchasingPower: Math.round(desiredMonthlyIncome),
      totalSavingsAtRetirement: Math.round(requiredSavingsAtRetirement),
      progressToGoal: Math.round(progressToGoal)
    };
  });

  return results as RetirementResults;
}

export function generateGrowthProjectionData(inputs: RetirementInputs, scenarios: RetirementResults) {
  const { currentAge, retirementAge, currentSavings } = inputs;
  const yearsToRetirement = retirementAge - currentAge;
  
  const data = [];
  
  for (let year = 0; year <= yearsToRetirement; year += 5) {
    const age = currentAge + year;
    const dataPoint: any = { age, year };
    
    const scenarioNames = ['conservative', 'moderate', 'aggressive'];
    if (scenarios.custom) {
      scenarioNames.push('custom');
    }
    
    scenarioNames.forEach(scenarioName => {
      const scenario = scenarios[scenarioName as keyof typeof scenarios] as RetirementScenario;
      if (!scenario) return;
      
      const monthlyRoi = scenario.roi / 12;
      const months = year * 12;
      
      // Future value of current savings
      const futureCurrentSavings = currentSavings * Math.pow(1 + monthlyRoi, months);
      
      // Future value of monthly contributions
      let futureContributions = 0;
      if (scenario.requiredMonthlySavings > 0 && monthlyRoi > 0) {
        futureContributions = scenario.requiredMonthlySavings * 
          (Math.pow(1 + monthlyRoi, months) - 1) / monthlyRoi;
      } else if (scenario.requiredMonthlySavings > 0) {
        futureContributions = scenario.requiredMonthlySavings * months;
      }
      
      dataPoint[scenarioName] = Math.round(futureCurrentSavings + futureContributions);
    });
    
    data.push(dataPoint);
  }
  
  return data;
}

export function getInsights(inputs: RetirementInputs, results: RetirementResults) {
  const insights = [];
  
  // Best case scenario
  const bestScenario = results.aggressive.requiredMonthlySavings < results.moderate.requiredMonthlySavings ? 'aggressive' : 'moderate';
  const bestScenarioData = bestScenario === 'aggressive' ? results.aggressive : results.moderate;
  insights.push({
    type: 'success',
    title: 'Best Case Scenario',
    description: `${bestScenario.charAt(0).toUpperCase() + bestScenario.slice(1)} portfolio requires only $${bestScenarioData.requiredMonthlySavings}/month to reach your goal`
  });
  
  // Conservative challenge
  if (results.conservative.requiredMonthlySavings > results.moderate.requiredMonthlySavings * 1.5) {
    insights.push({
      type: 'warning',
      title: 'Conservative Challenge',
      description: `Low-risk approach needs $${results.conservative.requiredMonthlySavings}/month - consider increasing risk tolerance`
    });
  }
  
  // Inflation impact
  const inflationMultiplier = Math.pow(1 + INFLATION_RATE, results.yearsToRetirement);
  insights.push({
    type: 'info',
    title: 'Inflation Impact',
    description: `Your $${inputs.desiredMonthlyIncome.toLocaleString()} goal today will need $${Math.round(inputs.desiredMonthlyIncome * inflationMultiplier).toLocaleString()}/month in ${results.yearsToRetirement} years`
  });
  
  return insights;
}
