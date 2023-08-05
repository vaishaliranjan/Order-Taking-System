import "./App.css";
import { Header } from "./components/Header";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Field } from "./components/Field";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const [data, setData] = useState([]);
  //data replicate- spread operator
  function addData() {
    if (name.length === 0 || email.length === 0) {
      alert("Please enter table number and order to proceed!!");
      return;
    }
    setData([
      ...data,
      {
        name,
        email,
        // name: name, email: email
      },
    ]);
    setDone(true);
  }
  useEffect(() => {
    if (done) {
      setName("");
      setEmail("");
      setDone(false);
    }
  }, [done, name, email]);

  function handlePress(event) {
    console.log(event.key);
    if (event.key === "Enter") {
      addData(event);
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            onKeyPress={(e) => handlePress(e)}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Table Number"
            variant="outlined"
          />
          <TextField
            onKeyPress={(e) => handlePress(e)}
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Order"
            variant="outlined"
          />
          <Button color="success" variant="contained" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className="data">
        <div className="data-val">
          <h4>Table Number</h4>
          <h4>Order</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <Field
            index={element.index}
            name={element.name}
            email={element.email}
            data={data}
            setData={setData}
          />
        );
      })}
    </div>
  );
}

export default App;
