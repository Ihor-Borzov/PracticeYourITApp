import React, { useState } from 'react'
import {useFormik, Field} from "formik"
import { CheckBox } from '@mui/icons-material'


export default function Signup() {
    const [submitted, setSubmitted] = useState(false)

const formik = useFormik({
    initialValues:{
        firstName:"",
    lastName:"",
    email:"",
    rememberMe:true,
    group:[]
    },
    validate:(values)=>{  /* this is the way to validate each field, it gets validated on each OnChange, and you will not be able to submit the form if you have any error in the error object  */
       const errors={}
if (values.firstName.includes("first")){errors.firstName = "you have invalid input KK"}
if (values.lastName.includes("last")){errors.lastName = "you have invalid input TT"}


if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

return errors
    },
 /*    validationSchema:{

    }, */
    onSubmit:(values)=>{
setSubmitted(true)
    }
})


/* so you just create inputs and assign names and formik values (make sure they are the same form each separate input! ), then onSubmit 
you can assign a formic onSubmit callback.

onBlur - is the way to say if user have already been on this input or not - this way you can show errors based on what inputs 
user have already been at, this way you can prevent false validation on inputs user did not touch yet
*/

console.log(formik)

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>

        <div className="input-container" style={{marginBottom:"10px"}}>
        <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name"
        onBlur={formik.handleBlur}  // if you specify onBlur - then you can track onTouch for each separate field, and show an error only when the field have been touched
        value={formik.values.firstName}
        onChange={formik.handleChange}
        maxLength={10}
        required
        />
        {formik.touched.firstName && formik.errors.firstName?<div style={{color:"red"}}>{formik.errors.firstName}</div>:null}
</div>
<div className="input-container"  style={{marginBottom:"10px"}} >
        <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        onChange={formik.handleChange}
        />
                {formik.errors.lastName?<div style={{color:"red"}}>{formik.errors.lastName}</div>:null}

</div>
<div className="input-container" style={{marginBottom:"10px"}}  >
        <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        onBlur={formik.handleBlur}
        value={formik.values.email}
        onChange={formik.handleChange}
        />
        </div>

        <div className="input-container" style={{marginBottom:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}  >
        <input
        name="rememberMe"
        type="checkbox"
        onChange={formik.handleChange}

/> 
<label htmlFor="rememberMe" > Remember Me</label>
        </div>

        <div className="input-container" style={{marginBottom:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}  >
        <input
        name="group"
        type="checkbox"
        value="one"
        onChange={formik.handleChange}

/> <span>{"One"}</span>

<input
        name="group"
        type="checkbox"
        value="two"
        onChange={formik.handleChange}

/> <span>{"Two"}</span>
        </div>


<button type="submit">Submit</button>
    </form>
{submitted? <div>
    {  Object.keys(formik.values).map((inp, ind)=>{return(<div key={inp}> {inp} = {formik.values[inp]}  </div>)})}
</div>:null}




    </div>
  )
}
