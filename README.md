# Yoel's Portfolio 2 website

## Dynamic Front End Development Milestone Project.

![Amiresponsive-img](assets/readme-images/amiresponsive.png)

Website presents Yoel's portfolio-2 project for a Bitcoin Quiz.

Users will be able to play a Quiz game to find out how much they know about bitcoin and learn even more about it with the FAQ page.

This project is for educational purposes and can not be used as a template for a business use.
Main aim is to build a responsive and interactive website with HTML, CSS and JavaScript. I will use Bootstrap framework to keep website consent and clear.


## [View life website in github pages](https://yoesk8.github.io/portfolio-2-bitcoin-quiz/)
---

# Table of contents

- [UX](#ux)
    - [Website owner business goals](#website-owner-business-goals)
    - [User goals](#user-goals)
        - [New user goals](#new-user-goals)
        - [Returning user goals](#returning-user-goals)
        - [Website owner business goals](#website-owner-business-goals)
    - [User stories](#user-stories)
    - [Structure of the website](#structure-of-the-website)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
- [Features](#features)
- [Technology](#technology)
- [Testing](#testing)
    - [Functionality testing](#functionality-testing)
    - [Compatibility testing](#compatibility-testing)
    - [Code Validation](#code-validation)
    - [User stories testing](#user-stories-testing)
    - [Issues found during site development](#issues-found-during-site-development)
    - [Performance testing](#performance-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Screenshots](#screenshots)



# UX

## Website owner business goals

The main purpose of this website is to test the user's knowledge on what Bitcoin is by playing an interactive game with 10 questions. The user can also find the answer to this questions and learn more about it in the FAQ page.


## User goals

### New user goals:
- User is able to play the game with no issues
- User can see the live price of Bitcoin on the Home page.
- User can easily navigate between the Home, Contact and FAQ pages.


### Returning user goals:
- User can learn more about the developer by using the social medial links in the footer of the site.
- User can get in touch with the Developer by using the contact page.

## User stories

### As a creator of the site:
* I would like to display my abbilities as a web developer.
* I would like to educate all visitors on the Basics of what Bitcoin is and isn't.



## Structure of the website

The website is designed to be easy and user-friendy on all type of devices. On desktop, tablet or mobile device there should be no difference for a user to have a fantastic experience. All parts are designed to achieve maximum user satisfaction. User will get some interaction from the interface as links and buttons will have a hover effects.

## Wireframes

I used website miro.com to create the wireframes for desktop, tablet and mobile view.

## Desktop View

![Desktop Wireframes](assets/readme-images/Bitcoin-Quiz-wireframe-desktop.png)

## Tablet and Mobile View

![Tablet and Mobile Wireframes](assets/readme-images/Bitcoin-Quiz-wireframe-Home-Page-(Mobile).png) 
![Tablet and Mobile Wireframes FAQ Page](assets/readme-images/Bitcoin-Quiz-wireframe-mobile-FAQ.png)


## Surface

### Colors
For the color Palette I used the colors for the traditional Bitcoin logo:
* background color: #f2a900
* navigation bar and footer color: #4d4d4e
* Socials color: #ffffff

![Bitcoin logo](assets/readme-images/btc-logo.png)


### Fonts 

* As a main font I used Helvetica Neue, and as a backup font sans-serif



[Back to Table of contents](#table-of-contents)
___
# Features

The website consists of 3 pages. One of which includes the Quiz game to be played. Every page and section is accessible from the navigation menu.


The website has below features:

## Navigation bar

* #### Navigation bar is visible on the top of each website. It is responsive and by default collapsed into a burger menu.
* Navigation scheme:

    * On left side there is a logo. It can be used as navigation link to the main page.
    * On right side there are three links collapsed into a burger menu.  It contains:
        * Home
        * FAQ
        * Contact



## Footer

* Footer is consistent on all pages. It has social links centered on it.
Each link will open in a separate tab in a browser. I've also added hover effects to each of them based on the color of the social media site.

## Home

*  The home Page comprises of:
 * A live price of Bitcoin displayed underneath the navbar, this is achieved by using the [Binance API](https://www.binance.com/en/binance-api) with the help of a Websocket.
 * A quiz game contained inside a Div for easy readability, the game consists of 10 questions, the color of the buttons containing the questions change to either green or red depending on whether the answer was correct or not.



## FAQ

* This page has 6 common questions about bitcoin, it was created with the help of [Bootstrap's Accordion](https://getbootstrap.com/docs/5.0/components/accordion/) 

## Contact

* User can get in touch with the creator of the website by filling a form with topic of interest.
There's also an aditional text field to include any additional questions.

##  Future implementations


* Add new page with useful Bitcoin resources )(Books, podcasts, blogs, etc)
* Add page that displays the price of bitcoin denominated in commodities (Gold, Silver, Oil, Copper, etc)


[Back to Table of contents](#table-of-contents)
___
# Technologies used

### HTML5
* As a structure language.

### CSS
* As a style language.

### JavaScript
* As a programming language

### Bootstrap 
* Bootstrap as a CSS framework to keep responsive, mobile first aproach.

### Font Awesome
* As an icon library for a social links.


### GitHub
* As a software hosting platform to keep project in a remote location.

### Git
* As a version-control system tracking.

### Gitpod
* As a development hosting platform.

### Miro.com
* As a wireframing tool.




[Back to Table of contents](#table-of-contents)

___
# Testing

## Functionality testing 

 I used Chrome developer tools throughout the project for testing and solving problems with responsiveness and style issues.


## Compatibility testing
 Site was tested across multiple virtual mobile devices and browsers. I checked all supported devices in Chrome developer tools. 
 
 I tested on hardware devices such as: Ipad air with iOS, Iphone 13 mini with iOS 15.4, Macbook air with MacOS and Surface Pro with windows 10


## User stories testing

### As a website owner:

-  I would like to display my abbilities as a web developer.
   > User can interact with the site by playing a game that keeps track of the answers chosen during the game and see their final result once finished
- I would like to educate all visitors on the Basics of what Bitcoin is and isn't.
   > User can use the FAQ page to read the answers to 6 of the most asked questions about Bitcoin, the user can also get in touch with the developer to ask further questions


### As a new user:
- I want to play a game to learn about Bitcoin
   > User can play a game containing 10 interesting facts about Bitcoin
- I want to know what the price of Bitcoin is at the moment
   > User can see the live price of Bitcoin displayed in the Home screen
- I would like to get in touch with the creator of the site to ask him about his web developing skills or to learn more about bitcoin.
    > User can find a contact form in contact page. 


### As a returning user:
- I need to find more information about the skills and projects that the developer may have worked on.
    > User can use the LinkedIn or GitHub social links on the footer of the site or use the contact form to get in touch directly with the developer



---
## Issues found during site development

* #### Footer not staying at the bottom of the screen in mobile devices
![testing_issue_1](images/Screenshot_2022-05-03_at_11.20.57.png?raw=true)

When displaying the website on mobile devices, my footer would move to the middle of the screen instead of staying at the bottom, blocking important elements and damaging the overall user experience.

> I fixed it by wrapping the whole page in a div that would act as a container, then setting it's minimum height to 100% of the viewport (vh) and giving it a position of relative. As it is relative it's child elements (In this case the footer) could be set with absolute position based on it.

> Then I set the footer position to absolute, sticking to the bottom:0 



* #### Form in Contact Page being out of place in mobile devices

![testing_issue_1](images/Screenshot_2022-05-03_at_11.59.47.png?raw=true)

When displayed on mobile devices the form in the contact page would look out of placed and misaligned

> I fixed this by adding a media querie that would add an additional padding of 300px when the height of the screen dropped to below 1200px (Tablets and mobile devices).

> I also had to set the top margin to 0 as it was pushing the whole div downwards

> This pushes the form to a more centred position therefore improving user experience, below the solution:

@media screen and (max-width:1200px) {

.contact {
  padding-top: 300px;
  margin-top: 0;
    
  }



## Performance testing

I run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) tool to check performance of the website.
I had to do several changes to improve performance, specially replacing images for lighter formats such as .webp which improved the performance significantly. Screenshots are presented below:



Final results:
![performance_final](images/Screenshot_2022-05-03_at_14.08.14.png?raw=true)

I noticed that this tests scores vary from time to time and depends on external libraries as well. 



## Code Validation
 At the and of the project I used two websites to validate my code
 
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to validate CSS


 * [Nu Html Checker](https://validator.w3.org/) to test HTML


[Back to Table of contents](#table-of-contents)

___
# Deployment

The project was deployed on GitHub Pages. I used Gitpod as a development environment where I commited all changes to git version control system.
I used push command in Gitpod to save changes into GitHub.

To deploy a project I had to:

* Log in to GitHub and click on repository to deploy ([portfolio-project-1](https://yoesk8.github.io/portfolio-project-1/))
* select `Settings` and find GitHub Pages section at the very bottom of the page
* from source select `root` and then `main` branch.
* click `save` and page was deployed after auto-refresh.
>  Your site is published at https://yoesk8.github.io/portfolio-project-1/

To run localy:
* Log in to GitHub and click on repository to download ([portfolio-project-1](https://yoesk8.github.io/portfolio-project-1/))
* select `Code` and click Download the ZIP file.
* after download you can extract the file and use it in your local environment 

Alternatively you can [Clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
this repository ([portfolio-project-1](https://yoesk8.github.io/portfolio-project-1/)) into your github account.

[Back to Table of contents](#table-of-contents)
___
# Credits


* To complete this project I used Code Institute student template: [gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

* Ideas and knowledge library:

    * [w3schools.com](https://www.w3schools.com)

    * [css-tricks.com](https://css-tricks.com/)

    * [getbootstrap.com/docs](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
        I used code for navbar and the form in contact page from Bootstrap.
    * [stackoverflow.com](https://stackoverflow.com/) I used stack overflow constantly whenever I was unsure about HTML or CSS syntax or wanted to find an easier more stream-lined way of doing things
   

* Other Tools:
  
   * [ezgif.com](https://ezgif.com/jpg-to-webp/) I used ezgif to convert my images to lighter formats which improved the performance of the site significantly

### Code


* Bootstrap: [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/)
* MDBootstrap: [Sticky footer](https://mdbootstrap.com/snippets/standard/mdbootstrap/2886162#html-tab-view)
* Bootstrap: [Form](https://getbootstrap.com/docs/4.5/components/forms/)
* [mdbootstrap.com](https://mdbootstrap.com/snippets/standard/mdbootstrap/2886162#html-tab-view) I used and modified this footer with social media icons
* [https://bbbootstrap.com/](https://bbbootstrap.com/snippets/simple-contact-form-74408136) I used and modified this form

### General Content:

*  Testimonials:  [trustpilot.com](https://uk.trustpilot.com/review/westlondonpersonaltraining.co.uk)





### Images:

#### Pexels.com:
* [images/pexels-thisisengineering-3912953.jpg](https://www.pexels.com/photo/man-in-black-crew-neck-t-shirt-standing-in-front-of-boxing-gloves-3912953/) Photo by ThisIsEngineering from Pexels 

* [images/pexels-thisisengineering-3912956.jpg](https://www.pexels.com/photo/person-holding-black-tablet-3912956/) Photo by ThisIsEngineering from Pexels

* [images/pexels-thisisengineering-3912952.jpg](https://www.pexels.com/photo/person-holding-black-smartphone-3912952/) Photo by ThisIsEngineering from Pexels 

* [images/pexels-pixabay-416717.jpg](https://www.pexels.com/photo/athlete-barbell-bodybuilder-bodybuilding-416717/) Photo by Pixabay from Pexels

* [images/pexels-bruno-bueno-2204196.jpg](https://www.pexels.com/photo/man-lying-while-doing-barbell-2204196/) Photo by Bruno Bueno from Pexels

* [images/pexels-ivan-samkov-4162451.jpg](https://www.pexels.com/photo/black-and-red-dumbbells-4162451/) Photo by Ivan Samkov from Pexels

* [images/pexels-amar-preciado-9958667.jpg"](https://www.pexels.com/photo/people-in-gym-working-out-with-weightlifting-9958667/) Photo by Amar Preciado from Pexels

* [images/pexels-andres-ayrton-6551097.jpg](https://www.pexels.com/photo/young-asian-male-trainer-checking-fitness-equipment-while-instructing-overweight-female-6551097/) Photo by Andres  Ayrton from Pexels

* [images/pexels-koolshooters-9944640.jpg](https://www.pexels.com/photo/two-people-doing-boxing-9944640/) Photo by KoolShooters from Pexels

* [images/pexels-thisisengineering-3912516.jpg](https://www.pexels.com/photo/man-in-black-crew-neck-t-shirt-standing-inside-boxing-ring-3912516/) Photo by ThisIsEngineering from Pexels 

* [images/pexels-thisisengineering-3912952.jpg](https://www.pexels.com/photo/person-holding-black-smartphone-3912952/) Photo by ThisIsEngineering from Pexels 


[Back to Table of contents](#table-of-contents)
___

# Screenshots

## Project screenshots

### Home Page

![Home-Page]()
![About-Me](images/Screenshot_about_me.png)
![Testimonials](images/Screenshot_testimonials_page.png)

### Contact Page

![Contact Page](images/Screenshot_contact_page.png)

### Gallery Page

![Gallery Page](images/screenshot_gallery.png)


[Back to Table of contents](#table-of-contents)
___