import { cn } from "@/utils";
import PropTypes from "prop-types";
const Button = ({ children, open }) => {
  return (
    <button
      className={cn(
        `rounded-full px-4 py-2 font-poppins font-semibold text-white duration-500 md:ml-8`,
        `${open ? "text-primary bg-white" : "bg-primary text-white"}`,
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
};

export default Button;
