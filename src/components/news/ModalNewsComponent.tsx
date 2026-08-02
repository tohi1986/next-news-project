"use client";

import { useRouter } from "next/navigation";

export default function NewsModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-5">
      
      <div className="relative max-w-3xl w-full rounded-xl bg-black/70 backdrop-blur-md p-6 shadow-xl text-white">
        
        <button
          onClick={() => router.back()}
          className="absolute right-4 top-4 text-xl font-bold text-white"
        >
          X
        </button>

        {children}

      </div>

    </div>
  );
}