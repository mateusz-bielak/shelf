import { Item } from "./types";

export const ITEMS_MOCK: Item[] = [
  {
    archived: false,
    id: "1",
    logs: [],
    name: "MacBook Pro 16",
    serialNumber: "C41OV5Z2NQ4P",
    status: "UNASSIGNED",
    type: "Laptop",
  },
  {
    archived: false,
    id: "2",
    logs: [],
    name: "The Pragmatic Programmer — Andrew Hunt, David Thomas",
    status: "UNASSIGNED",
    type: "Book",
  },
  {
    archived: false,
    id: "3",
    logs: [],
    name: "The Clean Coder — Robert C. Martin",
    status: "ASSIGNED",
    type: "Book",
    userId: "Mateusz Bielak",
  },
  {
    archived: false,
    id: "4",
    logs: [],
    name: "JBL PartyBox 1000",
    serialNumber: "JBLPARTYBOX1000",
    status: "UNASSIGNED",
    type: "Misc",
  },
  {
    archived: true,
    id: "555",
    logs: [],
    name: "MacBook Pro 13",
    serialNumber: "C02XV0Y7MD6H",
    status: "UNASSIGNED",
    type: "Laptop",
  },
];
