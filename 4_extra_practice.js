// Many algorithms have multiple valid solutions.
// If you have time, try coming up with a different approach/solution for reversing an array

// YOUR CODE HERE

var arr= [1,3,5,7,9]
var temp=[]
    for(var i=arr.length-1; i>=0; i--){
        if(arr[i]==9)
        arr[i]=arr[0];
        if(arr[i]==7)
        arr[i]=arr[1];
        if(arr[i]==3)
        arr[i]=arr[3];
        if(arr[i]==1)
        arr[i]=arr[4];
            temp.push(arr[i]);
    }
console.log(temp)

second 

var arr= [1,3,5,7,9]
arr.reverse(arr);
console.log(arr)
