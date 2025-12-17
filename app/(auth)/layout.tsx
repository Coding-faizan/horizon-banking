import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {children}
      </div>
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={"/images/hero-image.png"}
          alt="hero-image"
          fill
          className="cover"
        />
      </div>
    </div>
  );
}
