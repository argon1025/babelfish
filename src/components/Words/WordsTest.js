import React, { Component } from 'react';
import * as exam from '../../service/WordTest';
import { Loading } from '../';

class WordsTest extends Component {
    state = {
        page: 0, //시험 배열 접근에 사용되는 상태
        questionsCount: 0, // 총 퀴즈 수
        wrongCount: 0, // 틀린 횟수
        questionsData: "", //문제 데이터
        viewid: 0, // 페이지 설정에 사용되는 상태 0: 로딩, 1: 시험시작전 안내, 2: 시험, 3:결과, 4: 단어수가 적을경우의 오류처리
        noteLearningDate: "",
        toDay: ""
    }
    constructor(props) {
        super(props);
        // 단어 리스트를 content state에서 받아와서 시험문제 제작
        const noteData = this.props.NotesData.find((data) => {
            if (data.id === Number(this.props.focusNoteId)) {
                return true;
            }
        });

        Date.prototype.yyyymmdd = function () { // 마지막 학습일, 오늘 날자 비교를 위해 저장
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth() + 1).toString();
            var dd = this.getDate().toString();
            return yyyy + "-" + (mm[1] ? mm : '0' + mm[0]) + "-" + (dd[1] ? dd : '0' + dd[0]);
        };

        try {
            //시험문제
            const questionsList = exam.createQuestions(this.props.WordsData);
            const date_toDay = new Date();
            const date_noteLearningDate = new Date(noteData.Learning_Day);
            console.log(`${date_noteLearningDate.yyyymmdd()} ${date_toDay.yyyymmdd()}`)
            // state 를초기화 합니다
            // 이떄는 무조건 로딩화면을 출력합니다 로딩이 다 되었을경우 didmount레벨 에서 로딩을 해제합니다
            this.state = { page: 0, questionsCount: questionsList.questions - 1, wrongCount: 0, viewid: 0, questionsData: questionsList, noteLearningDate: date_noteLearningDate.yyyymmdd(), toDay: date_toDay.yyyymmdd() };
        } catch (error) {
            this.state = { page: 0, questionsCount: 0, wrongCount: 0, viewid: 4, };
        }
    }
    loadingCompoment(callback) {
        setTimeout(() => {
            if (this.props.api_fetching === false) {
                this.setState({ viewid: 1 });
            } else {
                callback();
            }
        }, 2000);
    }
    componentDidMount() {
        // 지정된 시간 이후에 content state.api 가 계속 질의 중인지 확인합니다
        // 작업을 다 끝낸 상태면 화면으로 리 랜더링 하게됩니다 작업중일경우 callback으로 다시 로딩함수를 호출합니다
        if (this.state.viewid !== 4) { // 오류로 진행이 불가능하지 않을 경우
            this.loadingCompoment(this.loadingCompoment);
        }
    }
    pressNextButton = () => {
        this.setState({ viewid: 2 }); // 시험 페이지로
    }
    pressAnswerButton = (event) => {
        if (this.state.questionsData.data[this.state.page].correctAnswer == event.target.id) { //문제 데이터와 선택한 div 데이터를 비교해 정답인지 체크
            let news = { ...this.state.questionsData }; // 1. 문제데이터 내부 복사
            news.data[this.state.page].right = true; // 2.정답처리
            this.setState({ questionsData: news }); // 3.전체 데이터 갱신
        } else { // 오답일 경우
            this.setState({ wrongCount: this.state.wrongCount + 1 }); // state.wrongCount를 +1 합니다
            this.props.userWordsWrongCountUpdate(this.state.questionsData.data[this.state.page].wordId); //서버 오답 카운트 증가 요청
        }

        if (this.state.questionsCount === this.state.page) { //시험이 종료된경우
            this.setState({ viewid: 3 }); //결과 페이지로 이동

            if (this.state.wrongCount === 0) {//만점일 경우
                if (this.props.noteLearningDate !== this.props.toDay) { //마지막 학습일자가 오늘이 아닐경우에만 학습 상태를 갱신
                    console.log(`마지막 학습일이 ${this.props.noteLearningDate} 인 단어장입니다 학습일자를 갱신합니다.`)
                    this.props.userNoteLearningDayUpdate();
                }
            }
        } else {
            this.setState({ page: this.state.page + 1 }); // 다음 시험 페이지로
        }
    }
    render() {
        let content;
        switch (this.state.viewid) {
            case 1: // 시험 시작전 안내 사항
                content = (
                    <div class="w-full h-full flex justify-center">
                        <div class="flex flex-col justify-center items-center w-full xl:w-2/3 bg-white rounded-lg shadow-sm p-8">
                            <div class="flex flex-col justify-center space-y-5">
                                <h1 class="subpixel-antialiased text-3xl font-semibold text-gray-600 text-center">주의 사항</h1>
                                <h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">1.단어시험에서 만점을 받는다면 통과됩니다</h2>
                                <h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">2.단어시험에 통과하게 되면 마지막 학습 일자, 복습 횟수가 갱신됩니다</h2>
                                <h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">3.당일 생성된 단어장은 다음날부터 학습 일자, 복습 횟수를 갱신할 수 있습니다</h2>
                                <h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">4.당일 통과한 단어장은 그날은 학습 일자, 복습 횟수가 추가로 갱신되지 않습니다</h2>
                            </div>
                            <div class="w-full">
                                <div onClick={this.pressNextButton} class="w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer text-center">
                                    시험 시작하기
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 2: //시험
                content = (
                    <div class="w-full h-full flex justify-center">
                        <div class="flex flex-col justify-center items-center w-full xl:w-2/3 bg-white rounded-lg shadow-sm p-8">
                            <div class="flex flex-col justify-center">
                                <h1 class="subpixel-antialiased text-lg font-semibold text-gray-300">{this.state.page} / {this.state.questionsData.questions - 1}</h1>
                                <h1 class="subpixel-antialiased text-7xl font-semibold text-gray-600">{this.state.questionsData.data[this.state.page].title}</h1>
                            </div>
                            <div class="w-full">
                                <div onClick={this.pressAnswerButton} id={this.state.questionsData.data[this.state.page].one} class="w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                    {this.state.questionsData.data[this.state.page].one}
                                </div>
                                <div onClick={this.pressAnswerButton} id={this.state.questionsData.data[this.state.page].two} class="w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                    {this.state.questionsData.data[this.state.page].two}
                                </div>
                                <div onClick={this.pressAnswerButton} id={this.state.questionsData.data[this.state.page].three} class="w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                    {this.state.questionsData.data[this.state.page].three}
                                </div>
                                <div onClick={this.pressAnswerButton} id={this.state.questionsData.data[this.state.page].four} class="w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                    {this.state.questionsData.data[this.state.page].four}
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 3: //결과 종합
                let questionsWordList;
                questionsWordList = this.state.questionsData.data.map((data) => {
                    if (data.right) {
                        return (
                            <div class="flex flex-row w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 subpixel-antialiased text-2xl font-semibold text-gray-600">
                                <div class="flex-1">{data.title}</div>
                                <div class="flex-1 text-base">{data.correctAnswer}</div>
                                <div class="flex-2"><svg class="w-7 h-7 fill-current text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg></div>
                            </div>
                        );
                    } else {
                        return (
                            <div class="flex flex-row w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 subpixel-antialiased text-2xl font-semibold text-gray-600">
                                <div class="flex-1">{data.title}</div>
                                <div class="flex-1 text-base">{data.correctAnswer}</div>
                                <div class="flex-2"><svg class="w-7 h-7 fill-current text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></div>
                            </div>
                        );
                    }
                });
                content = (
                    <div class="w-full h-full flex justify-center">
                        <div class="flex flex-col justify-center items-center w-full xl:w-2/3 bg-white rounded-lg shadow-sm p-8">
                            <h1 class="subpixel-antialiased text-7xl font-semibold text-gray-600">시험 종료!</h1>
                            {questionsWordList}
                            {this.state.wrongCount === 0 ? (<h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">단어시험에 통과하셨습니다!</h2>) : (<h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">아쉽지만 단어시험에 통과하지 못했습니다 다시 도전해 보세요 </h2>)}
                        </div>
                    </div>

                );
                break;
            case 4: //오류
                content = (
                    <div class="w-full h-full flex justify-center">
                        <div class="flex flex-col justify-center items-center w-full xl:w-2/3 bg-white rounded-lg shadow-sm p-8">
                            <div class="flex flex-col justify-center space-y-5">
                                <h1 class="subpixel-antialiased text-3xl font-semibold text-gray-600 text-center">단어가 너무 적어요!</h1>
                                <h2 class="subpixel-antialiased text-lg font-semibold text-gray-500 ">단어장에 등록된 단어가 4개 이상 되어야 합니다.</h2>
                            </div>
                        </div>
                    </div>
                );
                break;
            default: // 로딩 화면 또는 상정하지 못한 오류 처리
                content = <Loading />;
                break;
        }

        //랜더
        return (
            <div>
                {content}
            </div>
        );
    }
}
export default WordsTest;
