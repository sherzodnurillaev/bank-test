export function Wallet(item) {
    // res.forEach(elem => {
        // let wallet = document.querySelector('.wallet')
        let itemm = document.createElement('div')
        let name = document.createElement('h2')
        let currency = document.createElement('p')
    
        itemm.classList.add('item')
        name.innerText = item.name
        currency.innerText = item.currency
        
        itemm.append(name, currency) 
        
        return itemm
    // });
}
