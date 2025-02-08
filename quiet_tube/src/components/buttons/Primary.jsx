import { cn } from "@/utils";

const Primary = ({ className, children }) => {
  return (
    <button
      className={cn(
        "bg-primary w-full rounded-full p-3 font-bold text-white",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Primary;
