import "./App.css";
import { Header } from "./components/Header";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const [data, setData] = useState([]);
  //data replicate- spread operator
  function addData() {
    if (name.length === 0 || email.length === 0) {
      alert("Please enter a name and an email to proceed!!");
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

  function removeItem(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
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
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="data-val">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
              <Button
                onClick={() => removeItem(index)}
                color="error"
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}

export default App;
