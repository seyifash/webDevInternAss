document.addEventListener('DOMContentLoaded', function(){

    const checkBox = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const contactBtn = document.getElementById('contactBtn');
    const form = document.getElementById('form');
    const realForm = document.getElementById('realForm')

    checkBox.addEventListener('change', function(){
        submitBtn.disabled = !checkBox.checked;
        console.log(!checkBox.checked)
    })

    $(contactBtn).on('click', () => {
        $(form).css('display', 'flex');
    });

    form.addEventListener('click', function(event) {
        event.stopPropagation();
        if (form.style.display === 'flex' && !realForm.contains(event.target)) {
            form.style.display = 'none';
        }
    });

   

   // section -2 image slider functionality 
   const frame = document.querySelector('.slider-wrapper .frame');
   const slider = document.querySelector('.slider')
   const slidePanel = document.querySelector('.section-2 .slidePanel')
   const li = document.querySelectorAll('.frame .item');
   let totalWidth = 0;
   let pagination;
   let frameWidth = slider.clientWidth;
   let imageWidth;
   let currentIndex = 0;
   let itemDisplay; 
   let margin; 

   if (screen.width > 900){
       itemDisplay = 3
       margin = 10;
   } else if(screen.width < 900 && screen.width > 700){
       itemDisplay = 2
       margin = 7
   } else if (screen.width < 700 ){
       itemDisplay = 1
       margin= 2;
   }


   li.forEach((item, index) => {
       console.log(slider.clientWidth)
       const  div = slider.clientWidth / itemDisplay
       const remainder = slider.clientWidth % itemDisplay;
       const imgWidth = (div + remainder) - margin;

       item.style.width = `${imgWidth}px`

       totalWidth += item.offsetWidth;
       let comp = getComputedStyle(item);
       totalWidth += parseInt(comp.marginLeft);
   })
   imageWidth = totalWidth / li.length;
   pagination = totalWidth / frameWidth
   pagination = Math.round(pagination);

   const createPagination = () =>{
       for(let i = 0; i < pagination; i++){
           const button = document.createElement('div')
           button.classList.add('outer')
           const inner = document.createElement('div');
           inner.classList.add('inner');
           button.appendChild(inner);

           if(i === 0){
               button.classList.add('active');
               inner.classList.add('active2');
           }

           button.addEventListener('click', () => {
               currentIndex = i;
               updateSlider();
           })
           slidePanel.appendChild(button);
       }
   }

   createPagination();


   function updateSlider(){
       const offset = -currentIndex * 100;
       frame.style.transform  = `translateX(${offset}%)`;
       const buttons = document.querySelectorAll('.slidePanel .outer');
   
       buttons.forEach((button, index) => {
           if(index === currentIndex){
               button.classList.add('active');
               const inner = button.querySelector('.inner');
               inner.classList.add('active2')
           }else {
               button.classList.remove('active');
               const inner = button.querySelector('.inner');
               inner.classList.remove('active2')
           }
       })
   }

   const updateActiveButton = () => {
       currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
   
       const buttons = document.querySelectorAll('.slidePanel .outer');
       const innerElements = document.querySelectorAll('.slidePanel .inner');
   
       buttons.forEach((button, index) => {
           if (index === currentIndex) {
               button.classList.add('active');
               innerElements[index].classList.add('active2');
           } else {
               button.classList.remove('active');
               innerElements[index].classList.remove('active2');
           }
       });
   };

   slider.addEventListener('scroll', updateActiveButton);
   updateActiveButton();
   
   updateSlider();


    
   // image with content functionality 
    const imageCnt = document.querySelectorAll('.img-cnt .ct1');
    const image = document.querySelector('.image-slide img');
    console.log(imageCnt);
    console.log(image);

    imageCnt.forEach((cnt) => {
        cnt.addEventListener('click', () => {
            console.log(cnt);

            //remove the colored background
            imageCnt.forEach(ct => {
               ct.classList.remove('bgActive');
            })
            cnt.classList.add('bgActive');

            if(cnt.id === '1'){
                image.src = '../images/image.png'
            }else if(cnt.id === '2'){
                image.src = '../images/14.png';
            }else if(cnt.id === '3'){
                image.src = '../images/15.png'
            }
        })
    })
})