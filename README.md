<a href="https://ibb.co/Pzt985x"><img src="https://i.ibb.co/G3FtjV7/different-devices.jpg" alt="different-devices" border="0"></a>
# Destination Picker
[This website](https://francesvugts.github.io/DestinationPicker/) was created for everyone that is thinking about there next big holiday.
With help of a quiz you can select the criteria for your trip and then the Destination Picker will return the country that suits your wishes best.
## UX
### User stories
As a potential holiday booker, I want to know what criteria to think about, to be able to find a suitable holiday destination.
I want to be able to submit my wishes on the different criteria and then I want to be provided with the destination that would best suit my wishes, so that I can make a well-advised decision.
When the answer is provided, I want to know why the presented destination suits my wishes, so that I will be sure it is a good fit and to get enthusiastic to book a holiday to this destination.
As a website user, I want to be able to contact the owner of the website, so that I can ask any questions I have regarding the website.
### Design
You can find the wireframes that I used for this project [here](https://ibb.co/jLYNtsg).
<br>
It provides insight in how I wanted my question and result pages to look on a desktop, mobile and tablet.
The most important thing for me was to have a clean and simple look.
It had to be a fun, quick and easy quiz!
## Features
In this project I added the following features:
* The user navigates through the website by clicking on the buttons for very easy use
* I've added in icons from font awesome and buttons from Bootstrap to get a nice clean look
* I've used the grid system from Bootstrap in all my html pages to make them responsive on different devices
* I've added in an envelope icon to open a modal with a form to contact the owner of the website
* I've added mandatory fields to the contact form
* I've added in emailJS
* My function to send a mail to the owner of the website includes code to empty the contact form after sending a message
* My function to send a mail to the owner of the website includes a pop-up to let the user know a mail has been send succesfully
* I've added in jQuery to continue to the next question when an answer gets clicked
* I've added in a variable for each country because I still have to learn how to use a database
* I've added in a function that increases the score for all countries that match the selected answer from the user
* I've added in a function that returns the page of the country with the highest score at the end of the quiz
## Features left to Implement
When spending more time on this project, I would like to include the following features:
* More countries that can be shown as a result
* A database to store those countries
* Being able to go back to a question to change the given answer
## Technologies used
I have used the following technologys for this project:
* HTML, because it is the standard markup language for Web Pages
* CSS, to style the website
* Javascript, to make the website interactive
* JSON, for my variables
* [jQuery](https://jquery.com/), to simplify DOM manipulation 
* [Gitpod](https://www.gitpod.io/), for my development environment
* [Github](https://github.com/), for version control
* [Bootstrap](https://getbootstrap.com/), to make my website responsive and mobile-first
* [Font Awesome](https://fontawesome.com/), to include icons
* [Google Fonts](https://fonts.google.com/), to choose and combine my fonts
* [Coolors](https://coolors.co/), to choose my and combine my colors
* [EmailJS](https://www.emailjs.com/), to let the user be able to contact me
## Manual testing
All the tests below where done manually by myself.
The tests where done in Chrome, Internet Explorer and Firefox.
I've made use of console.log to see if the right result shows up.
This would be the result with the highest score.
<br>
1. Use of the start page:
    * Mobile:
        1. No icon will be visible to make beter use of the space available
    * Tablet:
        1. An icon will be visible to give it a nicer look
        2. The icon will have a more margin then on bigger screens to fill the page out nicely
    * Desktop:
        1. An icon will be visible to give it a nicer look 
        2. The start button will be smaller then on smaller screens to give it a nicer look
2. Use of the question page:
    * Mobile:
        1. You will see a question with 2, 3 or 4 posible answers depending on the question
        2. The answers will be shown underneath one another
        3. When you click on one of the answers, the next question will be shown
    * Tablet:
        1. You will see an icon above the question
        2. Then you will see a question with 2, 3 or 4 posible answers depending on the question
        3. The answers will be shown underneath one another
        4. When you click on one of the answers, the next question will be shown
    * Desktop:
        1. You will see an icon above the question
        2. Then you will see a question with 2, 3 or 4 posible answers depending on the question
        3. The answers will be shown underneath one another, but in pares of two
        4. When you hover over an answer, this answer will change color
        4. When you click on one of the answers, the next question will be shown
3. Use of the results page:
    * Mobile and tablet:
        1. On the top of the page u will see what country is recommended based on your answers
        2. Underneath you see a picture representive for that country
        3. On the bottem of the page u will see the traits for the recommended country
    * Desktop:
        1. On the top of the page u will see what country is recommended based on your answers
        2. Underneath you see a photo representive for that country
        3. Next to that photo u will see the traits for the recommended country
4. The header and the footer:
    * Mobile, tablet and desktop:
        1. On the top of the page there is a header with the logo/website name
        2. The header is sticky, so when you would scroll down the header will still be visible
        3. On the bottom of the page there is a footer with the copyright
5. When you want to get in touch with the owner of the website:
    * Mobile, tablet and desktop:
        1. There is an envelope icon shown inside of the footer
        2. When you click on the envelope a modal with a contact form shows up
        3. The fields have placeholder text so you know what you have to fill in
        4. U have to fill in all the fields in the form to be able to send it
        5. When the form is send, the modal will disappear and a pop up with the text "Thank you for your message!" shows up
        6. When you re-open the modal the fields have been made empty
Besides these manual tests by myself I've asked friends and family to try the quiz.
This pointed out that the envelope icon had a white background on some phones.
I will get in to this more in the bugs section.
