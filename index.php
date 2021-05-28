<!DOCTYPE html>
<html>

<head>
    <title>test page</title>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <div class="container">
        <form action="invoice.php" method="POST" name="itemForm" onsubmit="return validateItemForm()">
        <table id="itemTable" class=" table order-list table-bordered">
            <thead class="thead-dark">
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Unit Price</td>
                    <td>Tax</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-sm-2">
                        <input type="text" name="item[]" class="form-control item" id="item_1" />
                        <span class="alert alert-danger" id="itemMessage" style="display:none;"></span>
                    </td>
                    <td class="col-sm-1">
                        <input type="text" name="quantity[]" class="form-control quantity" id="quantity_1" />
                    </td>
                    <td class="col-sm-2">
                        <input type="text" name="unit_price[]" class="form-control unit_price" id="unit_price_1" />
                    </td>
                    <td class="col-sm-2">
                        <select class="form-control tax" name="tax[]" id="tax_1">
                            <option value="0.00">0%</option>
                            <option value="0.01">1%</option>
                            <option value="0.05">5%</option>
                            <option value="0.10">10%</option>
                        </select>
                    </td>

                    <td class="col-sm-2">
                        <input type="text" name="total[]" class="form-control total" id="total_1" value="" readonly />
                    </td>
                    <td class="col-sm-1">
                        <input type="button" class="btn btn-primary " id="addrow" value="Add Row" />
                    </td>
                   
                </tr>
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td style="text-align: right;">
                        <h5>Sub total without tax :</h5>
                    </td>
                    <td style="text-align: left;">
                        <h5 class="sub_total_without_tax" id="sub_total_without_tax">$00.00</h5>
                        <input type="hidden" name="subTotal_withoutTax" id="subTotal_withoutTax" value="0.00">
                    </td>
                </tr>
                <tr>
                    <td colspan="3"></td>
                    <td style="text-align: right;">
                        <h5>Sub total with tax :</h5>
                    </td>
                    <td style="text-align: left;">
                        <h5 class="sub_total_with_tax" id="sub_total_with_tax">$00.00</h5>
                        <input type="hidden" name="subTotal_withTax" id="subTotal_withTax" value="0.00">
                    </td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td style="text-align: right;">Discount</td>
                    <td>
                        <input type="text" name="discount" id="discount" class=" form-control" style="width:50%; float: left;">                     
                        <select class="col-sm-1 form-control" name="discountType" id="discountType" style="width:50%; float: left;">
                            <option value="0">$</option>
                            <option value="1">%</option>
                        </select>
                        <input type="hidden" name="discount_amount" id="discount_amount" value="0.00">

                    </td>
                    <td><button class="btn btn-success" id="applyDiscount">Apply</button></td>
                </tr>
                <tr>
                    <td><input type="submit" name="generate" class="btn btn-default" value="Generate Invoice"></td>
                    <td colspan="2"></td>
                    <td style="text-align: right;">
                        <h4>Grand Total total :</h4>
                    </td>
                    <td style="text-align: left;">
                        <h4 class="grand_final_total" id="grand_final_total">$00.00</h4>
                        <input type="hidden" name="grandTotal" id="grandTotal" value="0.00">
                    </td>
                </tr>
            </tfoot>
            </tbody>
        </table>
</form>
    </div>
    <script src="js/invoice.js"></script>
    <script src="js/validateItemForm.js"></script>
    </body>

</html>