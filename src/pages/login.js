import React, { useState } from 'react'
import {
    Navigation,
    IconDash,
    IconEndBracket,
    IconStartBracket,
    Input,
    Checked,
    NotChecked,
    Button
} from '../components/'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const [checked, setChecked] = useState(false)
    const history = useHistory();
    return (
        <div className="h100 flex-center">
            <Navigation
                classNameRight='none'
                classNameLeft='font-ubuntu fs-20 lh-23 bold c-primary mt-15 mr-26'
                className='w100 flex justify-end items-center' />
            <main>
                <div className='flex justify-center items-center mt-42'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster flex justify-center c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='font-ubuntu flex bold justify-center c-primary fs-32 lh-37 mt-32'>
                    Нэвтрэх
                </div>
                <Input labelClass='mt-8 mb-4' label='Цахим хаяг' className='w-190 h-22 pt-5 pd-5 pl-12 fs-20 ls-23' placeholder='name@mail.domain' />
                <Input labelClass='mt-16 mb-4' label='Нууц үг' className='w-190 h-22 pt-5 pd-5 pl-12 fs-20 ls-23' placeholder='●●●●●●●●●●' />
                <div className='mt-16 flex justify-between'>
                    <div>
                        <div onClick={() => { setChecked(!checked) }} className="flex" >
                            {checked ? <Checked /> : <NotChecked />}
                            <div className='ml-4 fs-16 lh-18 font-ubuntu c-primary normal' >Намайг сана</div>
                        </div>
                    </div>
                    <div className='fs-16 lh-18 font-ubuntu ul' onClick={() => { history.push('./forgotpass') }}>
                        Нууц үгээ мартсан
                    </div>
                </div>
                <Button className='font-ubuntu bold fs-22 lh-23 w-190 h-22 b-primary c-default mt-20'>нэвтрэх</Button>
                <div className='flex justify-center mt-12 c-primary fs-16 lh-18 ul font-ubuntu' onClick={() => { history.push('/signup') }} >Шинэ хэрэглэгч бол энд дарна уу?</div>
            </main>
            <footer className='mt-84 flex flex-col items-center'>
                <div className='font-ubuntu fs-16 lh-18'>
                    Made with &#10084; by Nest Academy
            </div>
                <div className='font-ubuntu fs-16 lh-18' style={{ opacity: 0.2, }}>
                    ©boginoo.io 2020
            </div>
            </footer>
        </div>
    )
}


