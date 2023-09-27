# React로 Pizza App 만들기
Blazor로 만든 Pizza App을 React로 만들어보는 프로젝트 입니다.
아래 원본 출처로 가시면 Blazor로 Pizza App 만들기도 경험하실 수 있습니다.
저는 Blazor로 만들어진 Pizza App을 React로 만들어보면서,
Blazor와 React의 장단점 등을 파악할 수 있을 것으로 생각합니다.

## 원본 출처
#### 최초(영어) 원본 https://github.com/dotnet-presentations/blazor-workshop
#### 한글 버전 https://github.com/blazorstudy/blazor-workshop

# 먼저 해야할 일
## 1. 프로젝트 생성
```powershell
npx create-react-app {프로젝트명} --template=typescript
```
## 2. react-router-dom 설치
```powershell
npm i react-router-dom
npm i @types/react-router-dom
```
## 3. styled-components 설치
```powershell
npm i --save-dev @types/styled-components
npm i --save styled-components
```
## 4. ESLint 설치, Prettier 설치
```powershell
npm install --save-dev eslint prettier
```
  - `.prettierrc.js` 파일 생성하고 입력
  ```js
  module.exports = {
	singleQuote: true,
	tailingComma: 'all',
	printWidth: 100,
  }
```
## 5. ESLint 설정
```Powershell
npx eslint --init
```
  - `.eslintrc.js` 파일 수정
  ```js
  module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		//...생략...
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
  }
  ```
## 6. `package.json` 파일에 아래 내용 추가
```json
{
	//...생략...
	"scripts": {
		//...생략...
		"eject": "react-scripts eject",
		"format": "prettier --check ./src",
		"format:fix": "prettier --write ./src",
		"lint": "eslint ./src",
		"lint:fix": "eslint --fix ./src"
	},
	//...생략...
}
```
## 7. 컴포넌트를 절대경로로 설정 : `tsconfig.json`
```json
{
	"compilerOptions": {
	//...생략...
		"jsx": "react-jsx",
		"baseUrl": "src"
	},
	//...생략...
}
```