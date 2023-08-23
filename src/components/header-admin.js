import { useEffect } from "@/utilities";


const HeaderAdmin =()=>{

    useEffect(() => {
        const btn = document.querySelector('.btn-show-admin')
        btn.addEventListener('click', () => {
            document.querySelector('.header-admin').classList.toggle('show-admin');
            document.querySelector('.menu-nav').classList.toggle('show-admin');
        })
    })
    

    return /*html*/`
    <!-- Navbar -->
    <nav class="header-admin pr-6 py-4 w-full flex flex-row flex-nowrap items-center justify-between bg-white shadow-sm transition-all duration-500 ease-in-out z-20 ">
        <!-- sidenav button-->
        <div class="flex items-center">
            <div class="w-60 px-6 sm:block hidden">
                <a href="" class="blog">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" alt="">
                </a>
            </div>
            <button type="button" class="btn-show-admin lg:hidden block text-2xl ml-4 p-2 text-gray-800 hover:text-gray-600">
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div>
            <a href="/" class="block bg-[#ecaf82] py-1.5 px-5 rounded text-white hover:bg-[#dd8546] duration-300">Bán hàng</a>
        </div>
    </nav>
    `
  };

export default HeaderAdmin;

