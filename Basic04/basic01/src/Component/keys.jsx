function Key(){
    const num=["one","two","three"]


    return(
       <div>
          <div>Keys:</div>
          <div>{num.map((numb,index)=>{
               return <li key={index}>{numb}</li>


              })}
          </div>
       </div>
    )
}
export default Key