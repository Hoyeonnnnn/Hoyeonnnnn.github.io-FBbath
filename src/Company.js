import Soulution from './solution_img.png'
import Intigrity from './Integrity_img.png'
import MapContainer from './MapContainer';
function Company() {
    return (
        <div className='Company'>
        <div className='Company-img'>
          
        </div>
        <p> 설계, 시공,디자인을 한번에</p>
        <a> 에프비 바스는 20년 경력의 숙련된 전문가들과 함께합니다. <br />
          고객님의 요구와 스타일에 맞춘 세심한 설계와 정교한 시공으로, 더 아름답고 쾌적한 공간을 창조합니다.<br />
          오랜 경험과 깊이 있는 노하우로, 고객님의 삶의 질을 한층 높여드리는 맞춤형 인테리어 솔루션을 제공합니다.<br /></a>
        <br/>
        <br/>
      
        <br/>
          <div className='solution'>
            <img src={Soulution} />
            <div className='solution-text'>
              <p> 고객 맞춤형 솔루션</p>
              <a> 고객 한 분 한 분의 라이프스타일과 필요에 맞춘 맞춤형 솔루션을 제공합니다.<br />
                세심한 상담과 창의적인 설계를 통해, 고객님의 비전을 현실로 만들어드립니다. <br />
                함께하는 모든 과정에서 고객님의 만족을 최우선으로 하여, 오직 당신만을 위한 특별한 공간을 완성합니다<br />
              </a>
            </div>
          </div>
      
          
          <div className='integrity'>
            <div className='integrity-text'>
              <p> 정직한 시공</p>
              <a> 에프비 바스는 정직한 시공을 약속드립니다.<br/>
               투명하고 신뢰할 수 있는 서비스로, 고객님의 만족을 최우선으로 합니다.<br />
              </a>
            </div>
            <img src={Intigrity} />

          </div>
          <br/>
          <br/>
          <br/>
          <br/>

          <h1> LOCATION </h1>
        <div className='Company-maps'>
            <MapContainer/>
            <div className='Info'> 
            <div className="LocationInfo"> 
            인천광역시 미추홀구 인하로 295-3 <br/>
            주안동 1464-36 <br/>
            (우) 22227</div>
            
          <div className='Tel'> 
            010-0000-0000
          </div>
          </div>
          </div>
        

      </div>

    )
}
export default Company;