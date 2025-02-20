import React, { useState, useEffect } from "react";

const ViewIncentives = ({ empData }) => {
  const [incentives, setIncentives] = useState([]);

  console.log(empData)

  useEffect(() => {
    if (empData?.incentive) {
      setIncentives(empData.incentive);
    }
  }, [empData]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">{empData?.firstName}'s Incentives</h1>

      {/* Incentives Table */}
      <div className="mt-6">
        {incentives.length > 0 ? (
          <table className="min-w-full table-auto text-left text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 font-semibold">Amount</th>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {incentives.map((incentive) => (
                <tr key={incentive._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-green-500">₹{incentive.amount} </td>
                  <td className="px-6 py-4">
                    {new Date(incentive.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 ">{incentive.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 mt-4">No incentives found for this employee.</p>
        )}
      </div>
    </div>
  );
};

export default ViewIncentives;
