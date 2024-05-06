function recurFun(arr, x, start, end){
    if(start > end){
        return false;
    }

    let mid = Math.floor((start + end)/2);
    if(arr[mid] === x){
        return true;
    }
    if(arr[mid] > x){
        return recurFun(arr, x, start, mid-1);
    }
    else{
        return recurFun(arr, x, mid+1, end);
    }
}

module.exports = recurFun;