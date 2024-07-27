export function Trans(item) {
    let tem = document.createElement('div')
    // let trans = document.querySelector('table')
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

    // trans.append(headerRow)
    // res.forEach(res => {
        let row = document.createElement('tr');

        let idCell = document.createElement('td');

        let walletCell = document.createElement('td');
        let categoryCell = document.createElement('td');
        let amountCell = document.createElement('td');
        let dateCell = document.createElement('td');


        idCell.innerText = item.id;
        walletCell.innerText = item.transition;
        categoryCell.innerText = item.category;
        amountCell.innerText = item.amount;
        dateCell.innerText = item.date;

        // trans.append(row)

        // return row
    // });
    tem.append(headerRow, row)
    headerRow.append(one, two, three, four, five)
    row.append(idCell, walletCell, categoryCell, amountCell, dateCell)

    return tem
}
