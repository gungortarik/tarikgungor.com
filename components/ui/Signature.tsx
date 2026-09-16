import Image from "next/image";

export function Signature({
  className = "",
  depth = false,
}: {
  className?: string;
  depth?: boolean;
}) {
  return (
    <Image
      src="/assets/logos/tarik-gungor-signature.svg"
      alt="Tarik Gungor"
      width={266}
      height={84}
      className={`h-auto w-[148px] sm:w-[168px] object-contain object-left ${
        depth ? "invert" : "dark:invert"
      } ${className}`}
    />
  );
}
