export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        ${className}
      `}
    >
      {children}
    </section>
  );
}