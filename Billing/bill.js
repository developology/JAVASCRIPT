function generatebill() {
    let price = parseInt(document.getElementById("price").value);
    let gst = parseInt(document.getElementById("GST").value);
    let quantity = parseInt(document.getElementById("quantity").value);
  
    if (isNaN(price) || isNaN(gst) || isNaN(quantity)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    let amount_before_gst = price * quantity;
    let gst_amount =(amount_before_gst * gst) / 100;
    let final_amount = amount_before_gst + gst_amount;
  
        // Storing values in localStorage
        // key-value 
        localStorage.setItem("amount_before_gst", amount_before_gst);
        localStorage.setItem("gst_amount", gst_amount);
        localStorage.setItem("final_amount", final_amount);
        localStorage.setItem("gst", gst);
    
        // Opening the final bill page
        window.location.href = "finalbill.html";
   
}
  