import React, { Component } from 'react';

  class Note extends Component{
      pressDeleteButton = (event) => {
        //console.log(event.currentTarget.id);
        event.stopPropagation(); //이벤트 버블링 방지
        this.props.userNoteDelete(event.currentTarget.id);
      }
      pressModifybutton = (event) => {
        event.stopPropagation(); //이벤트 버블링 방지
        this.props.changeFocusNoteId(event.currentTarget.id);
        this.props.changeViewId(6);
      }
      pressNotebutton = (event) => {
        this.props.changeFocusNoteId(event.currentTarget.id);
        this.props.changeViewId(7);
      }
      render() {
          return (
                <div onClick={this.pressNotebutton} key={this.props.key} id={this.props.id} class="flex flex-row xl:w-80 w-full h-15 bg-white rounded-lg shadow-sm p-4 mt-4 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <div>
                    <h1 class="subpixel-antialiased text-lg font-semibold text-gray-600">{this.props.name}</h1>
                    </div>
                    <div class="flex flex-row absolute right-5">
                        <svg id={this.props.id} onClick={this.pressModifybutton} class="w-6 h-6 fill-current text-gray-300 hover:text-blue-500 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" /></svg>
                        <svg id={this.props.id} onClick={this.pressDeleteButton} class="w-6 h-6 fill-current text-gray-300 hover:text-blue-500 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                    </div>
                </div>
          );
      }
    }
    export default Note;