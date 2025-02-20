import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { EmployeeContext } from "../../context/EmployeeContext";

const AddIncentives = ({ empId, onClose, type }) => {
  const [amount, setAmount] = useState();
   const { setRefresh } = useContext(EmployeeContext);
  const [date, setDate] = useState();
  const [notes, setNotes] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post(
        ` ${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/user/incentive`,
        {
          employeeId: empId,
          amount,
          date,
          notes,
        }
      );
      setRefresh();
       toast.success(`Incentive added.`, {
            position: "top-right",
            autoClose: 1000,
          });
    } catch (error) {

      toast.error(`Fail to add Incentive!`, {
        position: "top-right",
        autoClose: 1000,
      });
    }

    setAmount(null);
    setDate(null);
    setNotes("");
    onClose();
   
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-3">
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
