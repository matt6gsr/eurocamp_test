"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Booking = {
  id: string;
  user: string;
  parc: string;
  bookingdate: string;
  comments: string;
};

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "parc",
    header: "Parc",
  },
  {
    accessorKey: "bookingdate",
    header: "Booking Date",
  },
  {
    accessorKey: "comments",
    header: "Comments",
  },
];
