import { Spinner } from "../ui/shadcn-io/spinner";

export function CenterSpinner() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Spinner size={64} />
    </div>
  );
}
