import { generatePDF } from '../utils/generatePDF'

function InvoicePreview({ invoiceData }) {

  const totalAmount = invoiceData.items.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Invoice Preview</h2>
      <div id="invoice" className="p-4 border rounded">
        <h3 className="text-xl">{invoiceData.companyName}</h3>
        <p className="mb-4">Bill To: {invoiceData.clientName}</p>

        <table className="w-full mb-4">
          <thead>
            <tr className="text-left">
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="text-right font-bold">Total: ${totalAmount}</h4>
      </div>

      <button
        onClick={() => generatePDF()}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Download PDF
      </button>
    </div>
  )
}

export default InvoicePreview
