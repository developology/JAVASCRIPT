function generatebill() {
    let price = parseInt(document.getElementById("price").value);
    let gst = parseInt(document.getElementById("GST").value);
    let quantity = parseInt(document.getElementById("quantity").value);
  
    if (isNaN(price) || isNaN(gst) || isNaN(quantity)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    let amount_before_gst = price * quantity;
    let gst_amount = (amount_before_gst * gst) / 100;
    let final_amount = amount_before_gst + gst_amount;
  
    console.log("Amount before GST:", amount_before_gst);
    console.log("GST Amount (" + gst + "%):", gst_amount);
    console.log("Final Amount:", final_amount);
}
  