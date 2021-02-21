# react-typing-hook

Simple React Hook to manage state for auto typing text.

## Sample Usage

```bash
npm i --save @jan25/react-typing-hook
```

```jsx
import useAutoType from '@jan25/react-typing-hook';

export default function App() {
  const [text, setText] = useState(randomText())
  const currentText = useAutoType(text)

  return (
    <div>
      <div className="App" style={{textAlign: "center"}}>
        <button onClick={() => setText(randomText())}>Another text</button>
        { currentText }
      </div>
    </div>
  );
}
```

See [`example`](https://github.com/jan25/react-typing-hook/tree/master/example) app in the Github repository.
