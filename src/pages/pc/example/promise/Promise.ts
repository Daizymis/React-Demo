enum stateStatus {
    Pending = 'PENDING',
    Fulfilled = 'FULFILLED',
    Rejected = 'REJECTED'
}
type Executor<T> =  (
    resolve: (value?: T) => void,
    reject:(reason?:any) => void,
    ) => void
class HPromise<T>{
    private state: stateStatus;
    private value?:T;
    private resolveCallbacks : ((value?:T) => void)[];
    private rejectCallbacks : ((value?:T) => void)[];

    constructor(fn: Executor<T>) {
        this.state = stateStatus.Pending;
        this.value = undefined;
        this.resolveCallbacks = []
        this.rejectCallbacks = [];
        fn(this.resolve.bind(this), this.reject.bind(this))
    }
    then(resolvecb:(value?:T) => void, rejectedcb:(value?:T) => void) {
        if(this.state === stateStatus.Pending) {
            this.resolveCallbacks.push(resolvecb)
            this.rejectCallbacks.push(rejectedcb)
        }else if (this.state === stateStatus.Fulfilled) {
            resolvecb(this.value)
        }else if(this.value === stateStatus.Rejected) {
            rejectedcb(this.value)
        }
    }
    resolve(value?:T) {
        if(this.state ===  stateStatus.Pending){ //当状态为初始状态时，改变状态，并执行回调
            this.state = stateStatus.Fulfilled;
            this.value = value;
            this.resolveCallbacks.map(cb => cb(value));
        }

    }
    reject(value?:T) {
        if(this.state === stateStatus.Pending){ //当状态为初始状态时，改变状态，并执行回调
            this.state = stateStatus.Rejected;
            this.value = value;
            this.rejectCallbacks.map(cb => cb(value));
        }
    }
}

export default HPromise;
