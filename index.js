let Product_Arry =JSON.parse(localStorage.getItem("Product_Data"))||[];


const Product_UI = () =>    
{
    document.querySelector(".card").innerHTML=""
    Product_Arry.map((ele) =>
    {
        let Pro_Title = document.createElement("h5");
        Pro_Title.innerHTML=ele.Product_Title_Object;
       
        let Pro_URL = document.createElement("img");
        Pro_URL.src =ele.Product_URL_Object;

        let Pro_Description = document.createElement("p");
        Pro_Description.innerHTML =ele.Product_Description_Object;

        let Pro_Price = document.createElement("h5");
        Pro_Price.innerHTML =ele.Product_Price_Object;
        
        let Delete_ele = document.createElement("button");
        Delete_ele.innerHTML="Delete";
        Delete_ele.addEventListener("click",() =>
        {
            Product_Arry.splice(ele,1);
            Product_UI();
        });
        Delete_ele.style.backgroundColor="#FF0000";
        Delete_ele.style.color="#FFFFFF";
        Delete_ele.style.padding="5px 10px";
        Delete_ele.style.border="0px";
        Delete_ele.style.borderRadius="6px";

        let Div = document.createElement("div");
        Div.append(Pro_URL,Pro_Title,Pro_Description,Pro_Price,Delete_ele);
        document.querySelector(".card").append(Div);

    })

}

Product_UI();

const Product_Detail = (e) =>
{
    e.preventDefault();

    let Product_Object =
    {
        Product_Title_Object : document.querySelector("#Product_Title").value,
        Product_URL_Object : document.querySelector("#Product_URL").value,
        Product_Description_Object : document.querySelector("#Product_Description").value,
        Product_Price_Object : document.querySelector("#Product_Price").value,
    };
    Product_Arry.push(Product_Object)

    localStorage.setItem("Product_Data",JSON.stringify(Product_Arry));

    Product_UI();
}
document.querySelector("form").addEventListener("submit",Product_Detail);
