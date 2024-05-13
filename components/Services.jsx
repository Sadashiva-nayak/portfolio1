import React from 'react'
import { GanttChartSquare, Blocks,Gem } from 'lucide-react'

import{
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const serviceData = [
    {
        icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
        title:'web design',
        description: 'specialize in crafting visually stunning and user-friendly websites.'
    },
    {
        icon:<Blocks size={72} strokeWidth={0.8}/>,
        title:'Frontend Development',
        description: 'As a frontend developer, I specialize in bringing designs to life with clean, efficient code and seamless user interactions.'
    },
    {
        icon:<Gem size={72} strokeWidth={0.8}/>,
        title:'Backend Development',
        description: ' I specialize in building robust, scalable, and secure server-side solutions that power dynamic websites and applications. From designing databases and crafting APIs to optimizing server performance.'
    },
]
const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 mx-auto text-center">my services</h2>
            <div className="grid xl:grid-cols-3 gap-y-12 justify-center xl:gap-y-24 xl:gap-x-8">
                {serviceData.map((item,index)=>{
                    return (
                        <Card key={index} className='w-full flex flex-col pt-16 pb-10 max-w-[424px] h-[300px] justify-center items-center relative'>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services
