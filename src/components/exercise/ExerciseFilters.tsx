
import { useState } from "react";
import { Check, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/custom/Button";

type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

type FilterSection = {
  id: string;
  name: string;
  options: FilterOption[];
};

// Mock filter sections
const filterSections: FilterSection[] = [
  {
    id: "muscle",
    name: "Muscle Group",
    options: [
      { value: "chest", label: "Chest", count: 24 },
      { value: "back", label: "Back", count: 18 },
      { value: "legs", label: "Legs", count: 32 },
      { value: "shoulders", label: "Shoulders", count: 16 },
      { value: "arms", label: "Arms", count: 20 },
      { value: "core", label: "Core", count: 28 },
    ],
  },
  {
    id: "equipment",
    name: "Equipment",
    options: [
      { value: "none", label: "Bodyweight", count: 45 },
      { value: "dumbbell", label: "Dumbbell", count: 38 },
      { value: "barbell", label: "Barbell", count: 25 },
      { value: "kettlebell", label: "Kettlebell", count: 18 },
      { value: "resistance-band", label: "Resistance Band", count: 15 },
      { value: "machine", label: "Machine", count: 30 },
    ],
  },
  {
    id: "difficulty",
    name: "Difficulty",
    options: [
      { value: "beginner", label: "Beginner", count: 40 },
      { value: "intermediate", label: "Intermediate", count: 65 },
      { value: "advanced", label: "Advanced", count: 25 },
    ],
  },
];

type ExerciseFiltersProps = {
  onFilterChange: (filters: Record<string, string[]>) => void;
};

const ExerciseFilters = ({ onFilterChange }: ExerciseFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const toggleFilter = (sectionId: string, value: string) => {
    setActiveFilters(prevFilters => {
      const sectionFilters = prevFilters[sectionId] || [];
      const newSectionFilters = sectionFilters.includes(value)
        ? sectionFilters.filter(v => v !== value)
        : [...sectionFilters, value];
      
      const newFilters = {
        ...prevFilters,
        [sectionId]: newSectionFilters,
      };
      
      // If section is empty, remove it
      if (newSectionFilters.length === 0) {
        delete newFilters[sectionId];
      }
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };
  
  const clearFilters = () => {
    setActiveFilters({});
    onFilterChange({});
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // TODO: Implement search logic
  };
  
  // Count total active filters
  const activeFilterCount = Object.values(activeFilters).reduce(
    (count, values) => count + values.length, 
    0
  );
  
  return (
    <div className="bg-white border border-border rounded-xl shadow-subtle">
      <div className="p-4 sm:p-6 border-b border-border">
        {/* Search and mobile filter toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search exercises..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Search exercises"
            />
          </div>
          
          <Button
            variant="outline"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="sm:hidden flex items-center justify-center"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1.5 flex items-center justify-center w-5 h-5 text-xs bg-primary text-white rounded-full">
                {activeFilterCount}
              </span>
            )}
          </Button>
          
          {activeFilterCount > 0 && (
            <Button
              variant="minimal"
              size="sm"
              onClick={clearFilters}
              className="hidden sm:flex items-center text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" /> Clear all
            </Button>
          )}
        </div>
        
        {/* Active filters */}
        {activeFilterCount > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([sectionId, values]) => 
              values.map(value => {
                const section = filterSections.find(s => s.id === sectionId);
                const option = section?.options.find(o => o.value === value);
                
                return option ? (
                  <div 
                    key={`${sectionId}-${value}`}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                  >
                    <span className="text-foreground">{option.label}</span>
                    <button
                      onClick={() => toggleFilter(sectionId, value)}
                      className="ml-1.5 text-muted-foreground hover:text-foreground"
                      aria-label={`Remove ${option.label} filter`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : null;
              })
            )}
          </div>
        )}
      </div>
      
      {/* Filter sections - desktop */}
      <div className={cn(
        "hidden sm:block divide-y divide-border",
        isMobileFiltersOpen && "sm:hidden"
      )}>
        {filterSections.map((section) => (
          <div key={section.id} className="px-6 py-4">
            <button
              onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
              className="flex w-full items-center justify-between text-sm font-medium text-foreground"
              aria-expanded={openSection === section.id}
            >
              <span>{section.name}</span>
              <ChevronDown 
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform", 
                  openSection === section.id && "transform rotate-180"
                )} 
              />
            </button>
            
            <div 
              className={cn(
                "mt-2 space-y-1 transition-all duration-200 ease-in-out overflow-hidden",
                openSection === section.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {section.options.map((option) => {
                const isActive = activeFilters[section.id]?.includes(option.value);
                
                return (
                  <button
                    key={option.value}
                    onClick={() => toggleFilter(section.id, option.value)}
                    className={cn(
                      "flex w-full items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors",
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center">
                      <span 
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded border",
                          isActive 
                            ? "border-primary bg-primary text-white" 
                            : "border-muted-foreground/30"
                        )}
                      >
                        {isActive && <Check className="h-3 w-3" />}
                      </span>
                      {option.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{option.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile filters */}
      <div 
        className={cn(
          "sm:hidden border-t border-border transition-all duration-300 ease-in-out overflow-hidden",
          isMobileFiltersOpen ? "max-h-[1000px]" : "max-h-0"
        )}
      >
        <div className="divide-y divide-border">
          {filterSections.map((section) => (
            <div key={section.id} className="px-4 py-4">
              <button
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className="flex w-full items-center justify-between text-sm font-medium text-foreground"
                aria-expanded={openSection === section.id}
              >
                <span>{section.name}</span>
                <ChevronDown 
                  className={cn(
                    "w-4 h-4 text-muted-foreground transition-transform", 
                    openSection === section.id && "transform rotate-180"
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "mt-2 transition-all duration-200 ease-in-out overflow-hidden",
                  openSection === section.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="grid grid-cols-2 gap-2">
                  {section.options.map((option) => {
                    const isActive = activeFilters[section.id]?.includes(option.value);
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => toggleFilter(section.id, option.value)}
                        className={cn(
                          "flex items-center justify-between px-3 py-2 text-sm rounded-md border",
                          isActive 
                            ? "border-primary/30 bg-primary/10 text-primary font-medium" 
                            : "border-border hover:bg-muted"
                        )}
                      >
                        <span>{option.label}</span>
                        {isActive && <Check className="h-3.5 w-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 flex justify-between border-t border-border">
          <Button 
            variant="minimal" 
            size="sm"
            onClick={clearFilters}
            disabled={activeFilterCount === 0}
          >
            Clear all
          </Button>
          <Button 
            size="sm"
            onClick={() => setIsMobileFiltersOpen(false)}
          >
            View results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseFilters;
