---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

Below is a nifty gadget to help calculate tipout at the end of the shift.

To start, simply input the number of servers working, indicate the amount of bussers, food runners, and bartenders.

<div id="userInputs">
    Servers: <input type="number" id="servers" step="0.01"><br>

    Bussers: 
        <input type="radio" name="bussers" value="0" checked>0
        <input type="radio" name="bussers" value="1">1
        <input type="radio" name="bussers" value="2">2
        <br>
    Foodrunners: 
        <input type="radio" name="foodrunners" value="0" checked>0
        <input type="radio" name="foodrunners" value="1">1
        <input type="radio" name="foodrunners" value="2">2
        <br>
    Bartenders: 
        <input type="radio" name="bartenders" value="0" checked>0
        <input type="radio" name="bartenders" value="1">1
        <input type="radio" name="bartenders" value="2">2
        <br>

    Then, type in your Net Sales, Alcohol Sales, and Gratuity in the appropriate boxes.<br>

    Net Sales: <input type="number" id="netSales" step="0.01"><br>
    Alcohol Sales: <input type="number" id="alcoholSales" step="0.01"><br>
    Gratuity (after fee!): <input type="number" id="gratuity" step="0.01"><br>
</div>
After that's done, click Submit! 

<button type="button" onclick="submitHandler(userInputs)">Submit</button>

Now you will see the breakdown of your tipout below.

<p id="busserTipout">Busser Tipout:</p>
<p id="foodrunnerTipout">Foodrunner Tipout:</p>
<p id="bartenderTipout">Bartender Tipout:</p>
<p id="amountYouOwn">Amount You Own:</p>

<script src="{{ base.url | prepend: site.url }}/tinker/tipout.js"></script>
