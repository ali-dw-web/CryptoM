








let _tbc = document.querySelectorAll('.tbc>div')
const _tbcc = (e) => {
    _tbc.forEach((r) => {
        r.style.border = '1px solid rgba(0, 0, 0, 0)'
    })
    e.target.style.border = '4px solid green'
    let x = e.target
    let _style = getComputedStyle(x)
    localStorage.setItem('tbc', _style.backgroundColor)
    document.querySelectorAll('.content>div').forEach((t) => {
        t.style.backgroundColor = _style.backgroundColor
    })
    if (_style.backgroundColor !== 'rgb(255, 255, 255)') {
        document.getElementsByClassName('p-coin2')[0].style.color = 'white'
        document.getElementsByClassName('p-coin3')[0].style.color = 'white'
        document.getElementsByClassName('p2')[0].style.color = 'white'
        document.getElementsByClassName('p3')[0].style.color = 'white'
    } else {
        document.getElementsByClassName('p-coin2')[0].style.color = 'black'
        document.getElementsByClassName('p-coin3')[0].style.color = 'black'
        document.getElementsByClassName('p2')[0].style.color = 'black'
        document.getElementsByClassName('p3')[0].style.color = 'black'
    }
}
_tbc.forEach((i) => {
    i.addEventListener('click', _tbcc)
})
let _mbc = document.querySelectorAll('.mbc>div')
const _mbcc = (e) => {
    _mbc.forEach((r) => {
        r.style.border = '1px solid rgba(0, 0, 0, 0)'
    })
    e.target.style.border = '4px solid green'
    let x = e.target
    let _style = getComputedStyle(x)
    localStorage.setItem('mbc', _style.backgroundColor)
    // console.log(_style);
    let r = _style.backgroundColor
    // console.log(r);

    document.getElementsByClassName('l-side')[0].style.backgroundColor = _style.backgroundColor
    if (r == 'rgb(255, 255, 255)') {
        let d = document.querySelectorAll('.l-side>ul')
        let g = document.querySelectorAll('.l-side>ul>li')
        let h = document.querySelectorAll('.l-side>ul i')
        d.forEach((r) => {
            r.style.color = 'gray'
        })
        g.forEach((r) => {
            r.style.color = 'gray'
        })
        h.forEach((t) => {
            t.style.color = 'gray'
        })


    } else {
        let d = document.querySelectorAll('.l-side>ul')
        let g = document.querySelectorAll('.l-side>ul>li')
        let h = document.querySelectorAll('.l-side>ul i')
        d.forEach((r) => {
            r.style.color = 'white'
        })
        g.forEach((r) => {
            r.style.color = 'white'
        })
        h.forEach((t) => {
            t.style.color = 'white'
        })
    }
}
_mbc.forEach((i) => {
    i.addEventListener('click', _mbcc)
})
let _hbc = document.querySelectorAll('.hbc>div')
const _hbcc = (e) => {
    _hbc.forEach((r) => {
        r.style.border = '1px solid rgba(0, 0, 0, 0)'
    })
    e.target.style.border = '4px solid green'
    let x = e.target
    let _style = getComputedStyle(x)
    // console.log(_style);
    let r = _style.backgroundColor
    localStorage.setItem('hbc', _style.backgroundColor)
    // console.log(r);

    document.getElementsByClassName('small-menu')[0].style.backgroundColor = _style.backgroundColor
    if (r !== 'rgb(255, 255, 255)') {
        document.getElementsByClassName('gett')[0].classList.add('rez')
        document.querySelectorAll('.small-menu>div:last-child>div:nth-of-type(4)>p').forEach((q) => {
            q.style.color = 'white'
        })
        document.getElementsByClassName('hr')[0].style.color = 'white'



        document.getElementsByClassName('menu-shortcut')[0].style.color = 'white'
        document.querySelectorAll('.small-menu>div>div>i').forEach((i) => {
            i.style.color = 'white'
        })



    } else {
        document.getElementsByClassName('gett')[0].classList.remove('rez')
        document.querySelectorAll('.small-menu>div:last-child>div:nth-of-type(4)>p').forEach((q) => {
            q.style.color = 'black'
        })
        document.getElementsByClassName('hr')[0].style.color = 'black'



        document.getElementsByClassName('menu-shortcut')[0].style.color = 'black'
        document.querySelectorAll('.small-menu>div>div>i').forEach((i) => {
            i.style.color = 'black'
        })
    }

}
_hbc.forEach((i) => {
    i.addEventListener('click', _hbcc)
})
let _cog = document.querySelectorAll('.icon-cog')
// console.log(_cog[1]);
_cog[1].addEventListener('click', () => {
    document.getElementsByClassName('setting')[0].style.right = '0%'
})
document.querySelector('.setting>div:first-child>div').addEventListener('click', () => {
    document.getElementsByClassName('setting')[0].style.right = '-150%'
})
let page = document.querySelectorAll('.second-page>div:first-child>div')
let flag4 = -500
page.forEach((i) => {
    i.style.transform = `translateX(${flag4}px)`
    flag4 += flag4

})
let _state = document.querySelectorAll('.second-page>div>div>div:nth-of-type(7)>div')
let _statte = document.querySelectorAll('.res>div>div:nth-of-type(3)>div:last-child')

const arr = ['completed', 'pending', 'canceled']
for (let g = 0; g < _state.length; g++) {
    let x = parseInt((Math.random() * 3))
    _state[g].innerHTML = arr[x]
    if (_state[g].innerHTML == 'completed') {
        _state[g].style.background = '#c0faa0'
    } else if (_state[g].innerHTML == 'pending') {
        _state[g].style.background = '#d2dddc'
    } else {
        _state[g].style.background = '#ffecec'
        _state[g].style.color = '#fd4f4f'
    }

}



let _div = document.querySelectorAll('.res>div>div:nth-of-type(2)')
let anime1 = document.querySelectorAll('.prices>div')
let _icon = document.querySelectorAll('.second-page>div>div>div:nth-of-type(5)>img')
let _pic = document.querySelectorAll('.res>div>div:nth-of-type(2)>img')
window.addEventListener('load', () => {

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => res.json())
        .then(val => {
            document.getElementsByClassName('p-coin')[0].innerHTML = `$${val[0].current_price}`
            document.getElementsByClassName('p-coin2')[0].innerHTML = `$${val[64].current_price}`
            document.getElementsByClassName('p-coin3')[0].innerHTML = `$${val[80].current_price}`
            document.getElementsByClassName('p-coin4')[0].innerHTML = `$${val[25].current_price}`
            document.getElementsByClassName('loading')[0].style.display = 'none'
            for (let z = 0; z < _icon.length; z++) {
                _icon[z].setAttribute('src', val[z].image)
            }

            for (let h = 0; h < _pic.length; h++) {
                _pic[h].setAttribute('src', val[h].image)
                _div[h].innerHTML += val[h].name


            }
            document.getElementsByClassName('loading')[0].style.display = 'none'
            anime1.forEach((i) => {
                i.style.transform = 'translateX(0px)'
                i.style.opacity = '1'
            })
            document.getElementsByClassName('crypto-box')[0].style.transform = 'translateY(0px)'
            document.getElementsByClassName('crypto-box')[0].style.opacity = '1'
            setTimeout(() => {
                document.getElementsByClassName('estes')[0].style.transform = 'translateX(0px)'
                document.getElementsByClassName('estes')[0].style.opacity = '1'
                document.getElementsByClassName('table')[0].style.transform = 'translateX(0px)'
                document.getElementsByClassName('table')[0].style.opacity = '1'

            }, 1000)



        })


})
let B_sidebar = document.getElementsByClassName('button')[0]
let sidebar = document.getElementsByClassName('l-side')[0]
function wid() {
    let sidebar = document.getElementsByClassName('l-side')[0]
    sidebar.style.width = '0px'
    sidebar.style.padding = '0'
    sidebar.style.border = 'none'
    let x = document.getElementsByClassName('menu-shortcut')[0]

    x.classList.add('didi')
}
let flag = 1
function wido() {
    document.getElementsByClassName('')
    let r = document.querySelectorAll('.list>li')

    if (flag % 2) {
        r.forEach((val) => {
            val.style.height = '25px'
            val.style.marginTop = '10px'

        })
        document.getElementsByClassName('list')[0].setAttribute('data-status', 'on')
        document.getElementsByClassName(' icon-plus')[0].style.transform = 'rotate(90deg)'
    } else {
        r.forEach((val) => {
            val.style.height = '0px'
            val.style.marginTop = '0px'

        })
        document.getElementsByClassName('list')[0].setAttribute('data-status', 'off')
        document.getElementsByClassName('icon-plus')[0].style.transform = 'rotate(0deg)'
    }
    flag++
    if (document.getElementsByClassName('list2')[0].getAttribute('data-status') == 'on') {
        document.getElementsByClassName('list2')[0].setAttribute('data-status', 'off')
        let _li = document.querySelectorAll('.list2>li')
        _li.forEach((val) => {
            val.style.height = '0px'
            val.style.marginTop = '0px'
            flag2++
        })

    }

}
flag2 = 1
function widdo() {
    let _li = document.querySelectorAll('.list2>li')

    if (flag2 % 2) {
        _li.forEach((val) => {
            val.style.height = '25px'
            val.style.marginTop = '10px'


        })
        document.getElementsByClassName('list2')[0].setAttribute('data-status', 'on')
        document.getElementsByClassName('st')[0].style.transform = 'rotate(100deg)'
    } else {
        _li.forEach((val) => {
            val.style.height = '0px'
            val.style.marginTop = '0px'

        })
        document.getElementsByClassName('list2')[0].setAttribute('data-status', 'off')
        document.getElementsByClassName('st')[0].style.transform = 'rotate(0deg)'
    }
    flag2++
    if (document.getElementsByClassName('list')[0].getAttribute('data-status') == 'on') {
        document.getElementsByClassName('list')[0].setAttribute('data-status', 'off')
        let r = document.querySelectorAll('.list>li')
        flag++
        r.forEach((val) => {
            val.style.height = '0px'
            val.style.marginTop = '0px'


        })


    }
}
const sidee = (s) => {

    s.style.display = 'none'
    sidebar.style.width = '300px'
    let x = document.getElementsByClassName('menu-shortcut')[0]
    x.classList.remove('didi')


}
let _content = document.querySelectorAll('.content>div')
let _navi = document.querySelectorAll('.navi')
_navi.forEach((t) => {
    t.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-p') == '2') {

            page.forEach((r) => {
                r.style.transform = 'translateX(0px)'
            })

        }

        _content.forEach((b) => {
            b.style.zIndex = 0
        })
        for (let s = 0; s < _content.length; s++) {

            if (e.target.getAttribute('data-p') == _content[s].getAttribute('data-p')) {
                _content[s].style.zIndex = '10000'
                break;
            }

        }

    })
})
const cryptoData = {
    BTC: [10, 20, 15, 25, 20, 30, 25],
    ETH: [12, 18, 14, 20, 22, 24, 23],
    XRP: [5, 10, 7, 9, 8, 10, 9],
    ZEC: [6, 7, 6, 8, 9, 10, 8],
    LTC: [4, 5, 4, 6, 7, 8, 7],
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const chartCtx = document.getElementById("crypto-chart").getContext("2d");

const cryptoChart = new Chart(chartCtx, {
    type: "line",
    data: {
        labels: months,
        datasets: [{
            label: "BTC",
            data: cryptoData.BTC,
            borderColor: "#f0c420",
            borderWidth: 2,
            tension: 0.4,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                ticks: { color: "#ccc" },
                grid: { color: "#333" },
            },
            y: {
                ticks: { color: "#ccc" },
                grid: { color: "#333" },
            }
        }
    }
});

document.querySelectorAll('.crypto-box input[name="coin"]').forEach(input => {
    input.addEventListener("change", (e) => {
        const selectedCoin = e.target.value;
        cryptoChart.data.datasets[0].data = cryptoData[selectedCoin];
        cryptoChart.data.datasets[0].label = selectedCoin;
        cryptoChart.update();
    });
});

