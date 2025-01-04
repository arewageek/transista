import { CheckCircle2, User2, Users2 } from 'lucide-react'
import React from 'react'
import { FaBusAlt } from 'react-icons/fa'
import BenefitsCard from '../sections/benefits-card'

const RegisterForm = () => {
    return (
        <div className='w-screen min-h-screen flex flex-col-reverse lg:flex-row justify-between p-24'>
            <div className='flex flex-col lg:flex-row gap-5 w-full lg:w-1/2 h-full'>
                <div className='flex flex-col gap-y-5'>
                    <div className='flex items-center gap-3 font-medium text-xl'>
                        <FaBusAlt className='text-sky-300' />
                        <h3 className='text-md'>
                            Transista
                        </h3>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>
                            Make bus reservations the smart way
                        </h3>
                        <p className='mt-4 text-slate-400 flex items-center gap-3'>
                            <CheckCircle2 />
                            Pay as you go
                        </p>
                    </div>

                    <div className='mt-5 w-full lg:w-2/3'>
                        <BenefitsCard icon={<Users2 className='text-4xl' />} desc='Invite your friends to join, and earn rewards when they sign up and book their first ride!' heading="Earn Rewards for Inviting Friends!" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm