/**
 * Utility functions for PDF generation
 */

/**
 * Generates and downloads a PDF from the resume preview
 * @param {string} name - The name to use in the PDF filename
 * @param {number} totalPages - Total number of pages in the resume
 */
export function generatePDF(name, totalPages) {
    const element = document.getElementById('resume-preview');

    // Reset the transform to show all content
    const originalTransform = element.style.transform;
    element.style.transform = 'none';

    const opt = {
        margin: 0,
        filename: `CV_${name.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 4,
            letterRendering: true,
            useCORS: true,
            logging: false,
            windowWidth: 794,
            windowHeight: 1123
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    // Create a clone of the element to avoid modifying the visible DOM
    const clone = element.cloneNode(true);

    // Apply print-specific styling
    clone.style.transform = 'none'; // Ensure no transform is applied
    clone.style.width = '210mm';
    clone.style.minHeight = `${totalPages * 297}mm`; // Set height based on total pages
    clone.style.padding = '20mm';
    clone.style.margin = '0';
    clone.style.boxSizing = 'border-box';
    clone.style.fontSize = '12pt';
    clone.style.lineHeight = '1.5';
    clone.style.backgroundColor = 'white';

    // Adjust content spacing for print
    const contentElements = clone.querySelectorAll('.mb-6, .mb-8');
    contentElements.forEach(el => {
        el.style.marginBottom = '1rem';
    });

    // Use the clone for PDF generation
    return html2pdf().set(opt).from(clone).save().then(() => {
        // Restore the original transform after PDF generation
        element.style.transform = originalTransform;
    });
} 