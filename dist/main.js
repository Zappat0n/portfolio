(()=>{"use strict";const e=[{title:"Elan manager app",image:"./images/elan_manager_app.png",technologies:"Ruby | Rails | Git | Gitflows | Rubocop | Styleint | VS Code | Devise | Bootstrap",github:"https://github.com/Zappat0n/elan_manager_app",description:"Mobile web application with a score recording system for a school developed in Rails."},{title:"The extortion",image:"./images/the_extortion.png",technologies:"HTML5 | SASS(SCSS) | JavaScript | Node package manager | Phaser 3 |    Jest",github:"https://github.com/Zappat0n/The_extortion",live:"https://zappat0n.github.io/The_extortion/",description:"Þrymr has stolen Thor's hammer to extort the gods into giving him Freyja as his wife. Would you travel to Jötunheimr and climb the walls of Útgarðar to help Thor recover his hammer?"},{title:"Elan manager",image:"./images/elan_manager.png",technologies:"Java | MySql | Google API | Gradle | Git | GitFlow | IntelliJ IDEA",github:"https://github.com/Zappat0n/elan_manager",description:"An application developed using Java, MySql, and Google Drive to manage a Montessori British School."},{title:"Tic-tac-toe game",image:"./images/Screenshot-tic-tac-toe.png",technologies:"Ruby | Git | Gitflow | Rubocop | VS Code",description:"A tic-tac-toe game for the terminal developed in Ruby"},{title:"Scraper from Yahoo Finance!",image:"./images/Screenshot-scrapper.png",technologies:"Ruby | Git | Gitflow | Rubocop | VS Code",description:"An application developed with Ruby to get financial information in real-time from Yahoo Finance!."},{title:"Elan Montessori Event website",image:"./images/Screenshot-elan-event.png",technologies:"HTML | CSS | Bootstrap | Git | Gitflow | StileInt | WebHint | VS Code",description:"This a responsive conference website. It is for a Positive Discipline education event that took place in Murcia (Spain) in 2020."},{title:"Weather app",image:"./images/weather_app.png",technologies:"HTML5 | SASS(SCSS) | JavaScript | Node package manager",github:"https://github.com/Zappat0n/weather_app",live:"https://zappat0n.github.io/weather_app/",description:"Mobile web application developed in JavaScript that gets information from OpenWeatherMap API. It allows you to see the current weather in any location."}],t=t=>{const i=e[t];document.querySelector(".card-img").setAttribute("src",i.image),document.querySelector(".card-title").textContent=i.title,document.querySelector(".card-description").textContent=i.description,document.querySelector(".card-technologies").textContent=i.technologies,document.querySelector(".form-project-github").setAttribute("action",i.github),console.log(i.live),i.live?(document.querySelector(".form-project-live").setAttribute("action",i.live),document.querySelector(".div-live").classList.remove("d-none")):document.querySelector(".div-live").classList.add("d-none")};let i=0;t(i),document.querySelector(".move-right").addEventListener("click",(()=>{i<e.length-1?i+=1:i=0,t(i)})),document.querySelector(".move-left").addEventListener("click",(()=>{i>0?i-=1:i=e.length-1,t(i)}))})();