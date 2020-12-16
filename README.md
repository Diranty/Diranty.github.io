# ⭐️ 서비스 소개
Digital warranty의 줄임말, Diranty!

나의 소중한 물품들의 보증서를 한 눈에 볼 수 있는 서비스를 말한다.
코로나 19 사태로 인해 2030들의 일명 플렉스 소비가 늘고 있는 만큼, 그에 관련한 서비스가 많이 나타나고 있다. 
Diranty서비스는 소비자가 구매한 물품의 보증서와 영수증을 관리할 수 있고, 비대면 A/S 서비스와 중고거래까지 가능하게 한 서비스이다.
소비자의 입장에서 상품의 보증서와 영수증을 관리하기가 번거롭고, 대면 A/S서비스는 시간과 금전적인 비용이 발생하게 되어 불편함이 있다.
공급자의 경우, 비대면 A/S채널 부재로 인한 민원이 발생하고, 보증서 재발급의 요청이 빈번하게 발생하게 된다.
따라서 농협 API를 이용하여 (카드내역조회, 간편결제) 보증서/영수증을 사진으로 저장/관리하고, 비대면 A/S 서비스를 제공받으며, 보증서와 정품 구매내역 확인이 인정된 안전한 중고거래 까지 가능한 서비스를 만들고자 한다.



# 📱 어플리케이션 서비스 설명
<div>
  <img width="844" alt="1" src="https://user-images.githubusercontent.com/73805782/102321921-aab29380-3fc1-11eb-94e0-6eba3fa9815a.png">
  <img width="841" alt="2" src="https://user-images.githubusercontent.com/73805782/102321933-b00fde00-3fc1-11eb-8cf8-42835fa2fe7a.png">
  <img width="828" alt="3" src="https://user-images.githubusercontent.com/73805782/102321939-b1410b00-3fc1-11eb-8cf2-6a0fbbd74a88.png">
  <img width="808" alt="4" src="https://user-images.githubusercontent.com/73805782/102321942-b1d9a180-3fc1-11eb-94bb-82a5e00eec99.png">
</div>




# 📽 시연 영상
https://drive.google.com/file/d/1Lxnj21wkBl-Z-P8uJwiiEEk-HJs60PKB/view?usp=sharing



# 🂠 서비스 구조 및 API 활용
<img width="817" alt="5" src="https://user-images.githubusercontent.com/73805782/102321946-b2723800-3fc1-11eb-8c59-16bcd8ac09ba.png">



# Quasar 프로젝트 시작 전
## github 초기 환경 설정

git hub 개인 계정 가입
New organization → New repository 생성
``` 
organization과 repository 이름 같게 하면 홈페이지로 생성 가능

organizationName / repositoryName.github.io

ex) yuniflix / yuniflix.github.io
```

terminal에서: ssh (기술 블로그의 cheat sheet → ssh)

terminal에서: cd .ssh → ls → cat id_rsa.pub

생성된 ssh 복사해서 github setting → SSH 등록 (이때, ssh 설정했을 때 사용한 **NAME@COMPANY.HOST** 과 이름 동일하게 설정. 헷갈리지 않도록!)
```
터미널 명령어

pwd : 현재 내가 위치하고 있는 디렉토리의 절대경로

cd .. : 현재 경로에서 나올 때
```

해당 repository → code 에서 ssh 주소 복사

//여기서 quasar 설치해야 이름이 겹치지 않음

terminal에서: 저장 폴더에서 git clone [주소 붙여넣기]

clone 완료

vscode 파일안에서 docs 폴더 생성 → docs 폴더 내부에 index.html 파일 생성 

// push 해서 파일이 잘 올라가는지 확인

## Quasar 설치
npm i -g @quasar/cli

quasar create <폴더 이름>

Project name, Project product name, Project description 이름 설정

author: “name <email> “     ex)”yuni <yuniflix@github.io>”

Check the features needed for your project 에서 ESLint, Vuex, IE11 support만 체크

## vs code 설정
// docs 폴더 생성 → docs 폴더 내부에 index.html 파일 생성 

// push 해서 파일이 잘 올라가는지 확인

github 해당 repository의 setting 에서 GitHub Pages → Source → docs 폴더로 저장소 변경

package.json 파일에서

```
"scripts": {
    "dev": "quasar dev",      //추가
    "build": "quasar build",  //추가
    "lint": "eslint --ext .js,.vue ./",
    "test": "echo \"No test specified\" && exit 0"
  },
```

그러면 yarn dev, yarn build 와 같은 기능

quasar.conf.js 파일에서

```
build: {
      vueRouterMode: 'history', // available values: 'hash', 'history' (history로 변경)
      distDir: 'docs',    //추가
```
그 후 yarn build 후 commit 하고 push 하게 되면 docs 폴더에 생성 



## ssh 설정
SSH(Secure Shell Protocol)란 네트워크 프로토콜의 하나로 암호화되어 안전하게 통신할때 사용되는 프로토콜입니다.

### ssh-keygen

```
ssh-keygen -t rsa -b 4096 -C "[NAME@COMPANY.HOST]"

# Example
ssh-keygen -t rsa -b 4096 -C "john.doe@weperson.macbook"
```

### Parameters
-t: 암호화 타입. 특별한 경우가 아니면 대부분 rsa 형식을 사용합니다.
-b: 생성할 키 비트수. 기본값이 2048. 더 강력한 암호화를 위해 4096을 설정합니다.
-C: 주석. 이름@회사명.호스트 형식으로 작성하면 나중에 구분하기가 쉽습니다.




# diranty (diranty)

diranty

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
