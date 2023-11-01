// Wood Calculator

// fixed: per item wood requirements
// 1. chair --> 3 cft
// 2. table --> 10 cft
// 3. bed --> 50 cft

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChair = 5;
    const perTable = 15;
    const perBed = 50;

    const totalChair = chairQuantity * perChair;
    const totalTable = tableQuantity * perTable;
    const totalBed = bedQuantity * perBed;

    const totalWood = totalChair + totalTable + totalBed;
    return totalWood;
}

const result = woodCalculator(1, 1, 1);

console.log("Total Number of Wood", result);