export function resolvePromise(prms, promiseState) {
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;


    if (!prms) {
        return;
    }

    const thisPromise = prms;

    prms.then(dataACB).catch(errorACB);

    function dataACB(result) {
        if (promiseState.promise !== thisPromise)
            return;
        promiseState.data = result;
    }

    function errorACB(error) {
        if (promiseState.promise !== thisPromise)
            return;
        promiseState.error = error;
    }
}