"use client";

import React, { useEffect, useState } from "react";
import { Booking, columns as bookingColumns } from "./bookings/columns";
import { Parc, columns as parcColumns } from "./parcs/columns";
import { User, columns as userColumns } from "./users/columns";
import { DataTable } from "../components/ui/data-table";

async function getBookings(): Promise<Booking[]> {
  return [
    {
      id: "12345",
      user: "abcde",
      parc: "67890",
      bookingdate: "01-01-2030",
      comments: "This is a comment",
    },
    {
      id: " 54321",
      user: "edcba",
      parc: "09876",
      bookingdate: "01-01-2030",
      comments: "This is another comment",
    },
  ];
}

async function getParcs(): Promise<Parc[]> {
  return [
    {
      id: "12345",
      name: "Parc 1",
      description: "This is a description",
    },
    {
      id: "54321",
      name: "Parc 2",
      description: "This is another description",
    },
  ];
}

async function getUsers(): Promise<User[]> {
  return [
    {
      id: "12345",
      name: "User 1",
      email: "user1@eurocamp.com",
    },
    {
      id: "54321",
      name: "User 2",
      email: "user2@eurocamp.com",
    },
  ];
}

export default function Home() {
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [parcData, setParcData] = useState<Parc[]>([]);
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const bookings = await getBookings();
      const parcs = await getParcs();
      const users = await getUsers();
      setBookingData(bookings);
      setParcData(parcs);
      setUserData(users);
    }
    fetchData();
  }, []);
  return (
    <div className="bg-slate-50 ">
      <section>
        <div className="container mx-auto py-10">
          <h1>Bookings</h1>
          <DataTable columns={bookingColumns} data={bookingData} />
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10">
          <h1>Parcs</h1>
          <DataTable columns={parcColumns} data={parcData} />
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10">
          <h1>Users</h1>
          <DataTable columns={userColumns} data={userData} />
        </div>
      </section>
    </div>
  );
}
