const counterValue = document.getElementById('counter-value')
const actionType = document.getElementById('action-type')
const btnPlus = document.getElementById('btn-plus')
const btnMinus = document.getElementById('btn-minus')

const initialState = {
    counterValue: 0,
    actionType: 'None'
}

let store = Redux.createStore((state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { counterValue: state.counterValue + 1, actionType: 'counter/incremented' }
        case 'counter/decremented':
            return { counterValue: state.counterValue - 1, actionType: 'counter/decremented' }
        default:
            return state
    }
})

btnPlus.addEventListener('click', () => {
    store.dispatch({ type: 'counter/incremented' })
})

btnMinus.addEventListener('click', () => {
    store.dispatch({ type: 'counter/decremented' })
})

const handleStateChangeResults = () => {
    const state = store.getState()
    counterValue.innerText = state.counterValue
    actionType.innerText = state.actionType
}

store.subscribe(() => {
    handleStateChangeResults()
})