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
     * @param {HTMLElement} targetElement - Optional target element to apply styles to (defaults to resume-preview)
     */
    applyTemplateStyles(templateId, targetElement = null) {
        const resumePreview = targetElement || document.getElementById('resume-preview');
        if (!resumePreview) return;

        // Import template classes
        import('../models/templates.js').then(module => {
            const templateClasses = module.templateClasses;
            const styles = templateClasses[templateId];

            if (!styles) return;

            // Apply container styles
            resumePreview.className = `${styles.container} p-8 box-border`;

            // Apply header styles
            const header = resumePreview.querySelector('.resume-header');
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
            const sections = resumePreview.querySelectorAll('.resume-section');
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
    },

    /**
     * Calculate total pages based on content height
     * @returns {number} - The total number of pages
     */
    calculateTotalPages() {
        const resumePreview = document.getElementById('resume-preview');
        if (!resumePreview) return 1;

        // Get the content height
        const contentHeight = resumePreview.scrollHeight;

        // A4 dimensions in mm (210mm × 297mm)
        // We need to account for padding (16mm on each side = 32mm total)
        const pageHeightMM = 297 - 32; // 265mm of usable height

        // Convert mm to pixels (approximate conversion)
        // Standard is about 3.78 pixels per mm (96 DPI)
        const pixelsPerMM = 3.78;
        const pageHeightPx = pageHeightMM * pixelsPerMM;

        // Calculate total pages (minimum 1)
        return Math.max(1, Math.ceil(contentHeight / pageHeightPx));
    },

    /**
     * Set the transform for the current page
     * @param {number} currentPage - The current page number
     */
    setPageTransform(currentPage) {
        const resumePreview = document.getElementById('resume-preview');
        if (!resumePreview) return;

        // A4 dimensions in mm (210mm × 297mm)
        // We need to account for padding (16mm on each side = 32mm total)
        const pageHeightMM = 297 - 32; // 265mm of usable height

        // Convert mm to pixels (approximate conversion)
        const pixelsPerMM = 3.78;
        const pageHeightPx = pageHeightMM * pixelsPerMM;

        // Calculate the transform
        const translateY = (currentPage - 1) * -pageHeightPx;

        // Apply the transform
        resumePreview.style.transform = `translateY(${translateY}px)`;
    }
}; 