import { cn } from "@/utils";

const H1 = ({ children, className }) => {
  return <h1 className={cn("text-[66px] font-bold", className)}>{children}</h1>;
};

export default H1;
