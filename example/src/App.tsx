import { useState } from 'react';
import useAutoType from '@jan25/react-typing-hook';

const randomText = (() => {
  let i = 0;
  return () => {
    return texts[i++ % texts.length]
  }
})()

export default function App() {
  const [text, setText] = useState(randomText())
  const currentText = useAutoType(text)

  return (
    <div>
      <div className="App" style={{textAlign: "center"}}>
        <button onClick={() => setText(randomText())} style={{display: "block", margin: "auto"}}>Another text</button>
        { currentText }
      </div>
    </div>
  );
}

const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Aenean a sagittis augue, fringilla posuere tortor.",
  "Curabitur malesuada dictum rutrum. Etiam sed scelerisque tellus." ,
  "Duis sed est ac enim convallis vehicula.",
  "Curabitur vestibulum lacus vel metus molestie, sit amet blandit lorem sodales.",
  "Fusce bibendum nisi sed sapien efficitur tincidunt.",
  "Praesent elementum leo eu justo consequat, ac volutpat elit bibendum.",
  "Nullam tempus quam id placerat iaculis. Vivamus vitae urna in orci porta efficitur id non dui."
]
