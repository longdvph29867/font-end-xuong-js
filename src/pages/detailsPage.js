import Footer from "@/components/footer";
import Header from "@/components/header";
import { hiddenSpinner, showSpinner } from "@/components/messages";
import { dataService } from "@/service/dataService";
import { useEffect, useState } from "@/utilities";

const DetailsPage = (data) => {
  const [isProducts, setIsProducts] = useState({});

  useEffect(() => {
    showSpinner();
    dataService
      .getProductDetails(data.id)
      .then((res) => {
        //   console.log(res);
        hiddenSpinner();
        setIsProducts(res.data.data);
      })
      .catch((err) => {
        hiddenSpinner();
        console.log(err);
      });
  }, []);

  return /*html*/ `
    ${Header()}

        <!-- product -->
      <div class="my-12">
      <div>
        <div class="max-w-5xl mx-auto grid grid-cols-2 gap-5">
            <div>
                <div class="relative">
                    <div id="pre" class="absolute top-1/2 left-0 bg-slate-300 px-3 py-5"><i class="fa-solid fa-angle-left"></i></div>
                    <img id="img_show" class="mx-auto h-96" src="${
                      isProducts.image
                    }" alt="">
                    <div id="next" class="absolute top-1/2 right-0 bg-slate-300 px-3 py-5"><i class="fa-solid fa-angle-right"></i></div>
                </div>
                <div class="img_nav max-w-full overflow-auto mt-3">
                    
                </div>
                
            </div>
            <div>
                <h2 class="font-me">${isProducts.productName}</h2>
                <div class="flex items-center text-sm my-2">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-lg font-bold text-[#ECAF82]">$${
                  isProducts.price
                }</span>
                <p>Categories: ${isProducts.categoryId?.categorieName}</p>
                <div class="flex my-5">
                    <span class="w-14 font-medium">Size</span>
                    <ul class="flex gap-5">
                        <li class="relative">
                            <input class="absolute -z-10" type="radio" value="" name="size" id="S">
                            <label class="size bg-white px-4 py-1 border-2" for="S">S</label>
                        </li>
                        <li class="relative">
                            <input class="absolute -z-10" type="radio" value="" name="size" id="M">
                            <label class="size bg-white px-4 py-1 border-2" for="M">M</label>
                        </li>
                        <li class="relative">
                            <input class="absolute -z-10" type="radio" value="" name="size" id="L">
                            <label class="size bg-white px-4 py-1 border-2" for="L">L</label>
                        </li>
                        <li class="relative">
                            <input class="absolute -z-10" type="radio" value="" name="size" id="XL">
                            <label class="size bg-white px-4 py-1 border-2" for="XL">XL</label>
                        </li>
                    </ul>
                </div>
                <div class="flex my-5">
                    <span class="w-14 font-medium">Color</span>
                    <ul class="flex gap-5">
                        <li class="relative">
                            <input class="absolute -z-10" type="radio" value="" name="color" id="white">
                            <label class="color bg-white w-5 h-5 block border-2" for="white"></label>
                        </li>
                        <li class="relative">
                            <input class="absolute -z-10" type="radio" value="" name="color" id="black">
                            <label class="color bg-black w-5 h-5 block  border-2" for="black"></label>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="mb-2">
                        <span class="font-medium">Quanlity</span>
                    </div>
                    <div class="border w-max inline-block">
                        <button id="minus" class="bg-white outline-none p-3 mr-3">-</button>
                        <input class="w-8 text-center" id="amount" type="number" value="1">
                        <button id="plus" class="bg-white outline-none p-3 ml-3">+</button>
                    </div>
                    <button class="bg-black px-7 h-12 text-white rounded-lg hover:bg-[#ECAF82] duration-300">
                        <i class="mr-2 fa-solid fa-bag-shopping"></i>
                        Add to cart
                    </button>
                    <button class="border w-12 h-12 rounded-lg hover:border-[#ECAF82] hover:text-[#ECAF82] duration-300">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="border w-12 h-12 rounded-lg hover:border-[#ECAF82] hover:text-[#ECAF82] duration-300">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </button>
                    <div class="border-t-2 mt-7 pt-5">
                        <ul>
                            <li><label class="font-bold" for="">Brand: <span class="font-normal text-gray-600">Studio Design</span></label></li>
                            <li><label class="font-bold" for="">Categories:<span class="font-normal text-gray-600">Home Clothes Men</span></label></li>
                            <li><label class="font-bold" for="">Sku: <span class="font-normal text-gray-600">Demo 01</span></label></li>
                        </ul>
                        
                    </div>
                    <div>
                        <div class="border py-3 px-5 my-3 flex items-center">
                            <i class="text-[#ECAF82] text-4xl fa-solid fa-lock"></i>
                            <div class="ml-4">
                                <h3 class="font-medium">Security policy</h3>
                                <span class="text-sm">(edit with the Customer Reassurance module)</span>
                            </div>
                        </div>
                        <div class="border py-3 px-5 my-3 flex items-center">
                            <i class="text-[#ECAF82] text-3xl fa-solid fa-truck-fast"></i>
                            <div class="ml-4">
                                <h3 class="font-medium">Delivery policy</h3>
                                <span class="text-sm">(edit with the Customer Reassurance module)</span>
                            </div>
                        </div>
                        <div class="border py-3 px-5 my-3 flex items-center">
                            <i class="text-[#ECAF82] text-3xl fa-solid fa-people-carry-box"></i>
                            <div class="ml-4">
                                <h3 class="font-medium">Return policy</h3>
                                <span class="text-sm">(edit with the Customer Reassurance module)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- DESCRIPTION -->
    <div>
        <div class="max-w-5xl mx-auto border rounded-lg p-5">
            <h3 class="font-medium text-3xl">DESCRIPTION</h3>
            <div class="pt-3 mt-3 border-t-2">
                <p>${isProducts.description}</p>
            </div>
        </div>
    </div>
    <!-- review and feedback -->
    <div class="mt-5">
        <div class="max-w-5xl max-h-[460px] mx-auto grid grid-cols-2 gap-5">
            <!-- review -->
            <div class="border rounded-lg p-5">
                <h2 class="font-medium text-3xl">Review</h2>
                <div class="pt-3 mt-3 border-t-2">
                    <h2 class="font-medium text-lg">Jone</h2>
                    <div class="flex items-center text-sm my-2">
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <span class="text-gray-600">Date: 01/01/2023</span>
                    <p>Good</p>
                </div>
                <div class="pt-3 mt-3 border-t-2">
                    <h2 class="font-medium text-lg">Jone</h2>
                    <div class="flex items-center text-sm my-2">
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <span class="text-gray-600">Date: 01/01/2023</span>
                    <p>Good</p>
                </div>
                <div class="pt-3 mt-3 border-t-2">
                    <h2 class="font-medium text-lg">Jone</h2>
                    <div class="flex items-center text-sm my-2">
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="text-yellow-400 fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <span class="text-gray-600">Date: 01/01/2023</span>
                    <p>Good</p>
                </div>
            </div>
            <!-- feedback -->
            <div class="border rounded-lg p-5">
                <h2 class="font-medium text-3xl">Feedback</h2>
                <div class="pt-3 mt-3 border-t-2">
                    <form action="">
                        <div class="flex items-center text-xl my-2">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <textarea class="border w-full outline-none" name="" id="" cols="" rows="5"></textarea>
                        <button class="px-7 py-3 border font-medium 
                        hover:border-[#ECAF82] hover:text-[#ECAF82] rounded-md float-right duration-200">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    

    ${Footer()}

    `;
};

export default DetailsPage;
