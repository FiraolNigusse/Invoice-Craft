function InvoiceForm({ invoiceData, setInvoiceData }) {

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInvoiceData({ ...invoiceData, [name]: value });
    };
  
    const handleItemChange = (index, field, value) => {
      const newItems = [...invoiceData.items];
      newItems[index][field] = value;
      setInvoiceData({ ...invoiceData, items: newItems });
    };
  
    const addItem = () => {
      setInvoiceData({ ...invoiceData, items: [...invoiceData.items, { description: '', price: 0 }] });
    };
  
    return (
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Create Invoice</h2>
        <input
          type="text"
          name="companyName"
          placeholder="Your Company Name"
          className="border p-2 w-full mb-4"
          value={invoiceData.companyName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          className="border p-2 w-full mb-4"
          value={invoiceData.clientName}
          onChange={handleChange}
        />
  
        <h3 className="font-semibold mb-2">Services</h3>
        {invoiceData.items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Description"
              className="border p-2 flex-1"
              value={item.description}
              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              className="border p-2 w-32"
              value={item.price}
              onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
            />
          </div>
        ))}
        <button onClick={addItem} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
          + Add Item
        </button>
      </div>
    )
  }
  
  export default InvoiceForm
  