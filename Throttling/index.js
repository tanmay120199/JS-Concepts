const search=()=>{
    console.log('test');
};

const throttle=(fn,delay)=>{
    let lastCall=0;

    return function(...args){
        const now=Date.now();
        if(now-lastCall<delay){
            return;
        }
        lastCall=now;
        return fn(...args);
    }
}

const getThrottledData=throttle(search,1000);