import React, { Component } from 'react';
import * as exam from '../../service/WordTest';


class WordsTest extends Component {
    state = {
        loading:true,
        page:"",
        questionsCount:0,
        wrongCount:0,
        questionsData:"",
        viewid:0
    }
    constructor(props){
        super(props);
        const questionsList = exam.createQuestions(this.props.WordsData);
        this.state = {loading:false,page:0,questionsCount:questionsList.questions-1,wrongCount:0,viewid:0,questionsData: questionsList};
        console.log(questionsList);
    }
    pressAnswerButton = (event) => {
        if(this.state.questionsData.data[this.state.page].correctAnswer == event.target.id){ //정답인지 체크
            let news = {...this.state.questionsData}; //정답처리
            news.data[this.state.page].right = true;
            this.setState({questionsData : news});
        }else{
            this.setState({wrongCount : this.state.wrongCount+1});
            this.props.userWordsWrongCountUpdate(this.state.questionsData.data[this.state.page].wordId); //오답 카운트 증가
        }
        if(this.state.questionsCount === this.state.page){ //시험이 종료된경우
            this.setState({viewid:1}); //결과 페이지로
            if(this.state.wrongCount === 0){//만점일 경우
                this.props.userNoteLearningDayUpdate();
            }
        }else{
            this.setState({page:this.state.page+1}); // 다음 시험 페이지로
        }
    }
    
    render() {
        if(this.state.viewid === 1){
            let questionsWordList;
            questionsWordList = this.state.questionsData.data.map((data)=>{
                if(data.right){
                    return (
                        <div class="flex flex-row w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 subpixel-antialiased text-2xl font-semibold text-gray-600">
                            <div class="flex-1">{data.title}</div>
                            <div class="flex-1 text-base">{data.correctAnswer}</div>
                            <div class="flex-2"><svg class="w-7 h-7 fill-current text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg></div>
                        </div>
                        );
                }else{
                    return (
                        <div class="flex flex-row w-full h-15 bg-gray-100 rounded-lg shadow-sm p-4 mt-4 mr-4 subpixel-antialiased text-2xl font-semibold text-gray-600">
                            <div class="flex-1">{data.title}</div>
                            <div class="flex-1 text-base">{data.correctAnswer}</div>
                            <div class="flex-2"><svg class="w-7 h-7 fill-current text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></div>
                        </div>
                        );
                }
            });
            return (
                <div class="w-full h-full flex justify-center">
                    <div class="flex flex-col justify-center items-center w-full xl:w-2/3 bg-white rounded-lg shadow-sm p-8">
                    <h1 class="subpixel-antialiased text-7xl font-semibold text-gray-600">시험 종료!</h1>
                        {questionsWordList}
                    </div>
                </div>
            );
        }else{
            return (
                <div class="w-full h-full flex justify-center">
                    <div class="flex flex-col justify-center items-center w-full xl:w-2/3 bg-white rounded-lg shadow-sm p-8">
                        <div class="flex flex-col justify-center">
                            <h1 class="subpixel-antialiased text-lg font-semibold text-gray-300">{this.state.page} / {this.state.questionsData.questions-1}</h1>
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
        }
    }
}
export default WordsTest;
