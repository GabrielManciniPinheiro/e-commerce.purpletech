import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="px-5 font-bold uppercase" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
