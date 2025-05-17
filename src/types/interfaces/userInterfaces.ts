import z from "zod";

const userRole = z.enum(["ADMIN", "LEADER", "AGENT", "SUPPORT"]);

export interface userInterface {
  id: number;
  firstAccessAt: Date | null;
  email: string;
  name: string;
  registeredAt: Date | null;
  registryNumber: number;
  role: z.infer<typeof userRole>;
}
