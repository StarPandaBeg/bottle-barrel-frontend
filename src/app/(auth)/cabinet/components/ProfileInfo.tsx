import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ProfileInfo() {
  return (
    <Table className="border border-input">
      <TableBody>
        <TableRow>
          <TableCell className="w-40">Полное имя</TableCell>
          <TableCell>Иванов Иван Иванович</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-40">E-Mail</TableCell>
          <TableCell>user@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-40">Номер телефона</TableCell>
          <TableCell>+7 999 123-45-67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
