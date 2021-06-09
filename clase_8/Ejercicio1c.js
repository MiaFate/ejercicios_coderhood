/* Reescribir la función programa del insiso anterior para que use async y await */

function dividirNumerosAsync(dividendo, divisor) {
    return new Promise(function (resolve, reject) {
      try {
        setTimeout(() => {
          resolve(dividendo / divisor);
        }, 3000);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  async function programa(a, b) {
    const resultado=await dividirNumerosAsync(a, b)
    console.log('el resultado es:', resultado) 
  }
  
  programa(10, 5)