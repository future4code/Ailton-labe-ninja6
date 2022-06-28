import axios from "axios"
const auth = {headers: {Authorization: "809503c1-0082-48d9-a9f3-7c1b054ffb8c"}}
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
        console.log(res)
    })).catch(err=>{alert(err.message)}) 
}