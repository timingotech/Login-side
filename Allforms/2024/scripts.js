// JavaScript for slideshow
const testimonialContent = document.getElementById('testimonialContent');
const testimonials = [
    {
        image: 'img/rectangle-116-bg-EEw.png',
        name: 'Kehinde Ernest',
        role: 'Frontend Engineering',
        text: 'The field of web design is broad, and you might find specialization areas like user interface design, user experience design, or even focusing on specific technologies or industries. As you gain experience, you can refine your skills and niche to better meet your career goals.'
    },
    {
        image: 'img/rectangle-15-JMh.png',
        name: 'Taiwo Ernest',
        role: 'AI Engineering',
        text: 'The field of web design is broad, and you might find specialization areas like user interface design, user experience design, or even focusing on specific technologies or industries. As you gain experience, you can refine your skills and niche to better meet your career goals.'
    },
    {
        image: 'img/rectangle-112-bg-2M9.png',
        name: 'Bola Ernest',
        role: 'Backend Engineering',
        text: 'The field of web design is broad, and you might find specialization areas like user interface design, user experience design, or even focusing on specific technologies or industries. As you gain experience, you can refine your skills and niche to better meet your career goals.'
    },
    {
        image: 'img/rectangle-116-bg-Xqm.png',
        name: 'Tunde Ernest',
        role: 'Full-Stack Engineering',
        text: 'The field of web design is broad, and you might find specialization areas like user interface design, user experience design, or even focusing on specific technologies or industries. As you gain experience, you can refine your skills and niche to better meet your career goals.'
    },
    // Add more testimonial objects as needed
];

let currentIndex = 0;

function showNextTestimonial() {
    const testimonial = testimonials[currentIndex];
    testimonialContent.innerHTML = `
        <img src="${testimonial.image}" class="rounded-full w-[130px] h-[130px] md:ml-[270px] mt-[80px] testimonial-image " alt="">
        <h1 class="text-2xl font-bold ml-[-20px] mt-3">${testimonial.name}</h1>
        <h1 class="text-xl md:ml-[-20px] text-[#EE3E38] mt-3">${testimonial.role}</h1>
        <img src="img/arrowbackios-a5y.png" class="md:ml-[800px] mb-[-100px] greater" alt="">
        <p class="md:w-[600px] md:ml-[50px] px-2 mt-7">${testimonial.text}</p>
    `;

    currentIndex = (currentIndex + 1) % testimonials.length;
}

setInterval(showNextTestimonial, 5000);

//NAVBAR

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        menuToggle.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
    });

    menuClose.addEventListener('click', function() {
        menu.classList.add('hidden');
        menuToggle.classList.remove('hidden');
        menuClose.classList.add('hidden');
    });
});
