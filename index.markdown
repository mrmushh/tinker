---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<h2>Welcome!</h2>
<p>The shortened URL for this site is: <a href="http://www.bit.ly/laostips">bit.ly/lit-tips</a></p>
<p>To start, simply input the number of servers working, indicate the amount of bussers, foodrunners, and bartenders.</p>
<ul>
    <li> Servers:
        <input type="text" min="0" id="servers" oninput="submitHandler()" placeholder="0" size="10">
    </li>
    <li>Bussers:
        <input type="radio" name="bussers" value="0" onclick="submitHandler()" checked>0
        <input type="radio" name="bussers" value="1" onclick="submitHandler()">1
        <input type="radio" name="bussers" value="2" onclick="submitHandler()">2
    </li>
    <li>Foodrunners:
        <input type="radio" name="foodrunners" value="0" onclick="submitHandler()" checked>0
        <input type="radio" name="foodrunners" value="1" onclick="submitHandler()">1
        <input type="radio" name="foodrunners" value="2" onclick="submitHandler()">2
    </li>
    <li>Bartenders:
        <input type="radio" name="bartenders" value="0" onclick="submitHandler()" checked>0
        <input type="radio" name="bartenders" value="1" onclick="submitHandler()">1
        <input type="radio" name="bartenders" value="2" onclick="submitHandler()">2
    </li>
</ul>

<p>Now, fill in the next fields and we will automatically calculate the tipout for you.</p>
<h4>CASHOUT SHEET</h4>
<ul>
    <li>DINING:
        <input type="text" id="dining" placeholder="0" oninput="deductTax();submitHandler();isBonus();" size="10">
    </li>
    <li>NET SALES: $<span id="netSales">0.00</span></li>
    <li>ALCOHOL SALES:
        <input type="text" id="alcoholSales" placeholder="0" oninput="submitHandler();isBonus()" size="10"><br>
        <span id="bonus" style="color:red"></span>
    </li>
    <li>GRATUITY:
        <input type="text" id="startingGratuity" placeholder="0" oninput="deductFee();submitHandler();" size="10">
    </li>
    <li>CREDIT CARD FEE: $<span id="fee">0.00</span></li>
    <li>NET GRATUITY: $<span id="resultingGratuity">0.00</span></li>
</ul>

<h4>AMOUNT PAID TO</h4>
<ul>
    <li>BUS: $<span id="busserTipout">0.00</span></li>
    <li>RUNNER: $<span id="foodrunnerTipout">0.00</span></li>
    <li>BAR: $<span id="bartenderTipout">0.00</span></li>
    <li>AMOUNT YOU OWN: $<span id="amountYouOwn">0.00</span></li>
</ul>


<script src="{{ base.url | prepend: site.url }}/tinker/tipout.js"></script>
<!-- <script src="{{ base.url | prepend: site.url }}//tipout.js"></script> -->
