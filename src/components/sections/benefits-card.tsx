import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props {
    icon: any,
    heading: string,
    desc: string
}

const BenefitsCard = ({ icon, heading, desc }: Props) => {
    return (
        <div className='flex flex-col gap-y-3'>
            <div className='text-sky-400'>
                {icon}
            </div>
            <div className='flex flex-col gap-y-3'>
                <h3 className='text-xl font-bold'>
                    {heading}
                </h3>
                <p className='text-sm'>{desc}</p>
            </div>
        </div>
    )
}

export default BenefitsCard