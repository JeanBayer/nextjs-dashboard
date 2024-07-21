import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

export const CreateInvoice = FormSchema.omit({ id: true, date: true });
export const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const UserSchema = z.object({
  id: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string({
      invalid_type_error: "Please enter a password.",
    })
    .min(6),
  name: z.string({
    invalid_type_error: "Please enter your name.",
  }),
});

export const CreateUser = UserSchema.omit({ id: true });
export const ValidateUser = UserSchema.pick({ email: true, password: true });
