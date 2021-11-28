import React, { Component } from "react";
import Toffy from "../images/logo-white1.png";
import Rocket from "../images/rocket.gif";
import Me from "../images/me.jpg";
import "../css/bootstrap4-neon-glow.css";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="Rocket">
        <p>안녕하세요 모든 상황에 유연하게 대처하는 전문가를 꿈꾸는 개발자 박선오입니다.</p>  
          <img src={Me} alt="Me"  width="300"/>
          <img src={Rocket} alt="Rocket"  width="300"/>
        </div>
        <div className="Profile">
        <p>프로필</p>  
        <p>Name: 박선오 (Park Seono)</p>  
        <p>Phone: 010-7460-4477</p>  
        <p>Mail: pianist5555@gmail.com</p>  
        </div>
        <div className="Carrer">
          <p>경력사항</p>
          <p>제이카 (2020년 6월 ~ 2021년 10월)</p>
          <div className='Role'>
          <p>1. 제이카 리뉴얼 및 운영</p>
          <p>프로젝트 기간: 2020.06 ~ 2021.10</p>  
          <p>1-1. 앱 서버 리뉴얼</p>   
          <p>1-2. 앱 서버 운영 & 개선</p>  
          <p>1-3. 제이카 공식 홈페이지 유지보수</p> 
          <p>1-4. CMS 유지보수 (프론트엔드, 백엔드)</p>  

          <p>2. 위블비즈 프로젝트 (구독형 카쉐어링 서비스)</p>
          <p>프로젝트 기간: 2021.12 ~ 2021.03</p>  
          <p>2-1. 화성</p>  
          <p>2-1-1. 플랫폼 통합관리자 cms 서버</p>   
          <p>2-1-2. 화성시청 cms 서버</p>    
          <p>2-2. 동탄</p> 
          <p>2-2-2. 동탄시청 cms 서버</p>    

          <p>3. 이마스(electric mobility as a service) </p>
          <p>프로젝트 기간: 2021.06 ~ 2021.10</p> 
          <p>3-1. cms 프론트(react)</p>  
          <p>3-2. cms 백엔드(rest api)</p>  
          <p>3-3. 개발 서버 구축</p>  
          <p>3-4. 운영 서버 구축</p>  
          </div>
        </div>
        <div className="Capabilities">
          <p>핵심역량</p>
        </div>
        <div className="Skills">
        <p>보유기술</p>
          <div>
            <p>✎인프라 스택</p>
            <p>✔"클라우드"</p>
            <p>- AWS의 로드밸런서, Elastic Beanstalk 등을 활용하여 운영 서버 환경을 구성할 수 있고 무중단 배포를 할 수 있습니다.</p>  
            <p>- PythonAnywhere로 호스팅한 경험이 있습니다.</p>  
            <p>- Heroku에 대한 경험이 있습니다.</p>  
            <p>- KT 클라우드로 호스팅한 경험이 있습니다.</p>  
            <p>✔"Linux"</p>
            <p>- nginx 웹서버, 시스템 데몬 등을 설정하고 개발환경을 구성할 수 있습니다.</p>  
            <p>✔"Container"</p>
            <p>- 이미지 및 컨테이너 관리, Dockerfile,docker-compose를 활용하여 빌드할 수 있습니다.</p>  
            <p>✔"K8s"</p>
            <p>- kubectl로 deployment하여 replicaset과 pod를 관리하고 service를 로드밸런서와 연결하고 ingress로 외부에 노출시켜 쿠버네티스 클러스터를 구성하고 관리할 수 있습니다.</p>  
            <p>✔"CI/CD"</p>
            <p> Travis CI를 이용해 Docker를 기반으로한 Elastic Beanstalk, R3와 통신하여 자동화 테스트/빌드, 자동화 배포 환경을 구축할 수 있습니다.</p>   -

            <p>✎모니터링 및 트러블 슈팅 스택</p>
            <p>✔"Prometheus"</p>
            <p>- 매트릭 데이터를 수집 할 수 있습니다.</p>  
            <p>✔"Grafana"</p>
            <p>- 수집된 메트릭 데이터를 바탕으로 비주얼라이제이션할 수 있습니다.</p> 
            <p>✔"nGrinder"</p>
            <p>- 테스트 시나리오에 맞춰 TPS 측정 및 부하를 줄 수 있습니다.</p>  
            <p>✔"Shell script"</p>
            <p>- 크론 서비스와 연계하여 하드웨어 성능 및 저장공간이 특정 기준치를 넘으면 Telegram 알람을 보내는 등 awk를 활용하여 시스템 장애를 예방할 수 있습니다.</p>  

            <p>✎어플리케이션 스택</p>
            <p>✔"Python"</p>
            <p>- 기본문법을 사용할 수 있고 매직메소드, 메타클래스를 활용하며 제네레이터를 기반으로 코루틴을 구현하고 스레드와 프로세스를 사용하여 데이터를 처리할 수 있습니다.</p>  
            <p>- 장고 프레임워크(CBV, FBV)를 대부분의 현업 프로젝트에서 수행했습니다.</p>  
            <p>- 플라스크 프레임워크에 대한 경험이 있습니다.</p>  
            <p>✔"Java"</p>
            <p>- 기본문법, 스프링 프레임워크의 경험이 있습니다.</p>  
            <p>✔ "React.js & redux"</p>
            <p>- hooks, react-redux, redux-thunk를 사용하여 비동기 프로그래밍을 할 수 있고 Context API, router 상태 및 URL을 관리할 수 있습니다.</p>  
            <p>✔ "Javascript"</p>
            <p>- ES6 문법을 활용 할 수 있고 Jquery, BOM, DOM 탐색, Ajax & Axios, 비동기 프로그래밍을 이해하고 서버와 통신할 수 있습니다.</p>  
            <p>✔ "Node.js"</p>
            <p>- 간단한 테스트 코드를 학습을 했습니다.</p> 
            <p>*(단위테스트: jest, 통합테스트: supertest)</p>
            <p>✔"SQL"</p>
            <p>- 기본문법, window함수, 절차형SQL, 계층형 SQL 활용 할 수 있습니다.</p>  
            <p>- PostgreSQL, MySQL 등 오픈소스 RDBMS를 사용할 수 있습니다.</p>  
            <p>✔"NoSQL"</p>
            <p>- Redis를 사용하여 api limit을 거는 기본적인 작업을 할 수 있고 매트릭을 모니터링하여 aop, rss메모리 이슈 등을 확인할 수 있습니다.</p>  
            <p>- MongoDB에 대한 경험이 있습니다.</p>  
            <p>✔"C"</p>
            <p>- 기본문법을 사용할 수 있고 구조체 포인터 등을 만들어 알고리즘을 구현할 수 있습니다.</p>  
          </div>
        </div>
        <div className="Certificate">
        <p>자격사항</p>
          <div className='Sqld'>
          <p>SQLD(한국데이터산업진흥원 2019.07)</p>  
          </div>
        </div>
        <div className="Toyproject">
        <p>사이드프로젝트</p>
          <div className="Toffy">
            <a href="/toffy"><img src={Toffy} alt="Toffy" /></a>
            <div className='introduction'>
              <p>Toffy (Tap off your taste)</p>  
              <p>간단한 설문조사를 통한 맞춤형 모바일 게임 추천</p>  

              <p>개발기간 : 2020.02.12 ~ 2020.06.02</p>  
              <p>개발인원 : 2명</p> 
              <p>담당기능 : 취향테스트, 검색, 태그조합, 언어선택, 페이지네이션, 방명록, 크롤링, 로딩바</p>  

              <p>- 사용언어 : JS, Python</p>  
              <p>- 프레임워크 : React.js, React-redux, Django</p>  
              <p>- 호스팅 : AWS EC2(Ubuntu)</p>  
              <p>- 크롤링 : BeautifulSoup4, Selenium</p>  
            </div>
          </div>
          <div className="IPMS">
            <a href="../static/portfolio/IPMS.pdf"><img src={Toffy} alt="IPMS" /></a>
            <div className='introduction'>
          <p>통합주문결제 관리서비스(IPMS)</p>  
          <p>PC, 태블릿을 이용한 무인결제 및 관리시스템</p>  

          <p>개발기간 : 2019.06.19 ~ 2019.07.26</p>  
          <p>개발인원 : 3명</p>  
          <p>담당기능 : 가결제, 1:1 상담 채팅, 고객센터 게시판</p>  

          <p>- 사용언어 : JS, Java</p>  
          <p>- 프레임워크 : Spring</p>  
            </div>
          </div>
        </div>
        <div className="Carrer">
        <p>자기소개서</p>  
        </div>
      </div>
    );
  }
}

export default Index;




























