// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [originalUrl, setOriginalUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');

//   const handleShorten = async () => {
//     if (!originalUrl) return;
//     try {
//       const response = await fetch('http://localhost:5000/api/shorten', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ url: originalUrl })
//       });
//       const data = await response.json();
//       if (data.shortUrl) {
//         setShortUrl(data.shortUrl);
//       } else {
//         setShortUrl('Error shortening URL');
//       }
//     } catch (error) {
//       console.error(error);
//       setShortUrl('Failed to connect to server');
//     }
//   };

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>

//       {/* URL Shortener */}
//       <div className="card">
//         <h2>URL Shortener</h2>
//         <input
//           type="text"
//           placeholder="Enter URL"
//           value={originalUrl}
//           onChange={(e) => setOriginalUrl(e.target.value)}
//           style={{ padding: '0.5rem', width: '70%' }}
//         />
//         <button onClick={handleShorten} style={{ marginTop: '1rem' }}>
//           Shorten
//         </button>
//         {shortUrl && (
//           <p>
//             Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
//           </p>
//         )}
//       </div>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;