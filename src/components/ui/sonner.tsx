import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const [deviceWidth, setDeviceWidth] = useState<number>(0);

  useEffect(() => {
    function getWidth() {
      const width = window.innerWidth;
      setDeviceWidth(width);
    }

    getWidth(); 

    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  });

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position={deviceWidth < 640 ? "top-center" : "bottom-right"}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
