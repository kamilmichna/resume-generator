/**
 * Resume preview component
 * Handles resume preview
 */

export const resumePreview = {
    /**
     * Get the current template object
     * @param {Array} templates - The templates array
     * @param {number} selectedTemplateId - The selected template ID
     * @returns {Object} - The selected template object
     */
    getCurrentTemplate(templates, selectedTemplateId) {
        return templates.find(t => t.id === selectedTemplateId);
    },

    /**
     * Apply template styles to the resume preview
     * @param {number} templateId - The selected template ID
     * @param {HTMLElement} targetElement - Optional target element to apply styles to (defaults to .resume-page)
     */
    applyTemplateStyles(templateId, targetElement = null) {
        const resumePagesList = targetElement || document.querySelectorAll('.resume-page');
        if (!resumePagesList?.length) return;

        // Import template classes
        import('../models/templates.js').then(module => {
            const templateClasses = module.templateClasses;
            const styles = templateClasses[templateId];

            if (!styles) return;

            // Apply container styles
            // Apply container styles to all resume pages
            resumePagesList.forEach(resumePage => {
                resumePage.className = `${styles.container} p-8 box-border`;

                // Apply header styles
                const header = resumePage.querySelector('.resume-header');
                if (header) {
                    header.className = `resume-header ${styles.header}`;

                    // Apply name styles
                    const name = header.querySelector('.resume-name');
                    if (name) name.className = `resume-name ${styles.name}`;

                    // Apply title styles
                    const title = header.querySelector('.resume-title');
                    if (title) title.className = `resume-title ${styles.title}`;

                    // Apply contact styles
                    const contact = header.querySelector('.resume-contact');
                    if (contact) contact.className = `resume-contact ${styles.contact}`;
                }

                // Apply section styles
                const sections = resumePage.querySelectorAll('.resume-section');
                sections.forEach(section => {
                    section.className = `resume-section ${styles.section}`;

                    // Apply section title styles
                    const sectionTitle = section.querySelector('.resume-section-title');
                    if (sectionTitle) sectionTitle.className = `resume-section-title ${styles.sectionTitle}`;

                    // Apply job title styles
                    const jobTitles = section.querySelectorAll('.resume-job-title');
                    jobTitles.forEach(jobTitle => {
                        jobTitle.className = `resume-job-title ${styles.jobTitle}`;
                    });

                    // Apply job company styles
                    const jobCompanies = section.querySelectorAll('.resume-job-company');
                    jobCompanies.forEach(jobCompany => {
                        jobCompany.className = `resume-job-company ${styles.jobCompany}`;
                    });

                    // Apply job date styles
                    const jobDates = section.querySelectorAll('.resume-job-date');
                    jobDates.forEach(jobDate => {
                        jobDate.className = `resume-job-date ${styles.jobDate}`;
                    });

                    // Apply skill container styles
                    const skillContainers = section.querySelectorAll('.resume-skill-container');
                    skillContainers.forEach(skillContainer => {
                        skillContainer.className = `resume-skill-container ${styles.skillContainer}`;

                        // Apply skill styles
                        const skills = skillContainer.querySelectorAll('.resume-skill');
                        skills.forEach(skill => {
                            skill.className = `resume-skill ${styles.skill}`;
                        });
                    });
                });
            });
        });
    },
}; 