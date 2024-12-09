const navItems = document.querySelectorAll('.list'); // Navbar links
const sections = document.querySelectorAll('main > div'); // Main sections
const filters = document.querySelectorAll('.fillter'); // Filter buttons
const filterSections = document.querySelectorAll('.education, .skill, .experience, .achievements'); // Filterable sections

let disableScrollActive = false; // Flag to control scroll-based active link

// Handle active class on click (Navbar)
navItems.forEach(item => {
    item.addEventListener('click', function (e) {
        // e.preventDefault(); // Prevent the default anchor behavior

        disableScrollActive = true; // Disable scroll-based active link temporarily
        navItems.forEach(nav => nav.classList.remove('active')); // Remove active from all
        this.classList.add('active'); // Add active to clicked item

        // Smoothly scroll to the corresponding section
        const targetId = this.querySelector('a').getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                // behavior: 'smooth',
                // block: 'start',
            });
        }

        // Enable scroll-based active link after a brief timeout
        // setTimeout(() => {
        //     disableScrollActive = false;
        // }, 500); // Adjust timeout duration to match scrolling animation
    });
});

// Handle active class on scroll
window.onscroll = () => {
    if (disableScrollActive) return; // Skip scroll logic if flag is set

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop-150; // Adjust offset as needed
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            navItems.forEach(nav => nav.classList.remove('active')); // Remove active from all
            const activeLink = document.querySelector(`.list a[href="#${id}"]`);
            if (activeLink) {
                activeLink.parentElement.classList.add('active'); // Add active to parent <li>
            }
        }
    });
};

// Handle filter button active state and show relevant section
filters.forEach((filter, index) => {
    filter.addEventListener('click', function () {
        // Remove active class from all filters and sections
        filters.forEach(f => f.classList.remove('actived'));
        filterSections.forEach(section => section.style.display = 'none');

        // Add active class to clicked filter and show corresponding section
        this.classList.add('actived');
        filterSections[index].style.display = 'block';
    });
});

// Initial setup: Hide all sections except the first one (e.g., Education)
filterSections.forEach(section => section.style.display = 'none');
filterSections[0].style.display = 'block'; // Show the first section by default


// animation for the skills

document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll('.bar');
    const percentages = {
        Cpp: 90,
        C_Language: 80,
        Python: 70,
        Java: 70,
        MySQL: 80,
        HTML: 95,
        CSS: 90,
        JavaScript: 60,
        Machine_Learning: 65,
        DSA: 70,

        Communication: 90,
        Time_Management: 85,
        Cooperate: 80,
        Adaptability: 88,
        Problem_solving: 92,
        Leadership: 87,
        Story_Telling: 75,
        Collaboration: 89,
        Creativity: 90,
        Prioritization: 80,
    };

    // Function to start the animation
    function startAnimation() {
        // Reset the width of all bars to 0% before animating
        bars.forEach(bar => {
            const barSpan = bar.querySelector('span');
            const percentageText = bar.querySelector('.percent');
            
            barSpan.style.width = '0%'; // Reset bar width
            percentageText.textContent = '0%'; // Reset percentage text
        });

        // Animate the bars after a brief delay
        setTimeout(() => {
            bars.forEach(bar => {
                const barSpan = bar.querySelector('span');
                const percentageText = bar.querySelector('.percent');
                const skillClass = bar.querySelector('span').classList[0]; // Get the class of the span (e.g., "Cpp")

                // Get the percentage value from the percentages object
                const skillPercentage = percentages[skillClass] || 0;

                // Animate the bar width and show percentage text
                barSpan.style.width = `${skillPercentage}%`;
                percentageText.textContent = `${skillPercentage}%`;
            });
        }, 100); // Slight delay to ensure the reset is visible
    }

    // Add event listener to the "Skills" button
    const skillButton = document.querySelector('#skill'); // Replace with your button's selector
    skillButton.addEventListener('click', function () {
        startAnimation();
    });
});





