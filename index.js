function findMatching (driverAry, name) {
    return driverAry.filter(element => element.toLowerCase() === name.toLowerCase());
}
