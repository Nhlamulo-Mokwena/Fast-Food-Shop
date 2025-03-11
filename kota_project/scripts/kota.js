// creating a function to grab all element on the  form

function orderInfo(){
    let nameElement = document.querySelector('#js_Fname');
    nameElement = nameElement.value;

    let lastnameElem = document.querySelector('#js_Lname');
    lastnameElem = lastnameElem.value;

    let emailElem = document.querySelector('#js_email');
    emailElem = emailElem.value;

    let contactElem = document.querySelector('#js_contact');
    contactElem = contactElem.value;

    // grabbing the values on kota menu
    let priceBeforeVat = 0.00
    let priceAfterVat = 0.00
    let kotaElement = document.querySelectorAll('#js_kota');
    let kotaValue1 , kotaValue2 , kotaValue3 , kotaValue4 , kotaValue5;
    if (kotaElement[0].checked === true){
        kotaValue1 = 'R67.00';
        priceBeforeVat = priceBeforeVat + 67.00
    }
    else{
        kotaValue1 = 'R0.00'
    }
    if(kotaElement[1].checked === true){
        kotaValue2 = 'R71.90'
        priceBeforeVat = priceBeforeVat + 71.90
    }
     else{
        kotaValue2 = 'R0.00'
    }
    if(kotaElement[2].checked === true){
        kotaValue3 = '73.90'
        priceBeforeVat = priceBeforeVat + 73.90
    }
     else{
        kotaValue3 = 'R0.00'
    }
    if(kotaElement[3].checked === true){
        kotaValue4 = 'R74.00'
        priceBeforeVat = priceBeforeVat + 74.00
    }
    else{
        kotaValue4 = 'R0.00'
    }
    if(kotaElement[4].checked === true){
        kotaValue5 = 'R84.90'
        priceBeforeVat = priceBeforeVat + 84.90
    }
    else{
        kotaValue5 = 'R0.00'
    }

    // grabbing the values on burger menu

    let burgerElement = document.querySelectorAll('#js_burger');
    let burgerValue1 , burgerValue2 , burgerValue3 , burgerValue4 , burgerValue5;
    if (burgerElement[0].checked === true){
        burgerValue1 = 'R94.00';
        priceBeforeVat = priceBeforeVat + 94.90
    }
    else{
        burgerValue1 = 'R0.00'
    }
    if(burgerElement[1].checked === true){
        burgerValue2 = 'R82.90'
        priceBeforeVat = priceBeforeVat + 82.90
    }
     else{
        burgerValue2 = 'R0.00'
    }
    if(burgerElement[2].checked === true){
        burgerValue3 = 'R97.90'
        priceBeforeVat = priceBeforeVat + 97.90
    }
     else{
        burgerValue3 = 'R0.00'
    }
    if(burgerElement[3].checked === true){
        burgerValue4 = 'R71.90'
        priceBeforeVat = priceBeforeVat + 71.90
    }
    else{
        burgerValue4 = 'R0.00'
    }
    if(burgerElement[4].checked === true){
        burgerValue5 = 'R64.90'
        priceBeforeVat = priceBeforeVat + 64.90
    }
    else{
        burgerValue5 = 'R0.00'
    }

    // grabbing the values on chicken & chips menu

    let chickenElement = document.querySelectorAll('#js_chicken');
    let chickenValue1 , chickenValue2 , chickenValue3 , chickenValue4 , chickenValue5;
    if (chickenElement[0].checked === true){
        chickenValue1 = 'R58.90';
        priceBeforeVat = priceBeforeVat + 58.90
    }
    else{
        chickenValue1 = 'R0.00'
    }
    if(chickenElement[1].checked === true){
        chickenValue2 = 'R86.90'
        priceBeforeVat = priceBeforeVat + 86.90
    }
     else{
        chickenValue2 = 'R0.00'
    }
    if(chickenElement[2].checked === true){
        chickenValue3 = 'R120.90'
        priceBeforeVat = priceBeforeVat + 120.90
    }
     else{
        chickenValue3 = 'R0.00'
    }
    if(chickenElement[3].checked === true){
        chickenValue4 = 'R167.90'
        priceBeforeVat = priceBeforeVat + 167.90
    }
    else{
        chickenValue4 = 'R0.00'
    }
    if(chickenElement[4].checked === true){
        chickenValue5 = 'R250.00'
        priceBeforeVat = priceBeforeVat + 250.90
    }
    else{
        chickenValue5 = 'R0.00'
    }

        // grabbing the values on chicken & chips menu

        let milkshakeElement = document.querySelectorAll('#js_milkshake');
        let milkshakeValue1 , milkshakeValue2 , milkshakeValue3 , milkshakeValue4 , milkshakeValue5;
        if (milkshakeElement[0].checked === true){
            milkshakeValue1 = 'R53.90';
            priceBeforeVat = priceBeforeVat + 53.90
        }
        else{
            milkshakeValue1 = 'R0.00'
        }
        if(milkshakeElement[1].checked === true){
            milkshakeValue2 = 'R67.90'
            priceBeforeVat = priceBeforeVat + 67.90
        }
         else{
            milkshakeValue2 = 'R0.00'
        }
        if(milkshakeElement[2].checked === true){
            milkshakeValue3 = 'R67.80'
            priceBeforeVat = priceBeforeVat + 67.80
        }
         else{
            milkshakeValue3 = 'R0.00'
        }
        if(milkshakeElement[3].checked === true){
            milkshakeValue4 = 'R79.90'
            priceBeforeVat = priceBeforeVat = 79.90
        }
        else{
            milkshakeValue4 = 'R0.00'
        }
        if(milkshakeElement[4].checked === true){
            milkshakeValue5 = 'R80.90'
            priceBeforeVat = priceBeforeVat + 80.90
        }
        else{
            milkshakeValue5 = 'R0.00'
        }

        // adding  vat on the original price
        priceAfterVat = ( priceBeforeVat * 114 ) / 100;

    
    document.body.innerHTML = (`
<div class="main_div">
 <h1 class="order_confirm">order successful</h1>
<fieldset class="receit">
<legend>customer-check</legend>
firstname: ${nameElement}<br><br>
lastname: ${lastnameElem}<br><br>
email: ${emailElem}<br><br>
contact: ${contactElem}<br><br><br>
<span>your items list: (NB: (R0.00) items are not added) </span><br><br>
<span>kota menu</span><br><br>
peri peri chicken liver: ${kotaValue1}<br>
mince & cheese: ${kotaValue2}<br>
chicken mayo: ${kotaValue3}<br>
jozi kota: ${kotaValue4}<br>
dagwood: ${kotaValue5}<br>
<span>burger menu</span><br><br>
cheesy bacon: ${burgerValue1}<br>
cheese chicken & pine: ${burgerValue2}<br>
chilli chicken & bacon: ${burgerValue3}<br>
crumbed chicken: ${burgerValue4}<br>
classic burger: ${burgerValue5}<br>
<span>chicken and chips menu</span><br><br>
4pc winglet & chips: ${chickenValue1}<br>
8pc winglet & chips: ${chickenValue2}<br>
12 chicken pc & chips: ${chickenValue3}<br>
16pc winglet: ${chickenValue4}<br>
full chicken & chips: ${chickenValue5}<br>
<span>milkshake menu</span><br><br>
strawbery whirl: ${milkshakeValue1}<br>
perppermint orio: ${milkshakeValue2}<br>
nutella coffe: ${milkshakeValue3}<br>
crunchie nutty: ${milkshakeValue4}<br>
honeycomb & milky: ${milkshakeValue5}<br><br><br>
<span>Cost of all items</span><br><br>
total before [vat] = R ${priceBeforeVat.toFixed(2)}<br>
vat added = [14%]<br>
total after [vat] = R ${priceAfterVat.toFixed(2)}<br><br>
<span>Note:present this check to one of our employee to be assisted.</span><br>
<span>thank you for visiting junk town resturant have a wonderful day</pan>




</fieldset>
</div>
`);
}