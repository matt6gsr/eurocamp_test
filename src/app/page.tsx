"use client";

import React, { useEffect, useState } from "react";
import { Booking, columns as bookingColumns } from "./bookings/columns";
import { Parc, columns as parcColumns } from "./parcs/columns";
import { User, columns as userColumns } from "./users/columns";
import { DataTable } from "../components/ui/data-table";
import { getBookings, getParcs, getUsers } from "../helpers/helper-functions";
import { ToastContainer } from "react-toastify";

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

  if (!bookingData || !parcData || !userData) {
    return <div>Loading...</div>;
  } else
    return (
      <div className="bg-slate-50 ">
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <section>
            <div className="container mx-auto py-10">
              <h1 className="mb-4">Bookings</h1>
              <DataTable
                columns={bookingColumns}
                data={bookingData}
                setData={setBookingData}
                element={"Booking"}
              />
            </div>
          </section>
          <section>
            <div className="container mx-auto py-10">
              <h1 className="mb-4">Parcs</h1>
              <DataTable
                columns={parcColumns}
                data={parcData}
                setData={setParcData}
                element={"Parc"}
              />
            </div>
          </section>
          <section>
            <div className="container mx-auto py-10">
              <h1 className="mb-4">Users</h1>
              <DataTable
                columns={userColumns}
                data={userData}
                setData={setUserData}
                element={"User"}
              />
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
    );
}
