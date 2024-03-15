type MainHeadingProps = {
  children: React.ReactNode;
};

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <div className="flex justify-center pt-8 pb-12">
      <h2 className="text-2xl">{children}</h2>
    </div>
  );
}
