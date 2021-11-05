module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
[Testing] 테스트의 종류 및 Jest
sms8377·2021년 5월 6일
jesttesting
2


유닛 테스트, 통합 테스트, 기능 테스트
유닛 테스트 : 코드가 제대로 작동하는지 확인하기 위해 애플리케이션의 개별 모듈을 독립적으로 테스트(종속성과의 상호 작용없이)하는 것을 의미합니다.
통합 테스트 : 다른 모듈이 그룹으로 결합될 때 잘 작동하는지 확인하는 것을 의미합니다.
기능 테스트 : 시스템의 기능 조각(종속성과 상호 작용 할 수 있음)을 테스트하여 코드가 올바른 작업을 수행하는지 확인하는 것을 의미합니다.
기능 테스트는 통합 테스트와 관련이 있지만, 모든 코드가 함께 실행되는 상태에서 전체 애플리케이션의 기능을 확인하는 테스트를 의미합니다.

단위 테스트는 시슽메의 단일 구성 요소 검사를 고려하는 반면, 기능 테스트는 시스템 요구 사항 사양에 설명 되어 있는 의도 된 기능에 대해 응용 프로그램 작동을 검사하는 것 입니다.

유닛 테스트의 특징
가장 작은 단위의 테스트이며, 보통 메서드 레벨입니다.
A라는 함수가 실행되면 B라는 결과가 나온다 정도로 테스트합니다.
즉각적인 피드백이 나온다는 것이 훌륭한 장점입니다.
꼭 메모리 내에서만 실행되는 테스트여야 한다는 법칙은 없습니다.
DB, Network Access, File System 등을 사용하여도 단위테스트의 레벨일 수 있습니다.
하나의 메서드들이 잘 동작한다는 것은 보장할 수 있지만, 그들이 결합되었을 때도 잘 작동한다는 것은 보장할 수 없습니다.
테스트하기 어려운 부분은 stub을 사용하여 테스트합니다.
비용이 크지 않다면 stub 보다는 실제 객체를 사용하는 것이 좋습니다.
아무래도 정교한 목 객체가 실제 객체보다 정확하지는 않기 때문입니다.
모든 것은 비용 관점에서 생각해야 합니다.
E2E 테스트의 특징
해당 시스템과 해당 시스템을 구축하고 배포하는 프로세스를 모두 시험하는 것을 말합니다.
용어를 사용하는 곳마다 조금씩 차이가 있다고 합니다.
내부 기능들까지(클래스의 메서드) 테스트 할 필요는 없습니다.
이는 단위테스트의 영역입니다.
단점은 테스트를 만들기가 힘들고, 만든 테스트를 신뢰하기도 힘들다는 것입니다.
통합 테스트의 특징
모듈을 통합하는 과정에서 모듈 간 호환성의 문제를 찾아내기 위해 수행되는 테스트입니다.
유닛 테스트와의 차이점은 유닛 테스트는 다른 컴포넌트들과 도긻적인 반면 통합 테스트는 그렇지 않습니다.
예를 들면, 유닛 테스트에서 데이터베이스에 접근하는 코드는 실제 데이터 베이스와 통신하는 것은 아니지만, 통합 테스트는 실제 통신해야 합니다.
통합 테스트는 대게 유닛 테스트를 작성하는 것보다 복잡하고 오랜 시간이 걸립니다.
꼭 필요한 것이 아니라면, 유닛 테스트를 작성하는데 집중하는 것이 좋습니다.
Stub과 Mock의 개념
Stub
stub은 아직 준비되지 못한 코드를 미리 정해진 답변으로 반환할 수 있도록 하는 메커니즘입니다. 가짜 객체가 실제로 동작하는 것처럼 보이게 만들어놓은 객체이며, 호출자를 실제 구현물로부터 격리시켜 독립적인 테스트를 진행할 수 있도록 하는 것이 Stub입니다.

Stub은 아래와 같은 경우 주로 사용 됩니다.

복잡한 로직을 단순화 하고 싶을 떄
구현이 되지 않은 함수가 있을 때
라이브러리에서 제공하는 함수를 사용하고자 할 때
의존성을 가지는 유닛의 응답을 모사하여 독립적인 테스트를 수행하고자 할 때
Mock
Mock은 가짜라는 의미인데, 이 Mock 이 사용되는 부분은 Mocking이라는 작업을 할 떄 사용됩니다.

Mocking이란, 유닛 테스트 등을 작성할 때 해당 코드가 의존성을 가지고 있다면 그 의존하는 부분을 가짜로 대체하는 기법입니다. 일반적으로 유닛 테스트의 해당 코드가 의존하는 부분을 직접 생성하는 것이 까다로울 때 Mocking을 많이 사용합니다.

Jest는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?

Jest 이외의 테스트 프레임워크는 어떤 것이 있고 어떤 장단점이 있을까요?
Jest란?
Jest란 단순함에 초점을 둔 페이스북에서 개발한 오픈 소스 자바스크립트 테스트 프레임워크입니다. 비교적 사용이 간단하며 Babel, Typescript 등에 모두 사용할 수 있습니다.

Jest는 테스트가 전역 상태를 갖도록 하여 모든 테스트를 평행적으로 수행이 가능하게 합니다. 또한 빠른 테스트를 위해 이전 테스트에서 실패했던 것을 가장 먼저 실행하고, 테스트의 수행 시간을 예측하여 실행 순서를 재배치합니다.

테스트의 코드 커버리지를 파악할 땐 --coverage Flag를 통해 간단하게 파악할 수 있습니다.

Jest 외에 다른 테스트 프레임워크
Mocha
Mocha는 Node.js와 브라우저에서 실행되는 기능이 풍부한 자바스크립트 테스트 프레임워크입니다. 비동기식 테스트를 간단하게 진행할 수 있습니다.

또한 Mocha 테스트는 연속적으로 실행되어 유연하고 정확한 보고를 가능하게 하는 동시에 미검증 예외를 올바른 테스트 사례에 Mapping 합니다.

Mocha는 확장성이 좋다고 알려져 있는데, 이것은 여러가지 라이브러리를 사용해서 기능을 확장시킬 수 있다는 의미입니다. Mocha의 경우 Assertion은 Chai를 사용하고, 테스트 더블은 주로 Sinon을 사용합니다.

Jasmine
Jasmine은 자바스크립트 코드를 테스트하기 위한 동작 중심 개발 프레임워크입니다. Jasmine은 다른 Javascript 프레임워크에 의존하지 않으며, DOM이 필요하지 않습니다.

구문 자체가 꺠끗하고 명확한 구문을 가지고 있어서 쉽게 시험을 작성할 수 있습니다.

대표적인 사용사례는 Karma와 Jasmine의 조합으로 사용되는데, 이는 브라우징 테스트가 필요할 떄 사용합니다. 이는 Node.js와 브라우저 환경 모두에서 사용이 가능하기 때문 입니다.

Mocha와의 차이점은 여러가지 라이브러리를 사용해야 했지만 Jasmine은 모든 기능을 통합해서 제공하기 때문에 추가적인 라이브러리가 필요 없습니다.

Puppeteer
Puppeteer는 Chromium이 포함되어 있고, 기본적으로 "Head가 없는" 상태로 실행됩니다. 여기서 Head가 없는 브라우저란 쉽게 말해 Headless browser 는 UI 없이 간편하게 백그라운드에서 실행되는 브라우저입니다. 실제로 브라우저 창을 띄우지 않고 백그라운드에서 가상으로 진행되며, 특정 페이지에 접속하고 렌더링 되는 과정 후 수행하고자 하는 코드를 수행하는데 용이합니다. 예를 들면 GUI가 없는 Ubuntu 서버 환경에서 용이할 수 있을 것입니다.

이는 곧 CLI에서 작동하는 브라우저라고도 할 수 있는데, 백그라운드에서 작동한다는 것 외에 일반적인 브라우저와 같은 방식의 렌더링을 사용합니다. 하지만 만든 화면을 사용자에게 보여주지는 않습니다.

브라우저 상에서 할 수 있는 것들은 대부분 Puppteer로 할 수 있습니다. 예를 들면, 스크린샷을 찍어 PDF로 만들거나, SPA로 되어 있는 페이지를 크롤링하거나, UI 테스트, 키보드 입력 자동화, 최신 버전의 크롬 브라우저 환경에서의 테스트 등 매우 다양합니다.

