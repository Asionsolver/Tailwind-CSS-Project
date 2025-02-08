import { cn } from "@/utils";

const Secondary = ({ className, children }) => {
  return (
    <button
      className={cn(
        "text-primary w-full rounded-full bg-white p-3 font-bold",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Secondary;
