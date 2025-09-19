interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
            {description && (
              <p className="text-sm md:text-lg text-slate-500">{description}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { PageHeader };
