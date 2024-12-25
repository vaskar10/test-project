import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, EllipsisVertical, Plus } from "lucide-react";
import { useState } from "react";

const DashTable = () => {
  const [columns, setColumns] = useState([
    // { id: "checkbox", label: "Checkbox" },
    { id: "name", label: "Name" },
    { id: "addedFrom", label: "Added From" },
    { id: "tags", label: "Tags" },
    { id: "internalId", label: "Internal ID" },
    { id: "clientId", label: "Client ID" },
    { id: "phone", label: "Phone" },
    { id: "clientPortal", label: "Client Portal" },
    { id: "assignee", label: "Assignee" },
    { id: "followers", label: "Followers" },
    { id: "status", label: "Status" },
    { id: "Applications", label: "Applications" },
    { id: "lastUpdated", label: "Last Updated" },
  ]);

  const [rows, setRows] = useState([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      addedFrom: "System",
      internalId: "12345",
      phone: "123-456-7890",
      clientPortal: "Deactivated",
      assignee: "Alice",
      followers: "Jane Smith",
      status: "In Progress",
      Applications: "2",
      lastUpdated: "2024-12-20",
    },
    {
      name: "Jane Smith",
      email: "john.doe@example.com",
      addedFrom: "System",
      internalId: "54321",
      phone: "987-654-3210",
      clientPortal: "Deactivated",
      assignee: "Bob",
      followers: "John Doe",
      status: "Completed",
      Applications: "4",
      lastUpdated: "2024-12-21",
    },

    {
      name: "John Doe",
      email: "john.doe@example.com",
      addedFrom: "System",
      internalId: "12345",
      phone: "123-456-7890",
      clientPortal: "Deactivated",
      assignee: "Alice",
      followers: "Jane Smith",
      status: "In Progress",
      Applications: "2",
      lastUpdated: "2024-12-20",
    },
    {
      name: "Emily Davis",
      email: "john.doe@example.com",
      addedFrom: "System",
      internalId: "98765",
      phone: "444-987-1234",
      clientPortal: "Deactivated",
      assignee: "Diana",
      followers: "Sam Wilson",
      status: "In Progress",
      Applications: "1",
      lastUpdated: "2024-12-23",
    },
  ]);

  const handleEdit = (rowIndex: number, colId: string, value: string) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colId] = value;
    setRows(updatedRows);
  };

  const [showModal, setShowModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    addedFrom: "System",
    internalId: "",
    phone: "",
    clientPortal: "Deactivated",
    assignee: "",
    followers: "",
    status: "",
    Applications: "",
    lastUpdated: new Date().toLocaleDateString(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClient = () => {
    setRows((prev) => [...prev, newClient]);
    setShowModal(false);
    setNewClient({
      name: "",
      email: "",
      addedFrom: "System",
      internalId: "",
      phone: "",
      clientPortal: "Deactivated",
      assignee: "",
      followers: "5",
      status: "In Progress",
      Applications: "",
      lastUpdated: "2024-12-25",
    });
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [columnVisibility, setColumnVisibility] = useState({
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
            <Button className="bg-purple-500 text-white w-full md:w-auto">
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
            <thead className="bg-gray-100 sticky top-0 z-5">
              <tr className=" ">
                <th className="px-6">
                  <input type="checkbox" />
                </th>
                {columns.map((col) =>
                  columnVisibility[col.id] ? (
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
                              [col.id]: !prevState[col.id],
                            }));
                          }}
                        >
                          {columnVisibility[col.id]
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
                      columnVisibility[col.id] && (
                        <td
                          key={col.id}
                          className="px-6 py-2 text-nowrap border"
                        >
                          {col.id === "name" ? (
                            <div className="flex items-center gap-2 w-full">
                              <div className="bg-gray-500 h-6 w-6 rounded-sm z-2">
                                <Avatar>
                                  <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className="w-6 rounded-sm h-6"
                                  />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                              </div>
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
                                  : "bg-blue-500 p-4"
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
                              value={row[col.id] || "-"}
                              onChange={(e) =>
                                handleEdit(rowIndex, col.id, e.target.value)
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
                onClick={() => setShowModal(true)}
              >
                <Plus /> Add client
              </Button>
            </tfoot>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <h3 className="text-xl font-semibold mb-4">Add New Client</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newClient.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-2 border-gray-400 rounded-lg shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none p-2 bg-gray-50"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newClient.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-2 border-gray-400 rounded-lg shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none p-2 bg-gray-50"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={newClient.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-2 border-gray-400 rounded-lg shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none p-2 bg-gray-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Assignee
                    </label>
                    <input
                      type="text"
                      name="assignee"
                      value={newClient.assignee}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-2 border-gray-400 rounded-lg shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none p-2 bg-gray-50"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={() => setShowModal(false)}
                    variant="outline"
                    className="text-sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddClient}
                    className="bg-green-500 text-white text-sm"
                  >
                    Add Client
                  </Button>
                </div>
                <p className="text-xs mt-4 text-gray-600">
                  The other fields have been left at their default values.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashTable;
