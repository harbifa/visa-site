import jsPDF from 'jspdf';

interface ReceiptData {
  paymentId: string;
  customerName: string;
  serviceType: string;
  amount: number;
  currency: string;
  date: string;
}

export const generatePaymentReceipt = (data: ReceiptData) => {
  const doc = new jsPDF();
  
  // Document settings
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Colors
  const primaryColor = '#2563eb'; // Blue
  const textColor = '#374151'; // Gray
  const lightGrayColor = '#f3f4f6';
  
  // Calculate VAT (15% Saudi VAT)
  const totalAmount = data.amount;
  const subtotal = totalAmount / 1.15; // Amount before VAT
  const vatAmount = totalAmount - subtotal; // VAT amount
  
  // Company Logo and Header
  doc.setFillColor(primaryColor);
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  // Company Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Alshawamekh', 20, 30);
  
  // Company Subtitle
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Visa Immigration Services', 20, 45);
  
  // Receipt Title - Top Right
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('PAYMENT RECEIPT', pageWidth - 20, 25, { align: 'right' });
  
  // PAID Badge - Bottom Right of Header
  doc.setFillColor(34, 197, 94); // Green
  doc.roundedRect(pageWidth - 60, 35, 40, 15, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('PAID', pageWidth - 40, 45, { align: 'center' });
  
  // Reset text color
  doc.setTextColor(textColor);
  
  // Company Details Section
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Company: Alshawamekh Visa Immigration Services', 20, 80);
  doc.text('Location: Shawamek, Saudi Arabia', 20, 90);
  doc.text('Phone: +966501367513', 20, 100);
  doc.text('Email: info@shawmekimmigration.com', 20, 110);
  
  // Receipt Information
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Receipt Details:', 20, 140);
  
  doc.setFont('helvetica', 'normal');
  doc.text(`Transaction ID: ${data.paymentId}`, 20, 155);
  doc.text(`Customer Name: ${data.customerName}`, 20, 170);
  doc.text(`Service Type: ${data.serviceType}`, 20, 185);
  doc.text(`Date: ${data.date}`, 20, 200);
  
  // Payment Details Table
  const tableStartY = 220;
  const tableWidth = pageWidth - 40;
  
  // Table Header
  doc.setFillColor(lightGrayColor);
  doc.rect(20, tableStartY, tableWidth, 15, 'F');
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(textColor);
  doc.text('Description', 25, tableStartY + 10);
  doc.text('Amount', pageWidth - 25, tableStartY + 10, { align: 'right' });
  
  // Table Rows
  let currentY = tableStartY + 25;
  
  // Service Row
  doc.setFont('helvetica', 'normal');
  doc.text(`${data.serviceType} - Service Fee`, 25, currentY);
  doc.text(`${subtotal.toFixed(2)} ${data.currency}`, pageWidth - 25, currentY, { align: 'right' });
  
  currentY += 20;
  
  // VAT Row
  doc.text('VAT (15%)', 25, currentY);
  doc.text(`${vatAmount.toFixed(2)} ${data.currency}`, pageWidth - 25, currentY, { align: 'right' });
  
  currentY += 20;
  
  // Total Row (highlighted)
  doc.setFillColor(primaryColor);
  doc.rect(20, currentY - 8, tableWidth, 20, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('Total Amount', 25, currentY + 5);
  doc.text(`${totalAmount.toFixed(2)} ${data.currency}`, pageWidth - 25, currentY + 5, { align: 'right' });
  
  // Footer
  doc.setTextColor(textColor);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const footerY = pageHeight - 40;
  doc.text('Thank you for choosing Alshawamekh Visa Immigration Services', pageWidth / 2, footerY, { align: 'center' });
  doc.text('For any inquiries, please contact us at info@shawmekimmigration.com', pageWidth / 2, footerY + 12, { align: 'center' });
  
  // Generate filename
  const filename = `receipt-${data.paymentId}-${Date.now()}.pdf`;
  
  // Save the PDF
  doc.save(filename);
  
  return filename;
}; 