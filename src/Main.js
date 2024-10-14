import './App.css';
import Slideshow from './Sildeshow';
import service_img1 from './service_img1.png'
import service_img2 from './service_img2.png'
import service_img3 from './service_img3.png'
import service_img4 from './service_img4.png'
import { useRef, useState ,useEffect} from 'react';
import logoBlack from './logo_black.png'
import ImageSliderModal from './ImageSliderModal';
import { imgdata, imgdata2 } from './imgdata'
import MapContainer from './MapContainer';
import styled from 'styled-components'


function Main() {
  const [projectImg, setProjectImg] = useState(imgdata);
  const gotoSoomgo = () => {
    window.location.href = 'https://soomgo.com/profile/users/6109002';
  };
  const gotoMiso = () => {
    window.location.href = 'https://miso.kr/partners/24111';
  };
  return (
    <>
      <div className='Main'>
        <div className='Main-text'>
          <p> 당신의 욕실 ,<br /> 우리의 열정으로 새롭게 </p>
          <br />
          <div>
            저희 에프비 바스는 20년 경력의 욕실 올리모델링 전문가로서,<br />
            꼼꼼함과 세련미를 바탕으로 최고의 시공을 약속드립니다.<br />
            고객님의 입장에서 항상 생각하며, 정직과 성실로 신뢰받는 서비스를 제공합니다.
          </div>
          <div className='button_div'>
            <button className='goto'> 무료견적 바로가기 </button>
          </div>
          <div className='button_div'>
            <button className='button_soomgo'
              onClick={gotoSoomgo}> </button>
            <button className='button_miso'
              onClick={gotoMiso}> </button>
          </div>
        </div>

        <div className='Main-banner'>
          <Slideshow />
        </div>

      </div>
      <div className='Logo_Main'>
      </div>
      <div className='TextBox'>
        <p> OurService</p>
        <a> 시공</a>
      </div>
      <br />
      <div className='ResizeableDiv'>
        <ResizableDivs />
      </div>

      <div className='TextBox'>
        <p> Project</p>
        <a> 시공사례</a>
      </div>


    
        <div className='projectimg_container'> 
        <div className='projectimg'> 
        <ProjectGallery imgsrc={projectImg}/> 
        </div>
        </div>

      <br />
      <br />
      <br />

      <div className='TextBox'>
        <p> 시공과정</p>
      </div>
      <div className='Process-info-container'>
        <div className='Process-info_1'> </div>
        <div className='Process-info_2'> </div>
        <div className='Process-info_3'> </div>
        <div className='Process-info_4'> </div>
      </div>
      <br />
      <br />
      <br />
      <div className='Textbox'>
        <h1> LOCATION </h1> </div>
      <div className='Company-maps'>
        <MapContainer />
        <div className='Info'>
          <div className="LocationInfo">
            인천광역시 미추홀구 인하로 295-3 <br />
            주안동 1464-36 <br />
            (우) 22227</div>

          <div className='Tel'>
            010-0000-0000
          </div>
        </div>
      </div>






    </>


  )
}
const Projectview = ({ images }) => {
  const containerRef = useRef(null);

  // 마우스 휠 이벤트 처리
  const onWheel = (e) => {
    if (containerRef.current && e.deltaY !== 0) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY; 
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', onWheel, { passive: false });
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      if (container) {
        container.removeEventListener('wheel', onWheel);
      }
    };
  }, []);
    
    return (
    <div
      ref={containerRef}
      style={{
        display : 'flex',
        alignItems : 'center',
        overflowX : 'scoll',
        overflowY: 'hidden', // 세로 스크롤 방지
        whiteSpace: 'nowrap',
        width: '100%',
        cursor: 'grab',
  
      }}
      onWheel={onWheel}
    >
      {images.map((image, index) => (
        <img
          index ={5}
          key={index}
          src={image.image} // image 객체의 URL을 사용
          alt={`project-${index}`}
          style={{
            borderRadius : '20px',
            width: '300px', // 원하는 크기로 조정 가능
            height: 'auto',
            marginRight: '10px', // 이미지 간 간격
          
          }}
        />
      ))}
    </div>
  );
};

const ProjectGallery = ({imgsrc}) => {
  return (
    <div >
      <Projectview images={imgsrc} />
    </div>
  );
};



const ResizableDivs = () => {

  const [divState1, setDivState1] = useState({
    div1Width: '650px',
    div2Width: '340px',
    div3Width: '340px',
    div4Width: '650px',
    div1Title: '신축 공사',
    div2Title: '설비 시공',
    div3Title: '타일 시공',
    div4Title: '리모델링',
    div1Subtitle: '화장실 / 욕실 리모델링 및 인테리어',
    div2Subtitle: '',
    div3Subtitle: '',
    div4Subtitle: '거실/부엌 리모델링, 인테리어',
    div1Content: '신축 공사부터 화장실 및 욕실 리모델링까지\n전문적인 시공으로 세련되고 실용적인 공간을 완성해 드립니다.\n트렌디한 디자인과 꼼꼼한 마감으로 편안하고 아름다운 욕실을 만들어 보세요.',
    div2Content: '',
    div3Content: '',
    div4Content: '거실과 부엌은 가족의 일상이 담기는 공간입니다.\n전문적인 리모델링과 인테리어로 기능성과 아름다움을 동시에 잡아\n편안하고 세련된 생활 공간으로 탈바꿈시켜 드립니다',
  });


  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  // 1열의 2번째 div 에 마우스가 올라가있을때의 반응
  const handleMouseEnter = () => {
    setIsHovered(true);
    setDivState1({
      div1Width: '340px',
      div2Width: '650px',
      div3Width: '340px',
      div4Width: '650px',
      div1Title: '신축 공사',
      div2Title: '설비 시공',
      div3Title: '타일 시공',
      div4Title: '리모델링',
      div1Subtitle: '',
      div2Subtitle: '하수도 배관 설비 및 방수 처리',
      div3Subtitle: '',
      div4Subtitle: '거실/부엌 리모델링, 인테리어',
      div1Content: '',
      div2Content: '하수도 배관 설비와 방수 처리는 건물의 수명과 쾌적함을 좌우합니다.\n노후 배관 교체와 철저한 방수로\n누수와 악취 걱정 없는 깨끗한 공간을 만들어 드립니다.',
      div3Content: '',
      div4Content: '거실과 부엌은 가족의 일상이 담기는 공간입니다.\n전문적인 리모델링과 인테리어로 기능성과 아름다움을 동시에 잡아\n편안하고 세련된 생활 공간으로 탈바꿈시켜 드립니다',

    });
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
    setDivState1({
      div1Width: '650px',
      div2Width: '340px',
      div3Width: '650px',
      div4Width: '340px',
      div1Title: '신축 공사',
      div2Title: '설비 시공',
      div3Title: '타일 시공',
      div4Title: '리모델링',
      div1Subtitle: '화장실 / 욕실 리모델링 및 인테리어',
      div2Subtitle: '',
      div3Subtitle: '정교한 마감과 세련된 인테리어',
      div4Subtitle: '',
      div1Content: '신축 공사부터 화장실 및 욕실 리모델링까지\n전문적인 시공으로 세련되고 실용적인 공간을 완성해 드립니다.\n트렌디한 디자인과 꼼꼼한 마감으로 편안하고 아름다운 욕실을 만들어 보세요.',
      div2Content: '',
      div3Content: '타일 시공은 공간의 분위기와 내구성을 결정하는 중요한 요소입니다.\n저희는 다양한 디자인과 정교한 기술로 세련된 마감 처리를 제공하며,\n견고하고 아름다운 타일 시공으로 완성도 높은 인테리어를 만들어 드립니다.',
      div4Content: '',
    })
  }

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
    setDivState1({
      div1Width: '650px',
      div2Width: '340px',
      div3Width: '340px',
      div4Width: '650px',
      div1Title: '신축 공사',
      div2Title: '설비 시공',
      div3Title: '타일 시공',
      div4Title: '리모델링',
      div1Subtitle: '화장실 / 욕실 리모델링 및 인테리어',
      div2Subtitle: '',
      div3Subtitle: '',
      div4Subtitle: '거실/부엌 리모델링, 인테리어',
      div1Content: '신축 공사부터 화장실 및 욕실 리모델링까지\n전문적인 시공으로 세련되고 실용적인 공간을 완성해 드립니다.\n트렌디한 디자인과 꼼꼼한 마감으로 편안하고 아름다운 욕실을 만들어 보세요.',
      div2Content: '',
      div3Content: '',
      div4Content: '거실과 부엌은 가족의 일상이 담기는 공간입니다.\n전문적인 리모델링과 인테리어로 기능성과 아름다움을 동시에 잡아\n편안하고 세련된 생활 공간으로 탈바꿈시켜 드립니다',
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDivState1({
      div1Width: '650px',
      div2Width: '340px',
      div3Width: '340px',
      div4Width: '650px',
      div1Title: '신축 공사',
      div2Title: '설비 시공',
      div3Title: '타일 시공',
      div4Title: '리모델링',
      div1Subtitle: '화장실 / 욕실 리모델링 및 인테리어',
      div2Subtitle: '',
      div3Subtitle: '',
      div4Subtitle: '거실/부엌 리모델링, 인테리어',
      div1Content: '신축 공사부터 화장실 및 욕실 리모델링까지\n전문적인 시공으로 세련되고 실용적인 공간을 완성해 드립니다.\n 트렌디한 디자인과 꼼꼼한 마감으로 편안하고 아름다운 욕실을 만들어 보세요.',
      div2Content: '',
      div3Content: '',
      div4Content: '거실과 부엌은 가족의 일상이 담기는 공간입니다.\n전문적인 리모델링과 인테리어로 기능성과 아름다움을 동시에 잡아\n편안하고 세련된 생활 공간으로 탈바꿈시켜 드립니다',

    });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0px' }}>
        <div style={{
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row', // 모바일에서는 세로로 정렬
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',

        }}>
          {/* div1 컨테이너 */}
          <div
            style={{
              borderRadius: '20px',
              width: window.innerWidth <=  768 ?'100%' : divState1.div1Width,
              height: '200px',
              backgroundImage: isHovered ? `url(${service_img1})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${service_img1})`  ,
              backgroundSize: 'cover', // 이미지 크기 조절
              backgroundPosition: 'center', // 이미지 위치 조절
              transition: 'all 0.3s ease',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            {/* 대제목에 해당 div 1 */}
            <h2 style={{
              fontFamily: 'Pretendard Variable, sans-serif',
              fontWeight: '700',
              margin: '0',
              color: 'white',
              position: 'absolute',
              top: isHovered ? '50%' : '10px',
              right: isHovered ? '50%' : '10px',
              transform: isHovered ? 'translate(50%, -50%)' : 'none'
              
            }}>{divState1.div1Title}</h2>
            {/* 소 제목에 해당 div 1 */}
            <div style={{ position: 'absolute', top: '50px', right: '10px', color: 'white' }}>
              <h4 style={{
                margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                fontWeight: '500'
              }}>{divState1.div1Subtitle}</h4>
            </div>

            {/* 줄바꿈 처리 , div 1 내용 */}
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white', textAlign: 'left' }}>
              {divState1.div1Content.split('\n').map((line, index) => (
                <p key={index} style={{
                  margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                  fontWeight: '600', fontSize: '18px'
                }}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>
          {/* div 2 컨테이너 */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              borderRadius: '20px',
              width: window.innerWidth <=  768 ? '100%' : divState1.div2Width,
              height: '200px',
              backgroundImage: isHovered ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${service_img2})` : `url(${service_img1})`, // 이미지 URL 지정
              backgroundSize: 'cover', // 이미지 크기 조절
              backgroundPosition: 'center', // 이미지 위치 조절
              transition: 'all 0.3s ease',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* div2 대제목 */}
            <h2 style={{
              fontFamily: 'Pretendard Variable, sans-serif',
              fontWeight: '700',
              margin: '0',
              color: 'white',
              position: 'absolute',
              top: isHovered ? '10px' : '50%',
              left: isHovered ? '10px' : '50%',
              transform: isHovered ? 'none' : 'translate(-50%, -50%)'
            }}>{divState1.div2Title}</h2>
            {/* div2 소제목 */}
            <div style={{ position: 'absolute', top: '50px', left: '10px', color: 'white' }}>
              <h4 style={{
                margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                fontWeight: '500'
              }}>{divState1.div2Subtitle}</h4>
            </div>
            {/* div2 내용 */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', color: 'white', textAlign: 'right' }}>
              {divState1.div2Content.split('\n').map((line, index) => (
                <p key={index} style={{
                  margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                  fontWeight: '600', fontSize: '18px'
                }}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
      {/* 2열  */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row', // 모바일에서는 세로로 정렬
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          {/* div3 컨테이너 */}
          <div
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            style={{
              borderRadius: '20px',
              width: window.innerWidth <=  768 ? "100%": divState1.div3Width,
              height: '200px',
              backgroundImage: isHovered2 ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${service_img3})` : `url(${service_img3})`, // 이미지 URL 지정
              backgroundSize: 'cover', // 이미지 크기 조절
              backgroundPosition: 'center', // 이미지 위치 조절
              transition: 'all 0.3s ease',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            {/* 대제목에 해당 div 3 */}
            <h2 style={{
              fontFamily: 'Pretendard Variable, sans-serif',
              fontWeight: '700',
              margin: '0',
              color: 'white',
              position: 'absolute',
              top: isHovered2 ? '10px' : '50%',
              right: isHovered2 ? '10px' : '50%',
              transform: isHovered2 ? 'none' : 'translate(50%, -50%)'
            }}>{divState1.div3Title}</h2>
            {/* 소 제목에 해당 div 3 */}
            <div style={{ position: 'absolute', top: '50px', right: '10px', color: 'white' }}>
              <h4 style={{
                margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                fontWeight: '500'
              }}>{divState1.div3Subtitle}</h4>
            </div>

            {/* 줄바꿈 처리 , div 3 내용 */}
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white', textAlign: 'left' }}>
              {divState1.div3Content.split('\n').map((line, index) => (
                <p key={index} style={{
                  margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                  fontWeight: '600', fontSize: '18px'
                }}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>
          {/* div 4 컨테이너 */}
          <div

            style={{
              borderRadius: '20px',
              width: window.innerWidth <=  768 ? "100%":divState1.div4Width,
              height: '200px',
              backgroundImage: isHovered2 ? `url(${service_img4})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${service_img4})`, // 이미지 URL 지정
              backgroundSize: 'cover', // 이미지 크기 조절
              backgroundPosition: 'center', // 이미지 위치 조절
              transition: 'all 0.3s ease',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* div4 대제목 */}
            <h2 style={{
              fontFamily: 'Pretendard Variable, sans-serif',
              fontWeight: '700',
              margin: '0',
              color: 'white',
              position: 'absolute',
              top: isHovered2 ? '50%' : '15px',
              left: isHovered2 ? '50%' : '20px',
              transform: isHovered2 ? 'translate(-50%, -50%)' : 'none'
            }}>{divState1.div4Title}</h2>
            {/* div4 소제목 */}
            <div style={{ position: 'absolute', top: '50px', left: '20px', color: 'white' }}>
              <h4 style={{
                margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                fontWeight: '500'
              }}>{divState1.div4Subtitle}</h4>
            </div>
            {/* div4 내용 */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', color: 'white', textAlign: 'right' }}>
              {divState1.div4Content.split('\n').map((line, index) => (
                <p key={index} style={{
                  margin: '0', fontFamily: 'Pretendard Variable, sans-serif',
                  fontWeight: '600', fontSize: '18px'
                }}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>

    </>
  );
};






export default Main;