import React from 'react';
import './Question.css'

const Quesion = () => {
    return (
        <div>
            <div className='question'>
            <h1>How react works?</h1>
            <p>React হলো জাভাস্ক্রিপ্ট এর একটি  লাইব্রেরি। React ব্যবহার করার মাধ্যমে আমরা খুব সুন্দরভাবে UI কে উপস্থাপন করতে পারি। React ব্যবহার এর ফলে আমরা জাভাস্ক্রিপ্ট এর মধ্যে HTML কে অতি সহজে ব্যবহার করতে পারি। React এ  JSX এর সহায়তায় অতি সহজে HTML code লিখা যায়।  React একটি idea প্রকাশ করে যা হলো similler in look different in data যার মাধ্যমে আমরা ভিন্ন ভিন্ন ডেটার জন্য একটা স্ট্রাকচার তৈরি করার মাধ্যমে তা সম্পাদন করতে পারি। React হলো একটি virtual dom । এই virtual dom এর ভেতর React webpage কিছু object আকারে সাজিয়ে রাখে। যদি webpage এর ডেটাই কোন চেইঞ্জ আসে তখন react আবার নতুন ভাবে আরেকটা webpage এর ডেটা নিয়ে অব্জেক্ট বানায়।</p>
            </div>
            <div className='question'>
                <h1>What is difference between Props and State?</h1>
                <p>State ব্যবহার করা হয় কোন সময় কি করলে Data এর অবস্থা ম্যানেজ করা যায় তার জন্যে। এবং state এ  read and write উভয় করা যায়। 
                </p>
                    <p>
                    Props হলো এমন একটি মাধ্যম যা এক কম্পনেন্ট থেকে অন্য কম্পনেন্ট এ ডেটা আদান প্রদান সহায়তা করে। এবং Props শুধু মাত্র ডেটাকে read করতে পারে।</p>

                    
]

            </div>
        </div>
    );
};

export default Quesion;