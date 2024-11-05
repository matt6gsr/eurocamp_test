import { Booking } from "../app/bookings/columns";
import { Parc } from "../app/parcs/columns";
import { User } from "../app/users/columns";

export async function getBookings(): Promise<Booking[]> {
  const response = await fetch("http://localhost:3001/api/1/bookings");
  const data = await response.json();
  return data.data;
}

export async function getParcs(): Promise<Parc[]> {
  const response = await fetch("http://localhost:3001/api/1/parcs");
  const data = await response.json();
  return data.data;
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:3001/api/1/users");
  const data = await response.json();
  return data.data;
}

export const deleteBooking = async (id: string) => {
  await fetch(`http://localhost:3001/api/1/bookings/${id}`, {
    method: "DELETE",
  });
};

export const deleteParc = async (id: string) => {
  await fetch(`http://localhost:3001/api/1/parcs/${id}`, {
    method: "DELETE",
  });
};

export const deleteUser = async (id: string) => {
  await fetch(`http://localhost:3001/api/1/users/${id}`, {
    method: "DELETE",
  });
};
