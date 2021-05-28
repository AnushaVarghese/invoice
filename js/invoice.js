$(document).ready(function() {
            var counter = 2;

        //////////////// Dynamically add multiple lines/////////////////////

            $("#addrow").on("click", function() {
                var newRow = $("<tr>");
                var cols = "";

                cols += '<td><input type="text" class="form-control item" id="item_' + counter + '" name="item[]"/></td>';
                cols += '<td><input type="text" class="form-control quantity" id="quantity_' + counter + '" name="quantity[]"/></td>';
                cols += '<td><input type="text" class="form-control unit_price" id="unit_price_' + counter + '" name="unit_price[]"/></td>';
                cols += '<td><select class="form-control tax" id="tax_' + counter + '" name="tax[]"><option value="0.00">0%</option><option value="0.01">1%</option><option value="0.05">5%</option><option value="0.10">10%</option></select></td>';
                cols += '<td><input type="text" class="form-control total" id="total_' + counter + '" name="total[]" readonly/></td>';
                cols += '<td><input type="button" class="btnDel btn btn-md btn-danger " id="deleteBtn_' + counter + '"  value="Delete"></td>';

                newRow.append(cols);
                $("table.order-list").append(newRow);
                counter++;
            });

        //////////////////////////Delete Items/////////////////////////

            $("table.order-list").on("click", ".btnDel", function(event) {  
                var dltBtnId = $(this).attr("id");
                var id = dltBtnId.split('_');
                id = id[1];

                var itemTotal = $('#total_' + id).val();
                var itemQuantity = $('#quantity_' + id).val();
                var itemPrice = $('#unit_price_' + id).val();

                var sub_total_without_tax = $('#subTotal_withoutTax').val();
                if(sub_total_without_tax != 0){
                    var new_sub_total_without_tax = parseFloat(sub_total_without_tax - (itemQuantity * itemPrice)); //deduct item amount from total without tax amount
                    $('#sub_total_without_tax').text(new_sub_total_without_tax.toFixed(2));
                    $('#subTotal_withoutTax').val(new_sub_total_without_tax.toFixed(2));
                
                    var sub_total_with_tax = $('#subTotal_withTax').val();
                    var new_sub_total_with_tax = parseFloat(sub_total_with_tax) - parseFloat(itemTotal);// deduct item amount from toatl amount with tax
                    $('#sub_total_with_tax').text(new_sub_total_with_tax.toFixed(2));
                    $('#subTotal_withTax').val(new_sub_total_with_tax.toFixed(2));

                    var grand_final_total = $('#grandTotal').val();
                    var new_grand_final_total = parseFloat(grand_final_total) - parseFloat(itemTotal); // deduct item amount from the final amount
                    $('#grand_final_total').text(new_grand_final_total.toFixed(2));
                    $('#grandTotal').val(new_grand_final_total.toFixed(2));
                }

                $(this).closest("tr").remove(); // delete the entire item
                counter -= 1
            });

        ///////////////////////////call function on event//////////////////

            $(document).on('blur', '.quantity', function() {
                calculateAmount(counter);
            });

            $(document).on("blur", ".unit_price", function(event) {
                calculateAmount(counter);
            });

            $(document).on("blur", ".tax", function(event) {
                calculateAmount(counter);
            });

            $(document).on("change", ".tax", function(event) {
                calculateAmount(counter);
            });

        //////////////////Apply Discount///////////////////////

            $('#applyDiscount').on("click", function(event){
                event.preventDefault();
                var discount = $('#discount').val();
                console.log(discount);
                var discountType = $('#discountType').val();
                var sub_total_with_tax = $('#subTotal_withTax').val();
                if(sub_total_with_tax != 0){
                    if(discountType == 1){ // discount in percentage
                        if(discount > 100){
                            alert("Discount cannot be greater than 100%");
                        }
                        else{ 
                            var discountedAmount = sub_total_with_tax - (sub_total_with_tax * (discount / 100));
                            $('#grand_final_total').text(discountedAmount.toFixed(2));
                            $('#grandTotal').val(discountedAmount.toFixed(2));
                            var discount_in_amount = sub_total_with_tax * (discount / 100);
                            $('#discount_amount').val(discount_in_amount.toFixed(2));

                        }
                    }
                    else{   //discount in dollar
                        if(parseFloat(discount) > parseFloat(sub_total_with_tax)){
                            alert("Discount cannot be greater than total amount");
                        }
                        else{
                            var discountedAmount = sub_total_with_tax - discount;
                            $('#grand_final_total').text(discountedAmount.toFixed(2));
                            $('#grandTotal').val(discountedAmount.toFixed(2));
                            var discount_in_amount = discount;
                            $('#discount_amount').val(discount_in_amount);
                        }
                    }
                }else{
                    alert('Please add item to bill');
                }
            });
        })

        /////////////////////Calculate Amount//////////////////////

        function calculateAmount(counter) {
            var final_grand_total = 0;
            var sub_total_with_tax = 0;
            var sub_total_without_tax = 0;
            var discount = 0;
            for (i = 1; i <= counter; i++) {
                var quantity = 0;
                var price = 0;
                var tax = 0;
                var row_total_with_tax = 0;
                var row_total_without_tax = 0;

                quantity = $('#quantity_' + i).val();
                price = $('#unit_price_' + i).val();
                tax = $('#tax_' + i).val();
        
                if (quantity > 0) {
                    row_total_with_tax = parseFloat(quantity * price) + parseFloat(quantity * price * tax);
                    sub_total_with_tax = sub_total_with_tax + row_total_with_tax;

                    row_total_without_tax = parseFloat(quantity * price);
                    sub_total_without_tax = sub_total_without_tax + row_total_without_tax;

                    $('#total_' + i).val(row_total_with_tax.toFixed(2)); 
                    $('#sub_total_with_tax').text(sub_total_with_tax.toFixed(2));
                    $('#sub_total_without_tax').text(sub_total_without_tax.toFixed(2));
                    $('#grand_final_total').text(sub_total_with_tax.toFixed(2));

                    $('#subTotal_withTax').val(sub_total_with_tax.toFixed(2));
                    $('#subTotal_withoutTax').val(sub_total_without_tax.toFixed(2));
                    $('#grandTotal').val(sub_total_with_tax.toFixed(2));
                }
            }
        }