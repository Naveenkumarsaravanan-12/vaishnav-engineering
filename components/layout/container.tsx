import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 ${className}`.trim()}>
      {children}
    </div>
  );
}
