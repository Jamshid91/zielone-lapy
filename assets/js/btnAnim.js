const btn_anim = document.querySelectorAll('.btn-anim');

btn_anim.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        setTimeout(() => {
            btn.classList.add('addBorder')
        }, 800);
        
       
    })
    btn.addEventListener('mouseout', () => {
        setTimeout(() => {
            btn.classList.remove('addBorder')
        }, 800);
    })
})