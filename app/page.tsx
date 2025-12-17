import { Logo } from "./components/Logo";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Logo />
      <p className="text-primary">Hello World</p>
      <Button>Click Me</Button>
      <Input placeholder="Some Text" />
    </div>
  );
}
