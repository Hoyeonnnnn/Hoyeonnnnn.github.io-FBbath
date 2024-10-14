import './Project.css';
import React, { useState, useEffect } from 'react';
import { imgdata, imgdata2, imgdata3, imgdata4, imgdata5 } from './imgdata'
import pr_img from './project_banner.png'
import pr_img1 from './project_banner1.png'
import pr_img2 from './project_banner2.png'
import pr_img3 from './project_banner3.png'
import ImageSliderModal from './ImageSliderModal';
import { Container, Row, Col } from 'react-bootstrap'




function Project() {
    let [Imgbox, setImgbox] = useState(imgdata);
    let [Imgbox2, setImgbox2] = useState(imgdata2);

    return (
        <>
            <div className='Project'>
                <ProjectSilde />
                {/* 프로젝트 슬라이드, 메인 슬라이드 통합시켜야함 */}
            </div>
            <br />
            <div className='Project_1'>
                거실 / 주방 인테리어
            </div>

            <div className='items'>
                <div className='items-text'> 송파구 잠실동 목화빌라
                </div>
                <ImageList imgdata={imgdata} count={ 3} />
            </div>
            <br />
            <div className='items'>
                <div className='items-text'>
                    <strong> Before </strong>
                </div>
                <ImageList imgdata={imgdata5} count={3} />
            </div>

            <br />

            <div className='Project_1'>
                화장실 / 욕실 시공
            </div>


            <Container style={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: '20px',

            }}>
                <Row className={window.innerWidth <= 768 ? "g-0" : "g-5"}>
                    <Col >
                        <div className='textContainer'>
                            <p > 다크 그레이</p>
                            <a> 타일시공/ 샤워부스 / 수납장 / 선반(다이)</a>
                        </div>
                        <ImageList imgdata={imgdata2} count={1} startIndex={0} 
                       />

                    </Col>
                    <Col>
                        <div className='textContainer'>
                            <p> 화이트 그레이</p>
                            <a> 타일시공/ 샤워부스 / 수납장 / 선반(다이)</a>
                        </div>
                        <ImageList imgdata={imgdata3} count={1} startIndex={0} />

                    </Col>
                    <Col>
                        <div className='textContainer'>
                            <p> 화이트 우드</p>
                            <a> 타일시공/ 샤워부스 / 수납장 / 선반(다이)</a>
                        </div>

                        <ImageList imgdata={imgdata4} count={1} startIndex={0} />

                    </Col>
                </Row>
            </Container>






        </>
    )
}
const projectimg = [
    pr_img, pr_img1, pr_img2, pr_img3
];
function ProjectSilde() {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex((prevIndex_1) =>
                prevIndex_1 === projectimg.length - 1 ? 0 : prevIndex_1 + 1
            );
        }, 3500);

        return () => clearInterval(interval);
    }, [projectimg.length]);
    return (
        <div className="Project_slide"
            style={{

            }}>
            {projectimg.map((projectimg, index) => (
                <img
                    key={index}
                    src={projectimg}
                    alt={`slide_1 ${index}`}
                    className={`slide_1 ${index === currentProjectIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
}
// 배너

// 아이템 뷰
// ImageCard 컴포넌트 정의
function ImageCard({ imgdata }) {
    return (
        <div className="ImageCard"
        >
            <img
                src={imgdata.image}
                alt={`Image ${imgdata.id}`}
                style={{ width: '100%', height: window.innerWidth <= 768 ?'100%' : '400px', objectFit:'cover' }}


            />
        </div>
    );
}



function ImageList({ imgdata, count, startIndex = 0 }) {
    const displayedImages = imgdata.slice(startIndex, startIndex + count);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index + startIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="ImageList"
        
        >
            {displayedImages.map((data, index) => (
                <div key={data.id} onClick={() => openModal(index)}>
                    <ImageCard imgdata={data} />
                </div>
            ))}
            {isModalOpen && (
                <ImageSliderModal
                    images={imgdata}
                    currentIndex={currentImageIndex}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}



export default Project;