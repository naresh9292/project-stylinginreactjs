
// import { useState } from 'react';
// import './App.css';

// function App() {

//   const [cardStyle, setCardStyle] = useState({
//     border: "1px solid #ccc",
//     width: "200px",
//     boxShadow: "1px 2px 3px 0px #cccccc57",
//     margin: "10px",
//   })

//   const [textColor,setTextColor] =useState('black')

//   const [grid,setGrid] =useState('true')

//   const updateTheme = (bgColor,textColor) => {
//     setCardStyle({...cardStyle,backgroundColor:bgColor})
//     setTextColor(textColor)
//   }


//   return (
//     <div>
//       <h1 style={{color:"red"}}>Dynamic and conditional inline style</h1>
//       <button onClick={()=> updateTheme('gray','green')}>Gray Theme</button>
//       <button onClick={()=> updateTheme('white','black')}>Default Theme</button>
//       <button onClick={()=> setGrid(!grid)}>Toggle Grid</button>

//       <div style={{ display: grid ? "flex" :"block" }}>
//         <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px",color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//          <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px",color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//          <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px",color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//          <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px",color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

//.............................................practice again.............................


// import { useState } from 'react';
// import './App.css';

// function App() {

//   const [cardStyle, setCardStyle] = useState({
//     border: "1px solid #ccc",
//     width: "200px",
//     boxShadow: "1px 2px 3px 0px #cccccc57",
//     margin: "10px",
//   })

//   const [textColor,setTextColor]=useState('black')

//   const [grid,setGrid]=useState(true)

//   const updateTheme=(bgColor,textColor) => {
//     setCardStyle({...cardStyle,backgroundColor:bgColor})
//     setTextColor(textColor)
//   }


//   return (
//     <div>
//       <h1 style={{color:"red"}}>Dynamic and conditional inline style</h1>
//       <button onClick={()=> updateTheme('#aaa','red')}>Grey Theme</button>
//       <button onClick={()=> updateTheme('white','black')}>Default Theme</button>
//       <button onClick={()=> setGrid(!grid)}>Toggle Grid</button>


//       <div style={{ display: grid ? "flex" : "block" }}>
//         <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px", color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//          <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px", color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//          <div style={cardStyle}>
//           <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png"></img>

//           <div style={{ padding: "5px", color:textColor }}>
//             <h4>Naresh saini</h4>
//             <p>Software developer</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

//.........................................EXTERNAL CSS IN REACT JS ..............................


// import './CSS/style.css';
// import './App.css';

// function App() {

//   return (
//     <div>
//       <h1 className='heading'>External css in react js</h1>
//       <div className='container'>
//         <div className='user-card'>
//         <img className='img-style' src='https://www.w3schools.com/howto/img_avatar.png' />
//         <div className='text-wrap'>
//           <h4>Naresh saini</h4>
//           <p>Software developer</p>
//         </div>
//       </div>

//       <div className='user-card'>
//         <img className='img-style' src='https://www.w3schools.com/howto/img_avatar.png' />
//         <div className='text-wrap'>
//           <h4>Naresh saini</h4>
//           <p>Software developer</p>
//         </div>
//       </div>

//       <div className='user-card'>
//         <img className='img-style' src='https://www.w3schools.com/howto/img_avatar.png' />
//         <div className='text-wrap'>
//           <h4>Naresh saini</h4>
//           <p>Software developer</p>
//         </div>
//       </div>

//       <div className='user-card'>
//         <img className='img-style' src='https://www.w3schools.com/howto/img_avatar.png' />
//         <div className='text-wrap'>
//           <h4>Naresh saini</h4>
//           <p>Software developer</p>
//         </div>
//       </div>

//       <div className='user-card'>
//         <img className='img-style' src='https://www.w3schools.com/howto/img_avatar.png' />
//         <div className='text-wrap'>
//           <h4>Naresh saini</h4>
//           <p>Software developer</p>
//         </div>
//       </div>

//       </div>
//     </div>

//   );
// }

// export default App;

//............................................STYLE WITH CSS MODULE ..............................



// import './App.css';
// import UserProfile from './UserProfile';

// function App() {

//   return (
//     <div>
//       <h1>Style with css module in react js</h1>
//       <div style={{display:"flex", flexWrap:"wrap"}}>
//         <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       <UserProfile />
//       </div>


//     </div>

//   );
// }

// export default App;

//...............................................STYLED COMPONENT...........................

// import './App.css';
// import styled from "styled-components"


// function App() {
//   // const Heading = styled.h1 `
//   // color:red;
//   // border:1px solid green;
//   // border-radious:5px;
//   // margin:20px;
//   // padding:20px;
//   // `

//   // const Heading = styled.h1({
//   //   color: 'red',
//   //   border: '1px solid green',
//   //   borderRadious: '5px',
//   //   margin: '20px',
//   //   padding: '20px',
//   // })



//   return (
//     <div>
//       <h1>Styled COMPONENT in react js</h1>
//       {/* <Heading>Hello heading 1</Heading>
//       <Heading>Hello heading 1</Heading>
//       <Heading>Hello heading 1</Heading>
//       <Heading>Hello heading 1</Heading> */}


//     </div>

//   );
// }

// export default App;

//.....................................ADD BOOTSTRAP WITH REACT JS..............................
{
  /* The following line can be included in your src/index.js or App.js file */
}




import { Button } from 'react-bootstrap'



function App() {

  return (
    <div>
      <h1>Add bootstraps with react js</h1>
      <Button>ok</Button>
      <button>ok</button>


    </div>

  );
}

export default App;
