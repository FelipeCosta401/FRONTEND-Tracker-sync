import z from "zod";

const loginRequestSchema = z.object({
  login: z.string({ required_error: "Preencha o campo usuário" }).min(5, {
    message: "Campo usuário deve conter ao menos 5 dígitos",
  }),
  password: z
    .string({ required_error: "Preencha o campo senha" })
    .min(1, { message: "Preencha o campo senha" }),
});

export { loginRequestSchema };
