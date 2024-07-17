function header() {
    let header = document.querySelector('header')

    header.innerHTML = `
        <div class="container">
            <div class="head">
                <div class="left">
                    <a href="../../">Главная</a>
                    <a href="#">Мои кошельки</a>
                    <a href="#">Мои транзакции</a>
                </div>
    
                <div class="right">
                    <span>Мои транзакции</span>
                    <img src="../public/icon/header_exit.png" alt="exit">
                </div>
            </div>
        </div>
    `
}

export{ header }