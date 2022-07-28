import axios from "axios"
const auth = {headers: {Authorization: "809503c1-0082-48d9-a9f3-7c1b054ffb8c"}} //auth do grupo
const demoauth={headers: {Authorization:"e2190c39-7930-4db4-870b-bed0e5e4b88e"}}

export const CreateJob = (title,description,price,paymentMethods,dueDate) => {
    console.log('alou')
    const url = "https://labeninjas.herokuapp.com/jobs"
    const body = {
        title: title,
        description: description,
        price: Number(price),
        paymentMethods: paymentMethods,
        dueDate: dueDate
    }
    axios.post(url, body, auth).then((res=>{
        alert(`O serviço ${title} foi cadastrado com sucesso`)
    })).catch(err=>{alert(err.message)}) 
}