import { Card } from "./card";
import { Button } from "./button";
import {
  LogInIcon,
  MenuIcon,
  CirclePercentIcon,
  ShoppingCartIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";
import { SheetTrigger, Sheet, SheetContent, SheetHeader } from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader className="text-left text-lg font-semibold">
            <h1>Menu</h1>
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <Button variant={"secondary"} className="w-full">
              <LogInIcon /> Fazer Login
            </Button>

            <Button variant={"outline"} className="w-full">
              <HomeIcon />
              Início
            </Button>

            <Button variant={"outline"} className="w-full">
              <CirclePercentIcon />
              Ofertas
            </Button>

            <Button variant={"outline"} className="w-full">
              <ListOrderedIcon />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

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
