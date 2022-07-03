import { useState } from 'react'
import './App.css'
import Time from './Time'

function App() {
  const [selectedType, setSelectedType] = useState("simple");
  const onClickType = (e) =>{
    setSelectedType(e.target.value);
  }

  const array = ["simple","pastel","neon", "retroGame"];

  return (
    <div className="row">
      <div className='frame'>
        <Time selectedType={selectedType}/>
      </div>
      <div className="inner">
        <h1 className='page_title'>配信用オーバーレイ時計</h1>
        <p>配信で時刻を表示したい場合の素材としてご利用いただけます。</p>
        <p>デザインパターンは今後拡充予定です。</p>
        <p>ご利用にあたって、ご意見、ご要望などはTwitter（<a href="https://twitter.com/ts_create_">@ts_create_</a>）のDMでお願いします。</p>
        <section className='control'>
          <ul>
            {
              array.map((item,index)=>{
                return (
                  <li key={index}>
                    <input type="radio" name="type" value={item} onClick={onClickType} checked={selectedType===item}/>
                    <label>{item}</label>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
