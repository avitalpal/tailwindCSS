import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function TextPage() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 pl-64">
    <img src={require("./bck4.svg")} alt="" class="bg-cover" width="1308" />
  <div class="absolute inset-0 bg-[url(./bck4.svg)] bg-cover"></div>
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mx-auto max-w-md">
      <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto"/>
      <br></br>
        <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">FormsPage.js</code> file.</p>
        <p class="text-left leading-loose">
            <b>There, you can experiment with things like:</b>
 
            <div class="grid grid-cols-3 text-center bg-amber-500/20 rounded-md shadow-md">
                <p class="bg-amber-500/20 hover:text-lg rounded-tl-md">Creating forms</p>
                <p class="font-sans hover:text-lg">User inputs</p>
                <p class="font-sans hover:text-lg bg-amber-500/20 rounded-tr-md">Buttons</p>
                <p class="font-sans hover:text-lg">Conditions</p>
                <p class="font-sans hover:text-lg bg-amber-500/20">Styling methods</p>
                <p class="font-sans hover:text-lg">Basic labeling</p>
            </div>
        </p>
        <br></br>
        <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
        <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
        </div>
        <br></br>
        <form class="whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-5 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigt focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username"></input>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="password">
                Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigt focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"></input>
              <p class="text-red-500 text-xs italic text-left">Please choose a password.</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="country">
                Country
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country">
                  <option>Select a country</option>
                  <option>Canada</option>
                  <option>America</option>
                  <option>Mexico</option>
                  <option>China</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
            <div class="flex items-center justify-between">
    <label class="md:w-2/3 block text-gray-500 font-bold text-left">
      <input class="mr-2 leading-tight" type="checkbox"></input>
      <span class="text-sm">
        Email me!
      </span>
    </label>
    <a class="text-right inline-block align-baseline font-bold text-sm text-violet-600 hover:text-violet-800" href="#">
        Forgot Username?
      </a>
           </div>
            <div class="flex items-center justify-between pt-4">
      <button onClick={refreshPage} class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" href="#">
        Sign in
      </button>
      <a class="align-baseline font-bold text-sm text-violet-600 hover:text-violet-800" href="#">
        Forgot Password?
      </a>
    </div>
        </form>
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

export default TextPage;
