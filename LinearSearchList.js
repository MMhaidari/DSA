function linearSearch(heystack, n) {

    for (let i = 0; i < heystack.length; i++) {
        if (heystack[i] === n ) {
            return true;
        }
    }
    return false;
}
