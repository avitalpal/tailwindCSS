import './App.css';
import App from "./App";
import React from 'react';
import { Link } from 'react-router-dom';

function TextPage() {
  return (
    <div>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 pl-64">
    <img src={require("./bck2.svg")} alt="" class="bg-cover" width="1308" />
  <div class="absolute inset-0 bg-[url(./bck2.svg)] bg-cover"></div>
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mx-auto max-w-md">
      <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto"/>
      <br></br>
        <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">TextPage.js</code> file.</p>
        <p class="text-left leading-loose">
            <b>There, you can experiment with things like:</b>
 
            <div>
            <ul class="list-disc list-inside">
                <li class="font-serif">Font familes and spacing</li>
                <li class=" hover:text-purple-500 active:italic">Applying conditional classes</li>
                <li class="">Lists and list styles</li>
                <li class="text-blue-600/50 hover:text-blue-600">Text colour and styling</li>
                <li class="underline decoration-dashed hover:decoration-solid">And text decoration!</li>
            </ul>
            </div>
        </p>
        <br></br>
        <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
        <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
        </div>
        <br></br>
        <div class="whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <p class="whitespace-pre-wrap font-mono font-extralight text-left text-sm text-slate-900/40">
                Your text goes here
            </p>
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
    </div>
  )
}

export default TextPage;
