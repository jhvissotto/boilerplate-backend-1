// prettier-ignore
export function promiser<
// ================ Arg Types ================ //
    D       = any, 
    E       = Error, 
    Result  = void, 
    Catched = void
// ================ Arguments ================ //
>({ cond, data, error, call, fall, prms, wait } : {
    cond:   boolean, 
    data?:  D, 
    error?: E, 
    call?:  (data?:  D) => Result, 
    fall?:  (error?: E) => Catched, 
    prms:   'resolve' | 'reject', 
    wait:   number,
}): 
// ================ Return Type ================ //
Promise<{
    data:       D
    result:     Result
    // fail
    error:      null
    catched:    null
    // boolean
    isSuccess:  true
    isError:    false
} | {
    // success
    data:       null
    result:     null
    // fail
    error:      E
    catched:    Catched
    // boolean
    isSuccess:  false
    isError:    true
}> {
    return new Promise((resolve, reject) => {

        let resp
        
        // ================ body ================ //
        if (cond) {
            resp = {
                // success
                data:       data,
                result:     call?.(data),
                // fail
                error:      null,
                catched:    null,
                // boolean
                isSuccess:  true,
                isError:    false,
            }
        } else {
            resp = {
                // success
                data:       null,
                result:     null,
                // fail
                error:      error,
                catched:    fall?.(error),
                // boolean
                isSuccess:  false,
                isError:    true,
            }
        }

        // ================ resolver ================ //
        setTimeout(() => {
            if (prms == 'resolve') resolve(resp)
            if (prms == 'reject')   reject(resp)
        }, wait)

    })
}
