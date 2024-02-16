const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

    const products = [
        {
            id: 1,
            title: "Razer Kraken Kitty V2",
            price: 99.99,
            description: "Create your cutest stream persona in killer kitty style with the new Razer Kraken Kitty V2. Stand out and turns heads with unique Kitty ears powered by Razer Chroma™ RGB, as you put on a show with stream reactive lighting and a crystal‑clear mic.",
            colors:  [
                {
                    code: "pink",
                    img: "./img/kraken1.png",
                },
                {
                    code: "black",  
                    img: "./img/kraken2.png",
                },
            ],
        },
        {
            id: 2,
            title: "Razer BlackShark V2 Pro",
            price: 199.99,
            description: "If esports is your calling, answer it with the ultimate wireless headset for competitive play, designed in collaboration with top esports pros. Engineered for pure performance, get the complete package of crystal-clear audio, advanced noise isolation, and all-day comfort with the multi-award-winning Razer BlackShark V2 Pro.",
            colors: [
                {
                    code: "orange",
                    img: "./img/blackshark3.png",
                },
                {
                    code: "lightgray",
                    img: "./img/blackshark2.png",
                },
            ],
        },
    {
        id: 3,
        title: "Razer Kaira HyperSpeed",
        price: 129.99,
        description: "Hear the unfair advantage, no matter where you play with the Razer Kaira HyperSpeed —a wireless gaming headset that unleashes cutting-edge immersion and untethered freedom. With 2.4GHz gaming grade wireless and unmatched audio technology, you'll be able to play anywhere and conquer everywhere.",
        colors: [
            {
                code: "white",
                img: "./img/hyperspeed2.png",
            },
            {
                code: "black",
                img: "./img/hyperspeed1.png",
            },
        ],
    },
    {
        id: 4,
        title: "Razer Barracuda",
        price: 159.99,
        description: "Whether you’re indoors or outdoors, it’s all the same to the Razer Barracuda—a wireless hybrid headset designed for both home gaming and mobile entertainment. Fitted with integrated beamforming noise-cancelling mics, enjoy crystal-clear voice pickup no matter the environment. Backed by an intelligent dual-wireless design, conveniently switch between high-performance gaming at home and seamless mobile use on the streets.",
        colors: [
            {
                code: "lightgray",
                img: "./img/baraccuda2.png",
            },
            {
                code: "yellow",
                img: "./img/baraccuda1.png",
            },
        ],
    },
    {
        id: 5,
        title: "Razer Opus X",
        price: 99.99,
        description: "Elevate your immersion with the Razer Opus X — a sleek wireless Bluetooth headset that’s engineered to cancel out the competition. Whether you’re all about amping it up with ANC or crushing it on low-latency Gaming Mode, prepare to be plunged into a world of immersive sound with zero distractions.",
        colors: [
            {
                code: "pink",
                img: "./img/opus1.png",
            },
            {
                code: "green",
                img: "./img/opus2.png",
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen color of the product
        chosenProduct = products[index];

        //change texts of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductDesc.textContent = chosenProduct.description;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        //size not chosen
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        //for clicking
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
})

close.addEventListener("click", ()=>{
    payment.style.display = "none"
})