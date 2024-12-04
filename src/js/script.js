// *** LIGHTBOX ***

const LightboxImg = document.queryselector('#lightbox img');
const lightbox = document.queryselector('#lightbox');
document.querySelectorAll('data-full-img]').forEach((imgThumb)=>{
    imgThumb.addEventListener('click',(evt)=> {
        LightboxImg.src = imgThumb.dataset.fullImg;
        lightbox.schowModal()   });
});

lightbox.addEventListener('click', () => lightbox.close());
