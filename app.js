/**
 * Main application file
 */
import { defaultProfileData } from './js/models/profileData.js';
import { templates, templateClasses } from './js/models/templates.js';
import { fetchLinkedInData } from './js/services/linkedinService.js';
import { profileManager } from './js/components/profileManager.js';
import { resumePreview } from './js/components/resumePreview.js';
import { generatePDF } from './js/utils/pdfGenerator.js';

// Define the app function
function app() {
    return {
        step: 1,
        isLoading: false,
        linkedinUrl: '',
        profileData: defaultProfileData,
        newSkill: '',
        selectedTemplate: 1, // Default template ID (numeric)
        templateClasses: templateClasses,
        templates: templates,
        currentPage: 1,
        totalPages: 1,

        // Fetch LinkedIn data from API
        async fetchLinkedInData() {
            this.isLoading = true;
            try {
                this.profileData = await fetchLinkedInData(this.linkedinUrl);
                this.step = 2;
            } catch (error) {
                console.error('Error fetching LinkedIn data:', error);
                // Handle error (could add error state and message)
            } finally {
                this.isLoading = false;
            }
        },

        // Add a new experience entry
        addExperience() {
            this.profileData.experience = profileManager.addExperience(this.profileData.experience);
        },

        // Remove an experience entry
        removeExperience(index) {
            this.profileData.experience = profileManager.removeExperience(this.profileData.experience, index);
        },

        // Add a new education entry
        addEducation() {
            this.profileData.education = profileManager.addEducation(this.profileData.education);
        },

        // Remove an education entry
        removeEducation(index) {
            this.profileData.education = profileManager.removeEducation(this.profileData.education, index);
        },

        // Add a new skill
        addSkill() {
            this.profileData.skills = profileManager.addSkill(this.profileData.skills, this.newSkill);
            this.newSkill = '';
        },

        // Remove a skill
        removeSkill(index) {
            this.profileData.skills = profileManager.removeSkill(this.profileData.skills, index);
        },

        // Generate resume
        async generateResume() {
            this.step = 3;
            this.currentPage = 1;
            this.totalPages = await resumePreview.calculateTotalPages();
        },

        // Navigate to previous page
        prevPage() {
            this.currentPage = resumePreview.prevPage(this.currentPage);
        },

        // Navigate to next page
        nextPage() {
            this.currentPage = resumePreview.nextPage(this.currentPage, this.totalPages);
        },

        // Download resume as PDF with all pages
        downloadResume() {
            generatePDF(this.profileData.name, this.totalPages);
        },

        // Get current template
        getCurrentTemplate() {
            return resumePreview.getCurrentTemplate(this.templates, this.selectedTemplate);
        }
    };
}

// Make app function globally accessible for Alpine.js
window.app = app; 