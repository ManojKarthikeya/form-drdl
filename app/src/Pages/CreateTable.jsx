import React, { useState } from "react";
import FinalTable from "../Components/Table/FinalTable";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function CreateTable() {
  const [showTable, setShowTable] = useState(false);
  const [tables, setTables] = useState([]);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [tableName, setTableName] = useState("Untitled table");
  const [tableDescription, setTableDescription] = useState("");
  const [saveCount, setSaveCount] = useState(0);
  // const [showAdd, setShowAdd] = useState(true);

  const tempColumns = (cols) => {
    setColumns(cols);
  };
  const tempData = (rows) => {
    setData(rows);
  };
  const addTableHandler = () => {
    setShowTable(true);
    setTables(...tables, {
      name: tableName,
      description: tableDescription,
      columns: columns,
      data: data,
    });
    // setShowAdd(false);
  };
  
  const deleteTable = () => {
    setShowTable(false);
    // setShowAdd(true);
      setTables((prev) => {
        prev.splice(prev.length - 1, 1);
      });
  };
  const handleName = (event) => {
    setTableName(event.target.value);
  };
  const handleDescription = (event) => {
    setTableDescription(event.target.value);
  };
  console.log(tables);
  console.log(columns);
  console.log(data);
  return (
    <div>
      <Button startIcon={<Add />} onClick={addTableHandler}>
        Add a Table
      </Button>
      {/* {showTable && <TextField onChange={handleName} label="Name"/>}
        {showTable && <TextField onChange={handleDescription} label="Description" />}
        {showTable && <FinalTable onSaveColumns={tempColumns} onSaveData={tempData}/>}
        {showTable && <Button onClick={saveData}>Save</Button>}
        <Button onClick={cancelTable}>Cancel</Button> */}
      {showTable && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField style={{maxWidth: 1000,marginLeft:"200px"}} onChange={handleName} label="Name" />
          <TextField style={{maxWidth: 1000,marginLeft:"200px"}} onChange={handleDescription} label="Description" />
          <FinalTable onSaveColumns={tempColumns} onSaveData={tempData} />
          <ButtonGroup>
            <Button onClick={deleteTable}>Delete</Button>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
}
