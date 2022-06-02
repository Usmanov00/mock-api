import React from 'react';

const Table = () => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
        <tr className="bg-primary text-center bg-blue-500">
          <th
            className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3lg:px-4border-l border-transparent">
            #
          </th>
          <th
            className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3lg:px-4border-l border-transparent">
            Ф.И.О студента
          </th>
          <th
            className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3lg:px-4border-l border-transparent">
            Группа
          </th>
          <th
            className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3lg:px-4border-l border-transparent">
            Год поступленя
          </th>
          <th
            className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3lg:px-4border-l border-transparent">
            Телефон
          </th>
          <th
            className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3lg:px-4border-l border-transparent">
            E-mail
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td
            className="text-center text-dark font-mediumtext-base py-5 px-2bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
            .com
          </td>
          <td
            className="text-center text-dark font-mediumtext-base py-5 px-2bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
            .com
          </td>
          <td
            className="text-center text-dark font-mediumtext-base py-5 px-2bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
            .com
          </td>
          <td
            className="text-center text-dark font-mediumtext-base py-5 px-2bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
            .com
          </td>
          <td
            className="text-center text-dark font-mediumtext-base py-5 px-2bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
            .com
          </td>
          <td
            className="text-center text-dark font-mediumtext-base py-5 px-2bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
            .com
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;