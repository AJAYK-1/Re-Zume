import React from 'react'

function PersonalDetails({ resumeData, setResumeData }) {

    const handleChange = (e) => setResumeData({ ...resumeData, [e.target.name]: e.target.value })

    return (
        <div className='py-3'>
            <h2 className='sub-heading'> Personal Details </h2>
            <form className='mt-5 p-3 space-y-2 grid grid-cols-1'>
                <input type="text" name='name'
                    onChange={handleChange}
                    value={resumeData.name}
                    className='relative-input'
                    placeholder='Full Name...' required />

                <input type="email" name='email'
                    onChange={handleChange}
                    value={resumeData.email}
                    className='relative-input'
                    placeholder='Email...' required />

                <input type="number" name='phone'
                    onChange={handleChange}
                    value={resumeData.phone}
                    className='relative-input'
                    placeholder='Phone number...' required />

                <div className='ml-2'>
                    <label className='font-poppins text-lg font-semibold text-slate-600'> Gender </label>
                    <section className='flex font-poppins text-lg text-slate-600'>
                        <input type="radio" name="gender" id="male" value={'Male' || resumeData.gender} onChange={handleChange} required/> Male &nbsp;
                        <input type="radio" name="gender" id="female" value={'Female' || resumeData.gender} onChange={handleChange} /> Female &nbsp;
                        <input type="radio" name="gender" id="others" value={'Others' || resumeData.gender} onChange={handleChange} /> Others &nbsp;
                    </section>
                </div>

                <div>
                    <label className='font-poppins text-lg font-semibold text-slate-600 ml-2'> Address </label>
                    <section className='grid grid-cols-2 gap-3'>
                        <input type="text" name='country'
                            onChange={handleChange}
                            value={resumeData.address.country}
                            className='relative-input'
                            placeholder='Country' required />

                        <input type="text" name='state'
                            onChange={handleChange}
                            value={resumeData.address.state}
                            className='relative-input'
                            placeholder='State' required />

                        <input type="text" name='district'
                            onChange={handleChange}
                            value={resumeData.address.district}
                            className='relative-input'
                            placeholder='District' required />

                        <input type="text" name='city'
                            onChange={handleChange}
                            value={resumeData.address.city}
                            className='relative-input'
                            placeholder='City' required />

                        <input type="number" name='pincode'
                            onChange={handleChange}
                            value={resumeData.address.pincode}
                            className='relative-input'
                            placeholder='Pincode' required />
                    </section>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails