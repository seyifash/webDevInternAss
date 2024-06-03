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

   const initSlider = () => {
    const frame = document.querySelector(".gallery .frame");
    const numSlides = Math.ceil(frame.scrollWidth / frame.clientWidth);
    console.log(numSlides)
    const slidePanel = $('.slidePanel');

    for (let i = 0; i < numSlides; i++) {
        let button = $('<div></div>').addClass('outer').attr('id', `scroll${i + 1}`);
        let inner = $('<div></div>').addClass('inner');
        button.append(inner);

        // Add the active class to the first button
        if (i === 0) {
            button.addClass('active');
            inner.addClass('active2');
        }

        slidePanel.append(button);
    }

    const updateActiveButton = () => {
        let currentIndex = Math.round(frame.scrollLeft / frame.clientWidth);
        console.log(currentIndex);

        $('.slidePanel .outer').removeClass('active');
        $('.slidePanel .inner').removeClass('active2');
        $(`.slidePanel .outer:eq(${currentIndex})`).addClass('active');
        $(`.slidePanel .outer:eq(${currentIndex}) .inner`).addClass('active2');
    };

    frame.addEventListener('scroll', updateActiveButton);

    updateActiveButton();
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