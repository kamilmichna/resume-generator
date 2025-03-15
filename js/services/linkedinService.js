/**
 * Service for fetching and processing LinkedIn profile data
 */

/**
 * Fetches LinkedIn profile data from the API
 * @param {string} linkedinUrl - The LinkedIn profile URL
 * @returns {Promise} - Promise that resolves with the processed profile data
 */
export function fetchLinkedInData(linkedinUrl) {
    return new Promise((resolve, reject) => {
        // In a real app, this would make an API call with the LinkedIn URL
        // For now, we'll simulate an API call with the provided sample data
        setTimeout(() => {
            try {
                // Simulate API response
                const apiResponse = {
                    "data": {
                        "about": "I'm CJ, Professor of Real Estate at Schack Institute and a Founder of NOYACK, a financial education company impacting the lives of young investors everywhere through financial education, community and universal access to private markets.\n\nI am the son of Italian immigrants,  my father a highly decorated NYFD Fireman who then built one of the largest municipal building companies in New York City. Nancy Reagan gave him an award for his projects. At 16 my father had a stroke and I gave up my dream of playing in the NHL (yeah, right) to manage the family business which I knew nothing about.\n\nThat started a 40 year journey of educating myself through thousands of hours of reading and painful mistakes. But it also turned out to be my life's mission and I wish everyone finds they're purpose and is able to pusue it . I am doing this as a financial educator of young investors after a pretty successful career as the Chief Investment Officer of a nine family investing syndicate; my track record over 30 years doing this is  23% average annual returns.  We invested in: commercial real estate, media IP,  early stage venture capital, private credit, fine art and consumer packaged goods.",
                        "certifications": [
                            {
                                "authority": "Harvard Business School",
                                "issued": "Sep 1993 · Expired Jun 1994",
                                "name": "Portfolio Management Professional (PfMP)",
                                "url": null
                            }
                        ],
                        "city": "New York",
                        "company": "NYU Schack Institute of Real Estate",
                        "connections_count": 500,
                        "country": "United States",
                        "educations": [
                            {
                                "degree": "Executive Management Program",
                                "field_of_study": "",
                                "school": "Harvard Business School",
                                "date_range": ""
                            },
                            {
                                "degree": "GC",
                                "field_of_study": "Game Theory And Econometrics",
                                "school": "London School of Economics and Political Science",
                                "date_range": ""
                            },
                            {
                                "degree": "Bachelor of Science (BS)",
                                "field_of_study": "Mathematical Statistics and Probability",
                                "school": "Tufts University",
                                "date_range": ""
                            }
                        ],
                        "email": "",
                        "experiences": [
                            {
                                "company": "NYU Schack Institute of Real Estate",
                                "date_range": "Apr 2024 - present",
                                "description": "I teach in the NYU Masters Program specifically about Real Estate Investment Trusts, Financing and Investment",
                                "duration": "2 mos",
                                "is_current": true,
                                "location": "New York City Metropolitan Area",
                                "title": "Professor of Real Estate"
                            },
                            {
                                "company": "Noyack Capital",
                                "date_range": "1988 - present",
                                "description": "I am the  Chief Investment Officer of a nine UNHW family alternative investment allocator. NOYACK allocated to  commercial real estate, seed VC, consumer packaged goods, and opportunistic special situations.",
                                "duration": "36 yrs 5 mos",
                                "is_current": true,
                                "location": "New York City Metropolitan Area",
                                "title": "Chief Investment Officer of MultiFamily Office"
                            },
                            {
                                "company": "NOYACK Wealth Club",
                                "date_range": "2022 - present",
                                "description": "NOYACK (weareNOYACK.com)is a fast-growing financial education startup that is the only membership club for Millennial, Gen Z, Gen Alpha learn, interact, and invest in private markets.",
                                "duration": "2 yrs 5 mos",
                                "is_current": true,
                                "location": "NYC",
                                "title": "Founder & CEO"
                            }
                        ],
                        "first_name": "CJ",
                        "followers_count": 14648,
                        "full_name": "CJ Follini",
                        "headline": "NYU Professor of Real estate | CIO & Multi-Family Office Allocator |  #AlternativeInvestment Expert | Board Member | Publisher of #1 Subscribed Newsletter | #FinancialEducation Nonprofit | Public Speaker | Proud dad",
                        "job_title": "Professor of Real Estate",
                        "languages": "Italian, Spanish",
                        "last_name": "Follini",
                        "location": "New York, New York, United States",
                        "phone": "",
                        "profile_image_url": "https://media.licdn.com/dms/image/D4E03AQGbJVJnATuprA/profile-displayphoto-shrink_800_800/0/1702576825399?e=1721865600&v=beta&t=r74_ZJruN-pR_lRw7hWdR3c9F-ZKrhcAbkMcVOxtUTI",
                        "skills": "On-camera Interviewing|Teaching|Executive Management|Integrated Marketing|Crowdfunding|Financial Analysis|Equity Capital Markets|Distressed Debt|Film Production|Independent Film|New Media|Portfolio Management|Startups|Employee Engagement|Digital Media|Private Equity|Venture Capital|Start-ups|Film|Television|Media Production|Mobile Marketing|Content Marketing|Mobile Advertising|Content Strategy|Advertising|Content Development|Entrepreneurship|Strategy|Mobile Devices|Marketing|Real Estate Transactions|Commercial Real Estate|Investment Strategies|Investment Management|investment|Business Development|Public Speaking|Strategic Partnerships|Management|Angel Investing"
                    },
                    "message": "ok"
                };

                // Process the API response
                const processedData = processLinkedInData(apiResponse.data);
                resolve(processedData);
            } catch (error) {
                reject(error);
            }
        }, 1500);
    });
}

/**
 * Processes raw LinkedIn data into the application's format
 * @param {Object} data - Raw LinkedIn API data
 * @returns {Object} - Processed profile data
 */
function processLinkedInData(data) {
    // Format skills from pipe-separated string to array
    const skillsArray = data.skills ? data.skills.split('|') : [];

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