const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click',() => {
        const faqItem = toggle.closest('.faq-item');
        const faqAnswer = faqItem.querySelector('.faq-answer-active');
        const icon = toggle.querySelector('img');

        document.querySelectorAll('.faq-answer-active').forEach(ans => {
            if(ans !== faqAnswer){
                ans.style.display = "none";
                const toggleIcon = ans.previousElementSibling.querySelector('.faq-toggle img');
                toggleIcon.src = "assets/images/icon-plus.svg";
            }
        });

        if(faqAnswer.style.display === "block"){
            faqAnswer.style.display = "none";
            icon.src = "assets/images/icon-plus.svg";
        }
        else{
            faqAnswer.style.display = "block";
            icon.src = "assets/images/icon-minus.svg";
        }
    });
});