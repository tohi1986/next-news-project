import { Suspense } from "react";

export default function ExtrasLayout({
  children,
  trending,
  archive,
}: {
  children: React.ReactNode;
  trending: React.ReactNode;
  archive: React.ReactNode;
}) {
  return (
    <main>
      {children}

      <Suspense fallback={<div>Loading trending...</div>}>
        {trending}
      </Suspense>

      <hr className="my-8 border-t-2 border-amber-500" />

      <Suspense fallback={<div>Loading archive...</div>}>
        {archive}
      </Suspense>

    </main>
  );
}