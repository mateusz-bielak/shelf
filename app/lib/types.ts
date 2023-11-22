export type Item = {
  archived: boolean;
  description?: string;
  files?: string[];
  id: string;
  logs: ItemLog[];
  name: string;
  serialNumber?: string;
  status: "ASSIGNED" | "UNASSIGNED";
  type: string;
  userId?: string;
};

export type ItemLog = {
  editorId: string;
  id: string;
  status: "ASSIGNED" | "UNASSIGNED";
  timestamp: string;
  userId: string;
};

export type User = {
  email: string;
  id: string;
  name: string;
  password: string;
  role: "ADMIN" | "USER";
};
