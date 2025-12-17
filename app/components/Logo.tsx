import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <Image src="/images/logo.png" alt={"Logo"} width={33} height={33} />
      <span className="text-4xl font-logo font-bold">Horizon</span>
    </div>
  );
};
