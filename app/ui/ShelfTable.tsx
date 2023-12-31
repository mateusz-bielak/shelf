"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import { useRouter } from "next/navigation";
import React from "react";
import { Item } from "../lib/types";

type Props = {
  rows: Item[];
};

const columns = [
  { key: "name", label: "ITEM" },
  { key: "userId", label: "ASSIGNEE" },
  { key: "type", label: "TYPE" },
  { key: "status", label: "STATUS" },
];

export function ShelfTable({ rows }: Props) {
  const router = useRouter();

  return (
    <Table
      aria-label="List of all company items."
      classNames={{
        th: "bg-primary-200 first:rounded-none last:rounded-none text-black",
        tr: "cursor-pointer hover:bg-primary-50",
      }}
      onRowAction={key => {
        console.log(`/dashboard/edit/item/${key}`);
        router.push(`/dashboard/edit/item/${key}`);
      }}
      removeWrapper
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent="No data to display." items={rows}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
