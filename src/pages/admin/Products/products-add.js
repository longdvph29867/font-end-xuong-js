import HeaderAdmin from "@/components/header-admin";
import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import NavAdmin from "@/components/nav-admin";
import { dataService } from "@/service/dataService";
import { router, useEffect, useState } from "@/utilities";
import axios from "axios";

const AdminProductsAdd = () => {

    const [listCategories, setlistCategories] = useState([]);

    useEffect(() => {
        showSpinner();
        dataService.getCategories()
        .then((res) => {
        //   console.log(res);
            hiddenSpinner();
            setlistCategories(res.data.data);
        })
        .catch((err) => {
            hiddenSpinner();
            console.log(err);
        });
    }, []);

    useEffect(() => {
        const form = document.getElementById('form-add');
        const productName = form.querySelector('input[name="productName"]');
        const price = form.querySelector('input[name="price"]');
        const description = form.querySelector('textarea');
        const categoryId = form.querySelector('select');
        const imageEl = form.querySelector('input[name="image"]');


        const validateFormAdd = (productName, price, description, categoryId, imageEl) => {
            let isValiProductName = false;
            let isValiPrice = false;
            let isValiDescription = false;
            let isValiCategoryId = false;
            let isValiImage = false;
            if (productName.value.length == 0) {
                document.querySelector('#error-productName').innerText = "Vui lòng nhập tên sản phẩm!";
            }
            else if (productName.value.length < 3 || productName.value.length > 255) {
                document.querySelector('#error-productName').innerText = "Tên sản phẩm từ 3 - 255 ký tự!";
            }
            else {
                document.querySelector('#error-productName').innerText = "";
                isValiProductName = true
            }

            if (price.value.length == 0) {
                document.querySelector('#error-price').innerText = "Vui lòng nhập giá!";
            }
            else if (price.value < 0) {
                document.querySelector('#error-price').innerText = "Giá phải lớn hơn 0!";
            }
            else {
                document.querySelector('#error-price').innerText = "";
                isValiPrice = true
            }

            if (description.value.length == 0) {
                document.querySelector('#error-description').innerText = "Vui lòng nhập mô tả!";
            }
            else if (description.value.length < 3 || description.value.length > 1500) {
                document.querySelector('#error-description').innerText = "Mô tả từ 3 - 1500 ký tự!";
            }
            else {
                document.querySelector('#error-description').innerText = "";
                isValiDescription = true
            }

            if (categoryId.value.length == 0) {
                document.querySelector('#error-categoryId').innerText = "Vui lòng chọn danh mục!";
            }
            else {
                document.querySelector('#error-categoryId').innerText = "";
                isValiCategoryId = true
            }

            if (categoryId.value.length == 0) {
                document.querySelector('#error-categoryId').innerText = "Vui lòng chọn danh mục!";
            }
            else {
                document.querySelector('#error-categoryId').innerText = "";
                isValiCategoryId = true
            }

            const allowedTypes = ['image/png', 'image/jpg', 'image/webp', 'image/jpeg'];
            const maxSize = 1 * 1024 * 1024;
            const errorMessageFile = document.getElementById('error-image');
            const files = imageEl.files;
            if(files.length != 0) {
                for(let i = 0; i < files.length; i++) {
                    const file = files[i];
                    if(!allowedTypes.includes(file.type)) {
                        errorMessageFile.innerText = "File Phải có định dạng (png, jpg, webp)";
                        isValiImage = false;
                        break;
                    }
                    else if (file.size > maxSize) {
                        errorMessageFile.innerText = "File tối đa 1MB";
                        isValiImage = false;
                        break;
                    }
                    else {
                        errorMessageFile.innerText = "";
                        isValiImage = true;
                    }
                }
            }
            else {
                errorMessageFile.innerText = "Vui lòng chọn file";
            }


            if(isValiProductName && isValiPrice && isValiDescription && isValiCategoryId && isValiImage) {
                return true;
            }
            else {
                return false;
            }
        }

        const uploadFiles = async (files) => {
            if(files) {
                showSpinner();
                const CLOUD_NAME = "dji6cj8xp";
                const PRESET_NAME = "xuong-js";
                const FOLDER_NAME = "xuong-js";
                const urls = [];
                const api = `https://api-ap.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
                const formData = new FormData();
                formData.append("upload_preset", PRESET_NAME);
                formData.append("folder", FOLDER_NAME);
                
                for(const file of files) {
                    formData.append("file", file);
                    const response = await axios.post(api, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    })
                    urls.push(response.data.secure_url)
                }
                hiddenSpinner();
                return urls;
            }

        }

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const isVali = validateFormAdd(productName, price, description, categoryId, imageEl);
            if(isVali) {
                const image =  await uploadFiles(imageEl.files);
    
                const newProduct = {
                    productName: productName.value,
                    price: price.value,
                    description: description.value,
                    image: image[0],
                    categoryId: categoryId.value
                }
    
                showSpinner();
                dataService.postProductAdd(newProduct)
                .then((res) => {
                    // console.log(res);
                    showMesssage(true, res.data.message)
                    hiddenSpinner();
                    router.navigate("/admin/products")
                })
                .catch((err) => {
                    hiddenSpinner();
                    console.log(err.response);
                    let errorMessageString = '';
                    if (typeof err.response.data.message !== 'string') {
                        errorMessageString = err.response.data.message.join(", ");
                    }
                    else {
                        errorMessageString = err.response.data.message;
                    }
                    showMesssage(false, errorMessageString)
                });
            }

            })
    })



  return /*html*/ `
    <div class="container-admin h-screen w-screen bg-gray-100 flex flex-col">
    ${HeaderAdmin()}
    <div class="flex grow">
        ${NavAdmin()}
        <!-- End Navbar -->
        <div class="grow p-6">
            <div class="bg-white h-full">
                <div class="p-5 max-w-md mx-auto">
                    <h3 class="font-medium text-green-500 text-2xl text-center mb-4">Thêm mới sản phẩm</h3>
                    <form id='form-add'>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Tên sản phẩm</label>
                            <input type="text" name="productName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-productName"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Giá</label>
                            <input type="number" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-price"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Danh mục</label>
                            <select name="" id="" name="categoryId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="" hidden>---chon---</option>
                                ${
                                    listCategories.map(item => {
                                        return `<option value="${item._id}">${item.categorieName}</option>`
                                    })
                                }
                            </select>
                            <span id="error-categoryId"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Hình ảnh</label>
                            <input type="file" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-image"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Mô tả</label>
                            <textarea name="description" id="" cols="30" rows="3"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            ></textarea>
                            <span id="error-description"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>

            </div>
        </div>


    </div>
    
</div>
    `;
};

export default AdminProductsAdd;
