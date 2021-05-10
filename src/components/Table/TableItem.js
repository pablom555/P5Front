import React from 'react';

const TableItem = ({fields, titles, handleClick}) => {

  return (
    <tr
      className="border-b-2 border-gray-800 hover:bg-gray-700 cursor-pointer"
      onClick={() => handleClick(fields._id)}
    >
      {fields &&
        titles.map((title, index) => (
          <td key={index} className="px-4 py-3">
            {fields[title.key]}
          </td>
        ))}

      <td className="w-10 text-center">
        <button className="hover:bg-red-500 py-1 px-2 rounded-md bg-gray-800">
          Retirar
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
