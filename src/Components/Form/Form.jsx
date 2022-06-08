import React, {useEffect, useState} from 'react';
import axios from "axios";
import Adduser from "../AddUser";
import addNewStudents from '../../assets/Image/img.png'

const Form = () => {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)




  const handleEdit = (student) => {
    setEditingUser(student)
    setOpenModal(true)
  }


  const deleteUser = async (id) => {
    await axios.delete(`https://62995e9f7b866a90ec3ac462.mockapi.io/students/${id}`)
    const studentsList = students.filter(item => item.id !== id)
    setStudents(studentsList)
  }

  useEffect(() => {
    axios(`https://62995e9f7b866a90ec3ac462.mockapi.io/students`)
      .then((res) => {
        setStudents(res.data)
        setIsLoading(false)
      })
  }, [])


  if (isLoading) {
    return 'loading'
  }

  return (

    <div>
      {
        openModal &&
        <Adduser setOpenModal={setOpenModal}
                 students={students}
                 setStudents={setStudents}
                 editingUser={editingUser}
                 setEditingUser={setEditingUser}
        />

      }
      <button
        onClick={() => setOpenModal(true)}
        className="border-emerald-200  py-2 px-4 text-primary inline-block rounded bg-emerald-200	text-white mb-6 ">
          <img src={addNewStudents} alt="" width={30}/>
      </button>
      <div>
        <table className="table-auto w-full">
          <thead>
          <tr className="bg-primary text-center bg-teal-600">
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
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          </tbody>
          {
            students.map((student) => (
              <tr key={student.id}>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-100 border-b border-l border-[#E8E8E8]">
                  {student.id}
                </td>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-50 border-b border-l border-[#E8E8E8]">
                  {student.name}
                </td>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-50 border-b border-l border-[#E8E8E8]">
                  {student.group}
                </td>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-50 border-b border-l border-[#E8E8E8]">
                  {student.year}
                </td>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-50 border-b border-l border-[#E8E8E8]">
                  {student.phone}
                </td>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-50 border-b border-l border-[#E8E8E8]">
                  {student.email}
                </td>
                <td
                  className="text-center text-dark font-medium text-base py-5 px-2 bg-emerald-50 border-b border-l border-[#E8E8E8]">
                  <button
                    onClick={() => handleEdit(student)}
                    className="border-emerald-400	 py-1 px-4 text-primary inline-block rounded bg-emerald-300	 text-white mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(student.id)}
                    className="border-red-400 py-1 px-4 text-primary inline-block rounded bg-red-300 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>

  );
};

export default Form;