import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2
        className="animate-spin text-pink-500 "
        size={100}
      />
    </div>
  );
};

export default Loader;
