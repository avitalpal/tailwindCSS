import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function GridPage() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 pl-64">
    <img src={require("./bck5.svg")} alt="" class="bg-cover" width="1308" />
  <div class="absolute inset-0 bg-[url(./bck5.svg)] bg-cover"></div>
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mx-auto max-w-md">
      <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto"/>
      <br></br>
        <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">GridPage.js</code> file.</p>
        <p class="text-left leading-loose">
            <b>There, you can experiment with things like:</b>
 
            <div class="grid grid-cols-2 text-center bg-pink-200 rounded-md shadow-md">
                <p class="bg-pink-100/80 hover:text-lg">Flexboxes</p>
                <p class="font-sans hover:text-lg">Grid making</p>
                <p class="font-sans hover:text-lg">Aligning content</p>
                <p class="font-sans hover:text-lg  bg-pink-100/80">Design styles</p>
            </div>
        </p>
        <br></br>
        <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
        <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
        </div>
        <br></br>
        <div class="grid grid-cols-5 gap-3 text-white items-center">
            <div class="col-span-5 font-semibold text-black rounded-md py-4 bg-slate-200 shadow-md">This is a grid:</div>
            <div class="col-span-3 bg-sky-500 rounded-md hover:bg-slate-600 py-4 shadow-md">01</div>
            <div class="col-span-2 bg-sky-500 rounded-md hover:bg-red-600 py-4 shadow-md">02</div>
            <div class="col-span-2 col-start-1 bg-sky-500 rounded-md hover:bg-emerald-600 py-4 shadow-md">03</div>
            <div class="col-span-2 bg-sky-500 rounded-md hover:bg-violet-600 py-4 shadow-md">04</div>
            <div class="bg-sky-500 rounded-md hover:bg-orange-600 py-4 shadow-md">05</div>
            <div class="col-span-5 bg-sky-500 rounded-md hover:bg-pink-600 py-4 shadow-md">06</div>
            <div class="col-span-2 col-start-1 bg-sky-500 rounded-md hover:bg-yellow-600 py-4 shadow-md">07</div>
            <div class="col-span-3 bg-sky-500 rounded-md hover:bg-indigo-600 py-4 shadow-md">08</div>
        </div>
        <br></br>
        <div class="flex text-white items-center gap-3">
            <div class="basis-full font-semibold text-black rounded-md py-4 bg-slate-200 shadow-md">This is a flexbox:</div>
            <div class=" bg-sky-500 rounded-md hover:bg-slate-600 py-4 px-6 shadow-md">01</div>
            <div class=" bg-sky-500 rounded-md hover:bg-red-600 py-4 px-6 shadow-md">02</div>
        </div>
        <br></br>
        <div class="flex text-white items-center gap-3 flex-auto">
            <div class="basis-full bg-sky-500 rounded-md hover:bg-emerald-600 py-4 px-6 shadow-md">03</div>
            <div class="basis-full bg-sky-500 rounded-md hover:bg-violet-600 py-4 px-6 shadow-md">04</div>
        </div>
          <div class="pt-8 text-base font-semibold leading-7">
            <p class="text-gray-900">Need a reminder of Tailwind's features?</p>
            <p>
              <a href="https://www.notion.so/wizteam/Tailwind-CSS-2c225a5743594306add3b59e8335c373#4c68e3d84cde44e1b6bd87734680ea8e" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
            </p>
            <p class="text-gray-900">Want to go back to the home page?</p>
            <button class=" hover:bg-violet-600 active:bg-violet-700 mx-w-sm mx-auto bg-violet-500 rounded-2xl h-12 w-32 shadow-lg flex items-center space-x-4">
            <Link to="/" class="text-white margin-5 hover:text-slate-300 m-auto">&larr; Click Here</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridPage;
