
// This mini-project, crafted by Naser Raoofi, serves as a hands-on exploration to deepen understanding of JavaScript 
// in a practical context. Through interactive elements like expandable content, it showcases dynamic DOM manipulation techniques, 
// event handling, and class toggling, illustrating core JavaScript functionalities in creating responsive and engaging web interfaces.



// ********************************************************************    Mini project (reviews) by Naser Raoofi   ***************************************************************************
const profiles = [{id:123, Name:' Naser Raoofi', img:"./pic/2.jpg",content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'},{id:176, Name:' Ahmad Rahmani', img:"./pic/3.jpg",content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'},{id:1730, Name:' Farshid Akradi', img:"./pic/4.jpg",content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, it over 2000 years old. still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'},{id:230, Name:' Milad anosha', img:"./pic/5.jpg",content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'}];

const dynamicContent= document.querySelector('.dynamicContent');
let currentIndex=0;

// 1- display the first object when page is loaded 

function updateProfile(){
    const currentprofile=profiles[currentIndex];
    dynamicContent.innerHTML=`
    <div class="image-container">
    <img src="${currentprofile.img}" alt="${currentprofile.Name}" class="review-image">
    </div>
    <h4 class="reviewer-name">${currentprofile.Name}</h4>
    <p class="review-content">${currentprofile.content}</p>
    
    `
}
updateProfile();

// moving throgh our array when user click on a button.
document.querySelectorAll('.nav-button').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const btntarget=e.target.id;
        if(btntarget==="nextButton"){
            currentIndex=(currentIndex+1) %profiles.length;

        }else if(btntarget==="prevButton"){
            currentIndex=(currentIndex-1+profiles.length) %profiles.length
        }
        updateProfile()
    })
})

// 3- expand our content is the final step 

const morebtn= document.querySelector('.read-more');
morebtn.addEventListener('click', () => {
  const isExpanded = morebtn.classList.toggle('expand');
  morebtn.textContent = isExpanded ? 'Read Less' : 'Read More';
  const content = document.querySelector('.review-content, .expanded');
  content.classList.toggle('expanded');
  content.classList.toggle('review-content');
});





















// ********************************************************************    Mini project (reviews) by Naser Raoofi   ***************************************************************************











// ********************************************************************    Mini project (reviews) by Naser Raoofi   ***************************************************************************