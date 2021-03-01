
  
function main(){
  const canvas = document.getElementById("glCanvas");
  
  if(canvas)
      var gl = canvas.getContext("webgl");
  else 
      console.log("Erro acessando elemento canvas")

  if (!gl) {
      alert("Erro ao incializar WebGL");
      return;
    }
    else{
        console.log("WebGL Inicializada");
    }

    const vertexData=[
      //Estrutura da casa
      0, 0, 0, 
      0.15, 0.2, 0,
      0, 0.4, 0,

      0.15, 0.2, 0,
      0.15, 0, 0, 
      0, 0, 0, 

      0.15, 0.2, 0,
      0, 0.4, 0,
      0.15, 0.4, 0,

      0.15, 0.02, 0,
      0.15, 0, 0,
      0.3, 0, 0, 

      0.15, 0.02, 0, 
      0.3, 0, 0,
      0.3, 0.02, 0, 

      0.65, 0, 0, 
      0.3, 0, 0, 
      0.3, 0.2, 0, 

      0.65, 0, 0, 
      0.3, 0.2, 0, 
      0.65, 0.2, 0, 

      0.6, 0.2, 0,
      0.65, 0.2, 0,
      0.6, 0.3, 0, 

      0.65, 0.2, 0,
      0.6, 0.3, 0, 
      0.65, 0.3, 0,

      0.4, 0.3, 0,
      0.4, 0.2, 0,
      0.3, 0.2, 0, 

      0.3, 0.2, 0,
      0.4, 0.3, 0,
      0.3, 0.3, 0,

      0.65, 0.3, 0,
      0.4, 0.3, 0,
      0.65, 0.4, 0,

      0.65, 0.4, 0,
      0.4, 0.3, 0,
      0.15, 0.4, 0,

      0.4, 0.3, 0,
      0.15, 0.3, 0,
      0.15, 0.4, 0,

      //Telhado
      0, 0.4, 0,
      0.65, 0.4, 0,
      0.32, 0.66, 0,

      //Janela
       0.49, 0.3, 0,
       0.49, 0.25, 0,
       0.5, 0.3, 0,

       0.5, 0.3, 0,
       0.49, 0.25, 0,
       0.5, 0.25, 0,

       0.5, 0.3, 0,
       0.5, 0.25, 0,
       0.51, 0.25, 0,

       0.51, 0.25, 0,
       0.5, 0.3, 0,
       0.51, 0.3, 0,

       0.51, 0.25, 0,
       0.6, 0.25, 0,
       0.51, 0.26, 0,

       0.51, 0.26, 0,
       0.6, 0.25, 0,
       0.6, 0.26, 0,

       0.51, 0.25, 0,
       0.6, 0.25, 0,
       0.51, 0.24, 0, 

       0.51, 0.24, 0,
       0.6, 0.25, 0,
       0.6, 0.24, 0,

       0.51, 0.2, 0,
       0.5, 0.2, 0,
       0.51, 0.25, 0,

       0.51, 0.25, 0,
       0.5, 0.2, 0,
       0.5, 0.25, 0,

       0.5, 0.2, 0,
       0.5, 0.25, 0,
       0.49, 0.25, 0,

       0.5, 0.2, 0,
       0.49, 0.25, 0,
       0.49, 0.2, 0,

       0.4, 0.24, 0, 
       0.49, 0.24, 0,
       0.4, 0.25, 0,

       0.4, 0.25, 0,
       0.49, 0.24, 0,
       0.49, 0.25, 0,

       0.49, 0.25, 0,
       0.4, 0.25, 0,
       0.49, 0.26, 0,

       0.49, 0.26, 0,
       0.4, 0.25, 0,
       0.4, 0.26, 0,

       0.65, 0.66, 0,
       0.65, 0.4, 0,
       0.32, 0.66, 0,

       0.83, 0.55, 0,
       0.65, 0.55, 0,
       0.65, 0.66, 0,

       0.65, 0.66, 0,
       0.83, 0.55, 0,
       1, 0.66, 0,

       1, 0.66, 0,
       0.83, 0.55, 0,
       1, 0.55, 0,

       0.65, 0.55, 0,
       0.65, 0.4, 0,
       0.7, 0.4, 0,

       0.7, 0.4, 0,
       0.65, 0.55, 0,
       0.7, 0.55, 0,

       0.95, 0.55, 0,
       0.95, 0.4, 0,
       1, 0.55, 0,

       1, 0.55, 0,
       0.95, 0.4, 0,
       1, 0.4, 0,

       0.65, 0.4, 0,
       0.65, 0.25, 0,
       0.83, 0.25, 0,

       0.83, 0.25, 0,
       0.65, 0.4, 0,
       1, 0.4, 0,

       0.83, 0.25, 0,
       1, 0.4, 0,
       1, 0.25, 0,

       0.65, 0.25, 0,
       0.65, 0.1, 0,
       0.7, 0.1, 0,

       0.65, 0.25, 0,
       0.7, 0.1, 0,
       0.7, 0.25, 0,

       0.95, 0.25, 0,
       0.95, 0.1, 0,
       1, 0.25, 0,

       1, 0.25, 0,
       0.95, 0.1, 0,
       1, 0.1, 0,

       0.65, 0.1, 0,
       0.83, 0.1, 0,
       0.65, 0, 0,

       0.65, 0, 0,
       1, 0, 0,
       0.83, 0.1, 0,

       0.83, 0.1, 0,
       1, 0, 0,
       1, 0.1, 0,

       0.66, 0.9, 0,
       1, 0.66, 0,
       0.32, 0.66, 0,

       -0.65, 0.4, 0,
       -0.32, 0.66, 0,
       0, 0.4, 0,

       -0.65, 0.4, 0,
       -0.65, 0.35, 0,
       -0.55, 0.35, 0,

       -0.55, 0.35, 0,
       -0.65, 0.4, 0,
       -0.32, 0.4, 0,

       -0.32, 0.4, 0,
       -0.55, 0.35, 0,
       -0.1, 0.35, 0,

       -0.1, 0.35, 0,
       -0.32, 0.4, 0,
       0, 0.4, 0,

       0, 0.4, 0,
       -0.1, 0.35, 0,
       0, 0.35, 0,

       -0.65, 0.35, 0,
       -0.55, 0.35, 0,
       -0.65, 0.2, 0,

       -0.65, 0.2, 0,
       -0.55, 0, 0,
       -0.55, 0.35, 0,

       -0.65, 0.2, 0,
       -0.55, 0, 0,
       -0.65, 0, 0,

       -0.1, 0.35, 0,
       0, 0.35, 0,
       0, 0.2, 0,

       0, 0.2, 0,
       -0.1, 0.35, 0,
       -0.1, 0, 0,

       -0.1, 0, 0,
       0, 0.2, 0,
       0, 0, 0,
      

    ];

    const colorData=[ //RGB
      1, 1, 0,
      1, 1, 0,
      1, 1, 0, 

      1, 1, 0,
      1, 1, 0,
      1, 1, 0, 

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,
      
      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      0, 0, 1,
      0, 0, 1,
      0, 0, 1,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,
      
      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      0, 0, 1,
      0, 0, 1,
      0, 0, 1,

      0, 0, 1,
      0, 0, 1,
      0, 0, 1,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,


      




    ];

    //Comunicação com A GPU

    //Buffer de posições
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer (gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW); 

    //Buffer de Cores
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer (gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW); 

    //Shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, `
      precision mediump float;
      attribute vec3 position;
      attribute vec3 color;
      varying vec3 vColor;
      void main(){
          vColor = color;
          gl_Position = vec4(position, 1);
      }   
    `);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `
      precision mediump float;
      varying vec3 vColor;
      void main()
      {
          gl_FragColor = vec4 (vColor, 1);
      }
    `);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program); 

    const positionLocation = gl.getAttribLocation(program, `position`);
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    const colorLocation = gl.getAttribLocation(program, `color`);
    gl.enableVertexAttribArray(colorLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
    
    gl.useProgram(program);  
    gl.drawArrays(gl.TRIANGLES, 0, 500); 

}
window.onload = main;

