import { useState } from 'react'
import './App.css'
import Time from './Time'

function App() {
  const [selectedType, setSelectedType] = useState("noframe");
  const [color, setColor] = useState("#ffffff");
  const [neon,setNeon] = useState("white");
  const [chromakey, setChromakey] = useState("green");
  const [custom, setCustom] = useState("#000000");

  const onClickType = (e) =>{
    setSelectedType(e.target.value);
  }
  const colorSelect = (e)=>{
    setColor(e.target.value);
  }
  const neonSelect = (e)=>{
    setNeon(e.target.value);
  }
  const changeChromakey = (e)=>{
    setChromakey(e.target.value);
  }
  const customChromakey = (e)=>{
    setCustom(e.target.value);
  }

  const array = ["noframe","simple","pastel","neon","retroGame","liquid"];
  const neonArray = ["white","blue"];
  const chromakeyArray = ["green","red","blue","costom"];

  return (
    <div className="row">
      <div
        className={
          chromakey !== "costom"?
          `frame ${chromakey}`:
          `frame`
        }
        {...chromakey === "costom" && {style:{backgroundColor:custom}}}
      >
        <Time selectedType={selectedType} color={color} neon={neon}/>
        <div className="chromakey">
          <select 
            defaultValue={chromakey} 
            onChange={(e)=>changeChromakey(e)}
          >
            {chromakeyArray.map((item,index)=>{
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
          {chromakey==="costom"&& <input type="color" onChange={(e)=>customChromakey(e)}/>}
        </div>
      </div>
      <div className="inner">
        <h1 className='page_title'>配信用&nbsp;時計オーバーレイ</h1>
        <p>配信で時刻を表示したい場合の素材としてご利用いただけます。</p>
        <p>デザインパターンは今後拡充予定です。</p>
        <p>ご利用にあたって、ご意見、ご要望などはTwitter（<a href="https://twitter.com/ts_create_" target="_blanc" rel="noopener">@ts_create_</a>）のDMでお願いします。</p>
        <section className='control'>
          <ul>
            {
              array.map((item,index)=>{
                return (
                  <li key={index}>
                    <input id={item} type="radio" name="type" value={item} onClick={onClickType}/>
                    <label htmlFor={item}>{item}</label>
                    {item==="noframe" && <input type='color' defaultValue={color} style={{marginLeft:"10px",width:"50px"}} onChange={(e)=>colorSelect(e)}/>}
                    {item==="neon" && 
                      <select style={{marginLeft:"10px"}} onChange={e=>neonSelect(e)}>
                        {neonArray.map((item,index)=>{
                          return <option key={index} value={item}>{item}</option>
                        })}
                      </select>
                    }
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
