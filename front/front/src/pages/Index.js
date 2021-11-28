import React, { Component } from "react";
import Toffy from "../images/logo-white1.png";
import Rocket from "../images/rocket.gif";
import "../css/bootstrap4-neon-glow.css";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="Rocket">
          안녕하세요 모든 상황에 유연하게 대처하는 전문가를 꿈꾸는 개발자 박선오입니다.
          <img src={Rocket} alt="Rocket"  width="300"/>
        </div>
        <div className="Profile">
          프로필
          Name: 박선오 (Park Seono)
          Phone: 010-7460-4477
          Mail: pianist5555@gmail.com
        </div>
        <div className="Carrer">
          경력사항
          제이카 (2020년 6월 ~ 2021년 11월)
          <div className='Role'>
          1. 제이카
            1-1. 앱 리뉴얼
            1-2. 앱 서버운영
            1-3. 앱 서버개선
            1-4. 제이카 공식 홈페이지 유지보수
            1-5. cms 유지보수 (프론트, 백엔드)

          2. 위블비즈
            2-1. 화성
            2-1-1. 플랫폼 통합관리자 cms 서버
            2-1-2. 화성시청 cms 서버
            2-2. 동탄
            2-2-2. 동탄시청 cms 서버

          3. 이마스
            3-1. cms 프론트(react)
            3-2. cms 백엔드(rest api)
            3-3. 개발 서버 구축
            3-4. 운영 서버 구축
          </div>
        </div>
        <div className="Capabilities">
          핵심역량
        </div>
        <div className="Skills">
          보유기술
          <div>
            ✎인프라 스택
            ✔"클라우드"
              - AWS의 로드밸런서, Elastic Beanstalk 등을 활용하여 운영 서버 환경을 구성할 수 있고 무중단 배포를 할 수 있습니다.
              - PythonAnywhere로 호스팅한 경험이 있습니다.
              - Heroku에 대한 경험이 있습니다.
              - KT 클라우드로 호스팅한 경험이 있습니다.
            ✔"Linux"
              - nginx 웹서버, 시스템 데몬 등을 설정하고 개발환경을 구성할 수 있습니다.
            ✔"Container"
              - 이미지 및 컨테이너 관리, Dockerfile,docker-compose를 활용하여 빌드할 수 있습니다.
            ✔"K8s"
              - kubectl로 deployment하여 replicaset과 pod를 관리하고 service를 로드밸런서와 연결하고 ingress로 외부에 노출시켜 쿠버네티스 클러스터를 구성하고 관리할 수 있습니다.
            ✔"CI/CD"
               - Travis CI를 이용해 Docker를 기반으로한 Elastic Beanstalk, R3와 통신하여 자동화 테스트/빌드, 자동화 배포 환경을 구축할 수 있습니다.

            ✎모니터링 및 트러블 슈팅 스택
            ✔"Prometheus"
              - 매트릭 데이터를 수집 할 수 있습니다.
            ✔"Grafana"
              - 수집된 메트릭 데이터를 바탕으로 비주얼라이제이션할 수 있습니다.
            ✔"nGrinder"
              - 테스트 시나리오에 맞춰 TPS 측정 및 부하를 줄 수 있습니다.
            ✔"Shell script"
              - 크론 서비스와 연계하여 하드웨어 성능 및 저장공간이 특정 기준치를 넘으면 Telegram 알람을 보내는 등 awk를 활용하여 시스템 장애를 예방할 수 있습니다.

            ✎어플리케이션 스택
            ✔"Python"
              - 기본문법을 사용할 수 있고 매직메소드, 메타클래스를 활용하며 제네레이터를 기반으로 코루틴을 구현하고 스레드와 프로세스를 사용하여 데이터를 처리할 수 있습니다.
              - 장고 프레임워크(CBV, FBV)를 대부분의 현업 프로젝트에서 수행했습니다.
              - 플라스크 프레임워크에 대한 경험이 있습니다.
            ✔"Java"
              - 기본문법, 스프링 프레임워크의 경험이 있습니다.
            ✔ "React.js & redux"
              - hooks, react-redux, redux-thunk를 사용하여 비동기 프로그래밍을 할 수 있고 Context API, router 상태 및 URL을 관리할 수 있습니다.
            ✔ "Javascript"
              - ES6 문법을 활용 할 수 있고 Jquery, BOM, DOM 탐색, Ajax & Axios, 비동기 프로그래밍을 이해하고 서버와 통신할 수 있습니다.
            ✔ "Node.js"
              - 간단한 테스트 코드 학습을 했습니다.
            *(단위테스트: jest, 통합테스트: supertest)
            ✔"SQL"
              - 기본문법, window함수, 절차형SQL, 계층형 SQL 활용 할 수 있습니다.
              - PostgreSQL, MySQL 등 오픈소스 RDBMS를 사용할 수 있습니다.
            ✔"NoSQL"
              - Redis를 사용하여 api limit을 거는 기본적인 작업을 할 수 있고 매트릭을 모니터링하여 aop, rss메모리 이슈 등을 확인할 수 있습니다.
              - MongoDB에 대한 경험이 있습니다.
            ✔"C"
              - 기본문법을 사용할 수 있고 구조체 포인터 등을 만들어 알고리즘을 구현할 수 있습니다.
          </div>
        </div>
        <div className="Certificate">
          자격사항
          <div className='Sqld'>
            SQLD(SQL 개발자)
            한국데이터산업진흥원
            2019년 7월 취득
          </div>
        </div>
        <div className="Toyproject">
          사이드프로젝트
          <div className="Toffy">
            <a href="/toffy"><img src={Toffy} alt="Toffy" /></a>
            <div className='introduction'>
            Toffy (Tap off your taste)
            간단한 설문조사를 통한 맞춤형 모바일 게임 추천

            개발기간 : 2020.02.12 ~ 2020.06.02
            개발인원 : 2명
            담당기능 : 취향테스트, 검색, 태그조합, 언어선택, 페이지네이션, 방명록, 크롤링, 로딩바

            - 사용언어 : JS, Python
            - 프레임워크 : React.js, React-redux, Django
            - 호스팅 : AWS EC2(Ubuntu)
            - 크롤링 : BeautifulSoup4, Selenium
            </div>
          </div>
          <div className="lio1">
            <a href="../images/rocket.gif"><img src={lio1} alt="lio1" /></a>
            <div className='introduction'>
            통합주문결제 관리서비스
            PC, 태블릿을 이용한 무인결제 및 관리시스템

            개발기간 : 2019.06.19 ~ 2019.07.26
            개발인원 : 3명
            담당기능 : 가결제, 1:1 상담 채팅, 고객센터 게시판

            - 사용언어 : JS, Java
            - 프레임워크 : Spring
            </div>
          </div>
        </div>
        <div className="Carrer">
          자기소개서
        </div>
      </div>
    );
  }
}

export default Index;



























