import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="px-5 py-3 font-bold uppercase" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
