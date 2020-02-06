// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

// const logMessage = message => {
//     if (!message) {
//       message = "Hello World!";
//     }
//     console.log(message);
//   };

   const logMessage = message => console.log(message || "Hello World!");
  
  logMessage();
  
  // 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)
  
//   const logTired = (beenWorkingAllDay) => {
    // let message;
  
    // if (beenWorkingAllDay) {
    //   message = "I'm feeling really tired";
    // } else {
    //   message = "I'm wide awake!";
    // }

    // console.log(message);
//   };

  const logTired = beenWorkingAllDay => console.log(beenWorkingAllDay ? "I'm feeling tired." : "I'm wide awake.");
  
  logTired(true);
  