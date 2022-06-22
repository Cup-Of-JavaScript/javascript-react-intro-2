export const Main = () => {
    return (
      <div className="Main">
        <UpDownCounter value={4} /> // <=== passing a number into the UpDownCounter
      </div>
    )
  }
  export const UpDownCounter = (props) => {
    let [counter, setCounter] = useState(props.value) // <=== initialize the counter
    ...
  }