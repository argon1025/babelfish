import React, { Component } from 'react';
import back from '../../Login_back2.jpg';
class Login extends Component{
    render() {
        return (
            // max-w-md mx-auto bg-white rounded-xl overflow-hidden xl:max-w-2xl xl:shadow w-full h-full
        <div class="bg-white xl:shadow w-screen h-screen overflow-hidden">
            <div class="xl:flex">
                <div class="overflow-hidden h-28 xl:flex-shrink-0 xl:h-screen xl:w-auto">
                    <img class="object-cover xl:h-screen" src={back}></img>
                </div>

                <div class="p-20 w-full space-y-3">
                    <div class="xl:w-96 space-y-3 mx-auto">
                        <div class="flex flex-row mb-20">
                            <svg id="Layer_1" class="w-7 h-7 fill-current text-blue-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m304.2 190.666h72.3c42.833 0 111.4 1.972 111.4-63.2 0-56.859-71.055-127.466-175.667-127.466h-8.033c-50.122 0-97.631 16.978-135.976 48.2h-16.674c-70.388 0-127.45 56.947-127.45 127.466 0 8.284 6.716 15 15 15h50.722c-.957 8.294-1.456 16.692-1.456 25.167 0 119.222 96.466 215.833 215.833 215.833h1.815l75.946 75.946c5.846 5.846 15.362 5.859 21.228-.015 15.703-15.706 24.35-36.584 24.35-58.792 0-17.521-5.384-34.216-15.371-48.199 9.987-13.98 15.371-30.677 15.371-48.201 0-22.21-8.65-43.091-24.364-58.806-5.858-5.859-15.356-5.858-21.213 0l-75.934 75.934h-1.827c-49.378 0-89.434-39.961-89.434-89.433.001-49.377 39.962-89.434 89.434-89.434zm23.033-160.092c83.486 6.424 130.667 62.563 130.667 96.893 0 28.401-20.324 33.2-81.4 33.2h-49.267zm0 360.178 63.827-63.826c4.23 7.724 6.478 16.429 6.478 25.479 0 14.197-5.529 27.545-15.569 37.585-.107.107-.221.224-.324.334-5.557 5.903-5.409 15.162.324 20.895 10.041 10.041 15.57 23.389 15.57 37.585 0 9.051-2.247 17.756-6.478 25.48l-63.827-63.827v-19.705zm-271.995-230.086c4.276-27.873 27.514-73.343 81.802-81.399-19.714 24.04-33.79 51.718-41.581 81.399zm129.529 119.434c0 63.796 49.863 115.659 112.467 119.234v2.203c-99.253-3.677-178.867-85.568-178.867-185.704s79.613-182.028 178.867-185.705v130.736c-62.688 3.582-112.467 55.519-112.467 119.236zm206.733-184.767c0-8.28-6.72-15-15-15s-15 6.72-15 15 6.72 15 15 15 15-6.72 15-15z"/></g></svg>
                            <p class="font-sans text-2xl font-medium text-blue-500">BabelFish</p>
                        </div>
                        <h2 class="mt-6 text-3xl text-gray-900"> Login </h2>
                        <h3 class="mt-6 text-sm text-gray-300"> Log in with your data that you enterd during your registration. </h3>
                        <div class="relative">
                            <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                                <input id="name" name="name" type="text" placeholder="E-mail" class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"/>
                        </div>
                        <div class="relative">
                            <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 text-gray-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                                <input id="name" name="name" type="password" placeholder="Password" class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"/>
                        </div>
                        <hr class="w-full"></hr>
                        <button class="rounded-lg bg-blue-600 h-10 w-full text-white">
                                Login
                        </button>
                        <p class="mt-6 text-sm text-gray-500 text-center">Don't Have an account? Sign in</p>
                        <p class="mt-6 text-sm text-gray-500 text-center">Forget password?</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default Login;
  