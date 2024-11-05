"use client";

import React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  deleteBooking,
  deleteParc,
  deleteUser,
} from "../../helpers/helper-functions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteOutlined } from "@ant-design/icons";

interface DataTableProps<TData extends { id: string | number }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setData?: (data: TData[]) => void;
  element?: string;
}

export function DataTable<TData extends { id: string | number }, TValue>({
  columns,
  data,
  setData,
  element,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id.toString(),
  });
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
              <TableHead>Delete</TableHead>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => {
                  row.toggleSelected();
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}

                <TableCell>
                  <button
                    aria-label="delete"
                    className="btn btn-red"
                    onClick={async () => {
                      if (element === "booking") {
                        deleteBooking(row.id);
                      } else if (element === "user") {
                        deleteUser(row.id);
                      } else {
                        deleteParc(row.id);
                      }
                      await row.id;
                      toast(`${element} deleted!`);
                      if (setData) {
                        setData(data.filter((item) => item.id !== row.id));
                      }
                    }}
                  >
                    <DeleteOutlined />
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
