---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<p>To start, simply input the number of servers working, indicate the amount of bussers, food runners, and bartenders.</p>

<div id="userInputs">
    <p>Servers:</p> <input type="number" id="servers" step="0.01" value="0"><br>

    <p>Bussers:</p> 
        <input type="radio" name="bussers" value="0" checked>0
        <input type="radio" name="bussers" value="1">1
        <input type="radio" name="bussers" value="2">2
        <br>
    <p>Foodrunners:</p> 
        <input type="radio" name="foodrunners" value="0" checked>0
        <input type="radio" name="foodrunners" value="1">1
        <input type="radio" name="foodrunners" value="2">2
        <br>
    <p>Bartenders:</p> 
        <input type="radio" name="bartenders" value="0" checked>0
        <input type="radio" name="bartenders" value="1">1
        <input type="radio" name="bartenders" value="2">2
        <br>

    Then, type in your Net Sales, Alcohol Sales, and Gratuity in the appropriate boxes.<br>

    Net Sales:
        <input type="number" id="netSales" value="0" step="0.01"><br>
    Alcohol Sales:
        <input type="number" id="alcoholSales" value="0" step="0.01"><br>
    Gratuity (after fee!):
        <input type="number" id="gratuity" value="0" step="0.01"><br>
</div>
<p>After that's done, click Submit! </p>

<button type="button" onclick="submitHandler(userInputs)">Submit</button>

<p>Now you will see the breakdown of your tipout below.</p>

<p id="busserTipout">Busser Tipout:</p>
<p id="foodrunnerTipout">Foodrunner Tipout:</p>
<p id="bartenderTipout">Bartender Tipout:</p>
<p id="amountYouOwn">Amount You Own:</p>

<script src="{{ base.url | prepend: site.url }}/tinker/tipout.js"></script>
