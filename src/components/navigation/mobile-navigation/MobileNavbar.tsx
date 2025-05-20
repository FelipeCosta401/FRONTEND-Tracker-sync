import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "@/contexts/userContext";

import NavOption from "../nav-option/NavOption";
import UserSection from "../user-section/UserSection";

import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaHome, FaExchangeAlt, FaUsers } from "react-icons/fa";

const MobileNavbar = () => {
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();

  return (
    user && (
      <main className="w-full h-14 bg-card rounded-t-md shadow-[0_-4px_6px_rgba(0,0,0,0.2)] p-2 flex items-center justify-between">
        {user.role === "ADMIN" ? (
          <NavOption
            href="#"
            icon={TbLayoutDashboardFilled}
            active={pathname === "/"}
          />
        ) : (
          <>
            <NavOption href="#" icon={FaHome} active={pathname === "/"} />
            <NavOption href="#" icon={FaExchangeAlt} />
            {user.role === "LEADER" && <NavOption href="#" icon={FaUsers} />}
          </>
        )}
        <UserSection />
      </main>
    )
  );
};

export default MobileNavbar;
