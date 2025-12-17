import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const isAtLeast18 = (date: Date) => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  return date <= eighteenYearsAgo;
};

export const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(5, "Invalid address"),
  state: z.string().min(2, "Invlalid state"),
  postalCode: z.string().min(4, "Invalid postal code"),
  dateOfBirth: z.coerce
    .date({
      error: (issue) =>
        issue.input === undefined
          ? "Date of birth is required"
          : "Invalid date",
    })
    .min(new Date("01-01-1900"), { error: "Date is too old" })
    .max(new Date(), { error: "Date cannot be in the future" })
    .refine(isAtLeast18, {
      error: "You must be at least 18 years old",
    }),

  ssn: z.string().regex(/^\d{3}-?\d{2}-?\d{4}$/, "Invalid SSN format"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignupFormValues = z.infer<typeof signupSchema>;
