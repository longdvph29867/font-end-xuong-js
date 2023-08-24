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
        btn.addEventListener('click', () => {
            localUserService.remove();
            router.navigate("/");
        })
    })

    useEffect(() => {
        let btn = document.getElementById('btn_nav');
        const nav_list = document.querySelector('.nav_main');
        btn.addEventListener('click', () => {
            nav_list.classList.toggle('show_nav');
        })
        
        let search_2= document.getElementById('search_2');
        let close_form= document.getElementById('close_form');
        let btn_search = document.getElementById('search');

        function handleButtonClick1() {
            search_2.classList.remove('hidden');
            search_2.classList.add('flex')
        }
        function handleButtonClick2() {
            search_2.classList.remove('flex');
            search_2.classList.add('hidden')
        }
        function addEventButton(){
            btn_search.type='button'
            btn_search.addEventListener("click",handleButtonClick1);
            close_form.addEventListener('click',handleButtonClick2)
               
        }
        function removeEventButton() {
            btn_search.type='submit'
            btn_search.removeEventListener("click",handleButtonClick1)
            close_form.removeEventListener('click',handleButtonClick2)
        }


        function checkAndRemoveId() {
            if (window.innerWidth > 640) {
                removeEventButton();
            }else{
                addEventButton();
            }
            }
            checkAndRemoveId();
            window.addEventListener('resize', checkAndRemoveId);
          })
          
    return /*html*/`
    <header class="relative">
        <div class="max-w-7xl mx-auto flex items-start xl:items-center justify-between p-3">
            <div class="max-w-[322px] mt-5 xl:mt-0">
                <a href="/#"><img src="/img/logo-1670322125.jpg" alt=""></a>
            </div>
            <div class="flex items-center flex-col-reverse mt-3 xl:flex-row xl:mt-0">
                <div class="w-full text-right mt-5 lg:mt-0 relative">
                
                    <button id="btn_nav" class="lg:hidden"><i class="text-2xl fa-solid fa-bars"></i></button>
                    <ul class="nav_main shadow-xl lg:shadow-none p-3 z-20 bg-white sm:bg-none hidden lg:flex flex-col lg:flex-row gap-y-3 w-52 lg:w-max text-left -left-full sm:left-0 absolute sm:relative">
                        <li><a class="nav_link font-bold lg:p-5 pl-0" href="/#">Trang chủ</a></li>
                        <li class="relative main_menu">
                            <a class="nav_link font-bold lg:p-5" href="#">Danh mục</a>
                            <ul class="hidden menu_child absolute top-0 lg:top-10 left-2/4 lg:left-0 user_menu z-10 bg-white w-[200px] p-3">
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
                            
                        <li><a class="nav_link font-bold lg:p-5" href="/products">Sản phẩm</a></li>
                        <li><a class="nav_link font-bold lg:p-5" href="#">Giới thiệu</a></li>
                        <li><a class="nav_link font-bold lg:p-5" href="#">Liên hệ</a></li>
                    </ul>
                </div>
                <div class="flex items-center ml-auto w-max">
                    <form class="flex mr-3" action="">
                        <input class="hidden sm:block  h-10 pl-1 outline-none border rounded-l-lg " type="text">
                        <button id="search" class="btn_search h-10 bg-[#ECAF82] w-10 rounded-lg sm:rounded-none sm:rounded-r-lg"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    
                    <div class="menu-user mx-3 w-12 h-12 main_menu relative ${dataUser ? 'block' : 'hidden'}">
                        <img class="w-12 h-12 cursor-pointer" src="/img/avatar.jpg" alt="">
                        <div class="hidden absolute shadow-lg top-14 right-0 main_child z-10 bg-white w-[200px] p-3">
                            <div class="h-3 w-full absolute -top-3 right-0"></div>
                            <ul>
                                <li class="px-1 py-2"><a class="user_link" href="/admin/categories">Admin</a></li>
                                <li class="px-1 py-2"><a class="user_link" href="#">My account</a></li>
                                <div class="xl:hidden">
                                    <li class="px-1 py-2"><a class="user_link" href="#">Cart (5)</a></li>
                                    <li class="px-1 py-2"><a class="user_link" href="#">Wishlist (5)</a></li>
                                </div>
                                <li class="px-1 py-2"><button class="btn-logout user_link block">Logout</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="icon m-3 text-2xl cursor-pointer relative hidden lg:block">
                        <i class="fa-regular fa-heart"></i>
                        <span
                            class="absolute -top-1 -right-2 text-xs rounded-full text-white bg-red-500 w-4 h-4 text-center">5</span>
                    </div>
                    <div class="icon ml-3 text-2xl cursor-pointer relative hidden lg:block">
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
        </div>
    </header>
    <div id="search_2" class="hidden absolute top-0 w-full h-screen bg-[rgba(0,0,0,.5)] z-20 justify-center items-center">
        <div>
            <button id="close_form" class="bg-[#ECAF82] w-8 h-8"><i class=" fa-solid fa-x"></i></button>
            <form class="flex mt-5" action="">
                <input class="h-10 pl-1 outline-none border rounded-l-lg " type="text">
                <button class="btn_search h-10 bg-[#ECAF82] w-10 rounded-r-lg"><i
                        class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
    `
  };

export default Header;

