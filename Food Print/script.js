// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect for the hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const heroPosition = hero.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (heroPosition < screenPosition) {
        hero.classList.add('fade-in');
    }
});

// Pop-up modal when reserving a table
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Redirecting to reservation page...');
});

// Fade-in effect for menu items
window.addEventListener('scroll', function() {
    const foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (itemPosition < screenPosition) {
            item.classList.add('fade-in');
        }
    });
});
