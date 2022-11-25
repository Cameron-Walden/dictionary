import { useState } from "react";
import axios from "axios";
import "./App.css";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import Definition from "./components/Definition";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState([]);

  const getDefinition = async () => {
    try {
      let getWord = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      // console.log(getWord.data, "getWord.data");
      setDefinition(getWord.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => setWord(e.target.value);

  return (
    <div className="App">
      <FormControl onChange={handleSearch} value={word}>
        <InputLabel>Get Definition</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <Button onClick={getDefinition}>SEARCH</Button>
      </FormControl>
      <Definition word={word} definition={definition} />
    </div>
  );
}

export default App;
