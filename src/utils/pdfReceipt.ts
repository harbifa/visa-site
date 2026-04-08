import jsPDF from 'jspdf';

interface ReceiptData {
  paymentId: string;
  customerName: string;
  serviceType: string;
  amount: number;
  currency: string;
  date: string;
}

export const generatePaymentReceipt = async (data: ReceiptData) => {
  const doc = new jsPDF();
  
  // Document settings
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Colors
  const primaryBlue = [54, 98, 185];
  const textDark = [51, 51, 51];
  
  // Calculate VAT (15% Saudi VAT)
  const totalAmount = data.amount;
  const subtotal = totalAmount / 1.15;
  const vatAmount = totalAmount - subtotal;
  
  // Load and add logo
  try {
    const logoResponse = await fetch('/assets/logo.png');
    const logoBlob = await logoResponse.blob();
    const logoBase64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(logoBlob);
    });
    
    // Add logo to header (30x30 pixels)
    doc.addImage(logoBase64, 'PNG', 20, 5, 30, 20);
  } catch {
    console.log('Logo not loaded, continuing without logo');
  }
  
  // Simple header
  doc.setFillColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.rect(0, 0, pageWidth, 30, 'F');
  
  // Company name in header (moved to right of logo)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Alshawamekh Visa Immigration', pageWidth / 2, 20, { align: 'center' });
  
  // Receipt title
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Payment Receipt', pageWidth / 2, 50, { align: 'center' });
  
  // Receipt details
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  let y = 70;
  doc.text(`Receipt Number: ${data.paymentId}`, 20, y);
  y += 15;
  doc.text(`Date: ${data.date}`, 20, y);
  y += 15;
  doc.text(`Customer: ${data.customerName}`, 20, y);
  y += 15;
  doc.text(`Service: ${data.serviceType}`, 20, y);
  
  // Amount breakdown
  y += 25;
  doc.setFont('helvetica', 'bold');
  doc.text('Amount Breakdown:', 20, y);
  
  y += 15;
  doc.setFont('helvetica', 'normal');
  doc.text(`Subtotal (Before VAT): ${subtotal.toFixed(2)} ${data.currency}`, 20, y);
  y += 15;
  doc.text(`VAT (15%): ${vatAmount.toFixed(2)} ${data.currency}`, 20, y);
  y += 15;
  doc.setFont('helvetica', 'bold');
  doc.text(`Total: ${totalAmount.toFixed(2)} ${data.currency}`, 20, y);
  
  // Footer
  y += 30;
  doc.setFontSize(10);
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.text('Thank you for choosing Alshawamekh!', pageWidth / 2, y, { align: 'center' });
  
  // Generate filename
  const filename = `receipt-${data.paymentId}-${Date.now()}.pdf`;
  
  // Save the PDF silently (no alert)
  doc.save(filename);
  
  return filename;
}; 