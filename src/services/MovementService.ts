import Api from "@/config/Api";

import type { MovementInterface, newMovementInterface } from "@/types/interfaces/movementInterfaces";

export default class MovementService {
  async saveMovement(newMovement: newMovementInterface) {
    return await Api.post("/movement", newMovement)
      .then((res: { data: {message: string, createdMovement: MovementInterface} }) => {
        const message = res.data.message
        const movement = res.data.createdMovement

        return { message, movement }
      })
      .catch((error) => {
        throw new Error(error.response.data.message);
      });
  }
}
