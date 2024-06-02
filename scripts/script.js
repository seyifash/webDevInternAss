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


    // the slider 

    const initSlider = () => {
        const frame = document.querySelector(".gallery .frame");
        const slideButtons = document.querySelectorAll(".slidePanel .outer");
        console.log(frame.scrollWidth)
        console.log(frame.clientWidth)
    
        const maxScrollLeft = frame.scrollWidth - frame.clientWidth;

        console.log(frame)
        console.log(slideButtons);
        console.log(maxScrollLeft);


        slideButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(button);


                // Remove the active and active2 class from all other divs in the slide panel first 
                slideButtons.forEach(btn => {
                    btn.classList.remove('active')
                    const inner = btn.querySelector('.inner');
                    if (inner) {
                        inner.classList.remove('active2');
                    }
                });

                // Add the active class to the one that is being clicked on
                button.classList.add('active')
                const innerDiv = button.querySelector('.inner');

                if (innerDiv) {
                    innerDiv.classList.add('active2');
                }

                let scrollAmount = 0;
                if(button.id === 'scroll1'){
                    console.log('i am ', frame.scrollLeft)
                   if(frame.scrollLeft === maxScrollLeft){
                    scrollAmount =  frame.scrollLeft * -1
                    } else if(frame.scrollLeft < maxScrollLeft) {
                        scrollAmount =  frame.clientWidth * -1
                    }
                }else if (button.id === 'scroll2'){
                    console.log('i am here ', frame.scrollLeft)
                    if(frame.scrollLeft > frame.clientWidth){
                        scrollAmount =  frame.clientWidth * -1
                    } else if(frame.scrollLeft < frame.clientWidth){
                    scrollAmount = frame.clientWidth * 1

                    }
                }
                else if(button.id === 'scroll3') {
                    if(frame.scrollLeft === frame.clientWidth) {
                        console.log("here")
                        scrollAmount = frame.clientWidth * 1
                    } else if(frame.scrollLeft === 0){
                    scrollAmount = (frame.clientWidth + frame.clientWidth) * 1
                    }
                }
                /*const scrollAmount = frame.clientWidth * direction;*/
                frame.scrollBy({ left: scrollAmount, behavior: "smooth"})
            })
        });
        
    }
    window.addEventListener("load", initSlider);

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