type MainHeadingProps = {
  children: React.ReactNode;
};

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <div className="flex justify-center py-8">
      <h1 className="text-2xl">{children}</h1>
    </div>
  );
}
