import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/contexts/authContext";
import AuthService from "@/services/AuthService";

import type { loginCredentialsInterface } from "@/types/interfaces/authInterfaces";

import { toast } from "sonner";

const useAuth = () => {
  const navigate = useNavigate();
  const { login: contextLoginMethod } = useContext(AuthContext);
  const authService = new AuthService();

  async function login({ login, password }: loginCredentialsInterface) {
    try {
      const { token, user } = await authService.login({ login, password });
      contextLoginMethod(user, token);
      toast.success("Autenticado com sucesso!");
      navigate("/");
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  // function logout() {
  //   toast.warning("Saindo...");
    
  //   navigate("/login");
  // }

  return { login };
};

export default useAuth;
