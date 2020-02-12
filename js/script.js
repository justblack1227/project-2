/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*** 
 
***/

const listItems = document.querySelectorAll(".student-item");
const pageItems = 10;

/*** 
This function will sort a list and display a list of 10 students to the page. 
***/


function showPage(list, page) {
  const startIndex = (page * pageItems) - pageItems;
  const endIndex = page * pageItems; 
  let h = 0;
  
  for (let i = 0; i < list.length ; i++) {
    if(i < startIndex || i >= endIndex) {
      list[i].style.display = "none";
    } else {
      list[i].style.display = "";
      }
  }
}


/*** 
This function will create page links so the user can access all students. This will
show a different set of students with each page click. 
***/

function appendPageLinks(list) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  document.querySelector(".page").appendChild(div);
  div.className = "pagination";
  div.appendChild(ul);

 
  for (let i = 0; i < list.length/10; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = i + 1;
    li.appendChild(a);
    ul.appendChild(li);
  } 
    
  const page = document.getElementsByTagName("a");
  page[0].className = "active";
  
  for (let i = 0; i < page.length; i++) {
    const pageNumber = i + 1
    page[i].addEventListener('click', () => {
        showPage(listItems, pageNumber); 
        page.className = "";
        page[i].className = "active";
        for (let a = 0; a < page.length; a++) {
          if (page[a] != page[i]) {
            page[a].className = "";
          }
        }
    });
  }
}


showPage(listItems, 1);
appendPageLinks(listItems)

// Remember to delete the comments that came with this file, and replace them with your own code comments.