//객체 속 객체의 구조분해할당!

const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };

  function changeColor({styles:{color}}){
   
    console.log(color);
  }

  changeColor(prop)
  