import React, { Component } from "react";
import { registerComponent } from "/imports/plugins/core/components/lib";
import Slider from 'react-slick';

class AboutUs extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div className="main-container">
        <div className="columns main">
          <div className="p-home">
            <div className="b-home-img-big">
              <a href="#"><img src="resources/images/home_big_img.jpg" alt="" width="1400" height="440" /></a>
            </div>

            <div className="b-home-imgs-small">
              <div className="b-home-img-small">
                <a href="#">
                  <img src="resources/images/home_small_img_1.jpg" alt="" width="680" height="340" className="b-home-img-small-desktop"/>
                  <img src="resources/images/home_small_img_1m.jpg" alt="" width="680" height="340" className="b-home-img-small-mobile"/>
                </a>
              </div>
              <div className="b-home-img-small">
                <a href="#">
                  <img src="resources/images/home_small_img_2.jpg" alt="" width="680" height="340" className="b-home-img-small-desktop"/>
                  <img src="resources/images/home_small_img_2m.jpg" alt="" width="680" height="340" className="b-home-img-small-mobile"/>
                </a>
              </div>
            </div>

            <div className="b-home-brands">
              <Slider {...settings}>
                <div><img src="resources/images/1.png" alt=""/></div>
                <div><img src="resources/images/2.png" alt=""/></div>
                <div><img src="resources/images/3.png" alt=""/></div>
                <div><img src="resources/images/4.png" alt=""/></div>
                <div><img src="resources/images/5.png" alt=""/></div>
                <div><img src="resources/images/6.png" alt=""/></div>
                <div><img src="resources/images/7.png" alt=""/></div>
                <div><img src="resources/images/8.png" alt=""/></div>
              </Slider>
            </div>

            <div className="b-home-reviews">
              <div className="b-home-reviews-in">
                <div className="b-home-reviews-title">What Our Clients Say</div>
                <div className="b-home-reviews-content">
                  
                  <div className="b-home-reviews-item">
                    <div className="b-home-reviews-item-head">
                      <div className="b-home-reviews-item-img"><img src="resources/images/home_review_1.jpg" alt="" width="60" height="60"/></div>
                      <div className="b-home-reviews-item-meta">
                        <strong>Lester Abbott</strong>
                        <span>Expert in Ice Machines</span>
                      </div>
                    </div>
                    <div className="b-home-reviews-item-content">
                      Disappointment reigns heavily when it comes to out of season tomatoes. Yes, summer is over as the harsh freezing cold temperatures blanket the entire North American continent and we are missing, craving more than likely, the incredible taste of vine ripe tomatoes straight from the garden. Perfectly picked at their peek of freshness and aromatic fragrance. 
                    </div>
                  </div>
                  
                  <div className="b-home-reviews-item">
                    <div className="b-home-reviews-item-head">
                      <div className="b-home-reviews-item-img"><img src="resources/images/home_review_2.jpg" alt="" width="60" height="60"/></div>
                      <div className="b-home-reviews-item-meta">
                        <strong>Keith Huff</strong>
                        <span>Expert in Ice Machines</span>
                      </div>
                    </div>
                    <div className="b-home-reviews-item-content">
                      If you are the owner, operator or manager of a restaurant or other type of establishment at which food is sold, you will regularly find yourself in the market for different products to stock your commercial kitchen. Chances are that you find yourself very frequently searching for cookware products for your commercial kitchen.
                    </div>
                  </div>
                  
                  <div className="b-home-reviews-item">
                    <div className="b-home-reviews-item-head">
                      <div className="b-home-reviews-item-img"><img src="resources/images/home_review_3.jpg" alt="" width="60" height="60"/></div>
                      <div className="b-home-reviews-item-meta">
                        <strong>Charlotte Reyes</strong>
                        <span>New York</span>
                      </div>
                    </div>
                    <div className="b-home-reviews-item-content">
                      If you are running a commercial kitchen, you will also want to stop by one or another of the overstock sites that are in operation on the Net. At times, even commercial kitchen owners, operators and managers can find products — including cookware — that can be very useful in a restaurant or similar setting.
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="p-home-text">
              <div className="p-home-text-in">
                <h1 className="p-home-text-title">Ice Machines and Restaurant Equipment</h1>
                
                <div className="home-text-blocks">
                  
                  <div className="home-text-block">
                    <div className="home-text-block-img"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yNCA0My4xMkwxMi44OCAzMmwtMy43ODcgMy43NkwyNCA1MC42NjdsMzItMzItMy43Ni0zLjc2eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik0wIDBoNjR2NjRIMHoiIGZpbGw9IiMzQzQ2NTAiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMCAwaDY0djY0SDB6Ii8+PC9nPjwvc3ZnPg==" alt="" width="64" height="64"/></div>
                    <div className="home-text-block-title">This is Our Commitment To You, Our Customer</div>
                    <div className="home-text-block-content">
                      IceMachinesPlus provides a huge selection of Commercial Ice Machines and Ice Maker Dispensers at wholesale prices. Plus, we offer a large variety of top quality commercial foodservice equipment. If you are starting a new foodservice business and need new equipment and some expert guidance, or if your foodservice business has been in operation for years and you need to upgrade your commercial equipment, IceMachinesPlus and our expert customer service team can help you either get started or expand your commercial kitchen.
                    </div>
                  </div>
                  
                  <div className="home-text-block">
                    <div className="home-text-block-img"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yNCA0My4xMkwxMi44OCAzMmwtMy43ODcgMy43NkwyNCA1MC42NjdsMzItMzItMy43Ni0zLjc2eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik0wIDBoNjR2NjRIMHoiIGZpbGw9IiMzQzQ2NTAiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMCAwaDY0djY0SDB6Ii8+PC9nPjwvc3ZnPg==" alt="" width="64" height="64"/></div>
                    <div className="home-text-block-title">Take the step to investing in your ice maker</div>
                    <div className="home-text-block-content">
                      Warm soft drinks hardly encourage diners to return again and again to enjoy your restaurant or cafe. However, investing in a professional ice maker is a big deal for smaller establishments. Powerful ice machine models can pump out dozens of cubes per minutes or thousands at a time so every guest has plenty to fill their glass. Don't be afraid of choosing the wrong commercial ice maker when you can shop with reliable and trustworthy sources like Ice Machines Plus. The experts can advise you on exactly which model to choose with consideration of your budget and your business.
                    </div>
                  </div>
                  
                  <div className="home-text-block">
                    <div className="home-text-block-img"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yNCA0My4xMkwxMi44OCAzMmwtMy43ODcgMy43NkwyNCA1MC42NjdsMzItMzItMy43Ni0zLjc2eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik0wIDBoNjR2NjRIMHoiIGZpbGw9IiMzQzQ2NTAiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMCAwaDY0djY0SDB6Ii8+PC9nPjwvc3ZnPg==" alt="" width="64" height="64"/></div>
                    <div className="home-text-block-title">We help you make the best purchase</div>
                    <div className="home-text-block-content">
                      To the team at IceMachinesPlus.com, the best customer is a knowledgeable customer. So we have provided several resources to assist you in making informed decisions. We have many articles, blog posts, checklists, and guides to help you make the best purchase for your business, whether you own a restaurant, manage a healthcare facility, run a coffee shop or manage a hotel. Check out the links to our Ice Expert Center, our Ice Machines Blog or our online Buying Guide!
                    </div>
                  </div>
                
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


// replaceComponent("Products", AboutUs);
registerComponent("aboutUs", AboutUs);
