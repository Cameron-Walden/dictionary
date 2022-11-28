import { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Definition from "./components/Definition";
import "./App.css";

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
  return (
    <div className="App">
      <Form word={word} setWord={setWord} getDefinition={getDefinition} />
      <Definition word={word} definition={definition} />
    </div>
  );
}

export default App;
