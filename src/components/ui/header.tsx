"use client";

import { Card } from "./card";
import { Button } from "./button";
import {
  LogInIcon,
  MenuIcon,
  CirclePercentIcon,
  ShoppingCartIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOutIcon,
} from "lucide-react";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();

  const HandleLoginClick = async () => {
    await signIn();
  };

  const HandleLogOutClick = async () => {
    await signOut();
  };

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

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <p className="font-medium">{data.user.name}</p>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3">
            {status === "unauthenticated" && (
              <Button
                onClick={HandleLoginClick}
                variant={"secondary"}
                className="w-full"
              >
                <LogInIcon /> Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={HandleLogOutClick}
                variant={"secondary"}
                className="w-full"
              >
                <LogOutIcon />
                Fazer Logout
              </Button>
            )}

            <Button variant={"outline"} className="w-full hover:bg-primary/70">
              <HomeIcon />
              Início
            </Button>

            <Button variant={"outline"} className="w-full hover:bg-primary/70">
              <CirclePercentIcon />
              Ofertas
            </Button>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant={"outline"}
                  className="w-full hover:bg-primary/70"
                >
                  <ListOrderedIcon />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
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
