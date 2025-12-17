import { Logo } from "@/app/components/Logo";
import { Button } from "@/app/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Logo />
      <p className="text-primary">Hello World</p>
      <Button>Click Me</Button>
    </div>
  );
}
