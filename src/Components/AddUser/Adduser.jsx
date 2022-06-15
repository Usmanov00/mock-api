import {useFormik} from "formik";
import axios from "axios";
import * as Yup from 'yup'


const Adduser = ({students, setStudents, setOpenModal, editingUser, setEditingUser}) => {
  const formik = useFormik({
    initialValues: {
      name: editingUser?.name || "",
      group: editingUser?.group || "",
      year: editingUser?.year || "",
      email: editingUser?.email || "",
      phone: editingUser?.phone || ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3,'Must be 3 characters  more')
        .max(15, 'Must be 13 characters or less')
        .required('Enter your full name'),
      group: Yup.string()
        .min(3,'Must be 3 characters  more')
        .max(10, 'Must be 20 characters or less')
        .required('Enter your group'),
      year: Yup.string()
        .min(3,'Must be 3 characters  more')
        .max(10, 'Must be 20 characters or less')
        .required('Enter your date of birth'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Enter your email'),
      phone: Yup.string()
        .min(3,'Must be 3 characters  more')
        .max(15, 'Must be 15 characters or less')
        .required('Enter your phone number')
    }),
    onSubmit: async (values) => {
      if(editingUser.name){
        const {data:updatedUser} = await axios.put(`https://62995e9f7b866a90ec3ac462.mockapi.io/students/${editingUser.id}`,values)
        const updateStudentList = students.map(item => item.id === updatedUser.id? updatedUser:item)
        setStudents(updateStudentList)
      } else {
        const uploadUser = await axios.post('https://62995e9f7b866a90ec3ac462.mockapi.io/students', values)
        setStudents([...students, uploadUser.data])
      }
      setOpenModal(false)
    },
  })


  return (
    <div className="bg-yellow-900">
      <div className="fixed flex items-center justify-center p-12 w-full bg-white">
        <div className="mx-auto w-full max-w-[550px]">
          <div className="absolute right-9 top-9 cursor-pointer px-1 bg-red-500 text-white rounded-md self-end"
               onClick={() => {
                 setOpenModal(false)
                 setEditingUser(null)
               }}>x
          </div>
          <form onSubmit={formik.handleSubmit}>
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
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null}
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
                onChange={formik.handleChange}
                value={formik.values.group}
              />
              {formik.errors.group?<div className="text-red-500 ">{formik.errors.group}</div>:null}</div>
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
                onChange={formik.handleChange}
                value={formik.values.year}
              />
              {formik.errors.year?<div className="text-red-500">{formik.errors.year}</div>:null}
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
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone?<div className="text-red-500">{formik.errors.phone}</div>:null}
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
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email?<div className="text-red-500">{formik.errors.email}</div>:null}
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