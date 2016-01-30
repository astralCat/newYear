//window.onload = function(){
  var nowType = 0;
	document.body.innerHTML = '<div id="all"><div class="photo1"></div><div class="photo2"></div><div class="photo1"></div><div class="photo2"></div><div class="photo1"></div><div class="photo2"></div><div class="photo1"></div><div class="photo2"></div><div class="photo1"></div><div class="photo2"></div></div>' + document.body.innerHTML ;
	document.body.innerHTML += '<div id="closeAnimation"></div>';
	var W = window.innerWidth;
  var H = window.innerHeight;

  	//resize
  	window.onresize = function(event) {
      if(nowType == 0){
        W = window.innerWidth;
        H = window.innerHeight;
        divPosition();
      }
    };
	
  	var particles = [];
  	for(var i = 0; i < 10; i++){
    	particles.push({
      		x: Math.random()*W, //x-coordinate
      		y: Math.random()*H, //y-coordinate
    	})
  	}

  	function divPosition(){
		//div position

		document.getElementById('all').style.height = H+'px';
		document.getElementById('all').style.width = W+'px';

		var photo1Position = document.querySelectorAll(".photo1");
		 
		  for (var i = 0; i < photo1Position.length; i++) {
		    photo1Position[i].style.top = particles[i].y+'px';
		    photo1Position[i].style.left = particles[i].x+'px';
		}

		var photo2Position = document.querySelectorAll(".photo2");
		 
		  for (var i = 0; i < photo1Position.length; i++) {
		    photo2Position[i].style.top = particles[i+5].y+'px';
		    photo2Position[i].style.left = particles[i+5].x+'px';
		}
		update();
	}

	//Function to move
  var angle = 0;
  function update()
  {
    angle += 0.01;
    for(var i = 0; i < 10; i++)
    {
      var p = particles[i];
      //Updating X and Y coordinates
      p.y += 5;
      p.x += 1;
      
      //Sending money back from the top when it exits
      //Lets make it a bit more organic and let money enter from the left and right also.
      if(p.x > W+30 || p.x < -30 || p.y > H+28)
      {
        if(i%6> 0) //66.67%
        {
          if(i<10)
            particles[i] = {x: Math.random()*W, y: -30};
          else
            particles[i] = {x: Math.random()*W, y: -30};
        }
        else
        {
          //exitting from the right
          if(Math.sin(angle) > 0)
          {
            //Enter from the left
            if(i<10)
              particles[i] = {x: -80, y: Math.random()*H};
            else
              particles[i] = {x: -80, y: Math.random()*H};
          }
          else
          {
            //Enter from the right
            if(i<10)
              particles[i] = {x: W+40, y: Math.random()*H};
            else
              particles[i] = {x: W+40, y: Math.random()*H};
          }
        }
      }
    }
  }

  function close(){
        //close
    document.getElementById('closeAnimation').addEventListener("click", function(){
      document.getElementById('closeAnimation').remove();
      document.getElementById('all').remove();
      clearInterval(int);
      nowType = 1;
    });
  }

  int = setInterval(divPosition, 33);
  close();

//}


