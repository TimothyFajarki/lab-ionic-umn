var num = []

function init(){
    console.log(localStorage.getItem("expense"))

    num = JSON.parse(localStorage.getItem("expense"))
    console.log("num = ", num)
    if(num==null){
        num=[];
    }
    var price = 0
    document.getElementById('list').innerHTML=""

    for(i=0; i<num.length; i++){
        price += Number.parseInt(num[i]['total'])
        var ionlist = document.createElement("ion-item")
        var p = document.createElement("p")
        p.innerText = num[i]['name']+ " : Rp. " +ChangeToRupiah(num[i]['total'])
        ionlist.appendChild(p)
        document.getElementById('list').appendChild(ionlist)
    }
    document.getElementById('total').innerText=ChangeToRupiah(price)

}

function ChangeToRupiah (total){
    var rev = parseInt(total, 10).toString().split("").reverse().join("");
    var rev2 = "";
    for (var i=0; i<rev.length; i++){
      rev2 += rev[i];
      if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
        rev2 += ".";
      }
    }
    return rev2.split("").reverse().join("");
  } 

async function destroy() {
    const alertController = document.querySelector('ion-alert-controller') 
    await alertController.componentOnReady();

    if(name.length == 0 || expense == null){
        const alert = await alertController.create({
            header: 'Delete',
            message: 'You are about to delete your spending list! Are you sure?',
            buttons: [{
                text: 'No',
                handler: ()=>{}
            },
            {
                text: 'Yes',
                handler: ()=>{
                    x=[]
                    localStorage.removeItem("expense")
                    init()
                }
            }]
        });
        return await alert.present()
    }

    x.push({
        'name': name,
        'total': expense
    })

    document.getElementById('name').value=""
    document.getElementById('expense').value=""

    init()
}

async function add() {
    var name = document.getElementById('name').value
    var expense = document.getElementById('expense').value
    console.log(expense)

    const alertController = document.querySelector('ion-alert-controller') 
    await alertController.componentOnReady();

    if(name.length == 0 || expense == null){
        const alert = await alertController.create({
            header: 'Error',
            message: 'You need to fill the blanks!',
            buttons: ['Back']
        })
        return await alert.present();
    }

    num.push({
        'name': name,
        'total': expense
    })

    document.getElementById('name').value=""
    document.getElementById('expense').value=""
    localStorage.setItem("expense", JSON.stringify(num))
    init()
}