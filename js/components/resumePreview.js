/**
 * Resume preview component
 * Handles resume preview and pagination
 */

export const resumePreview = {
    /**
     * Calculate total pages in the resume
     * @returns {number} - The total number of pages
     */
    calculateTotalPages() {
        return new Promise(resolve => {
            setTimeout(() => {
                const resumeHeight = document.getElementById('resume-preview').scrollHeight;
                const pageHeight = 297; // A4 height in mm
                const totalPages = Math.ceil(resumeHeight / pageHeight);
                resolve(totalPages);
            }, 100);
        });
    },

    /**
     * Navigate to previous page
     * @param {number} currentPage - The current page
     * @returns {number} - The new current page
     */
    prevPage(currentPage) {
        return currentPage > 1 ? currentPage - 1 : currentPage;
    },

    /**
     * Navigate to next page
     * @param {number} currentPage - The current page
     * @param {number} totalPages - The total number of pages
     * @returns {number} - The new current page
     */
    nextPage(currentPage, totalPages) {
        return currentPage < totalPages ? currentPage + 1 : currentPage;
    },

    /**
     * Get the current template object
     * @param {Array} templates - The templates array
     * @param {number} selectedTemplateId - The selected template ID
     * @returns {Object} - The selected template object
     */
    getCurrentTemplate(templates, selectedTemplateId) {
        return templates.find(t => t.id === selectedTemplateId);
    }
}; 