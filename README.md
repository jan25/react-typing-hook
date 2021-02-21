# react-typing-hook

Simple React Hook to manage state for auto typing text.

## Sample Usage

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

See [`example`](github.com/jan25/react-typing-hook/example) app in the Github repository.