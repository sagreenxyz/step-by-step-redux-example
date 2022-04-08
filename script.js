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
        default:
            return state
    }
})

// const incCounterValue = () => {
//     counterValue.innerText = Number(counterValue.innerText) + 1
//     actionType.innerText = 'incCounterValue()'
// }

// const decCounterValue = () => {
//     counterValue.innerText = Number(counterValue.innerText) - 1
//     actionType.innerText = 'decCounterValue()'
// }

btnPlus.addEventListener('click', () => {
    store.dispatch({ type: 'counter/incremented' })
})

// btnMinus.addEventListener('click', () => {decCounterValue()})
