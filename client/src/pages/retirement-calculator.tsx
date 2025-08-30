import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Calculator, TrendingUp, DollarSign, Info, CheckCircle, AlertTriangle, Lightbulb, Save, Share, Bus } from "lucide-react";
import { 
  calculateRetirementScenarios, 
  generateGrowthProjectionData, 
  getInsights,
  type RetirementInputs,
  type RetirementResults 
} from "@/lib/retirement-calculations";

const formSchema = z.object({
  currentAge: z.number().min(18, "Must be at least 18").max(100, "Must be less than 100"),
  retirementAge: z.number().min(50, "Must be at least 50").max(100, "Must be less than 100"),
  currentSavings: z.number().min(0, "Cannot be negative"),
  desiredMonthlyIncome: z.number().min(100, "Must be at least $100"),
  customRoi: z.number().min(0.1, "Must be at least 0.1%").max(50, "Must be less than 50%").optional(),
}).refine((data) => data.retirementAge > data.currentAge, {
  message: "Retirement age must be greater than current age",
  path: ["retirementAge"],
});

type FormData = z.infer<typeof formSchema>;

export default function RetirementCalculator() {
  const [results, setResults] = useState<RetirementResults | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 25000,
      desiredMonthlyIncome: 4000,
      customRoi: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    try {
      const calculatedResults = calculateRetirementScenarios(data);
      setResults(calculatedResults);
      
      const projectionData = generateGrowthProjectionData(data, calculatedResults);
      setChartData(projectionData);
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Calculate on initial load
  useEffect(() => {
    const defaultData = {
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 25000,
      desiredMonthlyIncome: 4000,
    };
    onSubmit(defaultData);
  }, []);

  const watchedValues = form.watch();
  const insights = results ? getInsights(watchedValues, results) : [];

  const scenarioData = results ? [
    { name: 'Conservative (4%)', value: results.conservative.requiredMonthlySavings, color: '#f97316' },
    { name: 'Moderate (7%)', value: results.moderate.requiredMonthlySavings, color: '#3b82f6' },
    { name: 'Aggressive (10%)', value: results.aggressive.requiredMonthlySavings, color: '#10b981' },
    ...(results.custom ? [{ name: `Custom (${(results.custom.roi * 100).toFixed(1)}%)`, value: results.custom.requiredMonthlySavings, color: '#8b5cf6' }] : []),
  ] : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <TrendingUp className="text-xl" />
            <h1 className="text-xl font-bold">Retirement Calculator</h1>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-primary/90">
            <Info className="text-lg" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto bg-background">
        {/* Input Form */}
        <section className="p-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calculator className="mr-2 text-primary" />
                Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentAge">Current Age</Label>
                <Input
                  id="currentAge"
                  type="number"
                  data-testid="input-current-age"
                  {...form.register("currentAge", { valueAsNumber: true })}
                  onChange={(e) => {
                    form.setValue("currentAge", parseInt(e.target.value) || 0);
                    const values = form.getValues();
                    if (values.currentAge && values.retirementAge && values.retirementAge > values.currentAge) {
                      onSubmit(values);
                    }
                  }}
                />
                {form.formState.errors.currentAge && (
                  <p className="text-sm text-destructive">{form.formState.errors.currentAge.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="retirementAge">Desired Retirement Age</Label>
                <Input
                  id="retirementAge"
                  type="number"
                  data-testid="input-retirement-age"
                  {...form.register("retirementAge", { valueAsNumber: true })}
                  onChange={(e) => {
                    form.setValue("retirementAge", parseInt(e.target.value) || 0);
                    const values = form.getValues();
                    if (values.currentAge && values.retirementAge && values.retirementAge > values.currentAge) {
                      onSubmit(values);
                    }
                  }}
                />
                {form.formState.errors.retirementAge && (
                  <p className="text-sm text-destructive">{form.formState.errors.retirementAge.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentSavings">Current Savings ($)</Label>
                <Input
                  id="currentSavings"
                  type="number"
                  data-testid="input-current-savings"
                  {...form.register("currentSavings", { valueAsNumber: true })}
                  onChange={(e) => {
                    form.setValue("currentSavings", parseFloat(e.target.value) || 0);
                    const values = form.getValues();
                    if (values.currentAge && values.retirementAge && values.retirementAge > values.currentAge) {
                      onSubmit(values);
                    }
                  }}
                />
                {form.formState.errors.currentSavings && (
                  <p className="text-sm text-destructive">{form.formState.errors.currentSavings.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="desiredMonthlyIncome">Desired Monthly Income (Today's $)</Label>
                <Input
                  id="desiredMonthlyIncome"
                  type="number"
                  data-testid="input-desired-income"
                  {...form.register("desiredMonthlyIncome", { valueAsNumber: true })}
                  onChange={(e) => {
                    form.setValue("desiredMonthlyIncome", parseFloat(e.target.value) || 0);
                    const values = form.getValues();
                    if (values.currentAge && values.retirementAge && values.retirementAge > values.currentAge) {
                      onSubmit(values);
                    }
                  }}
                />
                {form.formState.errors.desiredMonthlyIncome && (
                  <p className="text-sm text-destructive">{form.formState.errors.desiredMonthlyIncome.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customRoi">Custom ROI Rate (% per year, optional)</Label>
                <Input
                  id="customRoi"
                  type="number"
                  placeholder="e.g., 8.5"
                  step="0.1"
                  data-testid="input-custom-roi"
                  {...form.register("customRoi", { valueAsNumber: true })}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    form.setValue("customRoi", isNaN(value) ? undefined : value);
                    const values = form.getValues();
                    if (values.currentAge && values.retirementAge && values.retirementAge > values.currentAge) {
                      onSubmit(values);
                    }
                  }}
                />
                {form.formState.errors.customRoi && (
                  <p className="text-sm text-destructive">{form.formState.errors.customRoi.message}</p>
                )}
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Calculations based on 3% annual inflation rate
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Scenario Results */}
        {results && (
          <section className="p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 text-primary" />
              Investment Scenarios
            </h2>

            {/* Conservative Scenario */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-orange-600">Conservative (4% ROI)</h3>
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Required Monthly Savings:</span>
                    <span className="font-semibold text-destructive" data-testid="conservative-monthly-savings">
                      ${results.conservative.requiredMonthlySavings.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Future Monthly Income:</span>
                    <span className="font-medium" data-testid="conservative-future-income">
                      ${results.conservative.futureMonthlyIncome.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Today's Purchasing Power:</span>
                    <span className="font-medium text-accent" data-testid="conservative-todays-power">
                      ${results.conservative.todaysPurchasingPower.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Progress to Goal</span>
                      <span className="text-sm font-medium">{results.conservative.progressToGoal}%</span>
                    </div>
                    <Progress value={results.conservative.progressToGoal} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Moderate Scenario */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-blue-600">Moderate (7% ROI)</h3>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Required Monthly Savings:</span>
                    <span className="font-semibold text-accent" data-testid="moderate-monthly-savings">
                      ${results.moderate.requiredMonthlySavings.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Future Monthly Income:</span>
                    <span className="font-medium" data-testid="moderate-future-income">
                      ${results.moderate.futureMonthlyIncome.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Today's Purchasing Power:</span>
                    <span className="font-medium text-accent" data-testid="moderate-todays-power">
                      ${results.moderate.todaysPurchasingPower.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Progress to Goal</span>
                      <span className="text-sm font-medium">{results.moderate.progressToGoal}%</span>
                    </div>
                    <Progress value={results.moderate.progressToGoal} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aggressive Scenario */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-green-600">Aggressive (10% ROI)</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Required Monthly Savings:</span>
                    <span className="font-semibold text-accent" data-testid="aggressive-monthly-savings">
                      ${results.aggressive.requiredMonthlySavings.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Future Monthly Income:</span>
                    <span className="font-medium" data-testid="aggressive-future-income">
                      ${results.aggressive.futureMonthlyIncome.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Today's Purchasing Power:</span>
                    <span className="font-medium text-accent" data-testid="aggressive-todays-power">
                      ${results.aggressive.todaysPurchasingPower.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Progress to Goal</span>
                      <span className="text-sm font-medium">{results.aggressive.progressToGoal}%</span>
                    </div>
                    <Progress value={results.aggressive.progressToGoal} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Scenario */}
            {results.custom && (
              <Card className="mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-purple-600">Custom ({(results.custom.roi * 100).toFixed(1)}% ROI)</h3>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Required Monthly Savings:</span>
                      <span className="font-semibold text-accent" data-testid="custom-monthly-savings">
                        ${results.custom.requiredMonthlySavings.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Future Monthly Income:</span>
                      <span className="font-medium" data-testid="custom-future-income">
                        ${results.custom.futureMonthlyIncome.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Today's Purchasing Power:</span>
                      <span className="font-medium text-accent" data-testid="custom-todays-power">
                        ${results.custom.todaysPurchasingPower.toLocaleString()}
                      </span>
                    </div>

                    <div className="bg-muted p-3 rounded-md">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Progress to Goal</span>
                        <span className="text-sm font-medium">{results.custom.progressToGoal}%</span>
                      </div>
                      <Progress value={results.custom.progressToGoal} className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </section>
        )}

        {/* Charts */}
        {chartData.length > 0 && (
          <section className="p-4">
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 text-primary" />
                  Savings Growth Projection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    conservative: { label: "Conservative", color: "#f97316" },
                    moderate: { label: "Moderate", color: "#3b82f6" },
                    aggressive: { label: "Aggressive", color: "#10b981" },
                    custom: { label: "Custom", color: "#8b5cf6" },
                  }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="age" />
                      <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="conservative" stroke="#f97316" strokeWidth={2} />
                      <Line type="monotone" dataKey="moderate" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="aggressive" stroke="#10b981" strokeWidth={2} />
                      {results?.custom && <Line type="monotone" dataKey="custom" stroke="#8b5cf6" strokeWidth={2} />}
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 text-primary" />
                  Monthly Contribution Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: { label: "Required Monthly Savings", color: "#3b82f6" },
                  }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={scenarioData}>
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Insights */}
        {insights.length > 0 && (
          <section className="p-4">
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 text-primary" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {insights.map((insight, index) => (
                  <div key={index} className={`flex items-start space-x-3 p-3 rounded-md ${
                    insight.type === 'success' ? 'bg-accent/10' :
                    insight.type === 'warning' ? 'bg-orange-50' : 'bg-blue-50'
                  }`}>
                    {insight.type === 'success' && <CheckCircle className="text-accent mt-0.5" />}
                    {insight.type === 'warning' && <AlertTriangle className="text-orange-500 mt-0.5" />}
                    {insight.type === 'info' && <Info className="text-blue-500 mt-0.5" />}
                    <div>
                      <p className="font-medium text-sm">{insight.title}</p>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Calculation Assumptions */}
        <section className="p-4">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 text-primary" />
                Calculation Assumptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Inflation Rate:</span>
                  <span className="font-medium">3.0% annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Compounding:</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Withdrawal Rate:</span>
                  <span className="font-medium">4% annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax Consideration:</span>
                  <span className="font-medium">Pre-tax calculations</span>
                </div>
              </div>

              <Alert className="mt-3">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  This calculator provides estimates. Consult a financial advisor for personalized advice.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Action Buttons */}
        <section className="p-4 pb-8">
          <div className="space-y-3">
            <Button className="w-full" data-testid="button-save">
              <Save className="mr-2 h-4 w-4" />
              Save This Calculation
            </Button>

            <Button variant="secondary" className="w-full" data-testid="button-share">
              <Share className="mr-2 h-4 w-4" />
              Share Results
            </Button>

            <Button variant="outline" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-advisor">
              <Bus className="mr-2 h-4 w-4" />
              Find Financial Advisor
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
