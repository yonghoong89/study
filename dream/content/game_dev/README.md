<h1>리팩토링</h1>

<h2>1.반복적 사용함수 Class를 이용하여 분기처리</h2>
field 클래스 생성<br/>
popup 클래스 생성<br/>
sound 클래스 생성<br/>
game 클래스 생성<br/>
- as import 활용
<h2>2. 빌더패턴이용</h2>
<p>모든 클래스에서 빌더 패턴을 사용하지는 않고, 클래스를 만들때 3~4가지 이상, 여러가지 인자를 설정해줘야 하는, 생성자에서 설정값을 많이 받을때 사용</p>

<h2>3. 자바스크립트 타입 보장</h2>
Object.freeze를 이용하여 인자값을 넘겨줄때 자바스크립트 타입을 보장해준다. (오타 및 없는케이스를 넣는경우 방지)
1.popup.js (const Reason)
2.field.js (const itemType)
