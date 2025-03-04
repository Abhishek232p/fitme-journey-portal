
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import NutritionPlanner from "@/components/nutrition/NutritionPlanner";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { Button } from "@/components/ui/custom/Button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <Hero />
      
      {/* Features section */}
      <Features />
      
      {/* Nutrition section */}
      <NutritionPlanner />
      
      {/* Exercise section preview */}
      <div className="bg-background py-24">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <AnimatedContainer>
              <h2 className="text-base font-semibold leading-7 text-primary">Exercises</h2>
            </AnimatedContainer>
            <AnimatedContainer delay={100}>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Find the perfect workout
              </p>
            </AnimatedContainer>
            <AnimatedContainer delay={200}>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore our extensive library of exercises, categorized by muscle group, equipment, and difficulty level. Watch video demonstrations and save your favorites.
              </p>
            </AnimatedContainer>
            <AnimatedContainer delay={300}>
              <Link to="/exercises">
                <Button className="mt-8" shape="round">
                  Browse Exercises <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </AnimatedContainer>
          </div>
          
          <AnimatedContainer delay={400}>
            <div className="relative mx-auto max-w-7xl">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-tr from-primary/20 to-primary/5 opacity-50 blur-xl" />
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Exercise library preview"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <div className="absolute bottom-0 w-full p-6 sm:p-10">
                  <div className="sm:max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Over 500+ Exercises
                    </h3>
                    <p className="text-white/90 mb-6 text-sm sm:text-base">
                      HD video demonstrations, detailed instructions, and tips from certified trainers.
                    </p>
                    <Link to="/exercises">
                      <Button>Explore Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary/5 border-y border-primary/10">
        <div className="page-container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedContainer>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Ready to transform your fitness journey?
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Join thousands of members who have already changed their lives with our personalized programs, expert guidance, and supportive community.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button shape="round" size="lg" className="font-medium">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" shape="round" size="lg" className="font-medium">
                    Learn More
                  </Button>
                </div>
              </div>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-in" className="lg:order-first">
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="People working out"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
