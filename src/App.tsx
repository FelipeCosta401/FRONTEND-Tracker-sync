import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="h-full min-h-screen bg-background text-foreground">
      <header className="p-4"> 
        <nav></nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
