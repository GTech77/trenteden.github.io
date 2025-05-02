document.addEventListener('DOMContentLoaded', () => {
    const splashOverlay = document.querySelector('.splash-overlay');
    const splashVideo = document.getElementById('splash-video');
    const portfolioContent = document.querySelector('.portfolio-content');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const scrollArrow = document.querySelector('.scroll-arrow');
    const heroVideo = document.getElementById('hero-video');

    // Dip to black for splash video: start with opacity 0, fade in after 1 second
    splashVideo.style.opacity = '0';
    setTimeout(() => {
        splashVideo.style.opacity = '1';
        splashVideo.style.transition = 'opacity 1s ease';
        splashVideo.play();
    }, 1000); // 1-second delay for dip-to-black effect

    // Set hero video (leader.mp4) start time to 1:14 (74 seconds)
    heroVideo.currentTime = 114;
    heroVideo.style.opacity = '0'; // Initially hidden

    // Play hero video and fade in just before splash ends (at 5 seconds)
    setTimeout(() => {
        heroVideo.style.opacity = '0.5'; // Increased transparency
        heroVideo.style.transition = 'opacity 1s ease';
        heroVideo.play();
    }, 5000); // 5 seconds, right before splash fades out

    // Hide portfolio content initially
    portfolioContent.style.opacity = '0';
    chatbotContainer.style.opacity = '0';
    scrollArrow.style.opacity = '0';

    // After splash animations, reveal portfolio content with delay
    setTimeout(() => {
        splashOverlay.style.display = 'none';
        portfolioContent.style.opacity = '1';

        // Fade in chatbot after 1 second
        setTimeout(() => {
            chatbotContainer.style.opacity = '1';
            chatbotContainer.style.transition = 'opacity 1s ease';

            // Fade in arrow 0.5 seconds after chatbot
            setTimeout(() => {
                scrollArrow.style.opacity = '1';
                scrollArrow.style.transition = 'opacity 1s ease';
            }, 500);
        }, 1000);
    }, 6000); // 6 seconds total (5s splash + 1s fade)

    // Chatbot Interaction
    const chatbotBtns = document.querySelectorAll('.chatbot-btn');
    const responseDiv = document.getElementById('chatbot-response');

    const responses = {
        education: `
            <h3>Education</h3>
            <p>Coastal Carolina University<br>
            MBA with a specialization in Commercial and Investment Real Estate<br>
            3.9 GPA<br>
            May 2025</p>
            <br>
            <p>Coastal Carolina University<br>
            BA Communication Studies, minor Business Administration<br>
            3.96 GPA, Summa Cum Laude, Honors Program Graduate<br>
            December 2023</p>
            <br>
            <p>Horry-Georgetown Technical College<br>
            Associate of Arts, Associate of Applied Science in Teacher Education<br>
            3.83 GPA, Magna Cum Laude, Phi Theta Kappa Honor Society<br>
            May 2022</p>
        `,
        involvement: `
            <h3>Campus Involvement</h3>
            <p>Residential Advisor, Coastal Carolina University<br>
            January 2023 - December 2024</p>
            <br>
            <p>Founded and led campus grass volleyball club, Coastal Carolina University<br>
            Promoted community engagement and physical activity among students</p>
            <br>
            <p>Active in Campus Ministry leadership and Bible study<br>
            Fostered spiritual growth and community support</p>
            <br>
            <p>Authored thesis: "Time Spent with Social Media and Body Dissatisfaction in Emerging Adult Females"<br>
            Explored the impact of social media on mental health and body image</p>
        `,
        teaching: `
            <h3>Teaching Experience</h3>
            <p>Introduction to Digital Culture and Design, Mukamal Ph.D<br>
            Coastal Carolina University, November 2022</p>
            <br>
            <p>TA, Technology and the Classroom, McKenzie, Ed.S, Ph.D Candidate<br>
            Coastal Carolina University, October 2024</p>
            <br>
            <p>TA, Technology and the Classroom, Evans, Ph.D.<br>
            Coastal Carolina University, October 2024</p>
            <br>
            <p>GA, Classroom Technology Facilitator, CMC Healthcare Leadership Academy<br>
            October 2023 - May 2024</p>
            <br>
            <p>Technology Teacher & Instructional Designer, Valorous Academy<br>
            Established technology program and wrestling coaching, August 2021 - May 2022</p>
        `,
        speaking: `
            <h3>Conference Speaking</h3>
            <p>FINTECH Conference Workshop Lecture and Panel Speaker<br>
            Fayetteville State University, October 2024</p>
            <br>
            <p>TitanX Conference<br>
            Streaming virtually worldwide on X and YouTube, October 2024</p>
            <br>
            <p>Pulse Chain Conference<br>
            Las Vegas, Nevada representing Love.io, September 2022</p>
        `,
        projects: `
            <h3>Current Projects</h3>
            <p>Co-Founder & Lead Developer, Good Techtactics<br>
            January 2025 - Present</p>
            <br>
            <p>Developing front-end development expertise through self-directed learning in Thailand<br>
            Focusing on HTML5, CSS3, and JavaScript implementation to create dynamic web solutions</p>
            <br>
            <p>Building PrimEnglish, a Thai-English dictionary and language learning platform<br>
            Features interactive interfaces, planned presentation to Thai Ministry of Education in August 2025</p>
            <br>
            <p>Creating sophisticated front-end designs with animations, responsive layouts, and user-centered experiences<br>
            Implementing interactive elements including chatbot interfaces, timed animations, and particle effects</p>
            <br>
            <p>Educating potential DAO members about decentralized autonomous organization principles and governance<br>
            Laying groundwork for smart contract implementation as the organization evolves</p>
        `,
        achievements: `
            <h3>Achievements</h3>
            <p>Founder & Managing Partner, The Verse Digital Assets, May 2023 - March 2025<br>
            Engineered scalable investment protocols managing $1M+ in digital assets, developed proprietary token launch framework generating $1M in initial investment</p>
            <br>
            <p>Digital Innovation Specialist & Graduate Teaching Assistant, Coastal Carolina University, October 2023 - December 2024<br>
            Architected comprehensive blockchain curriculum, orchestrated multimedia content strategies driving 40% increase in student engagement metrics</p>
            <br>
            <p>Studio Production Assistant, Videographer, Editor, ETV, December 2021 - May 2023<br>
            Optimized production systems achieving 30% improvement in operational efficiency, selected from 200+ candidates for prestigious production role</p>
            <br>
            <p>Lead Research Administrator, Cain and Daniels INC, March 2020 - August 2021<br>
            Revitalized research systems, increasing lead generation productivity by over 400%, developed efficient methods to search court case systems</p>
            <br>
            <p>Co-Founder and Chief Operating Officer, K2L Trucking LLC, January 2016 - March 2020<br>
            Dispatched a fleet of trucks, maintained positive financial statements for four consecutive years, implemented strict safety and compliance protocols</p>
        `
    };

    chatbotBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            responseDiv.innerHTML = responses[section] || '<p>Section not found.</p>';
        });
    });

    // Scroll Arrow Click to Navigate to Highlights
    scrollArrow.addEventListener('click', () => {
        document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' });
    });
});