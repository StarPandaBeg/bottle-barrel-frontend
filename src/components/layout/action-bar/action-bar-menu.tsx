"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DialogProps } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "../../ui/button";
import { PageMenuCategories } from "../categories/page-menu-categories";

export interface ActionBarMenuProps extends ButtonProps {}

function ActionBarMenuSheet({ children, ...props }: DialogProps) {
  return (
    <Sheet {...props}>
      <SheetContent className="pt-6" side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Каталог</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}

export default function ActionBarMenu({ ...props }: ActionBarMenuProps) {
  const [open, setMenuOpen] = useState(false);

  return (
    <>
      <Button
        variant="text"
        size="icon"
        {...props}
        onClick={(e) => setMenuOpen(true)}
      >
        <Menu />
      </Button>
      <ActionBarMenuSheet open={open} onOpenChange={setMenuOpen}>
        <PageMenuCategories
          onCategoryClick={(category) => setMenuOpen(false)}
        />
      </ActionBarMenuSheet>
    </>
  );
}
