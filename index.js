function findMatching (driverAry, name) {
    return driverAry.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (driverAry, begLtrs) {
    const numLtrs = begLtrs.length;
    return driverAry.filter(element => element.slice(0, numLtrs) === begLtrs);
}

function matchName (driverAry, name) {
    return driverAry.filter(element => element.name === name);
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
fuzzyMatch(drivers, "Sa");