import React, { useEffect } from 'react';

const MapContainer = () => {
  useEffect(() => {
    // 카카오 지도 API가 이미 로드되었는지 확인
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=3f16c2f5a2faa4ce4881f35502951eb0&autoload=false`;
      script.async = true;

      script.onload = () => {
        initMap(); // 스크립트 로드 후 지도 초기화
      };

      document.head.appendChild(script);
    } else {
      initMap(); // 이미 로드된 경우 바로 지도 초기화
    }

    function initMap() {
      const { kakao } = window;
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.4483307665822 , 126.680777482072),
        level: 1,
      };
      const map = new kakao.maps.Map(container, options);
       // 지도 타입 컨트롤을 생성
       const mapTypeControl = new kakao.maps.MapTypeControl();
       // 지도에 컨트롤을 추가
       map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

       // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
       const zoomControl = new kakao.maps.ZoomControl();
       map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


      const markerPosition = new kakao.maps.LatLng(37.4483307665822 , 126.680777482072);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  );
};

export default MapContainer;