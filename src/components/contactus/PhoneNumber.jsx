import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import "./ContactUs.css"


export const PhoneNumber = ({name}) => {

    const [phoneNumber,setPhoneNumber] = useState('');
    const [valid,setValid] = useState(true);

    const handleChange = (value)=>{
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value))
    }

    const validatePhoneNumber=(phone)=>{
        const phoneNumberPattern = /^\d{11}$/;
        return phoneNumberPattern.test(phone)
    }
  return (
    <div className='phone'>

            <PhoneInput country={'us'} value={phoneNumber} onChange={handleChange}  
        
                // inputProps={{require:true}}
                placeholder={'Phone'}
            />

        {!valid && <p>please enter a valid 10-digit phone number</p> }
    </div>
  )
}
