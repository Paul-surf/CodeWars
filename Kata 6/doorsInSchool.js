function doors(n) {
    let arr = [];
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let k = i; k < n; k += i + 1) {
            arr[k] = !arr[k];
        }
        result += arr[i];
    }
    return result;
}