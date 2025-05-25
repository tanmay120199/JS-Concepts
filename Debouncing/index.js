const getData=()=>{
    //calls an api and get the data
    console.log("test");
};

//Higher Order function that takes the function and delay as params and returns a debounced version of the function
const debounce=(fn, delay)=>{
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            fn.apply(...args)
        },delay);
    };
}
const getDebouncedData=debounce(getData, 1000);
