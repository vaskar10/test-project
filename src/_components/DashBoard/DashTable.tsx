import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, EllipsisVertical, Plus } from "lucide-react";
import { useState } from "react";
import { col } from "./_data/cols";
import { Client, Column, ColumnVisibility, Row } from "@/types/types";
import { rowsData } from "./_data/rowsData";

const DashTable = () => {
  const [columns] = useState<Column[]>(col);
  const [rows, setRows] = useState<Row[]>(rowsData);

  const handleEdit = (rowIndex: number, colId: keyof Row, value: string) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colId] = value;
    setRows(updatedRows);
  };

  const [newClient, setNewClient] = useState<Client>({
    name: "",
    email: "",
    addedFrom: "",
    internalId: "",
    phone: "",
    clientPortal: "",
    assignee: "",
    followers: "",
    status: "",
    Applications: "",
    lastUpdated: "",
  });

  const handleAddClient = () => {
    setRows((prev) => [...prev, newClient]);
    setNewClient({
      name: "",
      email: "",
      addedFrom: "",
      internalId: "",
      phone: "",
      clientPortal: "",
      assignee: "",
      followers: "",
      status: "",
      Applications: "",
      lastUpdated: "",
    });
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    name: true,
    addedFrom: true,
    tags: true,
    internalId: true,
    clientId: true,
    phone: true,
    clientPortal: true,
    assignee: true,
    followers: true,
    status: true,
    Applications: true,
    lastUpdated: true,
  });

  const toggleDropdown = (columnId: string) => {
    setActiveDropdown(activeDropdown === columnId ? null : columnId);
  };

  return (
    <div className="p-2 md:p-4 bg-white mx-1 mt-1">
      <div className="bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div>
            <Button
              className="bg-purple-500 text-white w-full md:w-auto"
              onClick={handleAddClient}
            >
              New Client <ChevronDown />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 text-sm">
            <span>Prospects(18)</span>
            <span className="underline underline-offset-4 text-green-500">
              Clients(10)
            </span>
            <span>Archieved(0)</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="overflow-x-auto border rounded-lg shadow max-h-[400px] overflow-y-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr className=" ">
                <th className="px-6">
                  <input type="checkbox" />
                </th>
                {columns.map((col) =>
                  columnVisibility[col.id as keyof ColumnVisibility] ? (
                    <th
                      key={col.id}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 border"
                    >
                      <span className="w-full flex justify-between">
                        {col.label}
                        <EllipsisVertical
                          size={15}
                          onClick={() => toggleDropdown(col.id)}
                          className="cursor-pointer "
                        />
                      </span>
                      {activeDropdown === col.id && (
                        <div className="absolute ml-5 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                          <button
                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-md"
                            onClick={() => {
                              setColumnVisibility((prevState) => ({
                                ...prevState,
                                [col.id]: false,
                              }));
                              console.log(columnVisibility);
                            }}
                          >
                            Hide
                          </button>
                        </div>
                      )}
                    </th>
                  ) : null
                )}
                <th className="px-4">
                  <Button
                    className=""
                    variant={"outline"}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === null ? "columns" : null
                      )
                    }
                  >
                    <Plus /> Add columns
                  </Button>
                  {activeDropdown === "columns" && (
                    <div className="absolute ml-5 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                      {columns.map((col) => (
                        <button
                          key={col.id}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-md"
                          onClick={() => {
                            setColumnVisibility((prevState) => ({
                              ...prevState,
                              [col.id]:
                                !prevState[col.id as keyof ColumnVisibility],
                            }));
                          }}
                        >
                          {columnVisibility[col.id as keyof ColumnVisibility]
                            ? `Hide ${col.label}`
                            : `Show ${col.label}`}
                        </button>
                      ))}
                    </div>
                  )}
                </th>
              </tr>
            </thead>
            <tbody className="">
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="">
                  <td className="px-6 border-b">
                    <input type="checkbox" />
                  </td>
                  {columns.map(
                    (col) =>
                      columnVisibility[col.id as keyof ColumnVisibility] && (
                        <td
                          key={col.id}
                          className="px-6 py-2 text-nowrap border"
                        >
                          {col.id === "name" ? (
                            <div className="flex items-center gap-2 w-full">
                              {row.avatarUrl ? (
                                <div className="w-6 h-6 bg-black ">
                                <Avatar>
                                  <AvatarImage
                                    src={row.avatarUrl}
                                    alt={row.name}
                                    className="w-6 h-6 rounded-sm"
                                  />
                                  
                                </Avatar>
                                  </div>
                              ) : null}
                              <div>
                                <input
                                  className="block w-auto text-sm p-2 h-6"
                                  type="text"
                                  value={row.name}
                                  onChange={(e) =>
                                    handleEdit(rowIndex, "name", e.target.value)
                                  }
                                />
                                <input
                                  className="block w-auto text-sm p-2 h-6"
                                  type="text"
                                  value={row.email}
                                  onChange={(e) =>
                                    handleEdit(
                                      rowIndex,
                                      "email",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          ) : col.id === "status" ? (
                            <span
                              className={`${
                                row.status === "Completed"
                                  ? "bg-green-500 p-4"
                                  : row.status === "In Progress"
                                  ? "bg-blue-500 p-4"
                                  : "bg-gray-500 p-4"
                              }`}
                            >
                              <input
                                className="bg-transparent w-auto text-sm p-2 h-6"
                                type="text"
                                value={row.status}
                                onChange={(e) =>
                                  handleEdit(rowIndex, "status", e.target.value)
                                }
                              />
                            </span>
                          ) : col.id === "assignee" ? (
                            <div>
                              <input
                                className="block w-auto text-sm p-2 h-6"
                                type="text"
                                value={row.assignee}
                                onChange={(e) =>
                                  handleEdit(
                                    rowIndex,
                                    "assignee",
                                    e.target.value
                                  )
                                }
                              />
                              <input
                                className="block w-auto text-sm p-2 h-6"
                                type="text"
                                value={row.email}
                                onChange={(e) =>
                                  handleEdit(rowIndex, "email", e.target.value)
                                }
                              />
                            </div>
                          ) : (
                            <input
                              className="block w-auto text-sm p-2 h-6"
                              type="text"
                              value={row[col.id as keyof Row] || "-"}
                              onChange={(e) =>
                                handleEdit(
                                  rowIndex,
                                  col.id as keyof Row,
                                  e.target.value
                                )
                              }
                            />
                          )}
                        </td>
                      )
                  )}
                </tr>
              ))}
            </tbody>
            <tfoot className="w-10 px-2 inline-block">
              <Button
                className="my-4 mx-1 w-"
                variant={"outline"}
                onClick={handleAddClient}
              >
                <Plus /> Add client
              </Button>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashTable;
