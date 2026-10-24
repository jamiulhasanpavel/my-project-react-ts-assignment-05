import type { Technology } from "../App";

type YourStackProps = {
  stack: Technology[];
  onRemove: (technologyName: string) => void;
};

function YourStack({ stack, onRemove }: YourStackProps) {
  return (
    <section id="your-stack" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="rounded-lg border p-4 sm:p-6">
        <h2 className="text-xl font-bold">
          Your Stack
        </h2>

        {stack.length === 0 ? (
          <div className="mt-6 rounded border border-dashed p-8 text-center text-sm text-gray-400">
            Your stack is empty
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {stack.map((technology, index) => (
              <div
                key={`${technology.name}-${index}`}
                className="flex flex-col items-start justify-between gap-3 rounded border p-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <div>
                  <h3 className="font-bold">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {technology.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.name)}
                  className="shrink-0 rounded bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default YourStack;