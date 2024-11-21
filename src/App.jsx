
import React, { useState } from 'react'

export default function App() {
  const [linkes]=useState(['Home','Apout','Blog','contact'])
  const[Activeindex,setActiveindex]=useState()
  // const[userinfo,setuserinfo]=useState({name:'ali',age:'20',country:'Egypt',isSub:true})

//   const getuser=()=>{
// let obj={...userinfo}
// obj.isSub=!obj.isSub
// setuserinfo(obj)
// console.log(obj)
//   }
  const [colors,setcolors]=useState(['red'])
  const getcolor =()=>{
    let oldcolor=[...colors]
    oldcolor.push('#'+Math.trunc(Math.random()*1000000))
    setcolors(oldcolor)
  }
  const [password,setpassword]=useState('')
  const[text,setText]=useState('')
  const [result,setResult]=useState('')

  const handle=()=>{
    let grade =(parseInt(password))
    let enterGarde;
    if(grade<50){
      enterGarde='F'
    }else if(grade >=50 && grade <65){
      enterGarde='D'
    }else if(grade >=65 && grade <75){
      enterGarde='C'
    }else if(grade>=75 && grade<85){
      enterGarde='B'
    }else if(grade>=85){
      enterGarde='A'
    }if(enterGarde == undefined){
      alert('كس امك دخل الدرجة بتاعتك يخول سايب الأنوت فاضي ليه يشرموط')
      // enterGarde=''
    }
    setResult(`Your Name : ${text} -:` + `:- Your grade : ${enterGarde}`)
  }
  return (
    <div>
      <nav className='d-flex gap-3'>
      {linkes.map((el,index)=>{return <a key={index}className={Activeindex == index ?'text-danger':'text-white'}
       onClick={()=>setActiveindex(index)} >{el}</a>})}


      </nav>
        <input type="text" placeholder='enter your name' onChange={(e)=>setText(e.target.value)} />
        <input type="number" placeholder='enter your grade' onChange={(e)=>setpassword(e.target.value)}/>
        <button className='btn btn-success' onClick={handle}>Click for your grade</button>
        <p>{result}</p>
      
      {/* {userinfo.isSub?<button onClick={getuser} className='btn btn-success'>Subscribe</button>:
      <button onClick={getuser} className='btn btn-danger'>UN subscribe</button>} */}
      <button onClick={getcolor}>Add New Colors</button>
      {colors.map((el,index)=>{return <button key={index} style={{backgroundColor:el}}>{el}</button>})}

          </div>


  )
}


