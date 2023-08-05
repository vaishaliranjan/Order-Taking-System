import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

export const Field = (props) => {
  function removeItem() {
    let arr = props.data;
    arr.splice(props.index, 1);
    props.setData([...arr]);
  }
  return (
    <div className="data-val" key={props.index}>
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <Stack>
        <Button onClick={removeItem} color="error" variant="contained">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};
