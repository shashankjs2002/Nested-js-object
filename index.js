
// const url = items;
// console.log(url)

// const fetchData = async (url) => {
//     let data = await fetch(url);
//     let parsedData = await data.json(); 
//     console.log(parsedData);
// }


// fetch("./items.json")
// .then(response => {
//    return response.json();
// })
// .then( async data =>{
//     console.log(data)
//     let parsedData = await data.json();
//     console.log(parsedData)
    
// } );

// const fetchData = async () =>{


// let data = await fetch("./items.json");
// console.log(data)
// let parsedData = await data.json(); 
// console.log(parsedData);
// console.log(parsedData.items);
// parsedData.items.map(async (e) => {
//    console.log(e)
// //    e = await e.
// //    console.log(e)

// })



// }


// const arr = { Items : [
//     "Item 1", 
//     "Item 2",
//     {
//         "Item 3": [
//             " Item 3.1",
//              "Item 3.2"
//         ]
//     } 

// ]
// }


// const arr = { 
//     "Items" : [
//         "Item-1", 
//         "Item-2",
//         {
//             "Item_3": [
//                 "Item-3.1",
//                 "Item-3.2"
//             ]
//         },
//         "Item-4",
//         {
//             "Item_5": [
//                 {
//                     "Item_5_1" : [
//                         "Item-5.1.1",
//                         "Item-5.1.2",
//                         {"Item_5_1_3": [
//                             "Item_5.1.3.1"
//                         ]}

//                     ]
//                 },
//                 "Item-5.2"
//             ]
//         } 

//     ]
// }
    

const arr = {
    "Items" : [
        {
            "Mandi" : [
                {
                    "Fruits" : [
                        "Banana",
                        "Gauva"
                    ]
                },
                    
                {
                    "Vegetables" : [
                        
                        "Gaajar",
                        "Karela",
                        "Peas",
                        {
                            "Green" : [
                                "Maithi",
                                "Chaulai",
                                "Bathua",
                            ]

                        }
                    ]
                }
            ] 
        }

       ,
        "Data Cable",
        "Light Bulb",
        {
            "Kirana" : [
                "Shakkar",
                "Rava",
                {
                    "Daal" : [
                        "Ahar",
                        {
                            "Moong" : [
                                "Chilka",
                                "Dhoba"
                            ]
                        },
                        "Chane",
                        {
                            "Masoor" : [
                                "Black",
                                "Red"
                            ]
                        }
                    ]
                }
            ]
        },

        {
            "General" : [
                "Mosquito Coil",
                "Surf",
                "Soap",

            ]
        }
        

    ]
}

// console.log(arr)
// console.log(arr.Items)
// console.log(Object.keys(arr))
// let Item = Object.keys(arr)[0]
// let ItemValue = Object.values(arr)
// console.log(ItemValue)
// console.log(Item)
// // let i = Object.values(Item)
// let i = ItemValue
// console.log(i)
// (i.forEach(element => {
//     console.log(element.value)
// }))


// let printData = async (arr) => {
//     i = arr.Items
//     (i.forEach(element => {
//         console.log(element)
//         items.map( async (e) => {
//             if(typeof(e) === 'object'){
//                 console.log(Object.keys(arr))
//                 printData(e)
//             }
//         })
//     }))    
// }

function clicked(element){
    
    // completelist.innerHTML += `<ol id='${Object.keys(element)[0]}'>`+ "</ol>"
    printData(element)
}


let printData = async (arr) => {

    
        // console.log(Object.keys(arr))
        // console.log(Object.keys(arr)[0])
        var completelist= document.getElementById(`${Object.keys(arr)[0]}`);

        let item = Object.values(arr)
        // completelist.innerHTML += "<li>" + item + "</li>";
        // console.log(item)
        item.map( async  (e) => {
            e.map( async (element) => {
                
                if(typeof(element) === 'object'){
                    console.log(Object.keys(element)[0])
                    let olId = Object.keys(element)[0]
                    completelist.innerHTML += `<li id='${Object.keys(element)[0]}+0'  onclick='show(${olId})' style='color: red'  onMouseOver ="this.style.cursor = 'pointer'">` + Object.keys(element)[0] + "</li>";
                    
                    //  console.log((printData(element)))
                  
                    completelist.innerHTML += `<ol id='${Object.keys(element)[0]}' style='display: none ;'>`+ "</ol>"
                    
                    
                    await printData(element)
               
                } else {
                    console.log(element)
                 completelist.innerHTML +=  `<li id='${element}'>` + element + "</li>";
                }
            })
            // console.log(e)
            
        })
    }


function show (id) {
    console.log(id)
    // document.getElementById(id).style.display = 'inline'
    if(id.style.display === 'block'){
        id.style.display = 'none'
        
    } else{
        id.style.display = 'block'
     

    }
    console.log(id.style.color)

}

//     (i.forEach(element => {
//         console.log(element)
//         element.map( async (e) => {
//             if(typeof(e) === 'object'){
//                 console.log(Object.keys(arr))
//                 printData(e)
//             }
//         })
//     }))    
// }
printData(arr)
// const fetchData = async () =>{

// let data = await fetch(arr);
// console.log(data)
// let parsedData = await data.json(); 
// console.log(parsedData);
// }
// items.map(async (e) => {
//     console.log(e)
//     await console.log(typeof(e))
//     if(typeof(e) === 'object'){
//         let data = await fetch(e);
//         let parsedData = await data.json(); 
//         console.log(parsedData);
//         console.log(data)
//         console.log("Inside e")
//     }
// })


// fetchData()



// var counter= 4;

// function addelement() {
// var completelist= document.getElementById("item");

// completelist.innerHTML += "<li>Item " + counter + "</li>";
// counter++;
// }