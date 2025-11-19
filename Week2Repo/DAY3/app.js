const questions = document.querySelectorAll('.question');

questions.forEach(q =>{
    const btn = q.querySelector('.qButton');
    const ans = q.querySelector('.ans');
    btn.addEventListener('click', ()=>{
        ans.classList.toggle('show');
    });
});