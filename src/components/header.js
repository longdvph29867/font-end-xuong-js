import { dataService } from "@/service/dataService";
import { localUserService } from "@/service/localService";
import { router, useEffect, useState } from "@/utilities";
import { hiddenSpinner, showMesssage, showSpinner } from "./messages";

const Header =()=>{
     const dataUser = localUserService.get();

    const [listCategories, setListCategories] = useState([]);
    useEffect(() => {
        showSpinner();
        dataService.getCategories()
        .then((res) => {
            hiddenSpinner();
            // console.log(res);
            setListCategories(res.data.data)
        })
        .catch((err) => {
            hiddenSpinner();
            console.log(err);
        });

    }, [])

    useEffect(() => {
        const btn = document.querySelector('.btn-logout.user_link')
        console.log("🚀 ~ file: header.js:29 ~ useEffect ~ btn:", '12313131331 3232')
        btn.addEventListener('click', () => {
            localUserService.remove();
            router.navigate("/");
        })
    })
    

    return /*html*/`
    <header>
        <div class="w-[1290px] mx-auto flex items-center py-3">
            <div class="w-[322px]">
                <a href="/#"><img src="/img/logo-1670322125.jpg" alt=""></a>
            </div>
            <div class="">
                <ul class="flex">
                    <li><a class="nav_link font-bold p-5 pl-0" href="/#">Trang chủ</a></li>
                    <li class="relative main_menu">
                        <a class="nav_link font-bold p-5" href="#">Danh mục</a>
                        <ul class="hidden menu_child absolute top-10 left-0 user_menu z-10 bg-white w-[200px] p-3">
                            <div class="h-5 w-full absolute -top-5 right-0"></div>
                            ${
                                listCategories.map((item) => {
                                    return `
                                        <li class="px-1 py-2"><a class="user_link" href="/categories/${item.slug}">${item.categorieName}</a></li>
                                    `
                                }).join("")
                            }
                        </ul>
                    </li>
                        
                    <li><a class="nav_link font-bold p-5" href="/products">Sản phẩm</a></li>
                    <li><a class="nav_link font-bold p-5" href="#">Giớ thiệu</a></li>
                    <li><a class="nav_link font-bold p-5" href="#">Liên hệ</a></li>
                </ul>
            </div>
            <div class="flex items-center ml-auto w-max">
                <form class="flex mr-3" action="">
                    <input class="h-10 pl-1 outline-none border rounded-l-lg" type="text">
                    <button class="btn_search h-10 bg-[#ECAF82] w-10 rounded-r-lg"><i
                            class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
                
                <div class="menu-user px-3 main_menu relative ${dataUser ? 'block' : 'hidden'}">
                    <img class=" w-12 h-12 cursor-pointer" src="/img/avatar.jpg" alt="">
                    <div class="hidden absolute shadow-lg top-14 right-0 main_child z-10 bg-white w-[200px] p-3">
                        <div class="h-3 w-full absolute -top-3 right-0"></div>
                        <ul>
                            <li class="px-1 py-2"><a class="user_link" href="/admin/categories">Admin</a></li>
                            <li class="px-1 py-2"><a class="user_link" href="#">My account</a></li>
                            <li class="px-1 py-2"><button class="btn-logout user_link block">Logout</button></li>
                        </ul>
                    </div>
                </div>
                
                
                <div class="icon m-3 text-2xl cursor-pointer relative">
                    <i class="fa-regular fa-heart"></i>
                    <span
                        class="absolute -top-1 -right-2 text-xs rounded-full text-white bg-red-500 w-4 h-4 text-center">5</span>
                </div>
                <div class="icon ml-3 text-2xl cursor-pointer relative">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span
                        class="absolute -top-1 -right-2 text-xs rounded-full text-white bg-red-500 w-4 h-4 text-center">5</span>
                </div>
                <div class="w-max ml-5 ${!dataUser ? 'block' : 'hidden'}">
                    <a class="nav_link font-bold" href="/login">Đăng nhập</a>
                    <a class="nav_link block font-bold" href="/register">Đăng ký</a>
                </div>
            </div>
        </div>
    </header>
    `
  };

export default Header;

