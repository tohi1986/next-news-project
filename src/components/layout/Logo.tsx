import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image className="rounded-full"
        src="/logo.png"
        alt="Next News"
        width={80}
        height={80}
      />

      <span className="text-2xl text-black font-bold">
        NextNews
      </span>
    </div>
  );
}