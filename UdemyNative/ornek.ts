//arrow function

const arr=[1,2,3,4,5,6,7];

arr.map(function(x:number){
    console.log(x);
});

arr.map(x=>console.log(x))

arr.map((x:number)=>{
    console.log(x)
})


//some şartı sağlayan veri var mı

const result=arr.some((number:number)=>{
    return number>=5
});
console.log(result)


//every hepsi bu şartı sağlıyor mu

const result2=arr.every((z:number)=>{
    return z>=5
});
console.log(result2)

//findIndex şartı sağlayan elemanın indexi

const result3=arr.findIndex((q:number)=>{
    return q==3
});
console.log(result3)

//filter sonuçları filtrele

const result4=arr.filter((a:number)=>{
    return a>3
});
console.log(result4)

//rest

const object={
    a:1,
    b:2,
    c:3
};

const{a,b}=object;
console.log(a,b)

//spread

const object2={
    e:5,
    ...object
}
console.log(object2)


//promise

const IslemKontrol=new Promise(function(resolve,reject){
    if(islem){
        resolve();
    }
    else{
        reject();
    }
})
IslemKontrol.then(()=>{
    console.log("islem tamam")
})
.catch(()=>{
    console.log("hata var")
})


//async await
const axios=require('axios');
getData=async()=>{
    await axios.get('https://mertbuldur.com')
    .then((res)=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e)
    })
}

getShow=async()=>{
    await getData();

    console.log("verileri çekmeden burayı gösterme")
}

