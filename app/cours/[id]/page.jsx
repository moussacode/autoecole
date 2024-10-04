'use client';
import { blog_data } from '@/app/Asset/assets';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { QuizSection } from '@/components/CourQuizz';
import { Breadcrumb } from '@/components/Breadcrumb';

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchCourData = () => {
            for (let i = 0; i < blog_data.length; i++) {
                if (Number(params.id) === blog_data[i].id) {
                    setData(blog_data[i]);
                    console.log(blog_data[i]);
                    break;
                }
            }
        };

        fetchCourData();
    }, [params.id]);  // Add params.id as the dependency to ensure the hook runs whenever it changes

    // Function to get the current index of the course
    const currentIndex = data ? blog_data.findIndex(course => course.id === data.id) : -1;

    // Get the previous and next course IDs
    const prevCourseId = currentIndex > 0 ? blog_data[currentIndex - 1].id : null;
    const nextCourseId = currentIndex < blog_data.length - 1 ? blog_data[currentIndex + 1].id : null;

    return (
        data ? (
            <div>
                <section className=''>
                    <div className="text-start mb-8 py-6 bg-secondary">
                        <div className='px-6'>
                            <Breadcrumb currentPage={data.title} currentPath="/cours" currentPathView="Cours"/>
                            <div className='text-xl font-semibold'>
                                {data.title}
                            </div>
                            {data.description} <p><br /></p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center p-6'>
                        <div className="container max-w-3xl">
                            <div className='relative mb-6 w-full h-[221px] overflow-hidden rounded-lg'>
                                <Image
                                    src={data.image}
                                    alt={data.title || ''}
                                    className='object-cover'
                                    fill
                                />
                            </div>

                            <header>
                                <h1 className='mb-4 text-2xl lg:text-4xl font-semibold leading-tight'>{data.title}</h1>
                                <p className='mt-3 text-xs text-muted-foreground'></p>
                            </header>

                            <main className='mt-16'>
                                <h2>Introduction Teste Data</h2>
                                <p>{data.description}</p>
                                <h2>Introduction Teste Data</h2>
                                <p>{data.description}</p>
                            </main>

                            <div className='mt-16 space-x-4'>
                                <div className='text-xl'>Test tes connaissances :</div>
                                <div className='min-h-40 flex justify-center items-center py-6'>
                                    {data.quiz && <QuizSection quiz={data.quiz} />}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className='mt-8 flex justify-between'>
                                <Link 
                                    href={prevCourseId ? `/cours/${prevCourseId}` : '#'} 
                                    className={`inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 ${!prevCourseId ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                    disabled={!prevCourseId}
                                >
                                    <FaArrowLeft className='mr-2' />
                                    Previous Course
                                </Link>
                                <Link 
                                    href={nextCourseId ? `/cours/${nextCourseId}` : '#'} 
                                    className={`inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 ${!nextCourseId ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                    disabled={!nextCourseId}
                                >
                                    Next Course
                                    <FaArrowRight className='ml-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        ) : <></>
    );
};

export default Page;
