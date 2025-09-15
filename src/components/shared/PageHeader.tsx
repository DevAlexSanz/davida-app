const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        {description && (
          <p className="text-sm md:text-lg text-slate-500">{description}</p>
        )}
      </div>
    </div>
  );
};

export { PageHeader };
