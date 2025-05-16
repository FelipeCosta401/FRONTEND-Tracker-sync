import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginRequestSchema } from "@/types/schemas/authSchemas";
import type { loginCredentialsInterface } from "@/types/interfaces/authInterfaces";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MdLogin } from "react-icons/md";

import logo from "@/assets/logo.png";

const LoginPage = () => {
  const form = useForm<loginCredentialsInterface>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: zodResolver(loginRequestSchema),
  });

  return (
    <div className="min-h-screen h-full bg-background flex flex-col justify-center items-center text-foreground p-4">
      <section className="w-full sm:w-[580px] shadow-lg rounded-md bg-card py-7 p-4 flex flex-col gap-6">
        <img src={logo} className="w-[250px] mx-auto" />
        <h1 className="text-3xl font-bold">Entrar</h1>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="login"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Informe seu usuário" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Informe sua senha"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">
              Entrar <MdLogin className="!size-5" />
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default LoginPage;
