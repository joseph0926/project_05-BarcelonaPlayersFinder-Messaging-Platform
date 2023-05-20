# project_05-BarcelonaPlayersFinder-Messaging-Platform

![FC Barcelona Logo](https://upload.wikimedia.org/wikipedia/ko/thumb/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg/300px-FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg.png)

## 프로젝트 소개

[기획서](https://carnation-domain-4f6.notion.site/Project-Barcelona-Players-Finder-Messaging-Platform-00bde70d4ade4b31b9da38c48da83023)

바르셀로나에 대한 선수 정보를 효과적으로 제공하고, 팬들과 선수간의 (가상)소통할 수 있는 기능을 제공하기 위한 플랫폼입니다<bt/>. 
또한, Vue.js에 대한 역량을 향상시키기 위해 이 프로젝트를 진행하게 되었습니다.

### 페이지 구성
```
├── src
│   ├── components
│   │   ├── PlayerList
│   │   │   └── PlayerList.vue
│   │   ├── PlayerDetail
│   │   │   └── PlayerDetail.vue
│   │   ├── PlayerRegistration
│   │   │   └── PlayerRegistration.vue
│   │   ├── ContactPlayer
│   │   │   └── ContactPlayer.vue
│   │   └── RequestsReceived
│   │       └── RequestsReceived.vue
│   ├── views
│   │   ├── Home.vue
│   │   └── NotFound.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   │       └── player.js
│   ├── App.vue
│   └── main.js
```

### 데이터 모델

![Group 1](https://github.com/joseph0926/project_05-BarcelonaPlayersFinder-Messaging-Platform/assets/100750188/a7546f2d-b63c-49d7-b166-acf5c5631926)


## 주요 기능

- 선수 검색 기능:
    - 바르셀로나선수들의 목록을 표시하고, 사용자는 원하는 선수를 검색할 수 있습니다.
- 선수 상세 정보:
    - 사용자가 선택한 선수에 대한 상세 정보를 제공합니다. 이는 선수의 이름, 포지션, 국적, 나이, 경력 등을 포함합니다.
- 새로운 선수 등록 기능:
    - 관리자는 새로운 바르셀로나 선수를 등록할 수 있습니다.
- 선수와의 메시지 기능:
    - 사용자는 선택한 선수에게 메시지를 보낼 수 있습니다.
    - 선수는 받은 메시지를 확인하고 응답할 수 있습니다.

## 기술 스택

- Front-end:
  - Vue.js
  - Vuex
  - JavaScript


## 팀원

| Frontend                                                                                                          | Backend                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![icon](https://github.com/joseph0926/project_02-MoneyNote/assets/100750188/212deebf-579d-409e-83b3-ead4e4ef7a90) | ![icon](https://github.com/joseph0926/project_02-MoneyNote/assets/100750188/212deebf-579d-409e-83b3-ead4e4ef7a90) |
| [김영훈](https://github.com/joseph0926)                                                                           | [김영훈](https://github.com/joseph0926)                                                                           |

## 실행 방법
```shell
cd barcelona / (npm install) / npm run serve
```
