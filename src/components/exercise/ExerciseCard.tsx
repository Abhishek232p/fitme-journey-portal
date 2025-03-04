
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/custom/Button";

export type Exercise = {
  id: string;
  name: string;
  muscle: string;
  equipment: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  imageUrl: string;
  durationMinutes: number;
};

type ExerciseCardProps = {
  exercise: Exercise;
  className?: string;
};

const ExerciseCard = ({ exercise, className }: ExerciseCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <div className={cn("group relative rounded-xl overflow-hidden bg-white shadow-card card-hover", className)}>
      {/* Exercise image */}
      <div className="aspect-[3/2] overflow-hidden relative">
        <img 
          src={exercise.imageUrl} 
          alt={exercise.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Difficulty badge */}
        <div className="absolute top-3 left-3">
          <span 
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              exercise.difficulty === "beginner" && "bg-green-100 text-green-700",
              exercise.difficulty === "intermediate" && "bg-blue-100 text-blue-700",
              exercise.difficulty === "advanced" && "bg-red-100 text-red-700",
            )}
          >
            {exercise.difficulty}
          </span>
        </div>
        
        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            isFavorite 
              ? "bg-primary text-white" 
              : "bg-white/80 backdrop-blur-xs text-foreground hover:bg-white"
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
        </button>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/5">
          <Button variant="default" shape="round" size="sm" className="shadow-elevated">
            <Play className="w-4 h-4 mr-1" fill="currentColor" /> Watch Demo
          </Button>
        </div>
      </div>
      
      {/* Exercise info */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {exercise.name}
        </h3>
        
        <div className="mt-2 flex items-center flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            {exercise.muscle}
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            {exercise.equipment}
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            {exercise.durationMinutes} min
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
