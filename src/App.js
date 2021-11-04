import './App.css';
import anime from 'animejs'
import { useEffect } from 'react';


function App() {


  useEffect(() => {

    startAnimation()
  }, [])


  const startAnimation = () => {

    var tl = anime.timeline({
      easing: 'easeOutExpo',
      loop : true,
    });
    
    //0 ms
    tl
      .add({
        targets: '.shape_1',
        keyframes : [
          {
            height: '360px',
            duration: 300,
          },
          {
            width: '260px',
            duration: 400,
            delay : 100
          }
        ],
        delay : 1000,
        padding : '20px 15px',
        easing : 'easeOutQuad'
      })

      //1800 ms

      tl.add({
        targets: '.shape_2',
        height: '260px',    
        duration : 800
      },'+=100')

      // 2700 ms

      tl.add({
        targets: '.sun',
        
        translateX : 
        {
          value : ['-300px', '100px'],
          duration : 1500
        },
        translateY : 
        {
          value : ['200px','30px'],
          duration : 1500
        },
          
      })

      // 4200 ms

      tl.add({
        targets : '.mountains',
        translateY : {
          value : ['260px','120px'],
          duration : 1400
        }
      },'-=1000')

      // 4600 ms

      tl.add({
        targets : '.sun',
        translateX : {
          value : '+=40px',
          duration : 1500
        },
        translateY : {
          value : '+=120',
          duration : 1500
        },
        scale : {
          value : '1.1',
          delay : 800,
          duration : 500
        },
        background : 'rgb(255, 110, 110)',
        easing : 'easeInQuad'
      })

      // 5400 ms

      tl.add({
        targets : '.mountains',
        scale : 1.1,
        duration : 600,
        easing : 'easeInQuad'
      },'+=200')

      // 5600 ms

      tl.add({
        targets : '.sun',
        scale : 0,
        translateY : {
          value : '+=130px'
        },
        duration : 500,
        easing : 'easeInQuad'
      },'+=200')

      tl.add({
        targets : '.mountains',
        scale : 0,
        translateY : {
          value : '+=130px'
        },
        duration : 500,
        easing : 'easeInQuad'
      },'-=300')


      // 6100 ms
    

      // Reverse
      tl.add({
        targets : '.shape_2',
        height : '0px',
        duration : 800
      })

      //  6900 ms

      tl.add({
        targets : '.shape_1',
        width : '60px',
        duration : 800
      },'-=300')

      // 7400 ms

      tl.add({
        targets : '.shape_1',
        height : '60px',
        duration : 800
      },'-=300')

      // 7900 ms


      tl.add({
        targets : '.shape_1',
        rotate : {
          value : ['0deg','360deg']
        },
        duration : 800,
      })

      // 8700 ms


  }

  const openGithub = () => {
    let url = 'https://github.com/FayazRafeek/AnimeJs-Reel'
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="App">

      <div className="canvas">

        <div className="container">

          <div className="shape_1">


            <div className="shape_2">

              <div className="sun"></div>

              <div className="mountains">
                <div className="mount_2"></div>
                <div className="mount_1"></div>
              </div>

            </div>


          </div>

       
        </div>

        <div className="info" onClick={() => openGithub()}>
            <p> Built by Fayaz Rafeek</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </div>

      </div>
       </div>
  );
}

export default App;
