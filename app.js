/**
 * Main application file
 */
import { defaultProfileData } from './js/models/profileData.js';
import { templates, templateClasses } from './js/models/templates.js';
import { fetchLinkedInData } from './js/services/linkedinService.js';
import { profileManager } from './js/components/profileManager.js';
import { resumePreview } from './js/components/resumePreview.js';
import { generatePDF } from './js/utils/pdfGenerator.js';

/**
 * Main application function for Alpine.js
 */
export function app() {
    return {
        step: 2,
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
            // Check if already at max skills limit (10)
            if (this.profileData.skills.length >= 10) {
                alert('Maksymalna liczba umiejętności to 10.');
                return;
            }

            this.profileData.skills = profileManager.addSkill(this.profileData.skills, this.newSkill);
            this.newSkill = '';
        },

        // Remove a skill
        removeSkill(index) {
            this.profileData.skills = profileManager.removeSkill(this.profileData.skills, index);
        },

        // Generate resume
        generateResume() {
            this.step = 3;
            this.currentPage = 1;

            // Wait for the DOM to update before calculating pages
            setTimeout(() => {
                // Apply template styles
                resumePreview.applyTemplateStyles(this.selectedTemplate);

                // Calculate pages
                this.calculatePages();

                // Add resize listener to recalculate pages when window size changes
                window.addEventListener('resize', this.calculatePages.bind(this));

                // Set initial page transform
                this.updatePageView();
            }, 100);
        },

        // Calculate total pages
        calculatePages() {
            this.totalPages = resumePreview.calculateTotalPages();
        },

        // Update page view based on current page
        updatePageView() {
            resumePreview.setPageTransform(this.currentPage);
        },

        // Download resume as PDF
        downloadResume() {
            window.scrollTo(0, 0)
            generatePDF(this.profileData.name);
        },

        // Get current template
        getCurrentTemplate() {
            return resumePreview.getCurrentTemplate(this.templates, this.selectedTemplate);
        },

        // Preview template
        previewTemplate(templateId) {
            // Store the current selection
            const currentSelection = this.selectedTemplate;

            // Set the selected template to the preview template
            this.selectedTemplate = templateId;

            // Create a modal for the preview
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-auto">
                    <div class="p-4 border-b flex justify-between items-center">
                        <h3 class="text-lg font-bold">Podgląd Szablonu</h3>
                        <button id="close-preview" class="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-6">
                        <div id="template-preview-container" class="bg-gray-100 p-4 flex justify-center">
                            <div class="bg-white shadow-lg w-full">
                                <!-- Clone the resume preview -->
                                <div id="template-preview" class="font-sans leading-relaxed text-gray-800 p-8 box-border">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-t flex justify-end">
                        <button id="use-template" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Użyj tego szablonu
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Clone the resume preview content
            const resumePreview = document.getElementById('resume-preview');
            const templatePreview = document.getElementById('template-preview');

            if (resumePreview && templatePreview) {
                templatePreview.innerHTML = resumePreview.innerHTML;

                // Apply the template styles
                setTimeout(() => {
                    resumePreview.applyTemplateStyles(templateId, templatePreview);
                }, 100);
            }

            // Add event listeners
            document.getElementById('close-preview').addEventListener('click', () => {
                // Restore the original selection
                this.selectedTemplate = currentSelection;
                document.body.removeChild(modal);
            });

            document.getElementById('use-template').addEventListener('click', () => {
                // Keep the new selection
                document.body.removeChild(modal);
            });
        }
    };
}