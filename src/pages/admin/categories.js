import HeaderAdmin from "@/components/header-admin";
import NavAdmin from "@/components/nav-admin";

const Categories = () => {
  return /*html*/ `
    <div class="container-admin h-screen w-screen bg-gray-100 flex flex-col">
    ${HeaderAdmin()}

    <div class="flex grow">
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
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

            </div>
        </div>

    </div>
    
</div>
    `;
};

export default Categories;
