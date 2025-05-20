import z from "zod";

const newMovementSchema = z.object({
  description: z
    .string({
      required_error: "Campo 'Descrição' não pode ser vazio!",
    })
    .min(1, { message: "Campo 'Descrição' não pode ser vazio!" }),
  equipmentType: z
    .string({
      required_error: "Campo 'Tipo do equipamento' não pode ser vazio!",
    })
    .min(1, { message: "Campo 'Tipo do equipamento' não pode ser vazio!" }),
  equipmentDescription: z
    .string({
      required_error: "Campo 'Descrição do equipamento' não pode ser vazio!",
    })
    .min(1, {
      message: "Campo 'Descrição do equipamento' não pode ser vazio!",
    }),
  originCity: z
    .string({
      required_error: "Campo 'Cidade de origem' não pode ser vazio!",
    })
    .min(1, { message: "Campo 'Cidade de origem' não pode ser vazio!" }),
  destinyCity: z
    .string({
      required_error: "Campo 'Cidade de destino' não pode ser vazio!",
    })
    .min(1, { message: "Campo 'Cidade de destino' não pode ser vazio!" }),
  originPlant: z
    .string({
      required_error: "Campo 'Instalação de origem' não pode ser vazio!",
    })
    .min(1, { message: "Campo 'Instalação de origem' não pode ser vazio!" }),
  destinyPlant: z
    .string({
      required_error: "Campo 'Instalação de destino' não pode ser vazio!",
    })
    .min(1, { message: "Campo 'Instalação de destino' não pode ser vazio!" }),
});

export { newMovementSchema };
