import HeaderAdmin from "@/components/header-admin";
import { hiddenSpinner, showSpinner } from "@/components/messages";
import NavAdmin from "@/components/nav-admin";
import { dataService } from "@/service/dataService";
import { useEffect, useState } from "@/utilities";

const AdminCategoriesPage = () => {

    const [data, setData] = useState([]);
    console.log("🚀 ~ file: products.js:8 ~ AdminProductsPage ~ data:", data)

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
                <a href="/admin/categories/add" class="inline-block bg-green-500 mb-3 py-1.5 px-5 rounded text-white hover:bg-green-700 duration-300">Thêm mới</a>
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
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Img
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
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
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        ${index+1}
                                    </th>
                                    <td class="px-6 py-4">
                                        ${item.productName}
                                    </td>
                                    <td class="px-6 py-4">
                                        <img class="w-28" src="${item.image}" alt="" />
                                    </td>
                                    <td class="px-6 py-4">
                                        $${item.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        ${item.categoryId.categorieName}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="inline-block bg-yellow-400 mb-3 py-1.5 px-5 rounded text-white hover:bg-yellow-600 duration-300">Edit</a>
                                        <a href="#" class="inline-block bg-red-500 mb-3 py-1.5 px-5 rounded text-white hover:bg-red-700 duration-300">Delete</a>
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

export default AdminCategoriesPage;
