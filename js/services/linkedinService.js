/**
 * Service for fetching and processing LinkedIn profile data
 */

/**
 * Fetches LinkedIn profile data from the API
 * @param {string} linkedinUrl - The LinkedIn profile URL
 * @returns {Promise} - Promise that resolves with the processed profile data
 */
export async function fetchLinkedInData(linkedinUrl) {
    // In a real app, this would make an API call with the LinkedIn URL
    // For now, we'll simulate an API call with the provided sample data
    try {
        console.log("FETCHING DATA")
        // Simulate API response
        const apiResponse = await fetch(`https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile?linkedin_url=${linkedinUrl}&include_skills=true&include_certifications=true&include_publications=false&include_honors=false&include_volunteers=false&include_projects=false&include_patents=false&include_courses=true&include_organizations=true&include_profile_status=true&include_company_public_url=false`, {
            headers: {
                'x-rapidapi-key': 'RAPID_API_KEY_HERE',
                'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
            },
            mode: 'cors'
        })

        const finalData = await apiResponse.json();
        // Process the API response
        const processedData = processLinkedInData(finalData.data);
        return processedData;
    } catch (error) {
        throw error;
    }
}

/**
 * Processes raw LinkedIn data into the application's format
 * @param {Object} data - Raw LinkedIn API data
 * @returns {Object} - Processed profile data
 */
function processLinkedInData(data = {}) {
    console.log(data)
    // Format skills from pipe-separated string to array and limit to 10
    const skillsArray = data.skills ? data.skills.split('|').slice(0, 10) : [];

    // Map the API response to our profileData structure
    return {
        name: data.full_name || `${data.first_name || ''} ${data.last_name || ''}`.trim(),
        title: data.headline || data.job_title || '',
        email: data.email || '',
        phone: data.phone || '',
        location: data.location || `${data.city || ''}, ${data.country || ''}`.replace(', ,', ',').replace(/^, |, $/, ''),
        summary: data.about || '',
        experience: (data.experiences || []).map(exp => ({
            company: exp.company || '',
            title: exp.title || '',
            startDate: exp.date_range ? exp.date_range.split(' - ')[0] : '',
            endDate: exp.is_current ? 'Present' : (exp.date_range ? exp.date_range.split(' - ')[1] : ''),
            description: exp.description || ''
        })),
        education: (data.educations || []).map(edu => ({
            institution: edu.school || '',
            degree: edu.degree || '',
            startDate: edu.date_range ? edu.date_range.split(' - ')[0] : '',
            endDate: edu.date_range ? edu.date_range.split(' - ')[1] : '',
            description: edu.field_of_study || ''
        })),
        skills: skillsArray
    };
} 