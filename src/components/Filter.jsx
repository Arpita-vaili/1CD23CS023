import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Filter({ value, onChange }) {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel>Filter</InputLabel>

      <Select
        value={value}
        label="Filter"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filter;