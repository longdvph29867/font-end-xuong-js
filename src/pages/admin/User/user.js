import HeaderAdmin from "@/components/header-admin";
import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import NavAdmin from "@/components/nav-admin";
import { dataService } from "@/service/dataService";
import { useEffect, useState } from "@/utilities";

const AdminUsersPage = () => {

    const [data, setData] = useState([]);
    console.log("🚀 ~ file: user.js:10 ~ AdminUsersPage ~ data:", data)

    useEffect(() => {
        showSpinner();
        dataService.getUser()
        .then((res) => {
        //   console.log(res);
            hiddenSpinner();
            setData(res.data.data);
        })
        .catch((err) => {
            hiddenSpinner();
            console.log(err);
        });
    }, []);

    useEffect(() => {
        const btnDeletes = document.getElementsByClassName('btn-delete')
        for(let btn of btnDeletes) {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                
                showSpinner();
                dataService.deleteUser(id)
                .then((res) => {
                //   console.log(res);
                    hiddenSpinner();
                    const newData = data.filter((product) => product._id != id);
                    setData(newData);
                    showMesssage(true, res.data.message);
                })
                .catch((err) => {
                    hiddenSpinner();
                    console.log(err);
                });
            })
        }
    })





  return /*html*/ `
    <div class="container-admin min-h-screen w-screen bg-gray-100 flex flex-col">
    <div class="lg:relative z-20 w-full fixed">
        ${HeaderAdmin()}
    </div>

    <div class="flex grow lg:mt-0 mt-[97px]">
        ${NavAdmin()}
        <!-- End Navbar -->
        <div class="grow p-6">
            <div>
                <a href="/admin/users/add" class="inline-block bg-green-500 mb-3 py-1.5 px-5 rounded text-white hover:bg-green-700 duration-300">Thêm mới</a>
            </div>
            <div class="bg-white">
                
                <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-blue-500 uppercase bg-blue-100">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                STT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                            data.map((item, index) => {
                                return /*html*/`
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        ${index+1}
                                    </th>
                                    <td class="px-6 py-4">
                                        ${item.username}
                                    </td>
                                    <td class="px-6 py-4">
                                        ${item.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        <span class="inline-block p-1 rounded min-w-[70px] text-center border ${item.role == "admin" ? "border-[#e67e22] bg-[#e67e22]/10" : "border-[#3498db] bg-[#3498db]/10"}">
                                            ${item.role}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="/admin/users/edit/${item._id}" class="inline-block bg-yellow-400 mb-3 py-1.5 px-5 rounded text-white hover:bg-yellow-600 duration-300">Edit</a>
                                        <button data-id="${item._id}" class="btn-delete inline-block bg-red-500 mb-3 py-1.5 px-5 rounded text-white hover:bg-red-700 duration-300">Delete</button>
                                    </td>
                                </tr>
                                `
                            }).join('')
                        }
                    </tbody>
                </table>
                </div>

            </div>
        </div>

    </div>
    
</div>
    `;
};

export default AdminUsersPage;
