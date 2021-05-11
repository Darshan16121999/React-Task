const product =
    [
        {
            productImg: 'https://picsum.photos/200',
            productName: "Laptop",
            productPrice: "50000",
        },

        {
            productImg: 'https://picsum.photos/210',
            productName: "Mobile",
            productPrice: "12000",
        },

        {
            productImg: 'https://picsum.photos/220',
            productName: "Tablet",
            productPrice: "6000",
        },

        {
            productImg: 'https://picsum.photos/230',
            productName: "Headphones",
            productPrice: "2000",
        },

        {
            productImg: 'https://picsum.photos/240',
            productName: "Chair",
            productPrice: "800",
        },

        {
            productImg: 'https://picsum.photos/250',
            productName: "Table",
            productPrice: "800",
        },

        {
            productImg: 'https://picsum.photos/260',
            productName: "Watch",
            productPrice: "1000",
        },

        {
            productImg: 'https://picsum.photos/270',
            productName: "Smart Watch",
            productPrice: "1500",
        },

        {
            productImg: 'https://picsum.photos/280',
            productName: "Macbook",
            productPrice: "78000",
        },

        {
            productImg: 'https://picsum.photos/290',
            productName: "Smart TV",
            productPrice: "15000",
        },

        {
            productImg: 'https://picsum.photos/300',
            productName: "Smart HOME",
            productPrice: "150000000",
        },

        {
            productImg: 'https://picsum.photos/310',
            productName: "Saino Softek",
            productPrice: "10/3",
        },

        {
            productImg: 'https://picsum.photos/320',
            productName: "Double Bed",
            productPrice: "3000",
        },

        {
            productImg: 'https://picsum.photos/330',
            productName: "Dogecoin",
            productPrice: "35",
        },

    ]

var container = document.getElementById('container')

product.map(function (data) {
    var temp = document.createElement('div')
    temp.innerHTML = `<img src="${data.productImg}"><h3>${data.productName}</h3><br><span>${data.productPrice}</span>`
    container.appendChild(temp)
})


