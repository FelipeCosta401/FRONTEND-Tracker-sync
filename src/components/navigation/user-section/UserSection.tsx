import { useContext, useState } from "react";

import { UserContext } from "@/contexts/userContext";
import useAuth from "@/hooks/useAuth";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import ConfirmationDialog from "@/components/dialogs/confirmation-dialog/ConfirmationDialog";

const UserSection = () => {
  const { logout } = useAuth();
  const { user } = useContext(UserContext);
  const [isConfirmLogoutOpen, setIsConfirmLogoutOpen] =
    useState<boolean>(false);

  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="size-10">
              <AvatarFallback className="uppercase font-extrabold text-xl">
                {user.name.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Olá {user.name}</DropdownMenuLabel>
            <DropdownMenuLabel className="font-light">
              {user.role}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Ver perfil <FaGear />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button
              className="w-full justify-between"
              type="button"
              variant={"destructive"}
              onClick={() => setIsConfirmLogoutOpen(true)}
            >
              Sair
              <MdLogout className="!size-5" />
            </Button>
          </DropdownMenuContent>
          <ConfirmationDialog
            description="Toda alteração não salva será perdida"
            onConfirm={logout}
            open={isConfirmLogoutOpen}
            setOpen={setIsConfirmLogoutOpen}
          />
        </DropdownMenu>
      )}
    </>
  );
};

export default UserSection;
