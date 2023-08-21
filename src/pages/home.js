import Footer from "@/components/footer";
import Header from "@/components/header";
import { hiddenSpinner, showSpinner } from "@/components/messages";
import { dataService } from "@/service/dataService";
import { useEffect, useState } from "@/utilities";

const Home =()=>{

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        showSpinner();
        dataService.getProducts()
        .then((res) => {
            hiddenSpinner();
            console.log(res);
            setListProducts(res.data.data)
        })
        .catch((err) => {
            hiddenSpinner();
            console.log(err);
        });
    }, [])

    return /*html*/`
    ${Header()}
    
    <!-- slide-show -->
    <div class="slide">
        <div class="h-[633px]">
            <img class="w-full h-full" src="img/slide-1.jpg" alt="" id="img-show">
        </div>
        <div class="h-[633px]">
            <img class="w-full h-full" src="img/slide-2.png" alt="">
        </div>
    </div>
    <!-- service -->
    <div  class="my-14">
        <div class="w-[1290px] mx-auto flex py-5">
            <div class="w-1/4 flex items-center">
                <i class="text-4xl fa-solid fa-truck-fast"></i>
                <div class="pl-5 border-r w-3/4">
                    <h2 class="font-bold">Free Shipping</h2>
                    <span class="text-gray-600 text-sm">Free Shipping On All Order</span>
                </div>
            </div>
            <div class="w-1/4 flex items-center ">
                <i class="text-4xl fa-solid fa-wallet"></i>
                <div class="pl-5 border-r w-3/4">
                    <h2 class="font-bold">Money Guarantee</h2>
                    <span class="text-gray-600 text-sm">30 Day Money Back</span>
                </div>
            </div>
            <div class="w-1/4 flex items-center ">
                <i class="text-4xl fa-solid fa-mobile-screen"></i>
                <div class="pl-5 border-r w-3/4">
                    <h2 class="font-bold">Online Support 24/7</h2>
                    <span class="text-gray-600 text-sm">Support online 24 hours a day</span>
                </div>
            </div>
            <div class="w-1/4 flex items-center">
                <i class="text-4xl fa-solid fa-box"></i>
                <div class="pl-5">
                    <h2 class="font-bold">Member Discount</h2>
                    <span class="text-gray-600 text-sm">Up to 40% Discount</span>
                </div>
            </div>
        </div>
    </div>
    <!-- banner -->
    <div class="pb-5">
        <div class="w-[1290px] mx-auto flex justify-between">
            <div>
                <img src="img/banner1.jpg" alt="">
            </div>
            <div>
                <img src="img/banner1.jpg" alt="">
            </div>
            <div>
                <img src="img/banner1.jpg" alt="">
            </div>
        </div>
    </div>
    <!-- trending-product -->
    <div class="py-12">
        <div class="mx-auto text-center">
            <h1 class="font-bold text-4xl">Trending-Product</h1>
            <div class="h-1 w-16 mx-auto my-5 bg-[#ECAF82]"></div>
        </div>
        <!-- product -->
        <div>
            <div class="w-[1290px] mx-auto grid grid-cols-4 gap-5">
                ${
                    listProducts.map(item => {
                    return `
                    <div class="relative p-1 product_item">
                    <span class="absolute top-2 left-2 bg-cyan-500 px-1 uppercase text-white text-xs">new</span>
                    <a href="#"><img src="img/product1.jpg" alt=""></a>
                    <div class="text-center">
                        <a href="#" class="hover:text-[#ECAF82]"><h2 class=" font-medium mb-1">${item.productName}</h2></a>
                        <span class="text-sm text-gray-400">Art</span> 
                        <div class="flex items-center text-sm justify-center my-2">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="text-lg font-bold text-[#ECAF82]">$${item.price}</span>
                    </div>
                    <div class="absolute bottom-1/3 flex justify-center w-full gap-3 functional_btn">
                        <div class="relative">
                            <button class="rounded-full bg-slate-600 w-9 h-9 btn_action">
                                <div class="absolute -top-6 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-max hidden text_box">
                                    <span class="bg-[#ECAF82] text-white uppercase px-2 py-1 rounded-xl text-xs 
                                    w-max">quick view</span>
                                    <span class="border-[#ECAF82] border-8 border-b-transparent border-l-transparent border-r-transparent absolute top-8
                                    left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                </div>
                                <i class="text-white fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <div class="relative">
                            <button class="rounded-full bg-slate-600 w-9 h-9 btn_action">
                                <div class="absolute -top-6 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-max hidden text_box">
                                    <span class="bg-[#ECAF82] text-white uppercase px-2 py-1 rounded-xl text-xs 
                                    w-max">add to cart</span>
                                    <span class="border-[#ECAF82] border-8 border-b-transparent border-l-transparent border-r-transparent absolute top-8
                                    left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                </div>
                                <i class="text-white fa-solid fa-bag-shopping"></i>
                            </button>
                        </div>
                        <div class=" relative "> 
                            <button class="rounded-full bg-slate-600 w-9 h-9 btn_action">
                                <div class="absolute -top-6 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-max hidden text_box">
                                    <span class="bg-[#ECAF82] text-white uppercase px-2 py-1 rounded-xl text-xs 
                                    w-max">add to wishlish</span>
                                    <span class="border-[#ECAF82] border-8 border-b-transparent border-l-transparent border-r-transparent absolute top-8
                                    left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                </div>
                                <i class="text-white fa-regular fa-heart"></i>
                            </button>
                        </div>
                        <div class=" relative ">
                            <button class="rounded-full bg-slate-600 w-9 h-9 btn_action">
                                <div class="absolute -top-6 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-max hidden text_box">
                                    <span class="bg-[#ECAF82] text-white uppercase px-2 py-1 rounded-xl text-xs 
                                    w-max">add to compare</span>
                                    <span class="border-[#ECAF82] border-8 border-b-transparent border-l-transparent border-r-transparent absolute top-8
                                    left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                </div>
                                <i class="text-white fa-solid fa-shuffle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                    `
                    }).join("")
                }
                
            </div>
        </div>
    </div>
    <!-- banner -->
    <div class="py-5">
        <div class="grid grid-cols-2">
            <div class="bg-[url('img/banner4.webp')] bg-no-repeat bg-center bg-auto h-[423px] flex items-center">
                <div class="ml-24">
                    <h3 class="font-medium text-2xl mb-5">Journals And</h3>
                    <h1 class="font-medium text-5xl mb-8">Notebooks</h1>
                    <a class="underline font-bold text-sm mt-8" href="#">Shop Now!</a>
                </div>
            </div>
            <div class="bg-[url('img/banner5.webp')] bg-no-repeat bg-center bg-auto h-[423px] flex items-center">
                <div class="ml-24">
                    <h3 class="font-medium text-2xl mb-5">Journals And</h3>
                    <h1 class="font-medium text-5xl mb-8">Notebooks</h1>
                    <a class="underline font-bold text-sm mt-8" href="#">Shop Now!</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Special Products -->
    <div class="py-5">
        <div class="mx-auto text-center">
            <h1 class="font-bold text-4xl">Special Products</h1>
            <div class="h-1 w-16 mx-auto my-5 bg-[#ECAF82]"></div>
        </div>
        <div class="w-[1290px] mx-auto grid grid-cols-3">
            <div class="flex">
                <a href=""><img src="img/product1.jpg" alt="" width="160px" height="160px"></a>
                <div>
                    <span class="text-sm text-gray-400">Men</span>
                    <a href="#" class="hover:text-[#ECAF82]"><h2 class=" font-medium mb-2">Hummingbird printed t-shirt</h2></a>
                    <div class="flex items-center text-sm my-2">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <span class="text-lg font-bold text-[#ECAF82]">$12</span>
                </div>
            </div>
        </div>
    </div>
    <!-- slide-brand -->
    <div class="my-5 max-w-7xl mx-auto">
        <div class="slide_brand">
            <div class="border p-10">
                <img class="block mx-auto" src="img/1-brand_default.jpg" alt="">
            </div>
            <div class="border p-10">
                <img class="block mx-auto" src="img/2-brand_default.jpg" alt="">
            </div>
            <div class="border p-10">
                <img class="block mx-auto" src="img/1-brand_default.jpg" alt="">
            </div>
            <div class="border p-10">
                <img class="block mx-auto" src="img/2-brand_default.jpg" alt="">
            </div>
            <div class="border p-10">
                <img class="block mx-auto" src="img/1-brand_default.jpg" alt="">
            </div>
            <div class="border p-10">
                <img class="block mx-auto" src="img/2-brand_default.jpg" alt="">
            </div>
        </div>
    </div>
    <!-- Subscribe -->
    <div class="bg-[url('img/bg-newletter.webp')] bg-no-repeat bg-center mt-5">
        <div class="w-[1290px] mx-auto flex items-center py-10">
            <div class="border-r-2 max-w-[365px] pr-3">
                <h2 class="text-white font-bold text-3xl">Sign Up and Get 10% Off First Purchase</h2>
            </div>
            <div class="max-w-[340px] pl-10">
                <p class="text-white">Subscribe to our newsletter and know first about all the promotions and discounts. Be always trendy.</p>
            </div>
            <div class="flex-1">
                <form action="" class="flex float-right">
                    <input class="w-[430px] pl-2 outline-none rounded-l-md" type="text" placeholder="Your email address">
                    <button class="bg-[#ECAF82] text-white px-5 py-3 rounded-r-mdhover:bg-[#dd8546] duration-200">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    
    ${Footer()}
    `
  };

export default Home;

