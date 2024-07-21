import { cn } from "@/lib/util";
import { HTMLAttributes } from "react";

export interface AttributeTableItemProps
  extends HTMLAttributes<HTMLTableRowElement> {
  attribute: string;
  value?: string;
}

export function AttributeTableItem({
  children,
  attribute,
  value,
  ...props
}: AttributeTableItemProps) {
  return (
    <tr {...props}>
      <td className="w-min font-light text-black/50">{attribute}</td>
      <td className="text-primary">{value ?? children}</td>
    </tr>
  );
}

export function AttributeTable({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className={cn("text-s border-spacing-y-2 border-separate", className)}
      {...props}
    >
      <tbody>{children}</tbody>
    </table>
  );
}
