import React from 'react';
import {
    Layout,
    Button,
    Input,
    IconDash,
    IconEndBracket,
    IconStartBracket
} from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster flex justify-center c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-32 flex justify-center items-end'>
                    <Input className='h-22 w-290 fs-20 lh-22 pl-12' placeholder='https://www.web-huudas.mn' />
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-22 ph-13 w-96  ml-8 b-primary'>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}  