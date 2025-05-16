import z from "zod"

import { loginRequestSchema } from "../schemas/authSchemas"

type loginCredentialsInterface = z.infer<typeof loginRequestSchema>

export type { loginCredentialsInterface }