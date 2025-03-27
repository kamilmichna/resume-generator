/**
 * Utility functions for PDF generation
 */

/**
 * Generates and downloads a PDF from the resume preview
 * @param {string} name - The name to use in the PDF filename
 */
export function generatePDF(name) {
    const element = document.getElementById('resume-container');

    // Reset transform to show all content
    const originalTransform = element.style.transform;
    element.style.transform = '';

    const opt = {
        // margin: [10, 10, 10, 10], // Slight margins all around
        filename: `CV_${name.replace(/\s+/g, '_')}.pdf`,
        // image: { type: 'jpeg', quality: 0.98 },
        // html2canvas: {
        //     scale: 2, // Higher scale for better quality
        //     letterRendering: true,
        //     useCORS: true,
        //     logging: false
        // },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    // Create a clone of the element to avoid modifying the visible DOM
    // const clone = element.cloneNode(true);

    // Remove any transform on the clone
    // clone.style.transform = '';

    // // Apply print-specific styling
    // clone.style.width = '210mm';
    // clone.style.padding = '16mm';
    // clone.style.margin = '0';
    // clone.style.boxSizing = 'border-box';
    // clone.style.fontSize = '12pt';
    // clone.style.lineHeight = '1.5';
    // clone.style.backgroundColor = 'white';
    // clone.style.height = 'auto'; // Allow natural height
    // clone.style.overflow = 'visible';

    // Adjust content spacing for print
    // const headings = clone.querySelectorAll('h1, h2, h3');
    // headings.forEach(heading => {
    //     heading.style.marginBottom = '0.5em';
    // });

    // const sections = clone.querySelectorAll('div.mb-6, div.mb-8');
    // sections.forEach(section => {
    //     section.style.marginBottom = '1em';
    // });

    // Use the clone for PDF generation
    const pdfPromise = html2pdf().set(opt).from(element).save();

    // Restore original transform after PDF generation starts
    setTimeout(() => {
        element.style.transform = originalTransform;
    }, 100);

    return pdfPromise;
} 