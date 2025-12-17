"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/ui/Button";
import { TextInput } from "../../components/ui/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/lib/schemas/auth";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 w-full max-w-sm">
        <Logo />

        <div className="flex flex-col gap-4">
          <p className="text-4xl font-semibold">Login</p>
          <p className="text-base text-secondary">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-4">
            <TextInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              error={errors.email?.message}
            />

            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-5"
            disabled={
              isSubmitting ||
              !watch("email") ||
              !watch("password") ||
              errors.email !== undefined ||
              errors.password !== undefined
            }
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>

          <div className="flex justify-center mt-6 gap-1">
            <span className="text-secondary text-sm">
              Don’t have an account?
            </span>
            <Link href="/signup" className="text-primary font-semibold text-sm">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
