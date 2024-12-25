export interface Column {
    id: string;
    label: string;
  }
  
  export interface Row {
    name: string;
    email: string;
    addedFrom: string;
    internalId: string;
    phone: string;
    clientPortal: string;
    assignee: string;
    followers: string;
    status: string;
    Applications: string;
    lastUpdated: string;
    avatarUrl?: string; 
  }
  
 export interface Client {
    name: string;
    email: string;
    addedFrom: string;
    internalId: string;
    phone: string;
    clientPortal: string;
    assignee: string;
    followers: string;
    status: string;
    Applications: string;
    lastUpdated: string;
  }
  

  export type ColumnVisibility = {
    name: boolean;
    addedFrom: boolean;
    tags: boolean;
    internalId: boolean;
    clientId: boolean;
    phone: boolean;
    clientPortal: boolean;
    assignee: boolean;
    followers: boolean;
    status: boolean;
    Applications: boolean;
    lastUpdated: boolean;
  };
  
  export type ColumnKey = keyof ColumnVisibility;


  