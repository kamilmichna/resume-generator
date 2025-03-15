/**
 * Default profile data structure
 */
export const defaultProfileData = {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
};

/**
 * Creates a new experience entry
 * @returns {Object} Empty experience object
 */
export function createExperienceEntry() {
    return {
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        description: ''
    };
}

/**
 * Creates a new education entry
 * @returns {Object} Empty education object
 */
export function createEducationEntry() {
    return {
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: ''
    };
} 