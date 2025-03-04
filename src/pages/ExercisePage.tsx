
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import ExerciseFilters from "@/components/exercise/ExerciseFilters";
import ExerciseCard, { Exercise } from "@/components/exercise/ExerciseCard";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { Button } from "@/components/ui/custom/Button";

// Mock exercise data
const mockExercises: Exercise[] = [
  {
    id: "1",
    name: "Barbell Bench Press",
    muscle: "Chest",
    equipment: "Barbell",
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1534368786749-d80e6b92e36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 15,
  },
  {
    id: "2",
    name: "Pull-ups",
    muscle: "Back",
    equipment: "Bodyweight",
    difficulty: "advanced",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 10,
  },
  {
    id: "3",
    name: "Squats",
    muscle: "Legs",
    equipment: "Bodyweight",
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 12,
  },
  {
    id: "4",
    name: "Shoulder Press",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 15,
  },
  {
    id: "5",
    name: "Bicep Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 10,
  },
  {
    id: "6",
    name: "Plank",
    muscle: "Core",
    equipment: "Bodyweight",
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1566241142888-11afcb383a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 5,
  },
];

const ExercisePage = () => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>(mockExercises);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filters to exercises
  useEffect(() => {
    if (Object.keys(activeFilters).length === 0) {
      setFilteredExercises(mockExercises);
      return;
    }

    const filtered = mockExercises.filter(exercise => {
      // Check if exercise matches all active filters
      return Object.entries(activeFilters).every(([filterType, values]) => {
        switch (filterType) {
          case "muscle":
            return values.some(value => exercise.muscle.toLowerCase() === value);
          case "equipment":
            return values.some(value => exercise.equipment.toLowerCase().includes(value));
          case "difficulty":
            return values.includes(exercise.difficulty);
          default:
            return true;
        }
      });
    });

    setFilteredExercises(filtered);
  }, [activeFilters]);

  const handleFilterChange = (filters: Record<string, string[]>) => {
    setActiveFilters(filters);
  };

  return (
    <div className="pt-20 min-h-screen bg-muted/30">
      {/* Page header */}
      <div className="bg-white border-b border-border">
        <div className="page-container py-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <a href="/" className="hover:text-foreground transition-colors">Home</a>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="text-foreground">Exercises</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Exercise Library</h1>
            </div>
            <Button>My Saved Exercises</Button>
          </div>
        </div>
      </div>

      <div className="page-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filters */}
          <div className="lg:col-span-3">
            <ExerciseFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Exercise cards */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl border border-border p-4 sm:p-6 mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {filteredExercises.length} Exercises
                </h2>
                <p className="text-sm text-muted-foreground">
                  Find the perfect exercise for your workout routine
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Most Popular
                </Button>
                <Button variant="outline" size="sm">
                  Newest
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExercises.map((exercise, index) => (
                <AnimatedContainer key={exercise.id} delay={100 * index} animation="scale-in">
                  <ExerciseCard exercise={exercise} />
                </AnimatedContainer>
              ))}
            </div>

            {filteredExercises.length === 0 && (
              <div className="bg-white rounded-xl border border-border p-8 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">No exercises found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to find more exercises
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveFilters({})}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {filteredExercises.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline">
                  Load More Exercises
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
