import z from "zod"

import { newMovementSchema } from "../schemas/movementSchemas";

type newMovementInterface = z.infer<typeof newMovementSchema>;

interface MovementInterface extends newMovementInterface {
    id: number,
    userId: number,
    regionId: number,
    registeredAt: Date
}

export type { newMovementInterface, MovementInterface } 