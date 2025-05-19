import type { ElementType } from "react";
import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils";

interface NavOptionProps {
  title?: string;
  href: string;
  icon: ElementType;
  active?: boolean;
}

const NavOption = ({ href, icon: Icon, title, active }: NavOptionProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(href)}
      className={cn(
        "rounded-md h-full p-2 px-4 flex items-center gap-4",
        "hover:bg-primary/40 hover:cursor-pointer",
        active && "bg-primary text-primary-foreground"
      )}
    >
      {title && <h1 className="text-lg font-bold">{title}</h1>}
      <Icon className="w-[20px]" />
    </div>
  );
};

export default NavOption;
