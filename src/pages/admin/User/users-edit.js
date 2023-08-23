import HeaderAdmin from "@/components/header-admin";
import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import NavAdmin from "@/components/nav-admin";
import { dataService } from "@/service/dataService";
import { router, useEffect, useState } from "@/utilities";

const AdminUsersEdit = ({id}) => {

    const [isUser, setIsUser] = useState({});

    useEffect(() => {
        showSpinner();
        dataService.getUserDetail(id)
        .then((res) => {
        //   console.log(res);
            hiddenSpinner();
            setIsUser(res.data.data);
        })
        .catch((err) => {
            hiddenSpinner();
            console.log(err);
        });
    }, []);

    useEffect(() => {
        const formAdd = document.getElementById('form-add');
        const username = formAdd.querySelector('input[name="username"]');
        const email = formAdd.querySelector('input[name="email"]');
        const password = formAdd.querySelector('input[name="password"]');
        const confirmPassword = formAdd.querySelector('input[name="confirmPassword"]');
        const role = formAdd.querySelector('select');


        const validateFormAdd = (username, email, password, confirmPassword, role) => {
            let isValiUsername = false;
            let isValiEmail = false;
            let isValiPassword = false;
            let isValiConfirmPassword = false;
            let isValiRole = false;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (username.value.length == 0) {
                document.querySelector('#error-username').innerText = "Vui lòng nhập username!";
            }
            else if (username.value.length < 6 || username.value.length > 25) {
                document.querySelector('#error-username').innerText = "Username phải 6 - 25 ký tự";
            }
            else {
                document.querySelector('#error-username').innerText = "";
                isValiUsername = true
            }

            if (email.value.length == 0) {
                document.querySelector('#error-email').innerText = "Vui lòng nhập email!";
            }
            else if (!email.value.match(validRegex)) {
                document.querySelector('#error-email').innerText = "email không đúng định dạng";
            }
            else {
                document.querySelector('#error-email').innerText = "";
                isValiEmail = true
            }

            if (password.value.length == 0) {
                document.querySelector('#error-password').innerText = "Vui lòng nhập password!";
            }
            else if (password.value.length < 6 || password.value.length > 25) {
                document.querySelector('#error-password').innerText = "Password phải 6 - 25 ký tự!";
            }
            else {
                document.querySelector('#error-password').innerText = "";
                isValiPassword = true
            }

            if (confirmPassword.value.length == 0) {
                document.querySelector('#error-confirm-password').innerText = "Vui lòng nhập lại password!";
            }
            else if (confirmPassword.value != password.value) {
                document.querySelector('#error-confirm-password').innerText = "Password không khớp!";
            }
            else {
                document.querySelector('#error-confirm-password').innerText = "";
                isValiConfirmPassword = true;

            }

            if (role.value.length == 0) {
                document.querySelector('#error-role').innerText = "Vui lòng chọn vai trò!";
            }
            else {
                document.querySelector('#error-role').innerText = "";
                isValiRole = true
            }

            if(isValiUsername && isValiEmail && isValiPassword && isValiConfirmPassword && isValiRole) {
                return true;
            }
            else {
                return false;
            }
        }

        formAdd.addEventListener('submit', function (e) {
            e.preventDefault();
            const isVali = validateFormAdd(username, email, password, confirmPassword, role);
            const newData = {
                username: username.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
                role: role.value,
            }
            if(isVali) {
    
                showSpinner();
                dataService.putUserEdit(id, newData)
                .then((res) => {
                    // console.log(res);
                    showMesssage(true, res.data.message)
                    hiddenSpinner();
                    router.navigate("/admin/users")
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
                    <h3 class="font-medium text-yellow-400 text-2xl text-center mb-4">Cập nhật người dùng</h3>
                    <form id='form-add'>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Username</label>
                            <input type="text" name="username" value="${isUser.username}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-username"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" value="${isUser.email}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-email"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Mật khẩu</label>
                            <input type="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-password"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Nhập lại mật khẩu</label>
                            <input type="password" name="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <span id="error-confirm-password"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        <div class="mb-2">
                            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Vai trò</label>
                            <select id="" name="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="" hidden>---Chọn---</option>
                                <option ${isUser.role == "admin" ? "selected" : ""} value="admin">Admin</option>
                                <option ${isUser.role == "admin" ? "" : "selected"} value="member">Member</option>
                            </select>
                            <span id="error-role"  class="text-sm text-red-500 min-h-[14px] block"></span>
                        </div>
                        
                        <button type="submit" class="text-white bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>

            </div>
        </div>


    </div>
    
</div>
    `;
};

export default AdminUsersEdit;
