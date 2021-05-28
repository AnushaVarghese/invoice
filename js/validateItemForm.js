function validateItemForm(){
            var item_name = document.querySelectorAll(".item");
            var item_quantity = document.querySelectorAll(".quantity");
            var unit_price = document.querySelectorAll(".unit_price");
            
            for (i = 0; i < item_name.length; i++) {
                if(item_name[i].value.length == 0){
                    alert("Item name is required");
                    return false;
                }
            }
            for (i = 0; i < item_quantity.length; i++) {
                if(item_quantity[i].value.length == 0){
                    alert("Quantity is required");
                    return false;
                }
                checkInputValue(item_quantity[i]);
            }
            for (i = 0; i < unit_price.length; i++) {
                if(unit_price[i].value.length == 0){
                    alert("Price is required");
                    return false;
                }
                checkInputValue(unit_price[i]);
            }
        }

        //////////////////////////////Function to validate digits including decimal values///////////////////////////////////

        function checkInputValue(inputValue) 
        { 
            var decimal=  /^-?\d*(\.\d+)?$/; 
            if(inputValue.value.match(decimal)) 
            { 
                return true;
            }
            else
            { 
                alert('Enter numeric values');
                return false;
            }
        } 

        