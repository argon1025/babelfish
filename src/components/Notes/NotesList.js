import React, { Component } from 'react';
import {Note} from '../';

class NoteList extends Component{
  state = {
    notelist:{}
  }
    render() {
        this.state.notelist = this.props.NotesData.map((data)=>{
          return <Note id={data.id} name={data.name} />
        })
        return (
          <div>
          <div>{/* 추천학습 콘텐츠 타이틀 */}
            <h1 class="subpixel-antialiased text-2xl font-semibold text-gray-600">My Notes</h1>
          </div>
          {this.state.notelist}
          </div>
        );
    }
  }
  export default NoteList;
  