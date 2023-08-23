import Footer from "@/components/footer";
import Header from "@/components/header";
import { hiddenSpinner, showSpinner } from "@/components/messages";
import { dataService } from "@/service/dataService";
import { useEffect, useState } from "@/utilities";

const ProductsPage =(data = undefined) => {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        if(data) {

            showSpinner();
            dataService.getProductByCategory(data.slug)
            .then((res) => {
                // console.log(res);
                hiddenSpinner();
                setListProducts(res.data.data.products);
            })
            .catch((err) => {
                hiddenSpinner();
                console.log(err);
            });
        }
        else {
            showSpinner();
            dataService.getProducts()
            .then((res) => {
                hiddenSpinner();
                // console.log(res);
                setListProducts(res.data.data)
            })
            .catch((err) => {
                hiddenSpinner();
                console.log(err);
            });
        }
    }, [])

    return /*html*/`
    ${Header()}
    <div>
    <div class="h-20 flex items-center justify-center bg-[#f4f4f4]">
    <h3 class="uppercase textfa-pull-right">Product</h3>
</div>
<!-- list product -->
<div class="container mx-auto mt-16">
    <div class="flex">
        <div class="w-1/4 px-4 lg:block hidden">

            <div class="p-4 rounded mb-7" style="border: 1px solid #e1e1e1;">
                <div class="relative">
                    <h3 class="pl-4 font-semibold text-lg">Home</h3>
                    <span class="absolute w-[3px] h-full bg-[#ECAF82] top-0 left-0"></span>
                </div>
                <div class="h-[1px] bg-gray-300 my-4"></div>
                <ul class="">
                    <li class="py-2">
                        <a href="#">Clothes</a>
                    </li>
                    <li class="py-2">
                        <a href="#">Accessories</a>
                    </li>
                    <li class="py-2">
                        <a href="#">Art</a>
                    </li>
                    
                </ul>
            </div>

            <div class="p-4 rounded mb-7" style="border: 1px solid #e1e1e1;">
                <div class="relative">
                    <h3 class="pl-4 font-semibold text-lg">Filter By</h3>
                    <span class="absolute w-[3px] h-full bg-[#ECAF82] top-0 left-0"></span>
                </div>
                <div class="h-[1px] bg-gray-300 my-4"></div>
                <ul class="">
                    <h4 class="uppercase mb-3">Categoty</h4>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Clothes</span>
                        </label>
                    </li>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Accessories</span>
                        </label>
                    </li>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Accessories</span>
                        </label>
                    </li>
                    
                </ul>

                

                <div class="h-[1px] bg-gray-300 my-4"></div>
                <ul class="">
                    <h4 class="uppercase mb-3">Color</h4>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>White</span>
                        </label>
                    </li>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Black</span>
                        </label>
                    </li>
                    
                </ul>

                <div class="h-[1px] bg-gray-300 my-4"></div>
                <ul class="">
                    <h4 class="uppercase mb-3">Composition</h4>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Ceramic</span>
                        </label>
                    </li>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Polyester</span>
                        </label>
                    </li>
                    <li class="py-2">
                        <label>
                            <input type="checkbox" name="" id="">
                            <span>Recycled cardboard</span>
                        </label>
                    </li>
                    
                </ul>

            </div>
        </div>
        <div class="lg:w-3/4 w-full px-4">
            <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <!-- item product -->
                ${
                    listProducts.map(item => {
                        return `
                        <div class="relative p-1 product_item max-w-xs mx-auto">
                        <span class="absolute top-2 left-2 bg-cyan-500 px-1 uppercase text-white text-xs">new</span>
                        <a href="/details/${item._id}"><img src="${item.image}" alt=""></a>
                        <div class="text-center">
                            <a href="/details/${item._id}" class="hover:text-[#ECAF82]"><h2 class=" font-medium mb-1">${item.productName}</h2></a>
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
                    }).join('')
                }
                
                
                <!--  -->
            </div>
        </div>
    </div>

</div>
    </div>

    ${Footer()}

    `
  };

export default ProductsPage;

