import React, { Component } from "react";
import Toffy from "../images/logo-white1.png";
import Rocket from "../images/rocket.gif";
import Me from "../images/Me.jpg";
import "../css/bootstrap4-neon-glow.css";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="Rocket">
          <img src={Me} alt="Me"/>
          {/* <img src={Rocket} alt="Rocket"  width="300"/> */}
        </div>

        <div className="Greeting">
          <p>함께하면 같이 성장하는 박선오입니다.🌻 </p>
        </div>

        <div className="Profiles">
          <p className='LargeCategory'>프로필</p>  
          <p>Name: 박선오 (Park Seono)</p>  
          <p>Birthday: 1993.03.18</p>
          <p>Phone: 010-7460-4477</p>  
          <p>Mail: pianist5555@gmail.com</p>
          <br></br>  
        </div>

        <div className="Want">
          <p className='LargeCategory'>저는 이런것을 추구합니다.</p>
          <p>모든 인프라, 서버 트러블에 유연하게 대처하는 전문가를 향해 갑니다. </p> 
          <p>모른다는 말을 함부로 입에 담기보다 내일은 이해하고 구현할 수 있다는 태도를 가지고 임하고 있습니다.</p> 
          <p>주어진 상황에 맞춰 개선하고 항상 더 나은 해결책이 있을거라 생각합니다.</p>
          <p>함께하고 싶은 사람이 되면 자연스레 좋은 개발자가 될 것이라고 확신합니다.</p>
          <br></br>  
        </div>

        <div className="Skills">
        <p className='LargeCategory'>보유기술</p>
          <div className='Infra'>
            <p className='MiddleCategory'>✎인프라 스택</p>
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
            <p>- Travis CI를 이용해 Docker를 기반으로한 Elastic Beanstalk, R3와 통신하여 자동화 테스트/빌드, 자동화 배포 환경을 구축할 수 있습니다.</p>
            <p>- CodeDeploy에 대한 경험이 있습니다.</p>
          </div>
          <div className='Monitoring'>
            <p className='MiddleCategory'>✎모니터링 및 트러블 슈팅 스택</p>
            <p>✔"Prometheus"</p>
            <p>- 매트릭 데이터를 수집 할 수 있습니다.</p>  
            <p>✔"Grafana"</p>
            <p>- 수집된 메트릭 데이터를 바탕으로 비주얼라이제이션할 수 있습니다.</p> 
            <p>✔"nGrinder"</p>
            <p>- 테스트 시나리오에 맞춰 TPS 측정 및 부하를 줄 수 있습니다.</p>  
            <p>✔"Shell script"</p>
            <p>- 크론 서비스와 연계하여 하드웨어 성능 및 저장공간이 특정 기준치를 넘으면 Telegram 알람을 보내는 등 awk를 활용하여 시스템 장애를 예방할 수 있습니다.</p>  
          </div>
          <div className='App'>
            <p className='MiddleCategory'>✎어플리케이션 스택</p>
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

        <div className="Capabilities">
          <p className='LargeCategory'>핵심역량</p>
          <p className='Capa'><span>Django</span> : 대부분의 현업 프로젝트에서 파이썬의 프레임워크를 사용하여기 때문에 동일 파이썬 사용시 생산성이 높습니다. </p>
          <p className='Capa'><span>Shell script</span> : 모니터링 시스템을 도입 전 스크립트와 데몬을 이용하여 레거시하게 다루었습니다. </p>
          <p className='Capa'><span>Infra</span> : 인프라에 관심이 많아 서버세팅부터 운영까지 연차 이상의 퍼포먼스를 낼 수 있다고 생각합니다. </p>
          <p className='Capa'><span>Communication</span> : 마케팅팀, 운영팀, 기획팀과의 협업이 많았습니다. 시스템을 개선시 필요한 도메인 지식과 개발 지식을 연결하는데 장점이 있습니다. </p>
        </div>

        <div className="Certificate">
        <p className='LargeCategory'>자격사항</p>
          <div className='Sqld'>
          <p>SQLD(한국데이터산업진흥원 2019.07)</p>  
          </div>
        </div>

        <div className="Carrer">
          <p className='LargeCategory'>경력사항</p>
          <p>제이카 (2020년 6월 ~ 2021년 10월)</p>
          <div className='Role'>
            <div className='Operating'>
              <p>1. 제이카 리뉴얼 및 운영</p>
              <p>프로젝트 기간: 2020.06 ~ 2021.10</p>
              <p>환경: Django, PostgreSQL, nginx, uwsgi, Grafana, Prometheus</p>
              <p>담당업무: 앱 서버 리뉴얼, 앱 서버 및 CMS 운영 & 개선, 제이카 공식 홈페이지 유지보수, 서버 모니터링 및 트러블슈팅</p> 
            </div>
            <div className='ProjectOne'>
              <p>2. 위블비즈 프로젝트 (구독형 카쉐어링 서비스)</p>
              <p>프로젝트 기간: 2021.12 ~ 2021.06</p>  
              <p>환경: Django, PostgreSQL, nginx, uwsgi </p>
              <p>담당업무: 플랫폼 통합관리 cms 서버 개발, 화성시청 & 동탄시청 cms, 앱 서버 개발 </p>
            </div>
            <div className='ProjectTwo'>
            <p>3. 이마스(electric mobility as a service) </p>
            <p>프로젝트 기간: 2021.06 ~ 2021.10</p> 
            <p>환경: Django, PostgreSQL, React.js & Redux, Docker, AWS, Gunicorn</p>
            <p>담당업무: cms 프론트 및 백엔드, 개발서버와 운영서버 구축, CI/CD 환경 구축</p>
            </div>
          </div>
        </div>

        <div className="Toyproject">
        <p className='LargeCategory'>사이드프로젝트</p>
          <div className="Toffy">
            <a href="/toffy"><img src={Toffy} alt="Toffy" /></a><span>← Click!</span>
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
            <a href="../static/portfolio/IPMS.pdf"><img src={Toffy} alt="IPMS" /></a><span>← Click!</span>
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
        <div className="Graduation">
        <p className='LargeCategory'>학력사항</p>  
          <div>
            <p>한국방송통신대학교 4학년 재학 (컴퓨터과학과 전공)</p>
            <p>한국폴리텍대학 초대졸(기계시스템공학과 전공)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;




























