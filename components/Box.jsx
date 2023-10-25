import React from "react";


function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshPhongMaterial attach="material" color={'orange'}/>
    </mesh>
  );
}

export default Box;
