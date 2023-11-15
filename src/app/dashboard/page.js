'use client'
import Link from 'next/link';
import Appointments from '../ui/dashboard/appointmentcards';
import Navbar from '../ui/dashboard/navbar';
import { Caramel } from 'next/font/google';
import ServicesCard from '../ui/dashboard/servicesCard';
import DoctorCard from '../ui/dashboard/doctorCards';


export default function Page() {
    const handleClick = () => {
        // Handle button click
        console.log('Button clicked!');
    };
    return (
        <div className='bg-white'>
            <div className='flex'>
                <div className=" w-1/5 m-1">
                    <Navbar />
                </div>
                <div className="w-4/5 m-1">
                    <div>
                        <Appointments />
                    </div>

                    <div className='w-full my-5'>
                        <ServicesCard />
                    </div>
                    <div className='w-full my-5'>
                        <div className='flex'>
                            <DoctorCard
                                imageUrl="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" // Replace with your image URL
                                description="A simple card with an overflowing image."
                                buttonText="Book Now"
                                onClick={handleClick} />

                            <DoctorCard
                                imageUrl="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" // Replace with your image URL
                                description="A simple card with an overflowing image."
                                buttonText="Book Now"
                                onClick={handleClick} />

                            <DoctorCard
                                imageUrl="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" // Replace with your image URL
                                description="A simple card with an overflowing image."
                                buttonText="Book Now"
                                onClick={handleClick} />

                            <DoctorCard
                                imageUrl="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" // Replace with your image URL
                                description="A simple card with an overflowing image."
                                buttonText="Book Now"
                                onClick={handleClick} />

                            <DoctorCard
                                imageUrl="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" // Replace with your image URL
                                description="A simple card with an overflowing image."
                                buttonText="Book Now"
                                onClick={handleClick} />
                        </div>

                    </div>
                </div>
            </div>
        </div>




    )
}


