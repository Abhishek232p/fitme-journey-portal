
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/custom/Button";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { cn } from "@/lib/utils";

// Define animation properties for a typewriter effect
const phrases = [
  "stronger",
  "healthier",
  "better",
  "fitter",
  "balanced"
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
      
      if (!isDeleting && currentText === currentPhrase) {
        // Wait at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 120);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);
  
  return (
    <div className="relative pt-20 pb-16 sm:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-70 blur-3xl" />
      </div>
      
      <div className="page-container relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <AnimatedContainer>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                Beta Launch
              </span>
            </AnimatedContainer>
            
            <AnimatedContainer delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Become a{" "}
                <span className="text-primary relative">
                  {currentText}
                  <span className="absolute -right-1 top-0 h-full w-[2px] bg-primary animate-pulse-subtle" />
                </span>
                <br />
                version of yourself
              </h1>
            </AnimatedContainer>
            
            <AnimatedContainer delay={400}>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Personalized workouts, nutrition plans, and expert guidance - all in one place. Start your fitness journey today and see the difference.
              </p>
            </AnimatedContainer>
            
            <AnimatedContainer delay={600} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button shape="round" size="lg" className="font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="minimal" size="lg" shape="round" className="font-medium">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </AnimatedContainer>
            
            <AnimatedContainer delay={800} className="mt-8">
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 border-background",
                        i === 1 && "bg-blue-400",
                        i === 2 && "bg-green-400",
                        i === 3 && "bg-purple-400",
                        i === 4 && "bg-orange-400",
                      )}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4,000+</span>
                  <span className="text-muted-foreground ml-1">happy members</span>
                </div>
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Hero image */}
          <AnimatedContainer animation="slide-in" className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-tr from-primary/20 to-primary/5 opacity-50 blur" />
                <div className="relative overflow-hidden rounded-xl bg-white shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                    alt="Person working out"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-elevated p-4 max-w-[180px] animate-float">
                <div className="text-sm font-medium">Weekly Progress</div>
                <div className="mt-1 flex items-center space-x-1">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-primary rounded-full" />
                  </div>
                  <span className="text-xs font-medium">75%</span>
                </div>
              </div>
              
              {/* Workout card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-elevated p-4 max-w-[180px] animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-sm font-medium">Today's Workout</div>
                <div className="mt-1 text-xs text-muted-foreground">Upper Body • 45 min</div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
