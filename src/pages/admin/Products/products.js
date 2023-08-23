import HeaderAdmin from "@/components/header-admin";
import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import NavAdmin from "@/components/nav-admin";
import { dataService } from "@/service/dataService";
import { useEffect, useState } from "@/utilities";

const AdminProductsPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        showSpinner();
        dataService.getProducts()
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
                dataService.deleteProduct(id)
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
                <a href="/admin/products/add" class="inline-block bg-green-500 mb-3 py-1.5 px-5 rounded text-white hover:bg-green-700 duration-300">Thêm mới</a>
            </div>
            <div class="bg-white">
                
                <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-blue-500 uppercase bg-blue-100">
                        <tr>
                            <th scope="col" class="px-6 py-3 md:block hidden">
                                STT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3 sm:block hidden">
                                Img
                            </th>
                            <th scope="col" class="px-6 py-3 sm:block hidden">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3 sm:block hidden">
                                Category
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
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  md:block hidden">
                                        ${index+1}
                                    </th>
                                    <td class="px-6 py-4">
                                        ${item.productName}
                                    </td>
                                    <td class="px-6 py-4 sm:block hidden">
                                        <img class="w-28" src="${item.image}" alt="" />
                                    </td>
                                    <td class="px-6 py-4 sm:block hidden">
                                        $${item.price}
                                    </td>
                                    <td class="px-6 py-4 sm:block hidden">
                                        ${item.categoryId.categorieName}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="/admin/products/edit/${item._id}" class="inline-block bg-yellow-400 mb-3 py-1.5 px-5 rounded text-white hover:bg-yellow-600 duration-300">Edit</a>
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

export default AdminProductsPage;
