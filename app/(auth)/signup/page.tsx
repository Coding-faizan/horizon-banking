"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { SignupFormValues, signupSchema } from "@/lib/schemas/auth";
import { Logo } from "@/app/components/Logo";
import { routes } from "@/lib/routes";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignupFormValues) => {
    console.log("Signup data:", data);
  };

  const isDisabled =
    isSubmitting ||
    Object.values(watch()).some((value) => !value) ||
    Object.keys(errors).length > 0;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col gap-5 w-full max-w-lg">
        <Logo />

        <div className="flex flex-col gap-4">
          <p className="text-4xl font-semibold">Sign up</p>
          <p className="text-base text-secondary">
            Create an account by filling in your details.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-4">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                label="First name"
                placeholder="ex: John"
                {...register("firstName")}
                error={errors.firstName?.message}
              />
              <Input
                label="Last name"
                placeholder="ex: Doe"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
            </div>

            {/* Address */}
            <Input
              label="Address"
              placeholder="Enter your specific address"
              {...register("address")}
              error={errors.address?.message}
            />

            {/* State & Postal Code */}
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                label="State"
                placeholder="ex: NY"
                {...register("state")}
                error={errors.state?.message}
              />
              <Input
                label="Postal code"
                placeholder="11101"
                {...register("postalCode")}
                error={errors.postalCode?.message}
              />
            </div>

            {/* DOB & SSN */}
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                label="Date of birth"
                type="date"
                {...register("dateOfBirth")}
                error={errors.dateOfBirth?.message}
              />
              <Input
                label="SSN"
                placeholder="ex: 1234"
                {...register("ssn")}
                error={errors.ssn?.message}
              />
            </div>

            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              error={errors.email?.message}
            />

            {/* Password */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <Button type="submit" className="w-full mt-6" disabled={isDisabled}>
            {isSubmitting ? "Creating account..." : "Sign up"}
          </Button>

          <div className="flex justify-center mt-6 gap-1">
            <span className="text-secondary text-sm">
              Already have an account?
            </span>
            <Link
              href={routes.login}
              className="text-primary font-semibold text-sm"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
