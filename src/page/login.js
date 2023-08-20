import { dataService } from "@/service/dataService";


// let data = [];
// dataService.getCategories()
// .then((res) => {
// console.log(res);
// data = res.data.data

// })
// .catch((err) => {
// console.log(err);
// });

const Login =()=>{


    return`
    <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-[600px] rounded-lg border h-max">
        <div class="text-right p-3">
            <button class="text-xl"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="p-3 border-t-2">
            <h2 class="font-medium text-xl">Login to your account</h2>
            <form action="" class="w-full my-3">
                <input class="block outline-none border pl-2 my-2 h-10 w-full" type="text" placeholder="Email address">
                <input class="block outline-none border pl-2 my-2 h-10 w-full" type="text" placeholder="Password">
                <div class="flex justify-between my-4">
                    <div>
                        <input type="checkbox">
                        <span>Remember Me</span>
                    </div>
                    <a class="hover:text-[#ECAF82] duration-200" href="#">Forgot Password</a>
                </div>
                <button class="bg-black rounded-lg text-white w-full h-10 hover:bg-[#ECAF82] duration-200">Login</button>
            </form>
            <a class="hover:text-[#ECAF82] duration-200" href="#">No account? Create one here</a>
        </div>
    </div>
</div>
    `
    };

export default Login;

