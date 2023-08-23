import HeaderAdmin from "@/components/header-admin";
import NavAdmin from "@/components/nav-admin";
import { dataService } from "@/service/dataService";
import { router,useEffect,useState } from "@/utilities";
// import { hiddenSpinner,showSpinner } from "@/components/messages";

const AdminCategoriesPage = (data = undefined) => {
    const [listCategorys, setListCategorys] = useState([]);

    useEffect(() => {
        if(data) {
            showSpinner();
            dataService.getCategories()
            .then((res) => {
                // console.log(res);
                // hiddenSpinner();
                setListCategorys(res.data.data);
            })
            .catch((err) => {
                hiddenSpinner();
                console.log(err);
            });
        }
        else {
            // showSpinner();
            dataService.getCategories()
            .then((res) => {
                // hiddenSpinner();
                // console.log(res);
                setListCategorys(res.data.data)
            })
            .catch((err) => {
                // hiddenSpinner();
                console.log(err);
            });
        }
    }, [])

    useEffect(()=>{
        const btns= document.querySelectorAll('.btn_remove');
        for (let btn of btns){
            btn.addEventListener('click',async function (){
                const id = this.dataset.id;
                console.log(id);
                const confirm = window.confirm("bạn có chắc chắn muốn xóa hay không?");
                if(confirm){
                    dataService.deleteCategories(id)
                    .then(()=>{
                        router.navigate('/admin/categories');   
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
            })
        }
    })

    
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
                                Categorys Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Số lượng sản phẩm
                            </th>
                            <!-- mess 
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            -->
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${listCategorys.map(category=>{
                            return `
                            <tr class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            ${category.categorieName}
                            </th>
                            <td class="px-6 py-4">
                            ${category.products.length}
                            </td>

                            <!-- mess 
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            -->
                            <td class="px-6 py-4">
                                <a href="/admin/categories/update/${category.slug}" class="inline-block bg-yellow-400 mb-3 py-1.5 px-5 rounded text-white hover:bg-yellow-600 duration-300">Edit</a>
                                <button data-id="${
                                    category._id
                                }" class="btn_remove inline-block bg-red-500 mb-3 py-1.5 px-5 rounded text-white hover:bg-red-700 duration-300">Delete</button>
                            </td>
                        </tr>
                            `
                        }).join("")}
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
