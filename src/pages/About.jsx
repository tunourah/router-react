import React from 'react'
import Navbar from '../components/Navbar'
import "./../App.css";
const About = () => {
  return (
    <div>
        <Navbar />
    <div className="flex justify-center p-4 mt-32">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h1 className="text-end text-2xl font-bold text-gray-800">معسكر جافاسكربت</h1>
        <h3 className="text-end text-xl font-semibold text-gray-700">الوصف</h3>
        <p className="text-right text-gray-600 leading-relaxed">
          يهدف معسكر تطوير واجهات تطبيقات الويب باستخدام لغة JavaScript لتصميم وتطوير واجهات تطبيقات الويب على مستوى احترافي. 
          يبدأ المتدرّب رحلته التعليمية من دراسة أساسيات تطبيقات الويب وفهم كيفية عملها، مع التركيز على تطوير مهارات التصميم باستخدام Figma، 
          ويُتيح المعسكر للمتدرّب الفرصة للتفاعل مع Git & GitHub بشكل مباشر، حيث يعتمد على جلسات تعليمية وتطبيقات عملية تعتمد على مشاريع فعّالة؛ 
          كما يتعامل المشاركون مع أدوات متقدمة مثل Redux لإدارة حالة التطبيق بشكل فعّال، ويتعلمون كيفية استخدام اختبار البرمج
        </p>
      </div>
    </div>
    </div>
  )
}

export default About
