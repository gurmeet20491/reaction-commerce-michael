import React, { Component } from "react";
import { registerComponent } from "/imports/plugins/core/components/lib";

class AboutUs extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="columns main">
          <p><a href="#">
            <img alt="Ice-O-Matic Elevation Series" src="resources/images/elevation_sale.jpg" />
          </a></p>
          <h1>Ice Machines and Restaurant Equipment</h1>
          <h2>Convenience, Pricing, Selection, Support</h2>
          <p>This is Our Commitment To You, Our Customer.</p>
          <p>IceMachinesPlus provides a huge selection of <strong>Commercial Ice Machines and Ice Maker Dispensers</strong> at wholesale prices. Plus, we offer a large variety of top quality commercial foodservice equipment. If you are starting a new foodservice business and need new equipment and some expert guidance, or if your foodservice business has been in operation for years and you need to upgrade your commercial equipment, IceMachinesPlus and our expert customer service team can help you either get started or expand your commercial kitchen.</p>
          <p>Take the step to investing in your ice maker.</p>
          <p>Warm soft drinks hardly encourage diners to return again and again to enjoy your restaurant or cafe. However, investing in a professional ice maker is a big deal for smaller establishments. Powerful ice machine models can pump out dozens of cubes per minutes or thousands at a time so every guest has plenty to fill their glass. Don't be afraid of choosing the wrong commercial ice maker when you can shop with reliable and trustworthy sources like Ice Machines Plus. The experts can advise you on exactly which model to choose with consideration of your budget and your business.</p>
          <p>To the team at IceMachinesPlus.com, the best customer is a knowledgeable customer. So we have provided several resources to assist you in making informed decisions. We have many articles, blog posts, checklists, and guides to help you make the best purchase for your business, whether you own a restaurant, manage a healthcare facility, run a coffee shop or manage a hotel. Check out the links to our <a href="https://www.icemachinesplus.com/ice-expert-center">Ice Expert Center</a>, our <a href="http://www.icemachinesplus.com/blog">Ice Machines Blog</a> or our online <a href="https://www.icemachinesplus.com/ice-machine-buying-guide">Buying Guide!</a></p>
          <p>We Want You To Use Our Brains! <a href="https://plus.google.com/u/0/b/104201160379117316741/104201160379117316741/posts" rel="publisher">Find us on Google+ - Trust IceMachinesPlus.com.</a> </p>
        </div>
        <div className="sidebar sidebar-main">
          <p><a href="#"><img title="Commercial Ice Maker Buying Guide" src="resources/images/energy2.png" alt="Buying Guide for Commercial Ice Machines" width="299" height="200" /></a></p>
          <p><a href="#"><img title="Commercial Ice Maker Buying Guide" src="resources/images/BUYING_GUIDE.png" alt="Buying Guide for Commercial Ice Machines" width="299" height="200" /></a></p>
        </div>
      </div>
    );
  }
}

registerComponent("aboutUs", AboutUs);
