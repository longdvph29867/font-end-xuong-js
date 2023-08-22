
const NavAdmin =()=>{

    

    return /*html*/`
    <nav class="menu-nav transition-all duration-300 ease-in-out h-full bg-white shadow-sm w-60 lg:relative fixed lg:left-0 -left-full">
            <div class="h-full overflow-y-auto scrollbars">
                <!-- Sidebar menu -->
                <ul class="w-full float-none flex flex-col">
                    <!-- dropdown -->

                    <li class="relative">
                        <a href="/admin/categories" class="block py-3 px-6 hover:text-[#dd8546] duration-300 cursor-pointer border-b border-[#dd8546]/20">
                            <i class="fa-solid fa-list mr-1"></i>
                            Categories
                        </a>
                    </li>
                    <li class="relative">
                        <a class="block py-3 px-6 hover:text-[#dd8546] duration-300 cursor-pointer border-b border-[#dd8546]/20">
                            <i class="fa-solid fa-box-open mr-1"></i>
                            Products
                        </a>
                    </li>
                    <li class="relative">
                        <a class="block py-3 px-6 hover:text-[#dd8546] duration-300 cursor-pointer border-b border-[#dd8546]/20">
                            <i class="fa-solid fa-users mr-1"></i>
                            User
                        </a>
                    </li>
            </div>
        </nav>
    `
  };

export default NavAdmin;

