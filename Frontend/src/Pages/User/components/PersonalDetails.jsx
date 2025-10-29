import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import PhoneInput from "react-phone-input-2";
import { useResumeData } from '../../../Context/resumeContext';

function PersonalDetails() {
    const { resumeData, setResumeData } = useResumeData()
    const [personalData, setPersonalData] = useState(resumeData)

    useEffect(() => {
        setPersonalData(resumeData)
    }, [resumeData])

    const handleChange = (e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value })
    const handleAddressChange = (e) =>
        setPersonalData({ ...personalData, address: { ...personalData.address, [e.target.name]: e.target.value } })
    console.log(personalData);

    const submitPersonalData = async (e) => {
        try {
            e.preventDefault()
            setResumeData(personalData)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='py-3'>
            <h2 className='sub-heading'> Personal Details </h2>
            <form onSubmit={submitPersonalData} className='pt-15 p-3 space-y-2 grid grid-cols-1 '>
                <input type="text" name='name'
                    onChange={handleChange}
                    value={personalData.name}
                    className='resume-input'
                    placeholder='Full Name...' required />

                <input type="email" name='email'
                    onChange={handleChange}
                    value={personalData.email}
                    className='resume-input'
                    placeholder='Email...' required />

                <PhoneInput name='phone'
                    onChange={(value) => setPersonalData({ ...personalData, phone: value })}
                    value={personalData.phone}
                    country={'in'}
                    buttonClass='!bg-violet-200 !rounded-4xl'
                    inputClass='!outline-0 !bg-violet-200 !rounded-4xl !font-poppins !font-bold !text-slate-900 !p-1.5 !pl-15'
                    dropdownClass='!bg-violet-50'
                    placeholder='Phone number...' required />

                <div className='ml-2'>
                    <label className='font-poppins text-lg font-semibold text-slate-600 dark:text-slate-300'> Gender </label>
                    <section className='flex font-poppins text-lg text-slate-600 dark:text-slate-300'>
                        <input type="radio" name="gender" id="male" value='Male' onChange={handleChange} checked={personalData.gender === 'Male'} required /> Male &nbsp;
                        <input type="radio" name="gender" id="female" value='Female' onChange={handleChange} checked={personalData.gender === 'Female'} /> Female &nbsp;
                        <input type="radio" name="gender" id="others" value='Others' onChange={handleChange} checked={personalData.gender === 'Others'} /> Others &nbsp;
                    </section>
                </div>

                <div>
                    <label className='font-poppins text-lg font-semibold text-slate-600 ml-2 dark:text-slate-300'> Address </label>
                    <section className='grid grid-cols-2 gap-3'>
                        <input type="text" name='country'
                            onChange={handleAddressChange}
                            value={personalData.address.country}
                            className='resume-input'
                            placeholder='Country' required />

                        <input type="text" name='state'
                            onChange={handleAddressChange}
                            value={personalData.address.state}
                            className='resume-input'
                            placeholder='State' required />

                        <input type="text" name='district'
                            onChange={handleAddressChange}
                            value={personalData.address.district}
                            className='resume-input'
                            placeholder='District' required />

                        <input type="text" name='city'
                            onChange={handleAddressChange}
                            value={personalData.address.city}
                            className='resume-input'
                            placeholder='City' required />

                        <input type="number" name='pincode'
                            onChange={handleAddressChange}
                            value={personalData.address.pincode}
                            className='resume-input'
                            placeholder='Pincode' required />
                    </section>
                </div>
                <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
            </form>
        </div>
    )
}

export default React.memo(PersonalDetails)