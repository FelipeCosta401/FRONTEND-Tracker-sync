import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "@/contexts/userContext";

import NavOption from "../nav-option/NavOption";
import UserSection from "../user-section/UserSection";

import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaHome, FaExchangeAlt, FaUsers } from "react-icons/fa";

const WebNavbar = () => {
  const { pathname } = useLocation();
  const { user } = useContext(UserContext);

  return (
    <div className="w-full p-2 bg-card sm:rounded-md shadow-lg flex justify-between items-center">
      {user && user.role === "ADMIN" ? (
        <section className="flex gap-4 items-center">
          <NavOption
            title="Dashboard"
            href="/"
            icon={TbLayoutDashboardFilled}
            active={pathname === "/"}
          />
        </section>
      ) : (
        user && (
          <section className="flex gap-4 items-center">
            <NavOption
              title="Início"
              href="/"
              icon={FaHome}
              active={pathname === "/"}
            />
            <NavOption title="Movimentações" href="/" icon={FaExchangeAlt} />
            {user.role === "LEADER" && (
              <NavOption title="Minha equipe" icon={FaUsers} href="/equipe" />
            )}
          </section>
        )
      )}
      <UserSection />
    </div>
  );
};

export default WebNavbar;
