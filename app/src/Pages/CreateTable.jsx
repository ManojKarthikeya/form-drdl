import React, { useState } from 'react'
import FinalTable from "../Components/Table/FinalTable";
import { Button } from '@mui/material';
import { Add } from "@mui/icons-material";

export default function CreateTable() {
    const [showTable, setShowTable] = useState(false);

    const addTableHandler = () => {
		setShowTable(true);
	}
  return (
    <div>
        <Button startIcon={<Add />} onClick={addTableHandler}>Add a Table</Button>
        {showTable && <FinalTable/>}
    </div>
  )
}
