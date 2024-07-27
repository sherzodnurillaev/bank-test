export function reload(arr, place, Component) {
    let box = document.querySelector(`.${place}`)

    for (const item of arr) {

        let elem = Component(item)
        
        box.append(elem)
    }
}
