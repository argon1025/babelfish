import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
  componentDidMount() {
    this.props.getNote();
  }
    render() {
        return (
          <div class="w-screen h-screen">
            {/* 네비게이션 */}
            <div class="xl:flex">
                <div class="flex pt-8 space-y-10 h-48 w-screen flex-col xl:h-screen xl:w-24">
                  <div class="flex justify-center w-full">
                    <svg id="Layer_1" class="w-8 h-8 fill-current text-blue-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m304.2 190.666h72.3c42.833 0 111.4 1.972 111.4-63.2 0-56.859-71.055-127.466-175.667-127.466h-8.033c-50.122 0-97.631 16.978-135.976 48.2h-16.674c-70.388 0-127.45 56.947-127.45 127.466 0 8.284 6.716 15 15 15h50.722c-.957 8.294-1.456 16.692-1.456 25.167 0 119.222 96.466 215.833 215.833 215.833h1.815l75.946 75.946c5.846 5.846 15.362 5.859 21.228-.015 15.703-15.706 24.35-36.584 24.35-58.792 0-17.521-5.384-34.216-15.371-48.199 9.987-13.98 15.371-30.677 15.371-48.201 0-22.21-8.65-43.091-24.364-58.806-5.858-5.859-15.356-5.858-21.213 0l-75.934 75.934h-1.827c-49.378 0-89.434-39.961-89.434-89.433.001-49.377 39.962-89.434 89.434-89.434zm23.033-160.092c83.486 6.424 130.667 62.563 130.667 96.893 0 28.401-20.324 33.2-81.4 33.2h-49.267zm0 360.178 63.827-63.826c4.23 7.724 6.478 16.429 6.478 25.479 0 14.197-5.529 27.545-15.569 37.585-.107.107-.221.224-.324.334-5.557 5.903-5.409 15.162.324 20.895 10.041 10.041 15.57 23.389 15.57 37.585 0 9.051-2.247 17.756-6.478 25.48l-63.827-63.827v-19.705zm-271.995-230.086c4.276-27.873 27.514-73.343 81.802-81.399-19.714 24.04-33.79 51.718-41.581 81.399zm129.529 119.434c0 63.796 49.863 115.659 112.467 119.234v2.203c-99.253-3.677-178.867-85.568-178.867-185.704s79.613-182.028 178.867-185.705v130.736c-62.688 3.582-112.467 55.519-112.467 119.236zm206.733-184.767c0-8.28-6.72-15-15-15s-15 6.72-15 15 6.72 15 15 15 15-6.72 15-15z"/></g></svg>
                  </div>
                  <hr class="m-5"></hr>
                  <div class="flex flex-row space-x-10 flex justify-center xl:flex-col xl:space-y-10 xl:space-x-0">
                    <div class="flex justify-center">
                      <svg class="w-6 h-6 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </div>
                    <div class="flex justify-center">
                      <svg class="w-6 h-6 fill-current text-gray-300"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    </div>
                    <div class="flex justify-center">
                      <svg class="w-6 h-6 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    </div>
                    <div class="flex justify-center">
                      <svg class="w-6 h-6 fill-current text-gray-300 hover:text-blue-500 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                    </div>
                    <div class="flex justify-center">
                    <svg class="w-6 h-6 fill-current text-gray-300 hover:text-blue-500 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                    </div>
                  </div>
                </div>
                {/* 콘텐트 박스 */}
                <div class="w-full h-screen ">
                  <div class="bg-gray-100 bottom-0 right-0 p-8 w-full h-full rounded-l-3xl xl:p-16">
                    {/* 추천학습 콘텐츠 */}

                    <div>
                      <div>{/* 추천학습 콘텐츠 타이틀 */}
                        <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">Today's Recommended Learning</h1>
                      </div>
                      <div class="pt-5">{/* 추천학습 콘텐츠 박스 */}
                          {/* 단어장 박스 */}
                          <div class="flex space-x-5">
                            <div class="w-80 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                              <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                              <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                              <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">영어 단어장 1번</h1>
                              <hr class="m-2"></hr>
                              <h2 class="subpixel-antialiased text-base text-gray-300">3회 복습됨</h2>
                              <h3 class="subpixel-antialiased text-sm text-gray-300">마지막 시험응시일로부터 7일 지남</h3>
                            </div>
                            <div class="w-80 h-32 bg-white rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                              <span class="animate-ping absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                              <span class="absolute -m-5 h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                              <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">영어 단어장 1번</h1>
                              <hr class="m-2"></hr>
                              <h2 class="subpixel-antialiased text-base text-gray-300">3회 복습됨</h2>
                              <h3 class="subpixel-antialiased text-sm text-gray-300">마지막 시험응시일로부터 7일 지남</h3>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div class="pt-10">
                      <div>{/* 추천학습 콘텐츠 타이틀 */}
                        <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">Unlearned vocabulary book</h1>
                      </div>
                      <div class="pt-5">{/* 추천학습 콘텐츠 박스 */}
                          {/* 단어장 박스 */}
                          <div class="flex space-x-5">
                            <div class="w-80 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-sm p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                              <h1 class="subpixel-antialiased text-xl font-semibold text-gray-600">일어 한자 12/1</h1>
                              <h2 class="subpixel-antialiased text-base text-white">등록된 이래 한번도 보지 않았습니다!</h2>
                              <h3 class="subpixel-antialiased text-sm text-white">시험에 응시해 보는건 어떠세요?</h3>
                            </div>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>
             </div>
          </div>
        );
    }
  }
  
  export default Header;
  