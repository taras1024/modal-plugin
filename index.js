let fruits = [
    {id: 1, title: 'Apple', price: 20, img: "https://sc04.alicdn.com/kf/UTB8ou8hOyDEXKJk43Oqq6Az3XXaz.jpg"},
    {id: 2, title: 'Orange', price: 30, img: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg"},
    {id: 3, title: 'Mango', price: 40, img: "https://st.depositphotos.com/1642482/3698/i/600/depositphotos_36983317-stock-photo-mango.jpg"}

]

const toHtml = fruit => `
  <div class="col">
      <div class="card">
        <img src=${fruit.img} class="card-img-top" style="height: 300px;" alt=${fruit.title}> 
        <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn="price" data-id = ${fruit.id}>Show price</a>
            <a href="#" class="btn btn-danger" data-btn="delete"  data-id = ${fruit.id}>Delete</a>
        </div>
      </div>
  </div>
`

function render() {
    const html = fruits.map(toHtml).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
    title: 'Price',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
                priceModal.close()
        }}
    ]
})


document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const fruitId = Number(event.target.dataset.id)
    const fruit = fruits.find(f => f.id === fruitId)

    if (btnType === 'price') {
        priceModal.setContent(`${fruit.title} price is ${fruit.price}$`)
        priceModal.open()
    } else if (btnType ==='delete') {
        $.confirm({
            title: 'Are you sure?',
            content: `<p>Delete ${fruit.title}?</p>`,
        }).then(() => {
            console.log('Delete')
            fruits = fruits.filter( f => f.id !== fruit.id)
            render()
        }).catch(() => {
            console.log('Cancel')
        })

    }
})








// function addFruit(fruit) {
//     const newCol = document.createElement('div')
//     newCol.classList.add('col')
//     newCol.dataset.id = fruit.id
//
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//
//     const cardImg = document.createElement('img')
//     cardImg.classList.add('card-img-top')
//     cardImg.style.height = '300px'
//     cardImg.src = fruit.img
//     newCard.appendChild(cardImg)
//
//     const cardBody = document.createElement('div')
//     cardBody.classList.add('card-body')
//
//     const cardTitle = document.createElement('h5')
//     cardTitle.classList.add('card-title')
//     cardTitle.innerHTML = fruit.title
//     cardBody.appendChild(cardTitle)
//
//     const showPriceBtn = document.createElement('a')
//     showPriceBtn.classList.add('btn', 'btn-primary')
//     showPriceBtn.textContent = "Show price"
//     showPriceBtn.onclick = () => {
//         const modalPrice = $.modal({
//             title: fruit.title,
//             closeable: false,
//             content: `${fruit.title} price is ${fruit.price}$`,
//             width: "300px",
//             footerButtons: [
//                 {text: 'Ok', type: 'primary', handler() {
//                         console.log('Ok button clicked')
//                         modalPrice.close()
//                 }}
//             ]
//         })
//         modalPrice.open()
//     }
//     cardBody.appendChild(showPriceBtn)
//
//     const deleteBtn = document.createElement('a')
//     deleteBtn.classList.add('btn', 'btn-danger')
//     deleteBtn.textContent = "Delete"
//     deleteBtn.onclick = event => {
//         const targetCard = event.currentTarget.closest('.col')
//         const modalDelete = $.modal({
//             title: "Delete Window",
//             closeable: false,
//             content: `Delete ${fruit.title}?`,
//             width: "300px",
//             footerButtons: [
//                 {text: 'Yes', type: 'danger', handler() {
//                         modalDelete.close()
//                         targetCard.remove()
//                 }},
//                 {text: 'Cancel', type: 'primary', handler() {
//                         modalDelete.close()
//                 }}
//             ]
//         })
//         modalDelete.open()
//     }
//     cardBody.appendChild(deleteBtn)
//
//     newCard.appendChild(cardBody)
//     newCol.appendChild(newCard)
//
//     return newCol
// }
//
// const row = document.createElement('div')
// row.classList.add('row')
// fruits.forEach(fruit =>{
//     row.appendChild(addFruit(fruit))
// })
//
// document.querySelector('.container').appendChild(row)

