import './App.css';
import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';

function App() {
const [글제목, set글제목] = useState(['등대가 보이는 찻집','여자 인생 코트 추천','리액트 독학 방법 공유','수원 스터디 모집']);
const [따봉, set따봉] = useState(0);
const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div id="wrap">
        {
          modal==true?<Modal modal={modal} setModal={setModal} FontAwesomeIcon={FontAwesomeIcon} faX={faX}/>:null
        }
        <h3>여행 카테고리 전체보기({글제목.length})</h3>
        <ul>
          {
            글제목.map((a,i) => {
              return(
                <li className="list" key={i}>
                  <h4 onClick={() => {
                    setModal(true)
                  }}>{글제목[i]}<span onClick={() => {
                    let 따봉copy=[...따봉];
                    따봉copy[i]=따봉copy[i]+1;
                    set따봉(따봉copy);
                  }}>👍</span>{따봉[i]}</h4>
                  <p>2022년 12월 13일 발행</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
