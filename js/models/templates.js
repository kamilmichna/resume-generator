/**
 * Resume template definitions
 */
export const templates = [
    {
        id: 1,
        name: "Klasyczny",
        color: "gray-700",
        accent: "gray-500",
        description: "Tradycyjny, elegancki szablon odpowiedni dla większości branż"
    },
    {
        id: 2,
        name: "Nowoczesny",
        color: "blue-700",
        accent: "blue-500",
        description: "Współczesny design z akcentami kolorystycznymi"
    },
    {
        id: 3,
        name: "Profesjonalny",
        color: "indigo-700",
        accent: "indigo-500",
        description: "Formalny układ idealny dla stanowisk kierowniczych"
    },
    {
        id: 4,
        name: "Minimalistyczny",
        color: "gray-800",
        accent: "gray-400",
        description: "Prosty i przejrzysty design z dużą ilością białej przestrzeni"
    },
    {
        id: 5,
        name: "Menedżerski",
        color: "gray-900",
        accent: "yellow-500",
        description: "Wyrafinowany szablon dla kadry zarządzającej"
    },
    {
        id: 6,
        name: "Kreatywny",
        color: "purple-700",
        accent: "pink-500",
        description: "Odważny design dla branż kreatywnych"
    },
    {
        id: 7,
        name: "Techniczny",
        color: "teal-700",
        accent: "teal-500",
        description: "Funkcjonalny układ dla specjalistów IT i inżynierów"
    },
    {
        id: 8,
        name: "Korporacyjny",
        color: "blue-900",
        accent: "blue-400",
        description: "Profesjonalny wygląd dla środowiska korporacyjnego"
    },
    {
        id: 9,
        name: "Akademicki",
        color: "red-800",
        accent: "red-500",
        description: "Formalny układ dla środowiska naukowego i akademickiego"
    },
    {
        id: 10,
        name: "Odważny",
        color: "black",
        accent: "yellow-400",
        description: "Wyrazisty design przyciągający uwagę"
    }
];

/**
 * Template CSS classes and styling information
 */
export const templateClasses = {
    // Template 1: Klasyczny
    1: {
        container: "font-serif leading-relaxed",
        header: "text-center border-b-2 border-gray-700 pb-4",
        name: "text-3xl font-bold text-gray-800",
        title: "text-xl text-gray-600 mt-1",
        contact: "flex justify-center space-x-4 mt-2 text-sm text-gray-600",
        section: "mt-6",
        sectionTitle: "text-xl font-bold mb-2 text-gray-700 border-b border-gray-300 pb-1",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-gray-600",
        jobDate: "text-gray-600 italic",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
    },

    // Template 2: Nowoczesny
    2: {
        container: "font-sans leading-relaxed",
        header: "bg-blue-700 text-white p-6 rounded-t-lg",
        name: "text-3xl font-bold",
        title: "text-xl mt-1 text-blue-100",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-blue-100",
        section: "mt-6 px-6",
        sectionTitle: "text-xl font-bold mb-3 text-blue-700 flex items-center",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-blue-600 font-medium",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm"
    },

    // Template 3: Profesjonalny
    3: {
        container: "font-sans leading-relaxed",
        header: "border-l-4 border-indigo-700 pl-4 py-2",
        name: "text-3xl font-bold text-gray-800",
        title: "text-xl text-indigo-700 mt-1",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-gray-600",
        section: "mt-6",
        sectionTitle: "text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-1",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-indigo-600",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "border border-indigo-300 px-3 py-1 rounded-md text-sm text-indigo-700"
    },

    // Template 4: Minimalistyczny
    4: {
        container: "font-sans leading-relaxed",
        header: "text-left pb-4",
        name: "text-3xl font-light text-gray-800",
        title: "text-xl text-gray-600 mt-1",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-gray-500",
        section: "mt-8",
        sectionTitle: "text-lg uppercase tracking-wider font-light mb-3 text-gray-500",
        jobTitle: "font-medium text-gray-800",
        jobCompany: "text-gray-600",
        jobDate: "text-gray-500 text-sm",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-gray-100 px-3 py-1 text-sm text-gray-700"
    },

    // Template 5: Menedżerski
    5: {
        container: "font-serif leading-relaxed",
        header: "border-b-2 border-yellow-500 pb-4",
        name: "text-3xl font-bold text-gray-900",
        title: "text-xl text-gray-700 mt-1",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-gray-600",
        section: "mt-6",
        sectionTitle: "text-xl font-bold mb-3 text-gray-900 flex items-center",
        jobTitle: "font-bold text-gray-900",
        jobCompany: "text-gray-700 font-medium",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm"
    },

    // Template 6: Kreatywny
    6: {
        container: "font-sans leading-relaxed",
        header: "bg-gradient-to-r from-purple-700 to-pink-500 text-white p-6 rounded-lg",
        name: "text-3xl font-bold",
        title: "text-xl mt-1",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-white",
        section: "mt-6",
        sectionTitle: "text-xl font-bold mb-3 text-purple-700",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-pink-600",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm"
    },

    // Template 7: Techniczny
    7: {
        container: "font-mono leading-relaxed",
        header: "border-b border-teal-500 pb-4",
        name: "text-3xl font-bold text-gray-800",
        title: "text-xl text-teal-600 mt-1",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-gray-600",
        section: "mt-6",
        sectionTitle: "text-xl font-bold mb-3 text-teal-700 flex items-center",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-teal-600",
        jobDate: "text-gray-600 font-light",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-teal-100 text-teal-700 px-3 py-1 rounded-md text-sm font-medium"
    },

    // Template 8: Korporacyjny
    8: {
        container: "font-sans leading-relaxed",
        header: "bg-blue-900 text-white p-6",
        name: "text-3xl font-bold",
        title: "text-xl mt-1 text-blue-200",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-blue-200",
        section: "mt-6 px-6",
        sectionTitle: "text-xl font-bold mb-3 text-blue-900 border-b border-blue-200 pb-1",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-blue-800 font-medium",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
    },

    // Template 9: Akademicki
    9: {
        container: "font-serif leading-relaxed",
        header: "text-center pb-4",
        name: "text-3xl font-bold text-red-800",
        title: "text-xl text-gray-700 mt-1",
        contact: "flex justify-center space-x-4 mt-2 text-sm text-gray-600",
        section: "mt-6",
        sectionTitle: "text-xl font-bold mb-3 text-red-800 border-b border-red-200 pb-1",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-red-700 italic",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "border border-red-300 text-red-700 px-3 py-1 rounded-md text-sm"
    },

    // Template 10: Odważny
    10: {
        container: "font-sans leading-relaxed",
        header: "bg-black text-white p-6",
        name: "text-3xl font-bold",
        title: "text-xl mt-1 text-yellow-400",
        contact: "flex justify-start space-x-4 mt-2 text-sm text-white",
        section: "mt-6 px-6",
        sectionTitle: "text-xl font-bold mb-3 uppercase tracking-wider text-black flex items-center",
        jobTitle: "font-bold text-gray-800",
        jobCompany: "text-black font-medium",
        jobDate: "text-gray-600",
        skillContainer: "flex flex-wrap gap-2",
        skill: "bg-yellow-400 text-black px-3 py-1 rounded-none text-sm font-bold"
    }
}; 