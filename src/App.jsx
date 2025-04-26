import { useState } from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from "jspdf";

function App() {
  const [clientName, setClientName] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');
  const [amountDue, setAmountDue] = useState('');

  const generateInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(24);
    doc.setTextColor(100, 100, 255);
    doc.text("InvoiceCraft", 20, 20);

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Client Name: ${clientName}`, 20, 50);
    doc.text(`Service Description:`, 20, 70);
    doc.text(serviceDesc, 20, 80, { maxWidth: 170 }); // Wrap long text
    doc.text(`Amount Due: $${amountDue}`, 20, 110);

    doc.save(`invoice-${clientName || "client"}.pdf`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">InvoiceCraft</h1>

        <div className="space-y-6">
          <div>
          <label className="block text-md font-semibold mb-2 text-purple-300">Client Name</label>

            <input
              type="text"
              placeholder="John Doe"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
          <label className="block text-md font-semibold mb-2 text-purple-300">Service Description</label>

            <textarea
              placeholder="Web development services..."
              value={serviceDesc}
              onChange={(e) => setServiceDesc(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
            ></textarea>
          </div>

          <div>
          <label className="block text-md font-semibold mb-2 text-purple-300">Amount Due ($)</label>

            <input
              type="number"
              placeholder="500"
              value={amountDue}
              onChange={(e) => setAmountDue(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <motion.button
            onClick={generateInvoice}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold py-2 rounded-lg mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Invoice
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
