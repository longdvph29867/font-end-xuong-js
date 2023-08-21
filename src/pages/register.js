import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import { dataService } from "@/service/dataService";
import { localUserService } from "@/service/localService";
import { useEffect } from "@/utilities";


const Register =()=>{

    useEffect(() => {
        const btn = document.querySelector('#register-form button');
        btn.addEventListener('click', () => {
            const formLogin = document.getElementById('register-form');
            const username = formLogin.querySelector('input[name="username"]').value;
            const email = formLogin.querySelector('input[name="email"]').value;
            const password = formLogin.querySelector('input[name="password"]').value;
            const confirmPassword = formLogin.querySelector('input[name="confirmPassword"]').value;
            let isValiUsername = false;
            let isValiEmail = false;
            let isValiPassword = false;
            let isValiConfirmPassword = false;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (username.length == 0) {
                document.querySelector('#error-username').innerText = "Vui lòng nhập username!";
            }
            else if (username.length < 6 || username.length > 25) {
                document.querySelector('#error-username').innerText = "Username phải 6 - 25 ký tự";
            }
            else {
                document.querySelector('#error-username').innerText = "";
                isValiUsername = true
            }

            if (email.length == 0) {
                document.querySelector('#error-email').innerText = "Vui lòng nhập email!";
            }
            else if (!email.match(validRegex)) {
                document.querySelector('#error-email').innerText = "email không đúng định dạng";
            }
            else {
                document.querySelector('#error-email').innerText = "";
                isValiEmail = true
            }

            if (password.length == 0) {
                document.querySelector('#error-password').innerText = "Vui lòng nhập password!";
            }
            else if (password.length < 6 || password.length > 25) {
                document.querySelector('#error-password').innerText = "Password phải 6 - 25 ký tự!";
            }
            else {
                document.querySelector('#error-password').innerText = "";
                isValiPassword = true
            }

            if (confirmPassword.length == 0) {
                document.querySelector('#error-confirm-password').innerText = "Vui lòng nhập lại password!";
            }
            else if (confirmPassword != password) {
                document.querySelector('#error-confirm-password').innerText = "Password không khớp!";
            }
            else {
                document.querySelector('#error-confirm-password').innerText = "";
                isValiConfirmPassword = true;

            }
            const registerData = {
                username,
                email,
                password,
                confirmPassword
            }
            console.log("🚀 ~ file: register.js:45 ~ btn.addEventListener ~ loginData:", registerData)

            if(isValiUsername && isValiEmail && isValiPassword && isValiConfirmPassword) {

                showSpinner()
                dataService.postRegister(registerData)
                .then((res) => {
                    // console.log(res);
                    showMesssage(true, res.data.message);
                    setTimeout(() => {
                        hiddenSpinner();
                        window.location.href = '/login';
                    }, 3000)
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

    return`
    <div class="w-screen h-screen flex justify-center items-center bg-[url('./img/slide-1.jpg')] bg-no-repeat bg-cover">
    <div class="w-[600px] rounded-lg border h-max bg-white">
        <div class="p-3 border-t-2">
            <h2 class="font-medium text-xl">Register</h2>
            <form action="" class="w-full my-3" id="register-form">
                <input class="block outline-none border pl-2 mt-2 mb-1 h-10 w-full" type="text" name="username" placeholder="Username">
                <span id="error-username" class="text-red-500 text-sm block min-h-[14px]"></span>

                <input class="block outline-none border pl-2 mt-2 mb-1 h-10 w-full" type="text" name="email" placeholder="Email address">
                <span id="error-email" class="text-red-500 text-sm block min-h-[14px]"></span>

                <input class="block outline-none border pl-2 mt-2 mb-1 h-10 w-full" type="password" name="password" placeholder="Password">
                <span id="error-password" class="text-red-500 text-sm block min-h-[14px]"></span>

                <input class="block outline-none border pl-2 mt-2 mb-1 h-10 w-full" type="password" name="confirmPassword" placeholder="Confirm password">
                <span id="error-confirm-password" class="text-red-500 text-sm block min-h-[14px]"></span>

                <button type='button' class="mt-2 bg-black rounded-lg text-white w-full h-10 hover:bg-[#ECAF82] duration-200">Register</button>
            </form>
            <a class="hover:text-[#ECAF82] duration-200 underline" href="/login">Login?</a>
        </div>
    </div>
</div>
`
};

export default Register;




