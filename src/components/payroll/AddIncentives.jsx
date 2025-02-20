import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddIncentives = ({empId}) => {
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [notes, setNotes] = useState();
    console.log(empId)

    const handleSubmit = () => {
        console.log("hi")
    }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        fullWidth
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="text-gray-700"
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        fullWidth
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        className="text-gray-700"
      />
      <TextField
        label="Notes"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
        className="text-gray-700"
      />
      <div className="flex justify-end mt-4">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="bg-green-600 text-white"
        >
          Add Incentive
        </Button>
      </div>
    </form>
  );
};

export default AddIncentives;
