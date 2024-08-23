'use client'

import { CardTime } from "@/components/cardTime";
import { ListItem } from "@/components/listItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const listItems = [
    {
      number: 1,
      text: "HTML + CSS"
    },
    {
      number: 2,
      text: "JavaScript"
    },
    {
      number: 3,
      text: "ReactJS"
    },
    {
      number: 4,
      text: "NextJS"
    },
    {
      number: 5,
      text: "NodeJS"
    },
  ]

  const timeItems = [
    {
      quantity: 7,
      unity: "DIAS"
    },
    {
      quantity: 23,
      unity: "HORAS"
    },
    {
      quantity: 10,
      unity: "MIN."
    },
    {
      quantity: 11,
      unity: "SEG."
    }
  ]

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#F8F9FA] dark:bg-[#121212] w-full">
      <div className="w-full max-w-[1366px] flex flex-col items-center justify-between gap-[95px] relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`${darkMode ? 'bg-[#F8F9FA]' : 'bg-transparent'} m-0 absolute -top-10 right-0 rounded-lg`}
        >
          <img className="size-8" src={darkMode ? '/night.png' : '/day.png'} />
        </button>
        <div className="flex items-start justify-between gap-20 w-full">
          <div className="flex flex-col justify-start items-start gap-[95px]">
            <p className="text-[#007BFF] dark:text-[#1E90FF] text-base font-medium">EVENTO 100% GRATUITO</p>

            <div className="border-2 border-[#007BFF] dark:border-[#1E90FF] w-[500px]">
              <h1 className="text-[#212529] dark:text-white text-[40px] w-[300px] bg-[#F8F9FA] dark:bg-[#121212] p-2 -ml-1 -mt-1">PROFISSÃO</h1>
              <h1 className="text-[#212529] dark:text-white text-[40px] w-[340px] bg-[#F8F9FA] dark:bg-[#121212] p-2 -mr-1 -mb-1 ml-44">PROGRAMAÇÃO</h1>
            </div>
            <h1 className="text-[#212529] dark:text-white text-2xl w-[500px]">Aprenda do zero, de uma vez por todas. Sua hora é Agora!</h1>
            <div className="flex flex-col justify-center items-center gap-7">
              <div className="flex flex-col gap-2">
                <label className="text-[#212529] dark:text-white">Digite seu email:</label>
                <input
                  type="email"
                  placeholder="profissaoprogramacao@gmail.com"
                  className="border border-[#212529] rounded-[4px] px-4 h-9 placeholder:text-[#6C757D] dark:placeholder:text-[#B0B0B0] w-[423px]"
                />
              </div>
              <button className="w-[303px] h-[48px] bg-[#28A745] dark:bg-[#32CD32] text-[#F8F9FA] dark:text-white text-[20px] font-bold rounded-[10px]">QUERO ME INSCREVER</button>
            </div>
          </div>
          <img src="/desktop.png" className="w-[560px] h-[349px] object-contain" />
        </div>
        <hr className="w-full text-[#6C757D] dark:opacity-10" />
        <section className="flex items-start justify-between w-full">
          <img src="/programmer.png" className="w-[500px] h-[349px] object-contain" />
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[#212529] dark:text-white text-3xl mb-2">O QUE VOU APRENDER?</h2>

            {
              listItems.map((item) => (
                <ListItem
                  key={item.number}
                  number={item.number}
                  text={item.text}
                />
              ))
            }


          </div>
        </section>
        <hr className="w-full dark:opacity-10" />
        <footer className="flex justify-between w-full">
          <p className="w-[591px] text-[#212529] dark:text-white text-2xl">Um evento online e gratuito para você dar o primeiro passo rumo à programação</p>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-[#FFC107] font-light text-[20px]">O EVENTO COMEÇA EM:</p>
            <div className="flex gap-4">
              {
                timeItems.map((item) => (
                  <CardTime
                    key={item.quantity}
                    quantity={item.quantity}
                    unity={item.unity}
                  />
                ))
              }
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
