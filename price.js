//Memory added
function memoryPrice(memory) {
    if (memory == "added16GbMemory") {
        document.getElementById('extra-memory').innerText = 180;
    } else {
        document.getElementById('extra-memory').innerText = 0;
    }
};
// Storage added
function storagePrice(storage) {
    if (storage == "added512GbSSD") {
        document.getElementById('extra-storage').innerText = 100;
    }
    else if (storage == "added1TbSSD") {
        document.getElementById('extra-storage').innerText = 180;
    }
    else {
        document.getElementById('extra-storage').innerText = 0;
    }
};

// Delivery included
function deliveryCharge(delivery) {
    if (delivery == "deliveryWithCharge") {
        document.getElementById('delivery-charge').innerText = 20;
    }
    else {
        document.getElementById('delivery-charge').innerText = 0;
    }
};


// Calculate Total Cost
function totalPrice() {
    const basePriceText = document.getElementById('base-price').innerText;
    const basePrice = parseFloat(basePriceText);

    const memoryPriceText = document.getElementById('extra-memory').innerText;
    const memoryPrice = parseFloat(memoryPriceText);

    const storagePriceText = document.getElementById('extra-storage').innerText;
    const storagePrice = parseFloat(storagePriceText);

    const deliveryCostText = document.getElementById('delivery-charge').innerText;
    const deliveryExpense = parseFloat(deliveryCostText);

    document.getElementById('total-price').innerText = basePrice + memoryPrice + storagePrice + deliveryExpense;
    document.getElementById('apply-discount').innerText = document.getElementById('total-price').innerText;
};


// Aply Promo Code
function discount() {
    totalPrice();
    const regularPriceText = document.getElementById('total-price').innerText;
    const regularPrice = parseFloat(regularPriceText);
    const code = document.getElementById('promo-code').value;
    if (code == "stevekaku") {
        const discountedPrice = regularPrice * 0.8;
        document.getElementById('apply-discount').innerText = discountedPrice;
    }
    document.getElementById("promo-code").value = " ";
}
// get memory input
document.getElementById('memory-8Gb').addEventListener('click', function () {
    const extraMemory = "added8GbMemory";
    memoryPrice(extraMemory);
    totalPrice();
});

document.getElementById('memory-16Gb').addEventListener('click', function () {
    const extraMemory = "added16GbMemory";
    memoryPrice(extraMemory);
    totalPrice();
});

// get storage input
document.getElementById('ssd-256Gb').addEventListener('click', function () {
    const extraStorage = "added256GbSSD";
    storagePrice(extraStorage);
    totalPrice();
});

document.getElementById('ssd-512Gb').addEventListener('click', function () {
    const extraStorage = "added512GbSSD";
    storagePrice(extraStorage);
    totalPrice();
});
document.getElementById('ssd-1Tb').addEventListener('click', function () {
    const extraStorage = "added1TbSSD";
    storagePrice(extraStorage);
    totalPrice();
});

// Get delivery mode
document.getElementById('quick-delivery').addEventListener('click', function () {
    const addDelivery = "deliveryWithCharge";
    deliveryCharge(addDelivery);
    totalPrice();
});

document.getElementById('free-delivery').addEventListener('click', function () {
    const addDelivery = "freeDelivery";
    deliveryCharge(addDelivery);
    totalPrice();
});

document.getElementById('discount').addEventListener('click', function () {
    discount();
});