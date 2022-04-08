const counterValue = document.getElementById('counter-value')
const actionType = document.getElementById('action-type')
const btnPlus = document.getElementById('btn-plus')
const btnMinus = document.getElementById('btn-minus')
const btnPlus5 = document.getElementById('btn-plus5')
const btnMinus5 = document.getElementById('btn-minus5')
const userValue = document.getElementById('userValue')
const btnUserValue = document.getElementById('btn-user-value')

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
        case 'counter/incremented5':
            return { counterValue: state.counterValue + 5, actionType: 'counter/incremented5' }
        case 'counter/decremented5':
            return { counterValue: state.counterValue - 5, actionType: 'counter/decremented5' }
        case 'counter/user-value':
            return { counterValue: state.counterValue + action.payload, actionType: 'counter/user-value' }
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

btnPlus5.addEventListener('click', () => {
    store.dispatch({ type: 'counter/incremented5' })
})

btnMinus5.addEventListener('click', () => {
    store.dispatch({ type: 'counter/decremented5' })
})

btnUserValue.addEventListener('click', (e) => {
    e.preventDefault()
    let payloadValue = Number(userValue.value)
    if (!isNaN(payloadValue)) {
        store.dispatch({ type: 'counter/user-value', payload: Number(userValue.value) })
    }
})

const handleStateChangeResults = () => {
    const state = store.getState()
    counterValue.innerText = state.counterValue
    actionType.innerText = state.actionType
}

store.subscribe(() => {
    handleStateChangeResults()
})