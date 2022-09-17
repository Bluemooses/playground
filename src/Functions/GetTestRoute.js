
export default async function GetTestRoute(){

    const response = await fetch('/my-test-route')
    console.log(response)
}