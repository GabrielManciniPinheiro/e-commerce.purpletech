import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-bold">
        <span className="text-primary">PurpleTech</span> Store{" "}
      </h1>

      <Button size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
