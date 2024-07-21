function header() {
    let header = document.querySelector('header')

    header.innerHTML = `
        <div class="container">
            <div class="head">
                <div class="left">
                    <a href="/">Главная</a>
                    <a href="/pages/wallet/">Мои кошельки</a>
                    <a href="/pages/transition/">Мои транзакции</a>
                </div>
    
                <div class="right">
                    <span></span>
                    <img src="/icon/header_exit.png" alt="exit">
                </div>
            </div>
        </div>
    `
}

export{ header }