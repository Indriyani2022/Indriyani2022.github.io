 const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Animation frames for Luffy
    const frames = [];
    const totalFrames = 8;
    let currentFrame = 0;
    let frameCount = 0;
    const frameDelay = 5; // Controls animation speed
    
    // Luffy colors
    const colors = {
      skin: '#FFD6A5',
      hair: '#000000',
      hat: '#FFF44F',
      hatRim: '#CD853F',
      shirt: '#FF0000',
      pants: '#1560BD',
      outline: '#000000'
    };
    
    // Create animation frames
    function createFrames() {
      // Frame 1 - Standing position
      frames.push(() => {
        drawLuffy(0, 0);
      });
      
      // Frame 2 - Slight bend
      frames.push(() => {
        drawLuffy(0, 5);
      });
      
      // Frame 3 - More bend
      frames.push(() => {
        drawLuffy(0, 10);
      });
      
      // Frame 4 - Starting to stretch
      frames.push(() => {
        drawLuffy(0, 15, 1.1);
      });
      
      // Frame 5 - Full stretch up
      frames.push(() => {
        drawLuffy(0, -15, 1.2);
      });
      
      // Frame 6 - Starting to come down
      frames.push(() => {
        drawLuffy(0, -10, 1.1);
      });
      
      // Frame 7 - Almost back
      frames.push(() => {
        drawLuffy(0, -5);
      });
      
      // Frame 8 - Return to starting position
      frames.push(() => {
        drawLuffy(0, 0);
      });
    }
    
    // Main drawing function
    function drawLuffy(offsetX, offsetY, stretchFactor = 1) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2 + offsetX;
      const baseY = canvas.height / 2 + offsetY;
      
      // Draw straw hat
      drawHat(centerX, baseY - 60 * stretchFactor);
      
      // Draw head
      drawHead(centerX, baseY - 40 * stretchFactor);
      
      // Draw body
      drawBody(centerX, baseY, stretchFactor);
      
      // Draw arms
      drawArms(centerX, baseY - 10 * stretchFactor, stretchFactor);
      
      // Draw legs
      drawLegs(centerX, baseY + 30 * stretchFactor, stretchFactor);
    }
    
    function drawHat(x, y) {
      // Hat top
      ctx.beginPath();
      ctx.fillStyle = colors.hat;
      ctx.arc(x, y, 30, Math.PI, 0, false);
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Hat rim
      ctx.beginPath();
      ctx.fillStyle = colors.hat;
      ctx.ellipse(x, y + 5, 45, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.stroke();
      
      // Hat band
      ctx.beginPath();
      ctx.fillStyle = colors.hatRim;
      ctx.rect(x - 30, y, 60, 5);
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.stroke();
    }
    
    function drawHead(x, y) {
      // Head
      ctx.beginPath();
      ctx.fillStyle = colors.skin;
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Eyes
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.arc(x - 8, y - 5, 4, 0, Math.PI * 2);
      ctx.arc(x + 8, y - 5, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Smile
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.arc(x, y + 5, 12, 0.1 * Math.PI, 0.9 * Math.PI, false);
      ctx.stroke();
      
      // Scar under eye
      ctx.beginPath();
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.moveTo(x - 5, y + 1);
      ctx.lineTo(x - 15, y - 2);
      ctx.stroke();
    }
    
    function drawBody(x, y, stretchFactor) {
      // Torso
      ctx.beginPath();
      ctx.fillStyle = colors.shirt;
      ctx.moveTo(x - 25, y);
      ctx.lineTo(x - 30, y + 50 * stretchFactor);
      ctx.lineTo(x + 30, y + 50 * stretchFactor);
      ctx.lineTo(x + 25, y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    function drawArms(x, y, stretchFactor) {
      // Left arm
      const armPhase = Math.sin(currentFrame / totalFrames * Math.PI * 2) * 15;
      
      ctx.beginPath();
      ctx.fillStyle = colors.skin;
      ctx.moveTo(x - 25, y);
      ctx.quadraticCurveTo(
        x - 40, y + 20 * stretchFactor, 
        x - 45 + armPhase, y + 40 * stretchFactor
      );
      ctx.lineTo(x - 35 + armPhase, y + 45 * stretchFactor);
      ctx.quadraticCurveTo(
        x - 30, y + 25 * stretchFactor,
        x - 15, y + 5
      );
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Right arm
      ctx.beginPath();
      ctx.fillStyle = colors.skin;
      ctx.moveTo(x + 25, y);
      ctx.quadraticCurveTo(
        x + 40, y + 20 * stretchFactor, 
        x + 45 - armPhase, y + 40 * stretchFactor
      );
      ctx.lineTo(x + 35 - armPhase, y + 45 * stretchFactor);
      ctx.quadraticCurveTo(
        x + 30, y + 25 * stretchFactor,
        x + 15, y + 5
      );
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    function drawLegs(x, y, stretchFactor) {
      // Short pants
      ctx.beginPath();
      ctx.fillStyle = colors.pants;
      ctx.rect(x - 30, y, 60, 25 * stretchFactor);
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Left leg
      ctx.beginPath();
      ctx.fillStyle = colors.skin;
      ctx.moveTo(x - 25, y + 25 * stretchFactor);
      ctx.lineTo(x - 20, y + 60 * stretchFactor);
      ctx.lineTo(x - 5, y + 60 * stretchFactor);
      ctx.lineTo(x - 10, y + 25 * stretchFactor);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Right leg
      ctx.beginPath();
      ctx.fillStyle = colors.skin;
      ctx.moveTo(x + 25, y + 25 * stretchFactor);
      ctx.lineTo(x + 20, y + 60 * stretchFactor);
      ctx.lineTo(x + 5, y + 60 * stretchFactor);
      ctx.lineTo(x + 10, y + 25 * stretchFactor);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = colors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    // Animation loop
    function animate() {
      frameCount++;
      
      if (frameCount >= frameDelay) {
        currentFrame = (currentFrame + 1) % totalFrames;
        frameCount = 0;
      }
      
      frames[currentFrame]();
      
      requestAnimationFrame(animate);
    }
    
    // Initialize and start animation
    createFrames();
    animate();
