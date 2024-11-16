import React, {useState } from 'react';
import AddNewForm from './AddNewForm';
import Edit from './Edit';


const PasswordCard = () => {

    let userDataList = JSON.parse(localStorage.getItem("userDataList"));

    const [userData, setUserData] = useState(0);

    const [edit, setEdit] = useState({
        data: -1,
        form: false
    });

    const load = () => {
        setUserData(userData + 1)
        setEdit({ ...edit, data: -1, form: false });

    }

    const editData = (event) => {
        let node = event.target.getAttribute("name");
        setEdit({ ...edit, data: node, form: true });
    }


    const deleteData = (event) => {
        let node = event.target.getAttribute("name");
        userDataList.splice(node, 1);
        localStorage.setItem("userDataList", JSON.stringify(userDataList))
        setUserData(userData + 1)
    }

    const copy = (e) => {
        let data = e.target.parentNode.parentNode.firstChild.innerText
        navigator.clipboard.writeText(data);
    }

    return (
        <div className='w-auto min-w-screen m-auto'>
            {
                edit.form && (<Edit data={edit.data} load={load} />)

            }


            <div className="flex justify-center mt-10 mb-6">
                <AddNewForm load={load} edit={edit} />
            </div>

            {
                userDataList ?.length <= 0 && (<p className='text-[#374151] text-2xl flex items-center justify-center h-[40vh]'>No data</p>)
            }
    
            {
                userDataList ?.length > 0 && (
                    <div className="scrollbar-hidden overflow-x-auto min-w-screen flex flex-wrap gap-[30px] min-[540px]:justify-center sm:m-10 sm:justify-center">
                        {
                            userDataList !== null && userDataList.map((element, index) => {
                                return (
                                    <table key="01" className="min-w-screen w-[400px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
                                        <tbody>
                                            <tr key={element.website} name={index} className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-600 dark:hover:bg-slate-800 dark:text-white">
                                                <td scope="row" className="px-6 py-2.5 text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                                    Website
                                                </td>
                                                <td className="px-6 py-2.5 flex items-center gap-[30px]">
                                                    <div>
                                                        {element.website}
                                                    </div>
                                                    <div className='p-1 rounded-lg  hover:bg-cyan-900' onClick={copy}>
                                                        <svg className='hover:cursor-pointer' fill="#FFFFF3" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z" />
                                                            <path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr key={element.email} name={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-600 dark:hover:bg-slate-800 dark:text-white">
                                                <td scope="row" className="px-6 py-2.5  text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                                    Email
                                                </td>
                                                <td className="px-6 py-2.5 flex items-center gap-[30px]">
                                                    <div>{element.email}</div>
                                                    <span className='p-1 rounded-lg  hover:bg-cyan-900' onClick={copy}>
                                                        <svg className='hover:cursor-pointer' fill="#FFFFF3" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z" /><path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" /></svg>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr key={element.phone+1} name={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-600 dark:hover:bg-slate-800 dark:text-white">
                                                <td scope="row" className="px-6 py-2.5  text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                                    Phone
                                                </td>
                                                <td className="px-6 py-2.5 flex items-center gap-[30px]">
                                                    <div>{element.phone}</div>
                                                    <span className='p-1 rounded-lg  hover:bg-cyan-900' onClick={copy}>
                                                        <svg className='hover:cursor-pointer' fill="#FFFFF3" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z" /><path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" /></svg>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr key={element.username+2} name={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-600 dark:hover:bg-slate-800 dark:text-white">
                                                <td scope="row" className="px-6 py-2.5  text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                                    User-Name
                                                </td>
                                                <td className="px-6 py-2.5 flex items-center gap-[30px]">
                                                    <div>{element.username}</div>
                                                    <span className='p-1 rounded-lg  hover:bg-cyan-900' onClick={copy}>
                                                        <svg className='hover:cursor-pointer' fill="#FFFFF3" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z" /><path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" /></svg>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr key={element.pass} name={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-600 dark:hover:bg-slate-800 dark:text-white">
                                                <td scope="row" className="px-6 py-2.5 text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                                    Password
                                                </td>
                                                <td className="px-6 py-2.5 flex items-center gap-[30px]">
                                                    <div>{element.pass}</div>
                                                    <span className='p-1 rounded-lg  hover:bg-cyan-900' onClick={copy}>
                                                        <svg className='hover:cursor-pointer' fill="#FFFFF3" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z" /><path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" /></svg>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr name={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-600 dark:hover:bg-slate-800 dark:text-white">
                                                <td className=" py-2.5 text-right">
                                                    <a href="#" name={index} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={editData}>Edit</a>
                                                </td>
                                                <td className="px-6 py-2.5">
                                                    <a href="#" name={index} className="font-medium text-white dark:text-red-700 hover:underline" onClick={deleteData}>Delete</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default PasswordCard;