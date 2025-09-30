import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchProducts = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
      <Input
        placeholder="Search by name, active ingredient, or code..."
        className="pl-9"
      />
    </div>
  );
};

export { SearchProducts };
