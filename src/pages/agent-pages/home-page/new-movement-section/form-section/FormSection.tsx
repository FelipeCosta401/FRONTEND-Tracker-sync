import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MovementService from "@/services/MovementService";

import { newMovementSchema } from "@/types/schemas/movementSchemas";
import type { newMovementInterface } from "@/types/interfaces/movementInterfaces";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import Loader from "@/components/loader/Loader";

import { FaBroom, FaLongArrowAltRight } from "react-icons/fa";

const FormSection = () => {
  const DEFAULT_FORM_VALUES: newMovementInterface = {
    description: "",
    destinyCity: "",
    destinyPlant: "",
    equipmentDescription: "",
    equipmentType: "",
    originCity: "",
    originPlant: "",
  };

  const form = useForm<newMovementInterface>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: zodResolver(newMovementSchema),
  });

  const movementService = new MovementService();

  async function saveNewMovement(newMovement: newMovementInterface) {
    try {
      const { message } = await movementService.saveMovement(newMovement);
      toast.success(message)
      clearFormFields()
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  function clearFormFields(){
    form.reset()
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(saveNewMovement)}>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Descrição da movimentação" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="flex flex-col sm:flex-row items-center gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Sobre o equipamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="equipmentType"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Tipo</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Tipo do equipamento" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="equipmentDescription"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Descrição </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Descrição do equipamento"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Sobre a cidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="originCity"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Origem</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Cidade de origem" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destinyCity"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Destino</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Cidade de destino" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Sobre a instalação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="originPlant"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Origem</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Instalação de origem" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinyPlant"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Destino</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Instalação de destino" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <CardFooter className="justify-end px-0 flex-col sm:flex-row gap-4 ">
          <Button type="button" variant={"outline"} className="w-full sm:w-fit" onClick={clearFormFields}>
            Limpar campos
            <FaBroom />
          </Button>
          {form.formState.isSubmitting ? (
            <Button disabled className="w-full sm:w-fit">
              Lançando movimentação <Loader />
            </Button>
          ) : (
            <Button className="w-full sm:w-fit">
              Lançar movimentação <FaLongArrowAltRight />
            </Button>
          )}
        </CardFooter>
      </form>
    </Form>
  );
};

export default FormSection;
