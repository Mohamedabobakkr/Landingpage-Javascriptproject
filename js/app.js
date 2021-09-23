/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const container = document.createDocumentFragment();//Create a Document Fragment via document.createDocumentFragment(); to append created nav items to it for the sake of performance.

let sections = document.querySelectorAll('section');
//Selection of all sections via document.querySelectorAll(‘section’);

for(let section of sections){
    const li =  document.createElement("li");
    li.innerHTML = `<a class = "menu__link" href = ' #${section.getAttribute('id')}'>${section.getAttribute('data-nav')}</a>`;

    container.appendChild(li);
    //Loop on the sections list created  using a for.. Of loop with each iteration via document.createElement(‘li’);and append anchor <a> element as a child to it
}

document.getElementById("navbar__list").appendChild(container); 
//Append each nav item to the previously created Document 

//scroll into view
const scrollMenu = document.querySelectorAll(".menu__link");
for(let i=0;i<scrollMenu.length;i++){
    scrollMenu[i].addEventListener('click',function(scrollEvent){
        scrollEvent.preventDefault();
        sections[i].scrollIntoView({behavior:"smooth",block:'center'});

    });
}
//Use a click event listener on the nav menu links

for(i=0;i<sections.length;i++){
    const sections = document.querySelectorAll("section");
    let numberSection= sections[i];
}

document.addEventListener('scroll',function(){
for( let i =0 ;i<sections.length;i++){
    let numberSection=sections[i];
    const sectionTop=numberSection.getBoundingClientRect().top;
    if(sectionTop>=0 && sectionTop<=400 && numberSection.classList.contains('your-active-class')===false){
        let menuLink=document.querySelectorAll('.menu__link');
        numberSection.classList.add('your-active-class');
        document.querySelectorAll('.menu__link')[i].classList.add('active');
    }else{
        numberSection.classList.remove('your-active-class');
        document.querySelectorAll('.menu__link')[i].classList.add('active');
    }// nav items from all the sections, and all the links first by looping all sections and all nav items and removing all the classes from each of them via section.classList.remove(‘your-active-class’); and 
    //navItem.classList.remove(‘item-active-class’); for the sections and nav items respectively. Then add the same active classes for the intersection section and its related nav item
        
    }
    //css media query
    document.querySelector('.toggle-button').addEventListener('click',function(){
        let allButtons= document.querySelectorAll('li');
        for(let i =0;i<allButtons.length;i++){
            if(allButtons[i].classList.contains('active')===false){
                allButtons[i].classList.add('active');

            }
            else if(allButtons[i].classList.contains('active')===true){
                allButtons[i].classList.remove('active');
            }
    }
    //toggle button For a responsive nav menu as above images for smaller
//screens use CSS media query and inside it put the code 
//or converting the nav menu from the horizontal one to 
//the vertical one. 

        });
    }) 
