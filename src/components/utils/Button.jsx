import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({ className, children, href }) => {
  return (
    <Link
      href={href ? href : ''}
      className={twMerge(
        "flex items-center gap-2 w-max px-6 py-2 border-2 border-[#20B15A] rounded-[10px] text-white font-medium transition duration-[200ms]",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
