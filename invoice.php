

<!DOCTYPE html>
<html>
<head>
    <title>test page</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
</head>
<body>
    <div class="row ">
        <div class="col-md-2"></div>
        <div class="col-md-8 ">
            <table class="table table-bordered table-striped ">
                    <thead>
                        <tr>
                            <th colspan="6" class="alert-info text-center">
                                <h1 class="display-2 ">Invoice</h1>
                            </th>
                        </tr>
                        <tr>
                            <th class="col-md-1">Sl No.</th>
                            <th class="col-md-4">Item Name</th>
                            <th class="col-md-2">Quantity(Nos)</th>
                            <th class="col-md-2">Price</th>
                            <th class="col-md-1">Tax</th>
                            <th class="col-md-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                      
                        foreach($_POST['item'] as $i=> $item)
                        {
                            $itemT = $_POST['tax'][$i];
                            $itemTax = $itemT*100 ;
                            $itemTax = $itemTax . '%';                           
                        ?>
                        <tr>
                            <td><?=$i+1;?></td>
                            <td><?=$_POST['item'][$i];?></td>
                            <td><?=$_POST['quantity'][$i];?></td>
                            <td><?='$' . $_POST['unit_price'][$i];?></td>
                            <td><?=$itemTax;?></td>
                            <td class="text-right"><?='$' . $_POST['total'][$i];?></td>
                        </tr>
                        <?php
                      
                        }
                        ?>
                       
                        <tr>
                            <td colspan="5" class="text-right"><b>Amount without Tax</b></td>
                            <td class="text-right"><b><?='$' . $_POST['subTotal_withoutTax'];?></b></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right"><b>Amount with Tax</b></td>
                            <td class="text-right" ><b><?='$' . $_POST['subTotal_withTax'];?></b></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right"><b>Discount</b></td>
                            <td class="text-right"><b><?='$' . $_POST['discount_amount'];?></b></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right"><b>Grand Total</b></td>
                            <td class="text-right"><b><?='$' . $_POST['grandTotal'];?></b></td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div class="col-md-2"></div>
    </div>
        
            
       
        
        </body>

</html>
    
