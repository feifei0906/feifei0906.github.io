"use strict";
$(document).ready(function () {
    var total = 0;

    // add image swap and click handler to each image in table
    $("ul img").each(function () {
        var oldURL = $(this).attr("src"); // gets the src attribute
        var newURL = $(this).attr("id"); // gets the id attribute

        // preload rollover image
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers
        $(this).hover(
            function () {
                $(this).attr("src", newURL); // sets the src attribute
            },
            function () {
                $(this).attr("src", oldURL); // sets the src attribute
            }

        ); // end hover 

        $(this).click(function (evt) {
            // get text from textarea
            var order = $("#order").html();
            if (order == undefined) {
                order = "";
            }

            // add selection to text and total
            if (oldURL == "images/standard.jpg") {
                total = total + 393.99;
                order = order + '<option value="standard">$393.99 - Glycylglycine</option>';
            } else if (oldURL == "images/sodiumhydroxide.jpg") {
                total = total + 14.50;
                order = order + '<option value="sodiumhydroxide">$14.50 - Sodium Hydroxide</option>';
            } else if (oldURL == "images/solvent.jpg") {
                total = total + 109.00;
                order = order + '<option value="solvent">$109.00 - Acetone</option>';
            } else if (oldURL == "images/phosphatebuffers.jpg") {
                total = total + 64.75;
                order = order + '<option value="phosphatebuffers">$64.75 - Phosphate Buffers</option>';
            } else if (oldURL == "images/hydrochloricacid.jpg") {
                total = total + 37.64;
                order = order + '<option value="hydrochloricacid">$37.64 - Hydrochloric Acid</option>';
            } else if (oldURL == "images/analyticalreagents.jpg") {
                total = total + 507.38;
                order = order + '<option value="analyticalreagents">$507.38 - Acetonitrile</option>';
            } else if (oldURL == "images/pei.jpg") {
                total = total + 110.76;
                order = order + '<option value="pei">$110.76 - Surfactant</option>';
            } else if (oldURL == "images/inorganicprecursors.jpg") {
                total = total + 420.00;
                order = order + '<option value="inorganicprecursors">$420.00 - Inorganic Precursors</option>';
            } else if (oldURL == "images/be.jpg") {
                total = total + 54.74;
                order = order + '<option value="sodiumhydroxide">$54.74 - Benedict Solution</option>';
            } else if (oldURL == "images/ca.jpg") {
                total = total + 27.68;
                order = order + '<option value="solvent">$27.68 - Calcium Hydroxide</option>';
            } else if (oldURL == "images/com.jpg") {
                total = total + 94.50;
                order = order + '<option value="phosphatebuffers">$94.50 - Methyl Alcohol, anhydrous</option>';
            } else if (oldURL == "images/copper.jpg") {
                total = total + 10.70;
                order = order + '<option value="hydrochloricacid">$10.70 - Copper II Sulfate</option>';
            } else if (oldURL == "images/cu.jpg") {
                total = total + 94.91;
                order = order + '<option value="analyticalreagents">$94.91 - Bromothymol Blue</option>';
            } else if (oldURL == "images/eosin.jpg") {
                total = total + 17.35;
                order = order + '<option value="pei">$17.35 - Eosin Y</option>';
            } else if (oldURL == "images/io.jpg") {
                total = total + 9.87;
                order = order + '<option value="inorganicprecursors">$9.87 - Sudan III Stain</option>';
            } else if (oldURL == "images/iodine.jpg") {
                total = total + 32.00;
                order = order + '<option value="sodiumhydroxide">$32.00 - Fertilizer Soluble</option>';
            } else if (oldURL == "images/me.jpg") {
                total = total + 61.79;
                order = order + '<option value="solvent">$61.79 - Iodine Biological Stain</option>';
            } else if (oldURL == "images/po.jpg") {
                total = total + 81.39;
                order = order + '<option value="phosphatebuffers">$81.39 - Phenolphthalein</option>';
            } else if (oldURL == "images/pot.jpg") {
                total = total + 14.99;
                order = order + '<option value="hydrochloricacid">$14.99 - Potassium Nitrate</option>';
            } else if (oldURL == "images/ptc.jpg") {
                total = total + 29.99;
                order = order + '<option value="analyticalreagents">$29.99 - P.T.C. Test Pape</option>';
            } else if (oldURL == "images/su.jpg") {
                total = total + 45.00;
                order = order + '<option value="pei">$45.00- Sudan III Stain</option>';
            } else if (oldURL == "images/uni.jpg") {
                total = total + 59.99;
                order = order + '<option value="pei">$59.99- Plyvinyl Alcohol</option>';
            } else if (oldURL == "images/violet.jpg") {
                total = total + 85.76;
                order = order + '<option value="inorganicprecursors">$85.76 - Crystal Violet Hucker</option>';
            } else if (oldURL == "images/aceto.jpg") {
                total = total + 120.00;
                order = order + '<option value="inorganicprecursors">$120.00 - Acetic Acid</option>';
            }

            // display order and total
            $("#order").html(order);
            $("#total").text("Total: $" + total.toFixed(2));

            // cancel default event of the clicked link
            evt.preventDefault();

        }); // end click
    }); // end each

    // add click event handler for check out button
    $("#place_order").click(function () {
        var order = $("#order").text();
        if (order == "") {
            alert("Please add at least one item to your order.");
        } else {
            $("#order_form").submit();
        }
    }); // end click

    // add click event handler for clear button
    $("#clear_order").click(function () {
        total = 0;
        $("#order").text("");
        $("#total").text("");
    }); // end click


    $("#payment").validate({
        rules: {
            nameOnCard: {
                required: true,
            },
            cardNumber: {
                required: true,
                creditcard: true
            },
            expMonth: {
                required: true
            },
            expYear: {
                required: true
            }
        }
    });
}); // end ready
