export function reloadWallet(res) {
    res.forEach(elem => {
        let wallet = document.querySelector('.wallet')
        let item = document.createElement('div')
        let name = document.createElement('h2')
        let currency = document.createElement('p')
    
        item.classList.add('item')
        name.innerText = elem.name
        currency.innerText = elem.currency
        
        wallet.append(item)
        item.append(name, currency)  
    });
}

