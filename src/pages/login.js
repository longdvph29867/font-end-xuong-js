import { hiddenSpinner, showMesssage, showSpinner } from "@/components/messages";
import { dataService } from "@/service/dataService";
import { localUserService } from "@/service/localService";
import { useEffect } from "@/utilities";


const Login =()=>{

    useEffect(() => {
        const btn = document.querySelector('#login-form button');
        btn.addEventListener('click', () => {
            const formLogin = document.getElementById('login-form');
            const email = formLogin.querySelector('input[name="email"]').value;
            const password = formLogin.querySelector('input[name="password"]').value;
            let isValiEmail = false;
            let isValiPassword = false;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
            else {
                document.querySelector('#error-password').innerText = "";
                isValiPassword = true

            }

            if(isValiEmail && isValiPassword) {
                const loginData = {
                    email,
                    password,
                }
                showSpinner()
                dataService.postLogin(loginData)
                .then((res) => {
                    console.log(res);
                    let userInfo = {
                        ...res.data.user,
                        accessToken: res.data.accessToken,
                    }
                    localUserService.set(userInfo);
                    showMesssage(true, res.data.message);
                    setTimeout(() => {
                        hiddenSpinner();
                        window.location.href = '/';
                    }, 3000)
                })
                .catch((err) => {
                    hiddenSpinner();
                    console.log(err.response.data.message);
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
            <h2 class="font-medium text-xl">Login to your account</h2>
            <form action="" class="w-full my-3" id="login-form">
                <input class="block outline-none border pl-2 mt-2 mb-1 h-10 w-full" type="text" name="email" placeholder="Email address">
                <span id="error-email" class="text-red-500 text-sm block min-h-[14px]"></span>
                <input class="block outline-none border pl-2 mt-2 mb-1 h-10 w-full" type="password" name="password" placeholder="Password">
                <span id="error-password" class="text-red-500 text-sm block min-h-[14px]"></span>

                <div class="flex justify-between my-4">
                    <div>
                        <input type="checkbox">
                        <span>Remember Me</span>
                    </div>
                    <a class="hover:text-[#ECAF82] duration-200" href="#">Forgot Password</a>
                </div>
                <button type='button' class="bg-black rounded-lg text-white w-full h-10 hover:bg-[#ECAF82] duration-200">Login</button>
            </form>
            <a class="hover:text-[#ECAF82] duration-200" href="#">No account? Create one here</a>
        </div>
    </div>
</div>
`
};

export default Login;




