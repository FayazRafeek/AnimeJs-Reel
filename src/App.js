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
          value : ['-300px', '130px'],
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
          value : '+=30px',
          duration : 800
        },
        translateY : {
          value : '+=20',
          duration : 800
        },
        easing : 'easeInQuad'
      })

      // 5400 ms

      tl.add({
        targets : '.sun',
        scale : 1.1,
        duration : 600,
        easing : 'easeInQuad'
      })

      tl.add({
        targets : '.mountains',
        scale : 1.1,
        duration : 600,
        easing : 'easeInQuad'
      },'-=400')

      // 5600 ms

      tl.add({
        targets : '.sun',
        scale : 0,
        translateY : {
          value : '+=130px'
        },
        duration : 500,
        easing : 'easeInQuad'
      })

      tl.add({
        targets : '.mountains',
        scale : 0,
        translateY : {
          value : '+=130px'
        },
        duration : 500,
        easing : 'easeInQuad'
      },'-=500')


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
      </div>

       </div>
  );
}

export default App;
