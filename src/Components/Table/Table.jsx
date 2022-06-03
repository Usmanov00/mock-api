import React, {useEffect, useState} from 'react';
import axios from "axios";

const Table = () => {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://62995e9f7b866a90ec3ac462.mockapi.io/students`)
      .then((res) => {
        setStudents(res.data)
        setIsLoading(false)
      })
  }, [])

  const deleteUser = async (id) => {
    await axios.delete(`https://62995e9f7b866a90ec3ac462.mockapi.io/students/${id}`)
    const studentsList = students.filter(item => item.id !== id)
    setStudents(studentsList)
  }

  // const  handleClick = () => {
  //   axios.post('https://62995e9f7b866a90ec3ac462.mockapi.io/students')
  // }

    const [data, setData] = useState({
      name: "",
      group: "",
      date: "",
      number: "",
      mail: ""
    })

    function submit(e) {
      e.preventDefault()
      axios.post('https://62995e9f7b866a90ec3ac462.mockapi.io/students',{
        name: data.name,
        group: data.group,
        date: data.date,
        number: data.number,
        mail: data.mail
      })
        .then(res => {
          console.log(res.data)
        })
    }

    function handle (e) {
    const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
    }







  if (isLoading) {
    return 'loading'
  }

  return (
    <div>
      <div>
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form onSubmit={(e) => submit(e)}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Name:" required
                       onChange={(e) => handle(e)} id="name" value={data.name}
                />
              </div>
              <div>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Group:" required
                       onChange={(e) => handle(e)} id="group" value={data.group}
                />
              </div>
              <div>
                <input type="date"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Date:" required
                       onChange={(e) => handle(e)} id="date" value={data.date}
                />
              </div>
              <div>
                <input type="tel"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="+996(666)666-666:" pattern="[+][0-9]{3}[0-9]{3}[0-9]{3}[0-9]{3}" required
                       onChange={(e) => handle(e)} id="number" value={data.number}
                />
              </div>
            </div>
            <div className="mb-6">
              <input type="email"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="john.doe@company.com:" required
                     onChange={(e) => handle(e)} id="email" value={data.email}
              />
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            >Submit
            </button>
          </form>
        </div>
      </div>
      <table className="table-auto w-full">
        <thead>
        <tr className="bg-primary text-center bg-blue-500">
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            #
          </th>
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            Ф.И.О студента
          </th>
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            Группа
          </th>
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            Год поступленя
          </th>
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            Телефон
          </th>
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            E-mail
          </th>
          <th
            className="w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7px-3 lg:px-4 border-l border-transparent">
            Delete
          </th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        {
          students.map((student) => (
            <tr key={student.id}>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                {student.id}
              </td>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                {student.name}
              </td>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                {student.group}
              </td>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                {student.year}
              </td>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                {student.phone}
              </td>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                {student.email}
              </td>
              <td
                className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                <button
                  onClick={() => deleteUser(student.id)}
                  className="border border-red-400 py-1 px-4 text-primary inline-block rounded bg-red-400 text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};

export default Table;