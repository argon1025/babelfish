import React, { Component } from 'react';
//import {Note} from '../';

class Dashboard extends Component{

    render() {
        return (
          <div>
            <div>{/* 추천학습 콘텐츠 타이틀 */}
            <h1 class="subpixel-antialiased text-3xl font-semibold text-gray-600">2021년 1월 31일 추천 학습 플랜</h1><br />
              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">첫 번째 복습 단어장</h1>
              <h1 class="subpixel-antialiased text-gray-400">단어장 생성이후 1일이상 지난 단어장 입니다</h1><br />
              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">두 번째 복습 단어장</h1>
              <h1 class="subpixel-antialiased text-gray-400">첫 복습일로부터 3일이상 지난 단어장 입니다</h1><br />
              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">세 번째 복습 단어장</h1>
              <h1 class="subpixel-antialiased text-gray-400">두번째 복습일로부터 7일이상 지난 단어장 입니다</h1><br />
              <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">정기복습 추천 단어장</h1>
              <h1 class="subpixel-antialiased text-gray-400">세번째 복습일로 부터 30일 이상 지난 단어장 입니다</h1><br />
            </div>
          </div>
        );
    }
  }
  export default Dashboard;
  