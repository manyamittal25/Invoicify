'use client';
import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.title}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

 function AccordionFloat () {

    const faqsList = [
        {
          title: "How can I make an invoice for free?",
          description:
            "You can make an invoice for free by using our online invoice generator. It's free to use and you can create unlimited invoices without any hidden fees.",
        },
        {
          title: " Which is the best invoice generator for free?",
          description:
            "Invoicify is the best free invoice generator. It's free to use and you can create unlimited invoices without any hidden fees.You can customize your fields and columns,download your invoices as PDF, and send them to your clients via email or share it via WhatsApp or SMS.Within one click you can convert your estimates to invoices and send them to your clients. You can also track your payments and send reminders to your clients for pending payments.",
        },
        {
          title: "Is this invoice generator really free?",
          description:
            "Yes!! It is free for freelancers,agencies,small businesses and entrepreneurs.You can generate 50 documents every year.Also manage invoices and access free templates.",
        },
        {
          title: "Can I generatea PDF invoice using this invoice generator?",
          description:
            "Yes!! You can generate a PDF invoice using this invoice generator. You can download your invoices as PDF and send them to your clients via email or share it via WhatsApp or SMS.",
        }
      ];
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default AccordionFloat;