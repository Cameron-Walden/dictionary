import { FormControl, InputLabel, Input, Button } from "@mui/material";

export default function Form({ word, setWord, getDefinition }) {
    const handleSearch = (e) => setWord(e.target.value);


  return (
    <div>
      <FormControl onChange={handleSearch} value={word}>
        <InputLabel>Get Definition</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <Button onClick={getDefinition}>SEARCH</Button>
      </FormControl>
    </div>
  );
}
