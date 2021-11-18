
export const logger = store => next => action => {
    console.group(action.type)
        console.log(action)
        next(action)
        console.log("New State ", store.getState())
    console.groupEnd()
}