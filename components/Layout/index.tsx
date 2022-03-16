import { ReactNode } from "react";
import { Card } from "primereact/card";

export const Layout: React.FC = (props: LayoutProps) => {
  return (
    <Card
      style={{
        height: "50%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Card>
  );
};

interface LayoutProps {
  children?: ReactNode;
}
