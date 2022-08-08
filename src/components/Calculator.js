import "./calculator.css"
import React,{useState} from 'react'



const Calculator = () => {

     const [val, setVal]=useState("");

     const backspace=()=>{
        try{
            setVal('')
        }catch(err){

        }
     }

     const calculate=()=>{
        try{
            setVal(eval(val))
        }catch(err){

        }

     }
    return (
        <>
        <div className='container my-2'>
         <div className="row">
           

           <div className="row justify-content-center p-4">
            <div className="col-md-4">

                <div className="card border-primary mb-3" >
                <div className="col-12">
                <h1 className="display-6 fw-bolder text-center  mt-4">Calculator</h1>
                


            </div>
                    
                <div className="card-body  " >
                   
                    <input type='text' className="inptbtn mb-4 text-center bg-white" value={val} 
                    onChange={(e)=>setVal(e.target.value)}/>
                    <button className="btn btn-light  shadow
                 p-4 fs-4" value='C' onClick={()=>backspace()}>C</button>
                    
                   
                    
<div className="row">
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='1' onClick={(e)=>setVal(val+e.target.value)}>1</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='2' onClick={(e)=>setVal(val+e.target.value)}>2</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='3' onClick={(e)=>setVal(val+e.target.value)}>3</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='/' onClick={(e)=>setVal(val+e.target.value)}>/</button>
            </div>

                
</div>

<div className="row">
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='4' onClick={(e)=>setVal(val+e.target.value)}>4</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='5' onClick={(e)=>setVal(val+e.target.value)}>5</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='6' onClick={(e)=>setVal(val+e.target.value)}>6</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='-' onClick={(e)=>setVal(val+e.target.value)}>-</button>
            </div>

                
</div>






<div className="row">
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='7' onClick={(e)=>setVal(val+e.target.value)}>7</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='8' onClick={(e)=>setVal(val+e.target.value)}>8</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='9' onClick={(e)=>setVal(val+e.target.value)}>9</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='+' onClick={(e)=>setVal(val+e.target.value)}>+</button>
            </div>

                
</div>

<div className="row">
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='.' onClick={(e)=>setVal(val+e.target.value)}>.</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='0' onClick={(e)=>setVal(val+e.target.value)}>0</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='=' onClick={(e)=>calculate()}>=</button>
            </div>
            <div className="col-3">
                <button className="btn btn-light  shadow
                 p-4 fs-4" value='*' onClick={(e)=>setVal(val+e.target.value)}>*</button>
            </div>

                
</div>



                   

                </div>

              


                </div>
            </div>


           </div>

  

       
            


         </div>
        



        </div>
        
        
        </>



    )

    
}

export default Calculator