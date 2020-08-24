import React, { Component, useRef, useEffect } from "react";
const getPixelRation = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRation ||
    context.mozBackingStorePixelRatio ||
    context.oBackingStorePixelRation ||
    context.backingStorePixelRation ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};
const Particles = () => {
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    let ratio = getPixelRation(context);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `$(width)px`;
    canvas.style.height = `$(height)px`;

    let requestId,
      i = 0;
    let size = 5;
    let x = Math.random() * (canvas.width - 1 * 0.2);
    let y = Math.random() * (canvas.height - 1 * 0.2);
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let mParticles = [];
    let jsonParticle = {};
    const draw = (jsonParticle) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (x + size > canvas.width || x - size < 0) {
        directionX = -directionX;
      }
      if (y + size > canvas.height || y - size < 0) {
        directionY = -directionY;
      }
      x += directionX;
      y += directionY;

      context.beginPath();
      context.arc(x, y, size * Math.abs(Math.cos(i)), 0, 2 * Math.PI, false);
      context.fill();
      i += 0.05;
      requestId = requestAnimationFrame(draw);
    };

    draw(50);
    draw(100);
    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <canvas
      ref={ref}
      style={{ width: 500, height: 500, background: "#f45" }}
    ></canvas>
  );
};

export default Particles;
