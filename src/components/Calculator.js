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
            setVal('Error')
        }

     }
    return (
        <>
        <div className='container my-2'>
         <div className="row">
           

           <div className="row justify-content-center p-4">
            <div className="col-md-4 mt-5">

                <div className="card border-primary mb-3" >
                <div className="col-12">
                <h1 className="display-6 fw-bolder text-center  mt-4">Calculator</h1>
                


            </div>
                    
                <div className="card-body  " >
                   
                   <div className="resdiv mb-1">

                   <input type='text' className="inptcls" value={val} 
                    onChange={(e)=>setVal(e.target.value)}/>
                    <button className="splbtn1" value='C' onClick={()=>backspace()}>C</button>
                   </div>
             
                    
                   
                    
<div className="row mb-1">
            <div className="col-3">
                <button className="mybtn" value='1' onClick={(e)=>setVal(val+e.target.value)}>1</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='2' onClick={(e)=>setVal(val+e.target.value)}>2</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='3' onClick={(e)=>setVal(val+e.target.value)}>3</button>
            </div>
            <div className="col-3">
                <button className="mybtn splbtn" value='/' onClick={(e)=>setVal(val+e.target.value)}>/</button>
            </div>

                
</div>

<div className="row mb-1">
            <div className="col-3">
                <button className="mybtn" value='4' onClick={(e)=>setVal(val+e.target.value)}>4</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='5' onClick={(e)=>setVal(val+e.target.value)}>5</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='6' onClick={(e)=>setVal(val+e.target.value)}>6</button>
            </div>
            <div className="col-3">
                <button className="mybtn splbtn" value='-' onClick={(e)=>setVal(val+e.target.value)}>-</button>
            </div>

                
</div>






<div className="row mb-1">
            <div className="col-3">
                <button className="mybtn" value='7' onClick={(e)=>setVal(val+e.target.value)}>7</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='8' onClick={(e)=>setVal(val+e.target.value)}>8</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='9' onClick={(e)=>setVal(val+e.target.value)}>9</button>
            </div>
            <div className="col-3">
                <button className="mybtn splbtn" value='+' onClick={(e)=>setVal(val+e.target.value)}>+</button>
            </div>

                
</div>

<div className="row mb-1">
            <div className="col-3">
                <button className="mybtn" value='.' onClick={(e)=>setVal(val+e.target.value)}>.</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='0' onClick={(e)=>setVal(val+e.target.value)}>0</button>
            </div>
            <div className="col-3">
                <button className="mybtn" value='=' onClick={(e)=>calculate()}>=</button>
            </div>
            <div className="col-3">
                <button className="mybtn splbtn" value='*' onClick={(e)=>setVal(val+e.target.value)}>*</button>
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