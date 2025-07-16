import { Spinner } from "../ui/spinner";

export const Loader = () => {
  return (
    <div className="items-center justify-center flex h-screen">
      <Spinner size="lg" className="bg-black dark:bg-white" />
    </div>
  );
};
