import cartItem from "./test";


const Home =()=>{
    return`
    <main>
        ${cartItem('123asd')}
            <section class="content_main1">
                <section class="Browse_the_range">
                    <h2>Browse The Range</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </section>
                <section class="content_main1_Product">
                    <section class="Product">
                        <img src="/img/content_main1_Product1.png" alt="Product">
                        <h4>Dining</h4>

                    </section>
                    <section class="Product">
                        <img src="/img/content_main1_Product2.png" alt="Product">
                        <h4>Living</h4>

                    </section>
                    <section class="Product">
                        <img src="/img/content_main1_Product3.png" alt="Product">
                        
                        <h4>Bedroom</h4>

                    </section>
                </section>
            </section>
            <section class="content_main2">
                <h3>Our Products</h3>
                <section class="content_main2_Our_Products">
                    <section class="Our_Products">
                        <img src="/img/Our_Products1.png" alt="">
                        <h3>Syltherine</h3>
                        <h6>Stylish cafe chair</h6>
                        <div class="price">
                            <h4>Rp 2.500.000</h4>
                            <del>Rp 3.500.000</del>
                        </div>
                        <div class="overlay">
                            <div class="overlay_nav">
                                
                                <div class="overlaybutton">
    
                                    <button>Add to cart</button>
                                </div>
                                <div class="nav-list">
                                    <div class="Nav_items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white"/>
                                          </svg>
                                          <p>Share</p>
                                    </div>
                                    <div class="Nav_items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white"/>
                                          </svg>
                                          <p>Compare</p>
                                    </div>
                                    <div class="Nav_items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="white" stroke-width="1.8"/>
                                          </svg>
                                          <p>Like</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </section>
                    <section class="Our_Products">
                        <img src="/img/Our_Products2.png" alt="">
                        <h3>Leviosa</h3>
                        <h6>Stylish cafe chair</h6>
                        <div class="price">
                            <h4>Rp 2.500.000</h4>
                            <del></del>
                        </div>
                    </section>                   
                     <section class="Our_Products">
                        <img src="/img/Our_Products3.png" alt="">
                        <h3>Lolito</h3>
                        <h6>Luxury big sofa</h6>
                        <div class="price">
                            <h4>Rp 7.000.000</h4>
                            <del>Rp 14.000.000</del>
                        </div>
                    </section>                    
                    <section class="Our_Products">
                        <img src="/img/Our_Products4.png" alt="">
                        <h3>Respira</h3>
                        <h6>Outdoor bar table and stool</h6>
                        <div class="price">
                            <h4>Rp 500.000</h4>
                            <del></del>
                        </div>
                    </section>
                    <section class="Our_Products">
                        <img src="/img/Our_Products5.png" alt="">
                        <h3>Grifo</h3>
                        <h6>Night lamp</h6>
                        <div class="price">
                            <h4>Rp 1.500.000</h4>
                            <del></del>
                        </div>
                    </section>
                    <section class="Our_Products">
                        <img src="/img/Our_Products6.png" alt="">
                        <h3>Muggo</h3>
                        <h6>Small mug</h6>
                        <div class="price">
                            <h4>Rp 150.000</h4>
                            <del></del>
                        </div>
                    </section>
                    <section class="Our_Products">
                        <img src="/img/Our_Products7.png" alt="">
                        <h3>Pingky</h3>
                        <h6>Cute bed set</h6>
                        <div class="price">
                            <h4>Rp 7.000.000</h4>
                            <del>Rp 14.000.000</del>
                        </div>
                    </section>
                    <section class="Our_Products">
                        <img src="/img/Our_Products8.png" alt="">
                        <h3>Potty</h3>
                        <h6>Minimalist flower pot</h6>
                        <div class="price">
                            <h4>Rp 500.000</h4>
                            <del></del>
                        </div>
                    </section>
                </section>
                <button>Show More</button>
            </section>
            <section class="content_main3">
                <section class="content_main3_Beautiful_room">
                    <h1>50+ Beautiful rooms 
                        inspiration</h1>
                     <h4>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h4>
                     
                     <button>Explore More</button>
                    </section>
                <section class="content_main3_img">
               <img id="content_main3_img1" src="/img/content_main3_img.png" alt="">

                </section>
                <section class="content_main3_sidle">
                    <img id="content_main3_img2" src="/img/content_main4_2.png" alt="">
                    <section class="next" onclick="sildeShow()">
                        <img src="/img/content_main3_sidle_back.png" alt="">
                    </section>
                </section>
            </section>
            <section class="content_main4">
                <section class="content_main4_FuniroFurniture">
                    <h4>Share your setup with</h4>
                    <h1>#FuniroFurniture</h1>
                </section>
                <section class="content_main4_img">
                    <img src="/img/content_main4_1.png" alt="">
                    <img src="/img/content_main4_2.png" alt="">
                    <img src="/img/content_main4_3.png" alt="">
                    <img src="/img/content_main4_4.png" alt="">
                    <img src="/img/content_main4_5.png" alt="">

                </section>
            </section>
        </main>
    `
  };

export default Home;

