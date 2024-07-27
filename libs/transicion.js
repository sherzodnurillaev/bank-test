export function reloadTrans(res) {

    let trans = document.querySelector('table')
    let headerRow = document.createElement('tr')
    let one = document.createElement('th')
    let two = document.createElement('th')
    let three = document.createElement('th')
    let four = document.createElement('th')
    let five = document.createElement('th')
    // let dataRow = document.createElement('tr')

    one.classList.add('one')
    two.classList.add('two')
    three.classList.add('three')
    four.classList.add('four')
    five.classList.add('five')

    one.innerText = "ID"
    two.innerText = "Отправлено с кошелька"
    three.innerText = "Категория"
    four.innerText = "Сумма транзации"
    five.innerText = "Когда"

    trans.append(headerRow)
    headerRow.append(one, two, three, four, five)

    res.forEach(res => {
        let row = document.createElement('tr');

        let idCell = document.createElement('td')

        let walletCell = document.createElement('td');
        let categoryCell = document.createElement('td');
        let amountCell = document.createElement('td');
        let dateCell = document.createElement('td');


        idCell.innerText = res.id;
        walletCell.innerText = res.transition;
        categoryCell.innerText = res.category;
        amountCell.innerText = res.amount;
        dateCell.innerText = res.date;

        trans.append(row)
        row.append(idCell, walletCell, categoryCell, amountCell, dateCell)
    });
}