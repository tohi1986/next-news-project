"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-4">{error.message}</p>

      <button
        onClick={reset}
        className="mt-6 rounded bg-amber-600 px-4 py-2 text-white"
      >
        Try again
      </button>
    </main>
  );
}