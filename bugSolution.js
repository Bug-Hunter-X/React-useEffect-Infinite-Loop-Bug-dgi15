```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when count changes
    console.log('Component rendered with count:', count);
  }, [count]); // count is added as a dependency

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```