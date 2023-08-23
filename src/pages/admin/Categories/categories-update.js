import HeaderAdmin from "@/components/header-admin";
import NavAdmin from "@/components/nav-admin";
import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import { dataService } from "@/service/dataService";
import { router, useEffect, useState } from "@/utilities";

const AdminCategoriesUpdate = ({slug}) => {
        //   console.log(slug);
          const [isCategori, setCategori] = useState({});

          useEffect(() => {
              showSpinner();
              dataService.getCategoriesBySlug(slug)
              .then((res) => {
                console.log(res);
                  hiddenSpinner();
                  setCategori(res.data.data);
              })
              .catch((err) => {
                  hiddenSpinner();
                  console.log(err);
              });
          }, []);
    useEffect(() => {
  
        const btn = document.querySelector('#creatCategorys-form button');
        btn.addEventListener('click', () => {
            const formCategorys = document.getElementById('creatCategorys-form');
            console.log(formCategorys);
            const categoryName = formCategorys.querySelector('input[name="name-category"]').value;
            let isValiName = false;
            
            if(categoryName.length == 0){
                document.querySelector('#error-name').innerText = "Vui lòng điền vào trường này";
            }else{
                // dataService.getCategories()
                // .then((res)=>{
                    
                        const data = {
                            categorieName : categoryName
                        }
                        dataService.updateCategories(slug,data)
                        .then((res) => {
                            console.log(res);
                            // window.location.href = '/categories';
                            router.navigate('/admin/categories');
                        })
                        .catch((err)=>{
                            console.log(err);
                        })    
                    
            }
            
        })})

  return`
    <div class="container-admin h-screen w-screen bg-gray-100 flex flex-col">
    ${HeaderAdmin()}
    <div class="flex grow">
        ${NavAdmin()}
        <!-- End Navbar -->
        <div class="grow p-6">
            <div class="bg-white h-full">
                <div class="p-5 max-w-md mx-auto">
                    <h3 class="font-medium text-green-500 text-2xl text-center mb-4">Cập nhật danh mục</h3>
                    <form id="creatCategorys-form">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Id Category</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Auto Number" required>
                        </div>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Category Name</label>
                            <input type="text" name="name-category" value="${isCategori.categorieName}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <span id="error-name" class="text-red-500 text-sm block min-h-[14px]"></span>
                        </div>
                        <button type="button" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>

            </div>
        </div>


    </div>
    
</div>
    `;
};

export default AdminCategoriesUpdate;
