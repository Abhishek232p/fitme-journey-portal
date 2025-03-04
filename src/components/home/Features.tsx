
import { 
  ActivitySquare, 
  Utensils, 
  BarChart3, 
  Calendar, 
  Zap, 
  Users 
} from "lucide-react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

const features = [
  {
    name: "Personalized Workouts",
    description: "Tailored exercise programs designed to match your fitness level, goals, and preferences.",
    icon: ActivitySquare,
  },
  {
    name: "Nutrition Planning",
    description: "Customized meal plans and recipes to fuel your workouts and support your health goals.",
    icon: Utensils,
  },
  {
    name: "Progress Tracking",
    description: "Visual dashboards that monitor your metrics and celebrate your achievements over time.",
    icon: BarChart3,
  },
  {
    name: "Scheduled Sessions",
    description: "Plan your fitness routine with an intuitive calendar that keeps you consistent.",
    icon: Calendar,
  },
  {
    name: "Quick Workouts",
    description: "Efficient exercise routines for busy days when time is limited but results still matter.",
    icon: Zap,
  },
  {
    name: "Community Support",
    description: "Connect with like-minded members to share experiences and motivate each other.",
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedContainer>
            <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          </AnimatedContainer>
          <AnimatedContainer delay={100}>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for your fitness journey
            </p>
          </AnimatedContainer>
          <AnimatedContainer delay={200}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We've designed our platform to provide a complete solution for your health and fitness goals, combining expert guidance with intuitive tools.
            </p>
          </AnimatedContainer>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedContainer key={feature.name} delay={300 + index * 100}>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
