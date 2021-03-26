function onload()
{   
    // Very Easy
    context = doonut.getContext("2d");
    const bird = new Image();
    bird.src = "donut.png";
    birdX = birdDY = score = bestScore = 0;
    interval = birdSize = pipeWidth = topPipeBottomY = 20;
    birdY = pipeGap = 200;
    canvasSize = pipeX = 400;
    doonut.onclick = () => (birdDY = 9) ;
    setInterval(() => {
      context.fillStyle = "green";
      context.fillRect(0,0,canvasSize,canvasSize); 
      birdY -= birdDY -= 0.5; 
      context.drawImage(bird, birdX, birdY, birdSize * (520/370), birdSize);
      context.fillStyle = "#005c5c";
      pipeX -= 8; 
      pipeX < -pipeWidth && 
        ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));
      context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); 
      context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize);
      context.fillStyle = "black";
      context.fillText(score++, 9, 25);
      bestScore = bestScore < score ? score : bestScore;
      context.fillText(`Best: ${bestScore}`, 9, 50);
      (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524/374))//
       || birdY > canvasSize) &&
      ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0));
    }, interval)

    // Very Very Hard
    // context = c.getContext("2d");
    // const bird = new Image();
    // bird.src = "donut.png";
    // birdX = birdDY = score = bestScore = 0;
    // interval = birdSize = pipeWidth = topPipeBottomY = 24;
    // birdY = pipeGap = 200;
    // canvasSize = pipeX = 400;
    // c.onclick = () => (birdDY = 11) ;
    // setInterval(() => {
    //   context.fillStyle = "#410099";
    //   context.fillRect(0,0,canvasSize,canvasSize); 
    //   birdY -= birdDY -= 1; 
    //   context.drawImage(bird, birdX, birdY, birdSize * (520/370), birdSize);
    //   context.fillStyle = "#005c5c";
    //   pipeX -= 4; 
    //   pipeX < -pipeWidth && 
    //     ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));
    //   context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); 
    //   context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize);
    //   context.fillStyle = "black";
    //   context.fillText(score++, 9, 25);
    //   bestScore = bestScore < score ? score : bestScore;
    //   context.fillText(`Best: ${bestScore}`, 9, 50);
    //   (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524/374))//
    //    || birdY > canvasSize) &&
    //   ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0));
    // }, interval) 
}