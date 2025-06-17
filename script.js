// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initial language setup from constants.js
    setLanguage(LANGUAGES.KO); // Default to Korean

    // Navbar language toggle
    const langKorBtn = document.getElementById('lang-kor');
    const langEngBtn = document.getElementById('lang-eng');

    langKorBtn.addEventListener('click', () => {
        setLanguage(LANGUAGES.KO);
        langKorBtn.classList.add('active');
        langEngBtn.classList.remove('active');
    });

    langEngBtn.addEventListener('click', () => {
        setLanguage(LANGUAGES.EN);
        langEngBtn.classList.add('active');
        langKorBtn.classList.remove('active');
    });

    function updateUIForLanguageChange() {
        // Navbar
        document.getElementById('navbar-name-title').textContent = getLocalizedString('navbar.home');
        document.getElementById('nav-intro').textContent = getLocalizedString('navbar.sections.0');
        document.getElementById('nav-education').textContent = getLocalizedString('navbar.sections.1');
        document.getElementById('nav-experience').textContent = getLocalizedString('navbar.sections.2');
        document.getElementById('nav-projects').textContent = getLocalizedString('navbar.sections.3');
        document.getElementById('nav-skills').textContent = getLocalizedString('navbar.sections.4');
        document.getElementById('nav-research').textContent = getLocalizedString('navbar.sections.5');
        document.getElementById('nav-awards').textContent = getLocalizedString('navbar.sections.6');

        // Summary Area
        document.getElementById('summary-name').textContent = getLocalizedString('navbar.home'); // Use the name from navbar home
        document.getElementById('summary-tagline').textContent = getLocalizedString('summary.tagline');
        document.getElementById('summary-contact-title').textContent = getLocalizedString('summary.title'); // Reusing summary title for contact
        document.getElementById('summary-email').textContent = getLocalizedString('summary.contact.email');
        document.getElementById('summary-phone').textContent = getLocalizedString('summary.contact.phone');
        document.getElementById('summary-location').textContent = getLocalizedString('summary.contact.location');
        document.getElementById('summary-keywords-title').textContent = getLocalizedString('summary.keywords');
        document.getElementById('summary-qualifications-title').textContent = getLocalizedString('summary.qualifications');
        document.getElementById('summary-qualification-text').textContent = getLocalizedString('summary.qualifications');
        document.getElementById('summary-links-title').textContent = getLocalizedString('summary.externalLinks.github'); // Reusing GitHub link for general title
        document.getElementById('link-github').textContent = getLocalizedString('summary.externalLinks.github');
        document.getElementById('link-linkedin').textContent = getLocalizedString('summary.externalLinks.linkedin');
        document.getElementById('link-blog').textContent = getLocalizedString('summary.externalLinks.blog');
        document.getElementById('contact-cta-button').textContent = getLocalizedString('summary.ctaButton');

        // Populate Keywords in Summary Area
        const keywordsContainer = document.getElementById('summary-keywords');
        keywordsContainer.innerHTML = ''; // Clear previous keywords
        getLocalizedString('summary.keywords').split(', ').forEach(keyword => {
            const span = document.createElement('span');
            span.classList.add('tag');
            span.textContent = keyword;
            keywordsContainer.appendChild(span);
        });

        // Contents Area - Section Titles
        document.getElementById('section-intro-title').textContent = getLocalizedString('contents.sections.intro.title');
        document.getElementById('intro-self-introduction-subtitle').textContent = getLocalizedString('contents.sections.intro.selfIntroduction.subtitle');
        document.getElementById('intro-self-introduction-text').textContent = getLocalizedString('contents.sections.intro.selfIntroduction.text');
        document.getElementById('intro-goals-subtitle').textContent = getLocalizedString('contents.sections.intro.goals.subtitle');
        document.getElementById('intro-goals-text').textContent = getLocalizedString('contents.sections.intro.goals.text');

        document.getElementById('section-education-title').textContent = getLocalizedString('contents.sections.education.title');
        renderEducation(); // Re-render education section

        document.getElementById('section-experience-title').textContent = getLocalizedString('contents.sections.experience.title');
        renderExperience(); // Re-render experience section

        document.getElementById('section-projects-title').textContent = getLocalizedString('contents.sections.projects.title');
        renderProjects(); // Re-render projects section

        document.getElementById('section-skills-title').textContent = getLocalizedString('contents.sections.skills.title');
        renderSkills(); // Re-render skills section

        document.getElementById('section-research-title').textContent = getLocalizedString('contents.sections.research.title');
        renderResearch(); // Re-render research section

        document.getElementById('section-awards-title').textContent = getLocalizedString('contents.sections.awards.title');
        renderAwards(); // Re-render awards section

        // Footer
        document.getElementById('footer-copyright').textContent = getLocalizedString('footer.copyright');

        // Modals
        document.getElementById('contact-modal-title').textContent = getLocalizedString('modals.contact.title');
        document.getElementById('contact-modal-description').textContent = getLocalizedString('modals.contact.description');
        document.getElementById('contact-name-label').textContent = getLocalizedString('modals.contact.nameLabel');
        document.getElementById('contact-email-label').textContent = getLocalizedString('modals.contact.emailLabel');
        document.getElementById('contact-message-label').textContent = getLocalizedString('modals.contact.messageLabel');
        document.getElementById('contact-send-button').textContent = getLocalizedString('modals.contact.sendButton');
        document.getElementById('contact-modal-close-button').textContent = getLocalizedString('modals.contact.closeButton');
        
        // Project Detail Modal Labels (dynamically set in openProjectDetailModal)
        document.getElementById('project-detail-view-project-button').textContent = getLocalizedString('modals.projectDetail.viewProject');
        document.getElementById('project-detail-modal-close-button').textContent = getLocalizedString('modals.projectDetail.closeButton');
    }

    // --- Render Functions for Dynamic Content ---

    function renderEducation() {
        const educationList = document.getElementById('education-timeline');
        educationList.innerHTML = ''; // Clear previous content
        getLocalizedString('contents.sections.education.items').forEach(item => {
            const div = document.createElement('div');
            div.classList.add('timeline-item');
            div.innerHTML = `
                <h4>${item.degree}</h4>
                <p class="institution-period">${item.institution} | ${item.period}</p>
                <p class="description">${item.description}</p>
            `;
            educationList.appendChild(div);
        });
    }

    function renderExperience() {
        const experienceList = document.getElementById('experience-list');
        experienceList.innerHTML = ''; // Clear previous content
        getLocalizedString('contents.sections.experience.items').forEach(item => {
            const div = document.createElement('div');
            div.classList.add('experience-item');
            const dutiesHtml = item.duties.map(duty => `<li>${duty}</li>`).join('');
            const projectsHtml = item.projects.map(project => `<li><strong>${project.name}:</strong> ${project.description}</li>`).join('');
            div.innerHTML = `
                <h4>${item.position}</h4>
                <p class="company-period">${item.company} | ${item.period}</p>
                <ul>${dutiesHtml}</ul>
                <div class="projects-list">
                    <h5>${getLocalizedString('contents.sections.experience.projects')}</h5>
                    <ul>${projectsHtml}</ul>
                </div>
            `;
            experienceList.appendChild(div);
        });
    }

    function renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = ''; // Clear previous content
        getLocalizedString('contents.sections.projects.items').forEach(item => {
            const div = document.createElement('div');
            div.classList.add('project-card');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name} Thumbnail">
                <div class="project-card-content">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <p class="technologies"><strong>${getLocalizedString('contents.sections.projects.technologies')}</strong>: ${item.technologies.join(', ')}</p>
                    <p class="period"><strong>${getLocalizedString('contents.sections.projects.period')}</strong>: ${item.period}</p>
                    <button class="view-button" data-project-id="${item.id}">${getLocalizedString('modals.projectDetail.viewProject')}</button>
                </div>
            `;
            projectsGrid.appendChild(div);
        });

        // Add event listeners for project view buttons
        document.querySelectorAll('.project-card .view-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const projectId = parseInt(event.target.dataset.projectId);
                const project = getLocalizedString('contents.sections.projects.items').find(p => p.id === projectId);
                if (project) {
                    openProjectDetailModal(project);
                }
            });
        });
    }

    function renderSkills() {
        const skillsCategories = document.getElementById('skills-categories');
        skillsCategories.innerHTML = ''; // Clear previous content
        getLocalizedString('contents.sections.skills.categories').forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skills-category');
            categoryDiv.innerHTML = `<h4>${category.name}</h4><div class="skills-list"></div>`;
            const skillsList = categoryDiv.querySelector('.skills-list');
            category.items.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-item');
                skillItem.innerHTML = `
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-level-bar">
                        <div class="skill-level-bar-fill" style="width: ${skill.level}%;"></div>
                    </div>
                `;
                skillsList.appendChild(skillItem);
            });
            skillsCategories.appendChild(categoryDiv);
        });
    }

    function renderResearch() {
        const researchList = document.getElementById('research-list');
        researchList.innerHTML = ''; // Clear previous content
        getLocalizedString('contents.sections.research.items').forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            div.innerHTML = `
                <h4>${item.title}</h4>
                <p class="meta-info">${item.publisher} | ${item.date}</p>
                <a href="${item.link}" target="_blank" class="view-button">${getLocalizedString('modals.projectDetail.viewProject')}</a>
            `;
            researchList.appendChild(div);
        });
    }

    function renderAwards() {
        const awardsList = document.getElementById('awards-list');
        awardsList.innerHTML = ''; // Clear previous content
        getLocalizedString('contents.sections.awards.items').forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            div.innerHTML = `
                <h4>${item.name}</h4>
                <p class="meta-info">${item.issuer} | ${item.date}</p>
            `;
            awardsList.appendChild(div);
        });
    }

    // --- Modal Logic ---

    // Contact Modal
    const contactModal = document.getElementById('contact-modal');
    const contactCtaButton = document.getElementById('contact-cta-button');
    const contactModalCloseButtons = contactModal.querySelectorAll('.modal-close-button, #contact-modal-close-button');
    const contactForm = contactModal.querySelector('.contact-form');
    const contactFormMessage = document.getElementById('contact-form-message');

    contactCtaButton.addEventListener('click', () => {
        contactModal.classList.add('active');
        contactFormMessage.style.display = 'none'; // Hide message on open
        contactFormMessage.classList.remove('success', 'error');
        contactForm.reset(); // Clear form fields
    });

    contactModalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });
    });

    contactModal.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.classList.remove('active');
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission
        console.log('Form submitted:', {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            message: document.getElementById('contact-message').value
        });

        // Simulate API call (replace with actual API call)
        setTimeout(() => {
            const success = Math.random() > 0.3; // Simulate 70% success rate
            if (success) {
                contactFormMessage.textContent = getLocalizedString('modals.contact.successMessage');
                contactFormMessage.classList.remove('error');
                contactFormMessage.classList.add('success');
                contactForm.reset(); // Clear form on success
            } else {
                contactFormMessage.textContent = getLocalizedString('modals.contact.errorMessage');
                contactFormMessage.classList.remove('success');
                contactFormMessage.classList.add('error');
            }
            contactFormMessage.style.display = 'block';
        }, 1000);
    });

    // Project Detail Modal
    const projectDetailModal = document.getElementById('project-detail-modal');
    const projectDetailModalCloseButtons = projectDetailModal.querySelectorAll('.modal-close-button, #project-detail-modal-close-button');

    function openProjectDetailModal(project) {
        document.getElementById('project-detail-title').textContent = project.name;
        document.getElementById('project-detail-objective-label').textContent = "목표" + (currentLanguage === LANGUAGES.EN ? " (Objective)" : "");
        document.getElementById('project-detail-objective').textContent = project.detail.objective;
        document.getElementById('project-detail-contribution-label').textContent = "기여" + (currentLanguage === LANGUAGES.EN ? " (Contribution)" : "");
        document.getElementById('project-detail-contribution').textContent = project.detail.contribution;
        document.getElementById('project-detail-result-label').textContent = "결과" + (currentLanguage === LANGUAGES.EN ? " (Result)" : "");
        document.getElementById('project-detail-result').textContent = project.detail.result;
        
        const projectDetailLink = document.getElementById('project-detail-link');
        projectDetailLink.href = project.link;
        projectDetailLink.querySelector('span').textContent = getLocalizedString('modals.projectDetail.viewProject');


        projectDetailModal.classList.add('active');
    }

    projectDetailModalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            projectDetailModal.classList.remove('active');
        });
    });

    projectDetailModal.addEventListener('click', (event) => {
        if (event.target === projectDetailModal) {
            projectDetailModal.classList.remove('active');
        }
    });

    // Initial render of all dynamic content
    updateUIForLanguageChange();
});
