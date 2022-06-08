import React, {useState} from 'react';
import axios from "axios";

const Adduser = ({students, setStudents, setOpenModal, editingUser, setEditingUser}) => {
  const [newStudent, setNewStudent] = useState({
    name: editingUser?.name || '',
    group: editingUser?.group || '',
    year: editingUser?.year || '',
    phone: editingUser?.phone || '',
    email: editingUser?.email || '',
  })


  const handleChange = (e) => {
    setNewStudent({...newStudent, [e.target.name]: e.target.value})
  }

  const updateUser = async (e) => {
    e.preventDefault()
    const {data: updatedUser} = await axios.put(`https://62995e9f7b866a90ec3ac462.mockapi.io/students/${editingUser.id}`, newStudent)
    const updateStudentsList = students.map(item => item.id === updatedUser.id ? updatedUser : item)
    setStudents(updateStudentsList)
    setNewStudent({
      name: '',
      group: '',
      year: '',
      phone: '',
      email: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const uploadUser = await axios.post('https://62995e9f7b866a90ec3ac462.mockapi.io/students', newStudent)
    setStudents([...students, uploadUser.data])
    setNewStudent({
      name: '',
      group: '',
      year: '',
      phone: '',
      email: '',
    })
    setOpenModal(false)
  }


  return (
    <div className="bg-yellow-900" >
      <div className="fixed flex items-center justify-center p-12 w-full bg-white">
        <div className="mx-auto w-full max-w-[550px]">
          <div className="absolute right-9 top-9 cursor-pointer px-1 bg-red-500 text-white rounded-md self-end" onClick={() => {
            setOpenModal(false)
            setEditingUser(null)
          }}>x
          </div>
          <form onSubmit={editingUser ? updateUser : handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="userName"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
                onChange={handleChange}
                value={newStudent.name}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="group"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Group
              </label>
              <input
                type="text"
                name="group"
                id="group"
                placeholder="Enter your group"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
                onChange={handleChange}
                value={newStudent.group}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="year"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Year
              </label>
              <input
                type="date"
                name="year"
                id="year"
                placeholder="Enter your year"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
                onChange={handleChange}
                value={newStudent.year}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
                onChange={handleChange}
                value={newStudent.phone}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
                onChange={handleChange}
                value={newStudent.email}
              />
            </div>
            <div>
              <button
                className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                type="submit"
              >
                {editingUser ? 'update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adduser;