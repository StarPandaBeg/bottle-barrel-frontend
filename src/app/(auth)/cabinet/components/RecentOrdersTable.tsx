import { Badge } from "@/components/ui/badge";
import { Button, LinkButton } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, WineOff } from "lucide-react";

export function RecentOrdersEmpty() {
  return (
    <div className="p-4 py-12 w-full flex flex-col justify-center items-center gap-1 border border-input rounded">
      <WineOff className="size-16 text-accent" />
      <p className="font-semibold text-xl text-primary">Сейчас тут пусто :(</p>
      <p className="text-sm text-black/50">Но все можно исправить...</p>
      <LinkButton href="/" className="mt-4">
        За покупками
      </LinkButton>
    </div>
  );
}

export function RecentOrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="md:w-[150px]">Номер заказа</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead className="hidden md:table-cell">Дата</TableHead>
          <TableHead className="hidden text-right md:table-cell">
            Стоимость
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell>
            <Badge className="bg-yellow-600">Оплачен</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">
            03.07.2024, 13:48
          </TableCell>
          <TableCell className="hidden text-right md:table-cell">
            2549 Р
          </TableCell>
          <TableCell className="text-right">
            <Button size="icon" variant="secondary">
              <Eye className="size-5" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
