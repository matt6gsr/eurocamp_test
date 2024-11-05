"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Parc = {
  id: string;
  name: string;
  description: string;
};

export const columns: ColumnDef<Parc>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
