import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function DaisyPage() {
  const [theme, setTheme] = React.useState('cupcake');
  const toggleTheme = () => {
    setTheme(theme === 'dracula' ? 'cupcake' : 'dracula');
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-secondary py-6 sm:py-12 pl-64">
        <div class="relative bg-base-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-8 text-base leading-7">
                <div class="text-left leading-loose">
                  <p class="font-semibold text-xl">To edit this page, go to your <code class="italic">DaisyPage.js</code> file</p>
                  <p class="text-md">There, you can experiement with things like:</p>
                </div>
                <ul class="menu p-3 bg-base-200 rounded-xl shadow-md">
                  <li><a>Daisy components</a></li>
                  <li><a>Utilities</a></li>
                  <li><a>Typography and layouts</a></li>
                  <li><a>And further customization!</a></li>
                </ul>
                <div class="relative bg-primary px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
                  <p class="leading-loose font-medium text-primary-content">Feel free to play around with the features below. You can also add more if you'd like!</p>
                </div>
                <div class="flex basis-auto flex-col whitespace-pre-wrap relative bg-base-200 px-6 pt-3 pb-3 shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">

                  <div class="flex flex-row justify-between items-center">
                    <div>Change the theme</div>
                    <label class="swap swap-rotate">
                      <input onClick={toggleTheme} type="checkbox" />
                      <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                      <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                  </div>
                </div>

                <div class="justify-center flex basis-auto flex-row whitespace-pre-wrap relative bg-base-200 px-6 pt-3 pb-3 shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                  Confused?
                  <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </label>
                    <div tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
                      <div class="card-body">
                        <h2 class="card-title">This is a dropdown</h2>
                        <p>You can check more components out on the doc (or <a class="underline" href="https://daisyui.com/components/dropdown/">click here</a>)!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="justify-center flex basis-auto flex-col gap-3 whitespace-pre-wrap relative bg-base-200 px-6 pt-3 pb-3 shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                  Having fun?
                  <div class="rating justify-evenly">
                    <input type="radio" name="rating-1" class="bg-accent mask mask-star" />
                    <input type="radio" name="rating-1" class="bg-accent mask mask-star" />
                    <input type="radio" name="rating-1" class="bg-accent mask mask-star" />
                    <input type="radio" name="rating-1" class="bg-accent mask mask-star" />
                    <input type="radio" name="rating-1" class="bg-accent mask mask-star" />
                  </div>
                </div>

                <div class="navbar bg-base-200 sm:rounded-lg shadow-md">
                  <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl rounded-full">Wiz</a>
                  </div>
                  <div class="flex-none gap-2">
                    <div class="form-control">
                      <input type="text" placeholder="This is a navbar" class="input input-bordered rounded-full" />
                    </div>
                    <div class="dropdown dropdown-end">
                      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                          <img src={require("./logo.png")} />
                        </div>
                      </label>
                      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                          <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                          </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="card lg:card-side bg-base-200 shadow-xl justify-between">
                  <figure><img class="max-w-sm md:max-w-xl rounded-lg" src="https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Robot" /></figure>
                  <div class="card-body">
                    <h2 class="card-title justify-center">This is a card</h2>
                    <p>It's good for displaying information and drawing attention. Play around with the screen size to see what happens!</p>
                    <div class="card-actions justify-end">
                      <label for="my-modal-4" class="btn">Click me</label>
                      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                      <label for="my-modal-4" class="modal cursor-pointer">
                        <label class="modal-box relative" for="">
                          <h3 class="text-lg font-bold py-4">Congratulations!</h3>
                          <p class="leading-loose">You've clicked the modal! Know that you can create a variety of these, just check out the documentation for more info.</p>
                          <p class="py-4 justify-center">Click anywhere else on the screen to escape</p>
                        </label>
                      </label>
                    </div>
                  </div>
                </div>

              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p>Need a reminder of daisyUI's features?</p>
                <p>
                  <a href="https://www.notion.so/wizteam/Daisy-UI-4432159e733f4d2d905eb017027a7d09" class="text-accent text-accent-focus">Read the docs &rarr;</a>
                </p>
                <p>Want to go back to the home page?</p>
                <a class="btn btn-primary rounded-full">
                  <Link to="/" class="text-primary-content margin-5 m-auto">&larr; Click Here</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaisyPage;
