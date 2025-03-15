/**
 * Profile manager component
 * Handles profile data editing functionality
 */
import { createExperienceEntry, createEducationEntry } from '../models/profileData.js';

export const profileManager = {
    /**
     * Add a new experience entry
     * @param {Array} experienceArray - The experience array to modify
     * @returns {Array} - The updated experience array
     */
    addExperience(experienceArray) {
        experienceArray.push(createExperienceEntry());
        return experienceArray;
    },

    /**
     * Remove an experience entry
     * @param {Array} experienceArray - The experience array to modify
     * @param {number} index - The index to remove
     * @returns {Array} - The updated experience array
     */
    removeExperience(experienceArray, index) {
        experienceArray.splice(index, 1);
        return experienceArray;
    },

    /**
     * Add a new education entry
     * @param {Array} educationArray - The education array to modify
     * @returns {Array} - The updated education array
     */
    addEducation(educationArray) {
        educationArray.push(createEducationEntry());
        return educationArray;
    },

    /**
     * Remove an education entry
     * @param {Array} educationArray - The education array to modify
     * @param {number} index - The index to remove
     * @returns {Array} - The updated education array
     */
    removeEducation(educationArray, index) {
        educationArray.splice(index, 1);
        return educationArray;
    },

    /**
     * Add a new skill
     * @param {Array} skillsArray - The skills array to modify
     * @param {string} newSkill - The skill to add
     * @returns {Array} - The updated skills array
     */
    addSkill(skillsArray, newSkill) {
        if (newSkill.trim() !== '') {
            skillsArray.push(newSkill.trim());
        }
        return skillsArray;
    },

    /**
     * Remove a skill
     * @param {Array} skillsArray - The skills array to modify
     * @param {number} index - The index to remove
     * @returns {Array} - The updated skills array
     */
    removeSkill(skillsArray, index) {
        skillsArray.splice(index, 1);
        return skillsArray;
    }
}; 