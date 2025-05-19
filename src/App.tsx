import { Outlet } from "react-router-dom";

import WebNavbar from "./components/navigation/web-navigation/WebNavbar";
import MobileNavbar from "./components/navigation/mobile-navigation/MobileNavbar";

const App = () => {
  return (
    <div className="h-full min-h-screen bg-background text-foreground">
      <header className="p-4 hidden sm:block">
        <WebNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="w-full fixed bottom-0 sm:hidden">
        <MobileNavbar />
      </footer>
    </div>
  );
};

export default App;
