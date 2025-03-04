
import { useState } from "react";
import { Button } from "@/components/ui/custom/Button";
import { cn } from "@/lib/utils";
import { Calculator, ChevronRight, Utensils, ShoppingCart } from "lucide-react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

// Mock meal plan data
const mealPlans = [
  {
    id: "balanced",
    name: "Balanced",
    description: "Perfect balance of proteins, carbs, and fats",
    calories: "1800-2200",
    distribution: [
      { name: "Protein", percentage: 30 },
      { name: "Carbs", percentage: 40 },
      { name: "Fats", percentage: 30 },
    ],
    imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "high-protein",
    name: "High Protein",
    description: "Emphasis on protein for muscle building",
    calories: "2000-2400",
    distribution: [
      { name: "Protein", percentage: 40 },
      { name: "Carbs", percentage: 30 },
      { name: "Fats", percentage: 30 },
    ],
    imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "low-carb",
    name: "Low Carb",
    description: "Reduced carbohydrates for fat loss",
    calories: "1600-2000",
    distribution: [
      { name: "Protein", percentage: 35 },
      { name: "Carbs", percentage: 25 },
      { name: "Fats", percentage: 40 },
    ],
    imgUrl: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const features = [
  {
    name: "Personalized Plans",
    description: "Custom nutrition strategies tailored to your body type, goals, and food preferences.",
    icon: Utensils,
  },
  {
    name: "Macro Calculator",
    description: "Calculate your ideal macronutrient and calorie targets based on your activity level.",
    icon: Calculator,
  },
  {
    name: "Grocery Lists",
    description: "Auto-generated shopping lists based on your meal plan for convenient preparation.",
    icon: ShoppingCart,
  },
];

const NutritionPlanner = () => {
  const [selectedPlan, setSelectedPlan] = useState(mealPlans[0]);
  
  return (
    <div className="bg-secondary">
      <div className="page-container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedContainer>
            <h2 className="text-base font-semibold leading-7 text-primary">Nutrition</h2>
          </AnimatedContainer>
          <AnimatedContainer delay={100}>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Eat smarter, not harder
            </p>
          </AnimatedContainer>
          <AnimatedContainer delay={200}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Nutrition is 80% of your fitness results. Our meal plans are designed to fuel your workouts, boost recovery, and help you reach your goals faster.
            </p>
          </AnimatedContainer>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Features */}
          <div className="lg:col-span-1 order-last lg:order-first">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <AnimatedContainer key={feature.name} delay={300 + index * 100}>
                  <div className="relative">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                        <feature.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold text-foreground">
                          {feature.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedContainer>
              ))}
              
              <AnimatedContainer delay={600}>
                <Button className="w-full mt-8" shape="round">
                  View All Features <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </AnimatedContainer>
            </div>
          </div>
          
          {/* Meal plans */}
          <div className="lg:col-span-2">
            <AnimatedContainer delay={300} className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Meal plan image */}
                <div className="relative overflow-hidden">
                  <img
                    src={selectedPlan.imgUrl}
                    alt={`${selectedPlan.name} meal plan`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-xs font-medium text-foreground">
                      {selectedPlan.calories} calories
                    </span>
                  </div>
                </div>
                
                {/* Meal plan details */}
                <div className="p-6 flex flex-col">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {selectedPlan.name} Plan
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedPlan.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Macros distribution */}
                  <div className="mt-2 space-y-3 flex-1">
                    <h4 className="text-sm font-medium">Macro Distribution</h4>
                    {selectedPlan.distribution.map((macro) => (
                      <div key={macro.name} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span>{macro.name}</span>
                          <span className="font-medium">{macro.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full rounded-full",
                              macro.name === "Protein" && "bg-blue-500",
                              macro.name === "Carbs" && "bg-green-500",
                              macro.name === "Fats" && "bg-amber-500",
                            )}
                            style={{ width: `${macro.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1" size="sm">
                      View Plan
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Meal plan tabs */}
              <div className="px-6 py-3 bg-secondary flex overflow-x-auto scrollbar-none border-t border-border">
                {mealPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors relative",
                      selectedPlan.id === plan.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {plan.name}
                    {selectedPlan.id === plan.id && (
                      <span className="absolute inset-x-0 -bottom-3 h-0.5 bg-primary rounded-full transform origin-left animate-scale-in" />
                    )}
                  </button>
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlanner;
