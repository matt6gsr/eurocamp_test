/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

jest.mock("../page", () => {
  const originalModule = jest.requireActual("../page");
  return {
    __esModule: true,
    ...originalModule,
    getBookings: jest.fn().mockResolvedValue([
      {
        id: "1",
        user: "abc",
        parc: "123",
        bookingdate: "01-01-2030",
        comments: "Comment 1",
      },
      {
        id: "2",
        user: "def",
        parc: "456",
        bookingdate: "01-01-2030",
        comments: "Comment 2",
      },
    ]),
    getParcs: jest.fn().mockResolvedValue([
      { id: "1", name: "Parc 1", description: "Description 1" },
      { id: "2", name: "Parc 2", description: "Description 2" },
    ]),
    getUsers: jest.fn().mockResolvedValue([
      { id: "1", name: "User 1", email: "user1@eurocamp.com" },
      { id: "2", name: "User 2", email: "user2@eurocamp.com" },
    ]),
  };
});

describe("Home component", () => {
  it("renders bookings, parcs, and users sections", async () => {
    render(<Home />);

    expect(await screen.findByText("Bookings")).toBeInTheDocument();
    expect(await screen.findByText("Parcs")).toBeInTheDocument();
    expect(await screen.findByText("Users")).toBeInTheDocument();
  });
});
