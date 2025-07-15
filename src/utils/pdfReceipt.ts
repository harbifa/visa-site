import jsPDF from 'jspdf';
import logoSrc from '../assets/logo.png';

interface PaymentData {
  paymentId: string;
  amount: number;
  currency: string;
  customerName?: string;
  serviceType?: string;
  date: string;
  language: 'ar' | 'en';
}

export const generatePDFReceipt = async (paymentData: PaymentData): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Create new PDF document
      const doc = new jsPDF();
      
      // Set font
      doc.setFont('helvetica');
      
      // Page dimensions
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      
      // Colors
      const primaryColor = '#1e40af'; // Dark blue
      const textColor = '#1f2937'; // Dark gray
      const lightGray = '#f8fafc';
      const successGreen = '#059669';
      
      // Tax calculations - assuming the amount includes 15% VAT
      const VAT_RATE = 0.15;
      const totalWithVAT = paymentData.amount;
      const amountBeforeVAT = totalWithVAT / (1 + VAT_RATE);
      const vatAmount = totalWithVAT - amountBeforeVAT;
      
      // Company Info (English only for better PDF compatibility)
      const companyInfo = {
        name: 'Alshawamekh Visa Immigration',
        address: 'Saudi Arabia',
        phone: '+966501367513',
        email: 'info@shawmekimmigration.com',
        website: 'https://shawmekimmigration.com',
        tagline: 'Your trusted partner for immigration services'
      };
      
      // Load logo and create PDF
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // Header section with company info
        doc.setFillColor(lightGray);
        doc.rect(0, 0, pageWidth, 60, 'F');
        
        // Add logo with better size and positioning
        try {
          doc.addImage(img, 'PNG', 20, 10, 30, 30);
        } catch (error) {
          console.warn('Could not add logo to PDF:', error);
        }
        
        // Company name and info
        doc.setTextColor(textColor);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text(companyInfo.name, 60, 25);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(companyInfo.tagline, 60, 32);
        doc.text(companyInfo.address, 60, 38);
        doc.text(`Phone: ${companyInfo.phone}`, 60, 44);
        doc.text(`Email: ${companyInfo.email}`, 60, 50);
        
        // PAYMENT RECEIPT title at top right
        doc.setTextColor(primaryColor);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('PAYMENT RECEIPT', pageWidth - 110, 15);
        
        // Paid status badge at bottom right of header
        doc.setFillColor(successGreen);
        doc.roundedRect(pageWidth - 60, 45, 40, 12, 2, 2, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('PAID', pageWidth - 45, 53);
        
        // Receipt details section
        let yPosition = 75;
        
        // Receipt header
        doc.setTextColor(textColor);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('RECEIPT DETAILS', 20, yPosition);
        
        yPosition += 15;
        
        // Create receipt table
        const tableHeaders = ['Description', 'Details'];
        const tableData = [
          ['Receipt Number:', paymentData.paymentId],
          ['Receipt Date:', paymentData.date],
          ['Payment Status:', 'PAID'],
        ];
        
        if (paymentData.serviceType) {
          tableData.push(['Service Type:', paymentData.serviceType]);
        }
        
        if (paymentData.customerName) {
          tableData.push(['Customer Name:', paymentData.customerName]);
        }
        
        // Draw table
        const tableStartY = yPosition;
        const colWidth = (pageWidth - 40) / 2;
        
        // Table header
        doc.setFillColor(primaryColor);
        doc.rect(20, tableStartY, colWidth, 12, 'F');
        doc.rect(20 + colWidth, tableStartY, colWidth, 12, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(tableHeaders[0], 25, tableStartY + 8);
        doc.text(tableHeaders[1], 25 + colWidth, tableStartY + 8);
        
        // Table rows
        yPosition = tableStartY + 12;
        doc.setTextColor(textColor);
        doc.setFont('helvetica', 'normal');
        
        tableData.forEach((row, index) => {
          const rowY = yPosition + (index * 12);
          
          // Alternating row colors
          if (index % 2 === 0) {
            doc.setFillColor(250, 250, 250);
            doc.rect(20, rowY, pageWidth - 40, 12, 'F');
          }
          
          doc.setFont('helvetica', 'bold');
          doc.text(row[0], 25, rowY + 8);
          doc.setFont('helvetica', 'normal');
          doc.text(row[1], 25 + colWidth, rowY + 8);
        });
        
        yPosition += (tableData.length * 12) + 25;
        
        // Amount breakdown section
        doc.setTextColor(textColor);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('AMOUNT BREAKDOWN', 20, yPosition);
        
        yPosition += 15;
        
        // Amount breakdown table
        const amountHeaders = ['Description', 'Amount'];
        const amountData = [
          ['Subtotal (Before VAT):', `${amountBeforeVAT.toFixed(2)} ${paymentData.currency}`],
          ['VAT (15%):', `${vatAmount.toFixed(2)} ${paymentData.currency}`],
          ['Total Amount (After VAT):', `${totalWithVAT.toFixed(2)} ${paymentData.currency}`]
        ];
        
        const amountTableStartY = yPosition;
        
        // Amount table header
        doc.setFillColor(primaryColor);
        doc.rect(20, amountTableStartY, colWidth, 12, 'F');
        doc.rect(20 + colWidth, amountTableStartY, colWidth, 12, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(amountHeaders[0], 25, amountTableStartY + 8);
        doc.text(amountHeaders[1], 25 + colWidth, amountTableStartY + 8);
        
        // Amount table rows
        yPosition = amountTableStartY + 12;
        doc.setTextColor(textColor);
        
        amountData.forEach((row, index) => {
          const rowY = yPosition + (index * 12);
          
          // Highlight total row
          if (index === amountData.length - 1) {
            doc.setFillColor(lightGray);
            doc.rect(20, rowY, pageWidth - 40, 12, 'F');
          } else if (index % 2 === 0) {
            doc.setFillColor(250, 250, 250);
            doc.rect(20, rowY, pageWidth - 40, 12, 'F');
          }
          
          // Make total row bold
          if (index === amountData.length - 1) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
          } else {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
          }
          
          doc.text(row[0], 25, rowY + 8);
          doc.text(row[1], 25 + colWidth, rowY + 8);
        });
        
        yPosition += (amountData.length * 12) + 40;
        
        // Thank you message
        doc.setTextColor(primaryColor);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Thank you for choosing Alshawamekh!', 20, yPosition);
        
        yPosition += 25;
        
        // Next steps
        doc.setTextColor(textColor);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('What happens next:', 20, yPosition);
        
        yPosition += 12;
        
        const steps = [
          '• You will receive a confirmation email shortly',
          '• Our team will contact you within 24 hours',
          '• We will begin processing your application',
          '• All required documents will be prepared for you'
        ];
        
        doc.setFont('helvetica', 'normal');
        steps.forEach((step) => {
          yPosition += 10;
          doc.text(step, 25, yPosition);
        });
        
        // Ensure footer doesn't overlap with content
        const footerY = Math.max(yPosition + 30, pageHeight - 80);
        
        // Footer line
        doc.setDrawColor(200, 200, 200);
        doc.line(20, footerY - 10, pageWidth - 20, footerY - 10);
        
        // Footer content
        doc.setFontSize(10);
        doc.setTextColor(textColor);
        doc.setFont('helvetica', 'bold');
        doc.text('Contact Information:', 20, footerY);
        
        doc.setFont('helvetica', 'normal');
        doc.text(`Phone: ${companyInfo.phone} | Email: ${companyInfo.email}`, 20, footerY + 12);
        doc.text(`Website: ${companyInfo.website}`, 20, footerY + 24);
        
        // Receipt number on bottom right
        doc.setFontSize(10);
        doc.setTextColor(textColor);
        doc.text(`Receipt #${paymentData.paymentId}`, pageWidth - 120, footerY + 12);
        
        // Generated timestamp
        const timestamp = new Date().toLocaleString('en-US');
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text(`Generated on: ${timestamp}`, pageWidth - 120, footerY + 24);
        
        // Save PDF
        const fileName = `receipt_${paymentData.paymentId}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        resolve();
      };
      
      img.onerror = (error) => {
        console.warn('Could not load logo, generating PDF without logo:', error);
        // Generate PDF without logo
        generatePDFWithoutLogo(doc, paymentData, companyInfo, amountBeforeVAT, vatAmount, totalWithVAT);
        resolve();
      };
      
      // Set logo source
      img.src = logoSrc;
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      reject(error);
    }
  });
};

interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  tagline: string;
}

// Fallback function to generate PDF without logo
const generatePDFWithoutLogo = (doc: jsPDF, paymentData: PaymentData, companyInfo: CompanyInfo, amountBeforeVAT: number, vatAmount: number, totalWithVAT: number) => {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const primaryColor = '#1e40af';
  const textColor = '#1f2937';
  const lightGray = '#f8fafc';
  const successGreen = '#059669';
  
  // Header section
  doc.setFillColor(lightGray);
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  // Company name and info
  doc.setTextColor(textColor);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(companyInfo.name, 20, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(companyInfo.tagline, 20, 32);
  doc.text(companyInfo.address, 20, 38);
  doc.text(`Phone: ${companyInfo.phone}`, 20, 44);
  doc.text(`Email: ${companyInfo.email}`, 20, 50);
  
  // PAYMENT RECEIPT title at top right
  doc.setTextColor(primaryColor);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('PAYMENT RECEIPT', pageWidth - 110, 15);
  
  // Paid status badge at bottom right of header
  doc.setFillColor(successGreen);
  doc.roundedRect(pageWidth - 60, 45, 40, 12, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('PAID', pageWidth - 45, 53);
  
  // Basic receipt details
  doc.setTextColor(textColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  let yPos = 80;
  
  doc.text(`Receipt #${paymentData.paymentId}`, 20, yPos);
  yPos += 15;
  doc.text(`Date: ${paymentData.date}`, 20, yPos);
  
  if (paymentData.serviceType) {
    yPos += 15;
    doc.text(`Service: ${paymentData.serviceType}`, 20, yPos);
  }
  
  if (paymentData.customerName) {
    yPos += 15;
    doc.text(`Customer: ${paymentData.customerName}`, 20, yPos);
  }
  
        // Amount breakdown
   yPos += 25;
   doc.setFont('helvetica', 'bold');
   doc.text('AMOUNT BREAKDOWN:', 20, yPos);
   
   yPos += 15;
   doc.setFont('helvetica', 'normal');
   doc.text(`Subtotal (Before VAT): ${amountBeforeVAT.toFixed(2)} ${paymentData.currency}`, 20, yPos);
   yPos += 12;
   doc.text(`VAT (15%): ${vatAmount.toFixed(2)} ${paymentData.currency}`, 20, yPos);
   yPos += 12;
   doc.setFont('helvetica', 'bold');
   doc.text(`Total Amount (After VAT): ${totalWithVAT.toFixed(2)} ${paymentData.currency}`, 20, yPos);
   
   yPos += 30;
   
   // Thank you message
   doc.setTextColor(primaryColor);
   doc.setFontSize(14);
   doc.setFont('helvetica', 'bold');
   doc.text('Thank you for choosing Alshawamekh!', 20, yPos);
   
   yPos += 40;
   
   // Footer
   const footerY = Math.max(yPos, pageHeight - 60);
   doc.setTextColor(textColor);
   doc.setFont('helvetica', 'bold');
   doc.setFontSize(10);
   doc.text('Contact Information:', 20, footerY);
   
   doc.setFont('helvetica', 'normal');
   doc.text(`Phone: ${companyInfo.phone} | Email: ${companyInfo.email}`, 20, footerY + 12);
   doc.text(`Website: ${companyInfo.website}`, 20, footerY + 24);
   
   // Receipt number on bottom right
   doc.setFontSize(10);
   doc.setTextColor(textColor);
   doc.text(`Receipt #${paymentData.paymentId}`, pageWidth - 120, footerY + 12);
   
   // Generated timestamp
   const timestamp = new Date().toLocaleString('en-US');
   doc.setFontSize(8);
   doc.setTextColor(120, 120, 120);
   doc.text(`Generated on: ${timestamp}`, pageWidth - 120, footerY + 24);
  
  // Save PDF
  const fileName = `receipt_${paymentData.paymentId}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
}; 