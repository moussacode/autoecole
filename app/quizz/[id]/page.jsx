'use client';
import { quiz_data } from '@/app/Asset/dataquiz';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { QuizSection } from '@/components/CourQuizz';
import { Breadcrumb } from '@/components/Breadcrumb';
import { TestQuizz } from '@/components/TestQuizz';

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchCourData = () => {
            const quiz = quiz_data.find(quiz => quiz.id === Number(params.id));
            if (quiz) {
                setData(quiz);
            }
        };
        fetchCourData();
    }, [params.id]);

    
    return (
        data ? (
            <div>
                <section>
                    <div className="text-start mb-8 py-6 bg-secondary">
                        <div className='px-6'>
                            <Breadcrumb currentPage={data.title} currentPath="/quizz" currentPathView="Quizz" />
                            <div className='text-xl font-semibold'>
                                {data.title}
                            </div>
                            <p>{data.description || ''}</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center p-6'>
                        <div className="container max-w-3xl">
                           
                            <header>
                              
                            </header>

                            <div className=' '>
                                <div className='min-h-40 flex justify-center items-center py-2'>
                                    {data.questions && <TestQuizz quiz={data.questions} />}
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </section>
            </div>
        ) : <></>
    );
};

export default Page;
