import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Field = (props) => {
  return (
    <div className="data-val">
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <Stack>
        <Button color="error" variant="contained">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};
